import { useEffect } from 'react'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { supabase, supabaseAdmin } from '@/lib/supabase'
import { toast } from '@/components/ui/use-toast'

export interface Product {
  id: string
  name: string
  sku: string
  price: number
  original_price: number
  stock: number
  status: 'In Stock' | 'Low Stock' | 'Out of Stock'
  category: string
  image_url?: string
  created_at: string
  updated_at: string
}

export const useProductSync = () => {
  const queryClient = useQueryClient()

  // Fetch all products
  const { data: products, isLoading, error } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .order('created_at', { ascending: false })
      
      if (error) throw error
      return data as Product[]
    }
  })

  // Set up real-time subscription
  useEffect(() => {
    const subscription = supabase
      .channel('products_channel')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'products'
        },
        (payload) => {
          // Invalidate and refetch products
          queryClient.invalidateQueries({ queryKey: ['products'] })

          // Show toast notification
          const action = payload.eventType === 'INSERT' ? 'added' :
                        payload.eventType === 'UPDATE' ? 'updated' :
                        'deleted'
          
          toast({
            title: `Product ${action}`,
            description: `A product has been ${action} in the database.`
          })
        }
      )
      .subscribe()

    return () => {
      subscription.unsubscribe()
    }
  }, [queryClient])

  // Update product stock
  const updateStock = useMutation({
    mutationFn: async ({ productId, stock }: { productId: string; stock: number }) => {
      const { data, error } = await supabaseAdmin
        .from('products')
        .update({ 
          stock,
          status: stock > 10 ? 'In Stock' : stock > 0 ? 'Low Stock' : 'Out of Stock',
          updated_at: new Date().toISOString()
        })
        .eq('id', productId)
        .select()
        .single()

      if (error) throw error
      return data
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] })
    }
  })

  // Update product details
  const updateProduct = useMutation({
    mutationFn: async ({ id, data }: { id: string; data: Partial<Product> }) => {
      const { data: updated, error } = await supabaseAdmin
        .from('products')
        .update({ ...data, updated_at: new Date().toISOString() })
        .eq('id', id)
        .select()
        .single()

      if (error) throw error
      return updated
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] })
    }
  })

  // Delete product
  const deleteProduct = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabaseAdmin
        .from('products')
        .delete()
        .eq('id', id)

      if (error) throw error
      return true
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] })
    }
  })

  return {
    products,
    isLoading,
    error,
    updateStock,
    updateProduct,
    deleteProduct
  }
} 
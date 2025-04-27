import { useEffect, useState } from 'react'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { productOperations, Product, isAdmin } from '@/lib/supabase'
import { toast } from '@/components/ui/use-toast'
import { supabase } from '@/lib/supabase'

export const useAdminProducts = () => {
  const queryClient = useQueryClient()
  const [isAuthorized, setIsAuthorized] = useState(false)

  // Check admin status
  useEffect(() => {
    isAdmin().then(setIsAuthorized)
  }, [])

  // Fetch all products
  const {
    data: products,
    isLoading,
    error
  } = useQuery({
    queryKey: ['admin-products'],
    queryFn: productOperations.getProducts,
    enabled: isAuthorized
  })

  // Set up real-time subscription
  useEffect(() => {
    const channel = supabase
      .channel('admin-products')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'products'
        },
        (payload) => {
          // Handle different types of changes
          if (payload.eventType === 'INSERT') {
            queryClient.setQueryData(['admin-products'], (old: Product[] | undefined) => 
              old ? [...old, payload.new as Product] : [payload.new as Product]
            )
          } else if (payload.eventType === 'DELETE') {
            queryClient.setQueryData(['admin-products'], (old: Product[] | undefined) => 
              old ? old.filter(product => product.id !== payload.old.id) : []
            )
          } else if (payload.eventType === 'UPDATE') {
            queryClient.setQueryData(['admin-products'], (old: Product[] | undefined) => 
              old ? old.map(product => 
                product.id === payload.new.id ? { ...product, ...payload.new } : product
              ) : []
            )
          }
        }
      )
      .subscribe()

    return () => {
      supabase.removeChannel(channel)
    }
  }, [queryClient])

  // Create product mutation
  const createProduct = useMutation({
    mutationFn: productOperations.createProduct,
    onSuccess: (newProduct) => {
      queryClient.setQueryData(['admin-products'], (old: Product[] | undefined) => 
        old ? [...old, newProduct] : [newProduct]
      )
    }
  })

  // Update product mutation
  const updateProduct = useMutation({
    mutationFn: ({ id, updates }: { id: string; updates: Partial<Product> }) =>
      productOperations.updateProduct(id, updates),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-products'] })
    }
  })

  // Delete product mutation
  const deleteProduct = useMutation({
    mutationFn: productOperations.deleteProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-products'] })
    }
  })

  // Update stock mutation
  const updateStock = useMutation({
    mutationFn: ({ productId, newStock }: { productId: string; newStock: number }) =>
      productOperations.updateStock(productId, newStock),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-products'] })
    }
  })

  // Update price mutation
  const updatePrice = useMutation({
    mutationFn: ({ 
      productId, 
      newPrice, 
      newOriginalPrice 
    }: { 
      productId: string; 
      newPrice: number;
      newOriginalPrice?: number;
    }) => productOperations.updatePrice(productId, newPrice, newOriginalPrice),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-products'] })
    }
  })

  // Bulk update mutation
  const bulkUpdateProducts = useMutation({
    mutationFn: productOperations.bulkUpdateProducts,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-products'] })
    }
  })

  return {
    products,
    isLoading,
    error,
    isAuthorized,
    createProduct,
    updateProduct,
    deleteProduct,
    updateStock,
    updatePrice,
    bulkUpdateProducts
  }
} 
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { productOperations, Product } from '@/lib/supabase'
import { useEffect } from 'react'

export function useProducts() {
  const queryClient = useQueryClient()

  // Fetch all products
  const { data: products, isLoading, error } = useQuery({
    queryKey: ['products'],
    queryFn: productOperations.getProducts
  })

  // Set up real-time subscription
  useEffect(() => {
    const subscription = productOperations.subscribeToProducts((payload) => {
      // Update cache when products change
      queryClient.invalidateQueries({ queryKey: ['products'] })
    })

    return () => {
      subscription.unsubscribe()
    }
  }, [queryClient])

  // Update stock mutation
  const updateStock = useMutation({
    mutationFn: ({ productId, newStock }: { productId: string; newStock: number }) =>
      productOperations.updateStock(productId, newStock),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] })
    }
  })

  // Update price mutation
  const updatePrice = useMutation({
    mutationFn: ({ productId, newPrice }: { productId: string; newPrice: number }) =>
      productOperations.updatePrice(productId, newPrice),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] })
    }
  })

  return {
    products,
    isLoading,
    error,
    updateStock: updateStock.mutate,
    updatePrice: updatePrice.mutate,
    isUpdating: updateStock.isPending || updatePrice.isPending
  }
} 
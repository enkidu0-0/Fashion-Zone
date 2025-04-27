import { createClient } from '@supabase/supabase-js'
import type { Database as SupabaseDatabase } from '@/types/supabase'

const supabaseUrl = 'https://jtbpodmjfvseyfvzsqid.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp0YnBvZG1qZnZzZXlmdnpzcWlkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQzNzQ5NTIsImV4cCI6MjA1OTk1MDk1Mn0.-o0kCNIQ6qJ3R7115V8EiX7VmpFMmQPxLc_oMlja5b0'
const supabaseServiceRoleKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp0YnBvZG1qZnZzZXlmdnpzcWlkIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NDM3NDk1MiwiZXhwIjoyMDU5OTUwOTUyfQ.IhzfjGq1160n2fTVGRNUzKmMaq7VhndX6sBLE-nUhnU'

// Create Supabase clients
export const supabase = createClient<SupabaseDatabase>(supabaseUrl, supabaseAnonKey)
export const supabaseAdmin = createClient<SupabaseDatabase>(supabaseUrl, supabaseServiceRoleKey)

// Product types
export interface Product {
  id: string
  name: string
  description: string
  price: number
  stock_quantity: number
  category: string
  image_url: string
  is_active?: boolean
  sku?: string
  created_at: string
  updated_at?: string
  
  // UI mapped fields
  title?: string
  stock?: number
  image?: string
  original_price?: number
}

// Product operations
export const productOperations = {
  // Get all products
  getProducts: async () => {
    const { data: products, error } = await supabase
      .from('products')
      .select('*')
      .order('created_at', { ascending: false })
    
    if (error) {
      console.error('Error fetching products:', error)
      return []
    }

    return products.map(product => ({
      ...product,
      title: product.name,
      stock: product.stock_quantity,
      image: product.image_url,
      original_price: product.price
    })) as Product[]
  },

  // Get a single product
  getProduct: async (id: string) => {
    const { data: product, error } = await supabase
      .from('products')
      .select('*')
      .eq('id', id)
      .single()
    
    if (error || !product) {
      console.error('Error fetching product:', error)
      return null
    }

    return {
      ...product,
      title: product.name,
      stock: product.stock_quantity,
      image: product.image_url,
      original_price: product.price
    } as Product
  },

  // Create new product (admin only)
  createProduct: async (product: Omit<Product, 'id' | 'created_at' | 'updated_at'>) => {
    const { data, error } = await supabaseAdmin
      .from('products')
      .insert({
        name: product.name,
        description: product.description,
        price: product.price,
        stock_quantity: product.stock_quantity,
        category: product.category,
        image_url: product.image_url,
        is_active: product.is_active ?? true,
        sku: product.sku
      })
      .select()
      .single()
    
    if (error || !data) {
      console.error('Error creating product:', error)
      return null
    }

    return {
      ...data,
      title: data.name,
      stock: data.stock_quantity,
      image: data.image_url,
      original_price: data.price
    } as Product
  },

  // Update product (admin only)
  updateProduct: async (id: string, updates: Partial<Product>) => {
    const dbUpdates = {
      ...(updates.name && { name: updates.name }),
      ...(updates.description && { description: updates.description }),
      ...(updates.price && { price: updates.price }),
      ...(updates.stock_quantity && { stock_quantity: updates.stock_quantity }),
      ...(updates.category && { category: updates.category }),
      ...(updates.image_url && { image_url: updates.image_url }),
      ...(updates.is_active !== undefined && { is_active: updates.is_active }),
      ...(updates.sku && { sku: updates.sku }),
      updated_at: new Date().toISOString()
    }

    const { data, error } = await supabaseAdmin
      .from('products')
      .update(dbUpdates)
      .eq('id', id)
      .select()
      .single()
    
    if (error || !data) {
      console.error('Error updating product:', error)
      return null
    }

    return {
      ...data,
      title: data.name,
      stock: data.stock_quantity,
      image: data.image_url,
      original_price: data.price
    } as Product
  },

  // Delete product (admin only)
  deleteProduct: async (id: string) => {
    const { error } = await supabaseAdmin
      .from('products')
      .delete()
      .eq('id', id)
    
    if (error) throw error
    return true
  },

  // Update product stock (admin only)
  updateStock: async (productId: string, newStock: number) => {
    const { data, error } = await supabaseAdmin
      .from('products')
      .update({ 
        stock_quantity: newStock,
        updated_at: new Date().toISOString()
      })
      .eq('id', productId)
      .select()
      .single()
    
    if (error || !data) {
      console.error('Error updating stock:', error)
      return null
    }

    return {
      ...data,
      title: data.name,
      stock: data.stock_quantity,
      image: data.image_url,
      original_price: data.price
    } as Product
  },

  // Update product price (admin only)
  updatePrice: async (productId: string, newPrice: number, newOriginalPrice?: number) => {
    const updates: any = { 
      price: newPrice,
      updated_at: new Date().toISOString()
    }
    if (newOriginalPrice) updates.original_price = newOriginalPrice

    const { data, error } = await supabaseAdmin
      .from('products')
      .update(updates)
      .eq('id', productId)
      .select()
      .single()
    
    if (error || !data) {
      console.error('Error updating price:', error)
      return null
    }

    return {
      ...data,
      title: data.name,
      stock: data.stock_quantity,
      image: data.image_url,
      original_price: newOriginalPrice ?? data.price
    } as Product
  },

  // Subscribe to product changes
  subscribeToProducts: (callback: (products: Product[]) => void) => {
    // Initial fetch
    productOperations.getProducts().then(products => callback(products))

    // Real-time subscription
    const subscription = supabase
      .channel('products-channel')
      .on(
        'postgres_changes',
        { 
          event: '*', 
          schema: 'public', 
          table: 'products' 
        },
        async () => {
          // Refetch all products when any change occurs
          const products = await productOperations.getProducts()
          callback(products)
        }
      )
      .subscribe()

    // Return unsubscribe function
    return () => {
      subscription.unsubscribe()
    }
  },

  // Get a single product with real-time updates
  subscribeToProduct: (id: string, callback: (product: Product | null) => void) => {
    // Initial fetch
    productOperations.getProduct(id).then(product => callback(product))

    // Real-time subscription
    const subscription = supabase
      .channel(`product-${id}`)
      .on(
        'postgres_changes',
        { 
          event: '*', 
          schema: 'public', 
          table: 'products',
          filter: `id=eq.${id}`
        },
        async () => {
          // Refetch the product when it changes
          const product = await productOperations.getProduct(id)
          callback(product)
        }
      )
      .subscribe()

    // Return unsubscribe function
    return () => {
      subscription.unsubscribe()
    }
  },

  // Bulk update products (admin only)
  bulkUpdateProducts: async (updates: { id: string, updates: Partial<Product> }[]) => {
    const promises = updates.map(({ id, updates: productUpdates }) => 
      supabaseAdmin
        .from('products')
        .update({ ...productUpdates, updated_at: new Date().toISOString() })
        .eq('id', id)
    )
    
    await Promise.all(promises)
    return true
  }
}

// Helper function to determine if user has admin access
export const isAdmin = async () => {
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return false
  
  const { data: profile } = await supabase
    .from('profiles')
    .select('role')
    .eq('id', user.id)
    .single()
    
  return profile?.role === 'admin'
}

// Types for your database
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          email: string
          name: string
          role: 'user' | 'admin'
          created_at: string
        }
        Insert: {
          id?: string
          email: string
          name: string
          role?: 'user' | 'admin'
          created_at?: string
        }
        Update: {
          id?: string
          email?: string
          name?: string
          role?: 'user' | 'admin'
          created_at?: string
        }
      }
      products: {
        Row: {
          id: string
          name: string
          description: string
          price: number
          stock_quantity: number
          category: string
          image_url: string
          is_active?: boolean
          sku?: string
          created_at: string
          updated_at?: string
          original_price?: number
        }
        Insert: {
          id?: string
          name: string
          description: string
          price: number
          stock_quantity: number
          category: string
          image_url: string
          is_active?: boolean
          sku?: string
          created_at?: string
          updated_at?: string
          original_price?: number
        }
        Update: {
          id?: string
          name?: string
          description?: string
          price?: number
          stock_quantity?: number
          category?: string
          image_url?: string
          is_active?: boolean
          sku?: string
          created_at?: string
          updated_at?: string
          original_price?: number
        }
      }
    }
  }
} 
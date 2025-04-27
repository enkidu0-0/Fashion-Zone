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
      products: {
        Row: {
          id: string
          name: string
          sku: string
          price: number
          original_price: number
          stock: number
          status: 'In Stock' | 'Low Stock' | 'Out of Stock'
          category: string
          image_url: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          sku: string
          price: number
          original_price: number
          stock?: number
          status?: 'In Stock' | 'Low Stock' | 'Out of Stock'
          category: string
          image_url?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          sku?: string
          price?: number
          original_price?: number
          stock?: number
          status?: 'In Stock' | 'Low Stock' | 'Out of Stock'
          category?: string
          image_url?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      profiles: {
        Row: {
          id: string
          created_at: string
          email: string
          full_name: string
          role: 'user' | 'admin'
          avatar_url?: string
        }
        Insert: {
          id: string
          created_at?: string
          email: string
          full_name: string
          role?: 'user' | 'admin'
          avatar_url?: string
        }
        Update: {
          id?: string
          created_at?: string
          email?: string
          full_name?: string
          role?: 'user' | 'admin'
          avatar_url?: string
        }
      }
      orders: {
        Row: {
          id: string
          created_at: string
          user_id: string
          status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled'
          total_amount: number
          shipping_address: Json
        }
        Insert: {
          id?: string
          created_at?: string
          user_id: string
          status?: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled'
          total_amount: number
          shipping_address: Json
        }
        Update: {
          id?: string
          created_at?: string
          user_id?: string
          status?: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled'
          total_amount?: number
          shipping_address?: Json
        }
      }
      order_items: {
        Row: {
          id: string
          created_at: string
          order_id: string
          product_id: string
          quantity: number
          price_at_time: number
        }
        Insert: {
          id?: string
          created_at?: string
          order_id: string
          product_id: string
          quantity: number
          price_at_time: number
        }
        Update: {
          id?: string
          created_at?: string
          order_id?: string
          product_id?: string
          quantity?: number
          price_at_time?: number
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
} 
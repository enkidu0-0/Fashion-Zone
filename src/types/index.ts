export interface Product {
  id: string;
  // Database fields
  name: string;
  description?: string;
  price: number;
  stock_quantity: number;
  category?: string;
  image_url?: string;
  is_active?: boolean;
  sku?: string;
  created_at?: string;
  updated_at?: string;
  
  // UI fields (mapped from database fields)
  title?: string;  // maps to name
  stock?: number;  // maps to stock_quantity
  image?: string;  // maps to image_url
  
  // Additional UI fields
  originalPrice?: number;
  discountPercentage?: number;
  rating?: number;
  ratingCount?: number;
}

export type Category = {
  id: number;
  name: string;
  image: string;
};

export type Banner = {
  id: number;
  image: string;
  alt: string;
  url: string;
};

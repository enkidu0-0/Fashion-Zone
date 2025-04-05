
import { create } from "zustand";
import { Product } from "../types";
import { products as initialProducts } from "../data/products";
import { persist } from "zustand/middleware";

interface ProductState {
  products: Product[];
  addProduct: (product: Product) => void;
  deleteProduct: (id: number) => void;
  updateProduct: (product: Product) => void;
  getProductById: (id: number) => Product | undefined;
  getProductsByCategory: (category: string) => Product[];
}

export const useProductStore = create<ProductState>()(
  persist(
    (set, get) => ({
      products: initialProducts,
      
      addProduct: (product) => {
        // If no ID is provided, create one
        const newProduct = { 
          ...product, 
          id: product.id || Math.max(0, ...get().products.map(p => p.id)) + 1
        };
        set((state) => ({ 
          products: [...state.products, newProduct] 
        }));
      },
      
      deleteProduct: (id) => {
        set((state) => ({ 
          products: state.products.filter(product => product.id !== id) 
        }));
      },
      
      updateProduct: (updatedProduct) => {
        set((state) => ({ 
          products: state.products.map(product => 
            product.id === updatedProduct.id ? updatedProduct : product
          ) 
        }));
      },
      
      getProductById: (id) => {
        return get().products.find(product => product.id === id);
      },
      
      getProductsByCategory: (category) => {
        return get().products.filter(product => product.category === category);
      },
    }),
    {
      name: "product-storage",
    }
  )
);

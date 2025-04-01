
import { Product, Category, Banner } from "../types";

export const products: Product[] = [
  {
    id: 1,
    title: "Men's Casual T-Shirt Blue Striped Cotton",
    price: 499,
    originalPrice: 999,
    discountPercentage: 50,
    image: "/placeholder.svg",
    rating: 4.3,
    ratingCount: 4356,
    category: "tshirts"
  },
  {
    id: 2,
    title: "Women's Floral Print Summer Dress",
    price: 799,
    originalPrice: 1599,
    discountPercentage: 50,
    image: "/placeholder.svg",
    rating: 4.5,
    ratingCount: 2187,
    category: "dresses"
  },
  {
    id: 3,
    title: "Men's Denim Slim Fit Jeans",
    price: 899,
    originalPrice: 1999,
    discountPercentage: 55,
    image: "/placeholder.svg",
    rating: 4.2,
    ratingCount: 3678,
    category: "jeans"
  },
  {
    id: 4,
    title: "Women's Hooded Sweatshirt",
    price: 699,
    originalPrice: 1399,
    discountPercentage: 50,
    image: "/placeholder.svg",
    rating: 4.4,
    ratingCount: 1243,
    category: "hoodies"
  },
  {
    id: 5,
    title: "Men's Formal Shirt White",
    price: 599,
    originalPrice: 1199,
    discountPercentage: 50,
    image: "/placeholder.svg",
    rating: 4.1,
    ratingCount: 2345,
    category: "shirts"
  },
  {
    id: 6,
    title: "Women's Skinny Jeans Dark Blue",
    price: 999,
    originalPrice: 1999,
    discountPercentage: 50,
    image: "/placeholder.svg",
    rating: 4.3,
    ratingCount: 3467,
    category: "jeans"
  },
  {
    id: 7,
    title: "Kids Cartoon Print T-shirt",
    price: 299,
    originalPrice: 599,
    discountPercentage: 50,
    image: "/placeholder.svg",
    rating: 4.5,
    ratingCount: 1234,
    category: "kids"
  },
  {
    id: 8,
    title: "Men's Casual Hoodie Black",
    price: 899,
    originalPrice: 1799,
    discountPercentage: 50,
    image: "/placeholder.svg",
    rating: 4.2,
    ratingCount: 2346,
    category: "hoodies"
  }
];

export const categories: Category[] = [
  { id: 1, name: "Men", image: "/placeholder.svg" },
  { id: 2, name: "Women", image: "/placeholder.svg" },
  { id: 3, name: "Kids", image: "/placeholder.svg" },
  { id: 4, name: "T-shirts", image: "/placeholder.svg" },
  { id: 5, name: "Hoodies", image: "/placeholder.svg" },
  { id: 6, name: "Shirts", image: "/placeholder.svg" },
  { id: 7, name: "Jeans", image: "/placeholder.svg" },
  { id: 8, name: "Dresses", image: "/placeholder.svg" },
  { id: 9, name: "Accessories", image: "/placeholder.svg" }
];

export const banners: Banner[] = [
  { id: 1, image: "/placeholder.svg", alt: "Big Fashion Sale", url: "/sale" },
  { id: 2, image: "/placeholder.svg", alt: "New Arrivals", url: "/new-arrivals" },
  { id: 3, image: "/placeholder.svg", alt: "Summer Collection", url: "/summer" }
];

export const productsByCategory = (category: string) => {
  return products.filter(product => product.category === category);
};

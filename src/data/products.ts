import { Product, Category, Banner } from "../types";

// Initial products data
export const products: Product[] = [
  {
    id: 1,
    title: "Men's Casual T-Shirt Blue Striped Cotton",
    price: 499,
    originalPrice: 999,
    discountPercentage: 50,
    image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    rating: 4.3,
    ratingCount: 4356,
    category: "tshirts"
  },
  {
    id: 10,
    title: "Men's Plain Black Cotton T-Shirt",
    price: 399,
    originalPrice: 799,
    discountPercentage: 50,
    image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    rating: 4.5,
    ratingCount: 2890,
    category: "tshirts"
  },
  {
    id: 11,
    title: "Men's White Basic Round Neck T-Shirt",
    price: 349,
    originalPrice: 699,
    discountPercentage: 50,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    rating: 4.2,
    ratingCount: 1876,
    category: "tshirts"
  },
  
  {
    id: 2,
    title: "Women's Floral Print Summer Dress",
    price: 799,
    originalPrice: 1599,
    discountPercentage: 50,
    image: "https://images.unsplash.com/photo-1612336307429-8a898d10e223?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    rating: 4.5,
    ratingCount: 2187,
    category: "dresses"
  },
  {
    id: 12,
    title: "Women's Red Cocktail Party Dress",
    price: 1299,
    originalPrice: 2599,
    discountPercentage: 50,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    rating: 4.6,
    ratingCount: 1543,
    category: "dresses"
  },
  {
    id: 13,
    title: "Women's Casual Maxi Dress",
    price: 899,
    originalPrice: 1799,
    discountPercentage: 50,
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    rating: 4.3,
    ratingCount: 1109,
    category: "dresses"
  },
  
  {
    id: 3,
    title: "Men's Denim Slim Fit Jeans",
    price: 899,
    originalPrice: 1999,
    discountPercentage: 55,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    rating: 4.2,
    ratingCount: 3678,
    category: "jeans"
  },
  {
    id: 14,
    title: "Women's High-Rise Skinny Jeans",
    price: 999,
    originalPrice: 1999,
    discountPercentage: 50,
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    rating: 4.4,
    ratingCount: 2543,
    category: "jeans"
  },
  {
    id: 15,
    title: "Men's Regular Fit Blue Jeans",
    price: 799,
    originalPrice: 1599,
    discountPercentage: 50,
    image: "https://images.unsplash.com/photo-1475178626620-a4d074967452?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    rating: 4.1,
    ratingCount: 1897,
    category: "jeans"
  },
  
  {
    id: 4,
    title: "Women's Hooded Sweatshirt",
    price: 699,
    originalPrice: 1399,
    discountPercentage: 50,
    image: "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    rating: 4.4,
    ratingCount: 1243,
    category: "hoodies"
  },
  {
    id: 16,
    title: "Men's Pullover Hoodie Black",
    price: 799,
    originalPrice: 1599,
    discountPercentage: 50,
    image: "https://images.unsplash.com/photo-1609873814058-a8928924184a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    rating: 4.5,
    ratingCount: 2134,
    category: "hoodies"
  },
  {
    id: 17,
    title: "Unisex Zip-Up Hooded Sweatshirt",
    price: 899,
    originalPrice: 1799,
    discountPercentage: 50,
    image: "https://images.unsplash.com/photo-1556172732-049461e80726?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    rating: 4.2,
    ratingCount: 1765,
    category: "hoodies"
  },
  
  {
    id: 18,
    title: "Kids Cartoon Print T-shirt",
    price: 299,
    originalPrice: 599,
    discountPercentage: 50,
    image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    rating: 4.6,
    ratingCount: 987,
    category: "kids"
  },
  {
    id: 19,
    title: "Kids Denim Dungarees",
    price: 599,
    originalPrice: 1199,
    discountPercentage: 50,
    image: "https://images.unsplash.com/photo-1522771930-78848d9293e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    rating: 4.3,
    ratingCount: 765,
    category: "kids"
  },
  {
    id: 20,
    title: "Kids Winter Jacket with Hood",
    price: 799,
    originalPrice: 1599,
    discountPercentage: 50,
    image: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    rating: 4.5,
    ratingCount: 876,
    category: "kids"
  },
];

export const categories: Category[] = [
  { id: 1, name: "Men", image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" },
  { id: 2, name: "Women", image: "https://images.unsplash.com/photo-1551232864-3f0890e580d9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" },
  { id: 3, name: "Kids", image: "https://images.unsplash.com/photo-1626942500130-909c0e9e68fb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" },
  { id: 4, name: "T-shirts", image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" },
  { id: 5, name: "Hoodies", image: "https://images.unsplash.com/photo-1520902473691-4c9d2cc3d706?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" },
  { id: 6, name: "Shirts", image: "https://images.unsplash.com/photo-1602810316693-3667c854239a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" },
  { id: 7, name: "Jeans", image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" },
  { id: 8, name: "Dresses", image: "https://images.unsplash.com/photo-1623609163859-ca93c959b5b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" },
  { id: 9, name: "Accessories", image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" }
];

export const banners: Banner[] = [
  { 
    id: 1, 
    image: "https://images.unsplash.com/photo-1607082349566-187342175e2f?w=1200&auto=format&fit=crop&q=80&ixlib=rb-4.0.3", 
    alt: "Big Fashion Sale", 
    url: "/sale" 
  },
  { 
    id: 2, 
    image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=1200&auto=format&fit=crop&q=80&ixlib=rb-4.0.3", 
    alt: "New Arrivals", 
    url: "/new-arrivals" 
  },
  { 
    id: 3, 
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&auto=format&fit=crop&q=80&ixlib=rb-4.0.3", 
    alt: "Summer Collection", 
    url: "/summer" 
  }
];

// This function is now handled by the ProductStore
export const productsByCategory = (category: string) => {
  return products.filter(product => product.category === category);
};

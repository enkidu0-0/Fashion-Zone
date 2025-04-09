import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, ShoppingCart, Trash2 } from 'lucide-react';

const Wishlist = () => {
  // Sample wishlist data with reliable images
  const wishlistItems = [
    {
      id: 1,
      name: 'Premium Cotton T-Shirt',
      price: 24.99,
      originalPrice: 34.99,
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=500&q=80',
      inStock: true,
    },
    {
      id: 2,
      name: 'Slim Fit Denim Jeans',
      price: 49.99,
      originalPrice: 69.99,
      image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=500&q=80',
      inStock: true,
    },
    {
      id: 3,
      name: 'Casual Sneakers',
      price: 79.99,
      originalPrice: 99.99,
      image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=500&q=80',
      inStock: false,
    },
    {
      id: 4,
      name: 'Classic Watch',
      price: 129.99,
      originalPrice: 159.99,
      image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=500&q=80',
      inStock: true,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-gray-50 py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Heart className="h-5 w-5 text-red-500" />
            My Wishlist
            <span className="text-sm font-normal text-gray-500 ml-2">
              ({wishlistItems.length} items)
            </span>
          </h1>

          {wishlistItems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {wishlistItems.map((item) => (
                <Card key={item.id} className="overflow-hidden hover:shadow-md transition-shadow">
                  <div className="relative">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-48 object-cover"
                    />
                    <Button
                      variant="ghost" 
                      size="icon"
                      className="absolute top-2 right-2 h-8 w-8 rounded-full bg-white text-gray-500 hover:text-red-500 hover:bg-white"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <CardContent className="p-4">
                    <h3 className="font-medium text-gray-800 mb-1 line-clamp-2">{item.name}</h3>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="font-semibold text-flipkart-blue">${item.price.toFixed(2)}</span>
                      {item.originalPrice > item.price && (
                        <>
                          <span className="text-gray-400 line-through text-sm">${item.originalPrice.toFixed(2)}</span>
                          <span className="text-green-600 text-sm">
                            {Math.round((1 - item.price / item.originalPrice) * 100)}% off
                          </span>
                        </>
                      )}
                    </div>
                    
                    {item.inStock ? (
                      <Button className="w-full bg-flipkart-blue hover:bg-blue-600 gap-2">
                        <ShoppingCart className="h-4 w-4" />
                        Add to Cart
                      </Button>
                    ) : (
                      <Button disabled variant="outline" className="w-full">Out of Stock</Button>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <Heart className="h-16 w-16 mx-auto text-gray-300 mb-4" />
              <h2 className="text-lg font-medium mb-2">Your wishlist is empty</h2>
              <p className="text-gray-500 mb-6 max-w-md mx-auto">
                Items added to your wishlist will appear here. Find products you love and click the heart icon to save them for later.
              </p>
              <Button asChild>
                <a href="/">Start Shopping</a>
              </Button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Wishlist;

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, ShoppingCart, Trash2 } from 'lucide-react';

const Wishlist = () => {
  // Empty wishlist array instead of dummy data
  const wishlistItems = [];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 mb-6">
            <Heart className="w-6 h-6 text-gray-600" />
            <h1 className="text-2xl font-bold">My Wishlist</h1>
            <span className="text-sm text-gray-500">({wishlistItems.length} items)</span>
          </div>

          {wishlistItems.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {wishlistItems.map((item) => (
                <Card key={item.id} className="overflow-hidden">
                  <div className="relative aspect-square">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                    <button className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-sm hover:bg-gray-100">
                      <Trash2 className="w-5 h-5 text-gray-600" />
                    </button>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-medium mb-2">{item.name}</h3>
                    <div className="flex items-baseline gap-2 mb-4">
                      <span className="text-lg font-bold">${item.price}</span>
                      <span className="text-sm text-gray-500 line-through">
                        ${item.originalPrice}
                      </span>
                    </div>
                    <Button
                      className="w-full gap-2"
                      disabled={!item.inStock}
                    >
                      <ShoppingCart className="w-4 h-4" />
                      {item.inStock ? 'Add to Cart' : 'Out of Stock'}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <Heart className="w-16 h-16 mx-auto text-gray-300 mb-4" />
              <h2 className="text-xl font-medium mb-2">Your wishlist is empty</h2>
              <p className="text-gray-500 mb-6">Browse our products and add your favorites to the wishlist!</p>
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

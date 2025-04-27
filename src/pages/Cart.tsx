import { Link } from "react-router-dom";
import { ShoppingBag, LogIn, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Cart = () => {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  const cartItems: any[] = []; // This should be replaced with your actual cart state

  if (!isLoggedIn) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center bg-gray-50">
        <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full text-center">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-flipkart-blue/10 rounded-full flex items-center justify-center">
              <ShoppingBag className="w-8 h-8 text-flipkart-blue" />
            </div>
          </div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Missing Cart Items?</h2>
          <p className="text-gray-600 mb-6">
            Login to see your cart items and continue shopping
          </p>
          <div className="space-y-3">
            <Link to="/login">
              <Button className="w-full bg-flipkart-blue hover:bg-flipkart-blue/90">
                <LogIn className="w-4 h-4 mr-2" />
                Login to your account
              </Button>
            </Link>
            <Link to="/signin">
              <Button variant="outline" className="w-full">
                Create new account
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>
      
      {cartItems.length === 0 ? (
        <div className="text-center py-12">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
              <ShoppingBag className="w-8 h-8 text-gray-400" />
            </div>
          </div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Your cart is empty</h2>
          <p className="text-gray-600 mb-6">
            Looks like you haven't added anything to your cart yet
          </p>
          <Link to="/">
            <Button className="bg-flipkart-blue hover:bg-flipkart-blue/90">
              Continue Shopping
            </Button>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* Cart items will be listed here */}
            <div className="bg-white rounded-lg shadow p-6">
              {/* This is where you'll map through cart items */}
              <p>Cart items will be displayed here</p>
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow p-6 sticky top-4">
              <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
              {/* Order summary details will go here */}
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>₹0.00</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>₹0.00</span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between font-semibold">
                    <span>Total</span>
                    <span>₹0.00</span>
                  </div>
                </div>
                <Button className="w-full bg-flipkart-orange hover:bg-flipkart-orange/90">
                  Proceed to Checkout
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart; 
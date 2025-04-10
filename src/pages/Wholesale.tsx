
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Package, TruckIcon, Users, BarChart3 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Wholesale = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gray-50">
        <div className="bg-flipkart-blue text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">Fashion Zone Wholesale</h1>
            <p className="text-xl max-w-2xl">
              Premium products at wholesale prices for retailers, businesses, and organizations
            </p>
          </div>
        </div>
        
        <section className="container mx-auto py-12 px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card>
              <CardHeader className="pb-2">
                <Package className="h-8 w-8 text-flipkart-blue mb-2" />
                <CardTitle>Bulk Orders</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Special volume pricing with scalable order sizes to fit your business needs</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <TruckIcon className="h-8 w-8 text-flipkart-blue mb-2" />
                <CardTitle>Express Shipping</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Fast delivery options with order tracking for all wholesale customers</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <Users className="h-8 w-8 text-flipkart-blue mb-2" />
                <CardTitle>Dedicated Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Personalized account management and expert customer service</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <BarChart3 className="h-8 w-8 text-flipkart-blue mb-2" />
                <CardTitle>Business Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Track your orders, top-selling items, and sales performance</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold mb-6 text-center">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-flipkart-blue text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Register</h3>
                <p className="text-gray-600">Create your wholesale account and verify your business credentials</p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-flipkart-blue text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Browse & Order</h3>
                <p className="text-gray-600">Access special wholesale pricing and place your bulk orders</p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-flipkart-blue text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Receive & Sell</h3>
                <p className="text-gray-600">Get your inventory delivered and start selling to your customers</p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">Join thousands of retailers who trust Fashion Zone for their inventory needs</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-flipkart-blue text-white px-8 py-4 rounded font-medium hover:bg-blue-700 transition-colors">
                Apply for Wholesale Account
              </button>
              <button className="border border-flipkart-blue text-flipkart-blue px-8 py-4 rounded font-medium hover:bg-blue-50 transition-colors">
                Download Catalog
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Wholesale;

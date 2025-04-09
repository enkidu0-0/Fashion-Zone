
import Header from "../components/Header";
import Footer from "../components/Footer";
import ChatBot from "../components/ChatBot";
import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, Users, Store } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CustomerCare = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 bg-gray-50 py-10 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-flipkart-blue mb-2">Customer Support</h1>
            <p className="text-flipkart-text-secondary max-w-2xl mx-auto">
              Get instant assistance with our AI-powered chat support or connect with our customer service team.
            </p>
          </div>

          <div className="flex justify-center mb-6">
            <Link to="/">
              <Button variant="outline" className="flex items-center gap-2">
                <Store className="h-4 w-4" />
                Back to Store
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2 flex flex-col gap-6">
              <Card className="animate-fade-in">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-blue-100 rounded-full">
                      <Users className="h-6 w-6 text-flipkart-blue" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Talk to a Human</h3>
                      <p className="text-sm text-gray-500">Available 9AM - 9PM</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-medium">Call us at:</p>
                      <p className="text-flipkart-blue font-semibold">1-800-FASHION (1-800-327-4466)</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Email us:</p>
                      <p className="text-flipkart-blue font-semibold">support@fashionzone.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="animate-fade-in" style={{animationDelay: "0.2s"}}>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                  <ul className="space-y-2 text-flipkart-blue">
                    <li><a href="/orders" className="block p-2 hover:bg-blue-50 rounded-md transition-colors">Track your order</a></li>
                    <li><a href="/returns" className="block p-2 hover:bg-blue-50 rounded-md transition-colors">Returns & refunds</a></li>
                    <li><a href="/shipping" className="block p-2 hover:bg-blue-50 rounded-md transition-colors">Shipping information</a></li>
                    <li><a href="/faq" className="block p-2 hover:bg-blue-50 rounded-md transition-colors">FAQs</a></li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            <div className="lg:col-span-3">
              <Card className="animate-fade-in h-[600px] shadow-lg overflow-hidden">
                <div className="bg-flipkart-blue text-white p-4 flex items-center gap-3">
                  <MessageSquare className="h-6 w-6" />
                  <div>
                    <h3 className="font-semibold">Fashion Zone Support</h3>
                    <p className="text-xs opacity-90">Online 24/7</p>
                  </div>
                  <div className="ml-auto flex items-center gap-2">
                    <span className="inline-block w-2 h-2 bg-green-400 rounded-full"></span>
                    <span className="text-xs">Active now</span>
                  </div>
                </div>
                <div className="h-[calc(600px-64px)]">
                  <ChatBot embedded={true} />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CustomerCare;

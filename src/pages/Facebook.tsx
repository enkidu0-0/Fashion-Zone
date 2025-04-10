
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Facebook as FacebookIcon, ExternalLink, ShoppingBag, Users, ThumbsUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Facebook = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gray-50">
        <div className="bg-[#1877F2] text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <FacebookIcon className="h-20 w-20 mx-auto mb-6" />
            <h1 className="text-4xl font-bold mb-4">Fashion Zone on Facebook</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Connect with us on Facebook for exclusive deals, style inspiration, and community events
            </p>
            <a 
              href="https://www.facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center bg-white text-[#1877F2] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Visit Our Facebook Page
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
        
        <section className="container mx-auto py-12 px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Follow Us on Facebook?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="bg-blue-100 rounded-full p-4 inline-flex mx-auto mb-4">
                  <ShoppingBag className="h-8 w-8 text-[#1877F2]" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Exclusive Deals</h3>
                <p className="text-gray-600">
                  Be the first to know about flash sales, special discounts, and limited-time offers available only to our Facebook followers
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="bg-blue-100 rounded-full p-4 inline-flex mx-auto mb-4">
                  <Users className="h-8 w-8 text-[#1877F2]" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Join Our Community</h3>
                <p className="text-gray-600">
                  Connect with fellow fashion enthusiasts, share your style, and participate in community discussions and events
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="bg-blue-100 rounded-full p-4 inline-flex mx-auto mb-4">
                  <ThumbsUp className="h-8 w-8 text-[#1877F2]" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Style Inspiration</h3>
                <p className="text-gray-600">
                  Get daily outfit inspiration, styling tips, and be the first to see our newest collections and lookbooks
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center">Recent Facebook Posts</h3>
            
            <div className="border rounded-lg overflow-hidden mb-6">
              <div className="bg-gray-100 p-4 border-b">
                <div className="flex items-center">
                  <div className="h-10 w-10 bg-[#1877F2] rounded-full flex items-center justify-center text-white font-bold">
                    FZ
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold">Fashion Zone</p>
                    <p className="text-xs text-gray-500">April 8 at 10:30 AM</p>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <p className="mb-4">
                  🌟 Summer collection JUST DROPPED! 🌟 Be the first to shop our hottest new arrivals with bold colors and breathable fabrics perfect for the warm weather ahead. Plus, use code FB20 for 20% off your first order!
                </p>
                <div className="aspect-video bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                  <p className="text-gray-500">Facebook Post Image</p>
                </div>
                <div className="flex justify-between text-gray-500 text-sm">
                  <span>245 Likes</span>
                  <span>37 Comments</span>
                  <span>18 Shares</span>
                </div>
              </div>
            </div>
            
            <div className="border rounded-lg overflow-hidden">
              <div className="bg-gray-100 p-4 border-b">
                <div className="flex items-center">
                  <div className="h-10 w-10 bg-[#1877F2] rounded-full flex items-center justify-center text-white font-bold">
                    FZ
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold">Fashion Zone</p>
                    <p className="text-xs text-gray-500">April 5 at 2:45 PM</p>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <p className="mb-4">
                  ✨ GIVEAWAY ALERT! ✨ We're giving three lucky followers a chance to win a $100 Fashion Zone gift card. To enter:
                  <br /><br />
                  1️⃣ Like this post<br />
                  2️⃣ Tag two friends in the comments<br />
                  3️⃣ Follow our page<br />
                  <br />
                  Winners will be announced on Monday! Good luck!
                </p>
                <div className="flex justify-between text-gray-500 text-sm">
                  <span>1.2K Likes</span>
                  <span>458 Comments</span>
                  <span>76 Shares</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-6">Connect With Us Today</h3>
            <p className="max-w-2xl mx-auto mb-8 text-gray-600">
              Don't miss out on exclusive content, community discussions, and the latest fashion updates. Join our growing community on Facebook!
            </p>
            <a 
              href="https://www.facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-[#1877F2] hover:bg-[#166FE5]">
                <FacebookIcon className="mr-2 h-5 w-5" />
                Follow Us on Facebook
              </Button>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Facebook;

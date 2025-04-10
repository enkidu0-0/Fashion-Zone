
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Twitter as TwitterIcon, ExternalLink, Hash, Repeat2, MessageCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Twitter = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gray-50">
        <div className="bg-[#1DA1F2] text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <TwitterIcon className="h-20 w-20 mx-auto mb-6" />
            <h1 className="text-4xl font-bold mb-4">Fashion Zone on Twitter</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Follow us for real-time updates, trending styles, and customer conversations
            </p>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center bg-white text-[#1DA1F2] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Visit Our Twitter Profile
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
        
        <section className="container mx-auto py-12 px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Join the Conversation</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="bg-blue-100 rounded-full p-4 inline-flex mx-auto mb-4">
                  <Hash className="h-8 w-8 text-[#1DA1F2]" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Trending Topics</h3>
                <p className="text-gray-600">
                  Stay up-to-date with the latest fashion trends, industry news, and style discussions that matter to you
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="bg-blue-100 rounded-full p-4 inline-flex mx-auto mb-4">
                  <MessageCircle className="h-8 w-8 text-[#1DA1F2]" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Real-Time Support</h3>
                <p className="text-gray-600">
                  Get quick responses to your questions and product inquiries through our active Twitter support channel
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="bg-blue-100 rounded-full p-4 inline-flex mx-auto mb-4">
                  <Repeat2 className="h-8 w-8 text-[#1DA1F2]" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Flash Announcements</h3>
                <p className="text-gray-600">
                  Be the first to know about flash sales, restocks, and limited-time offers that we share exclusively on Twitter
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center">Recent Tweets</h3>
            
            <div className="border rounded-lg overflow-hidden mb-6">
              <div className="bg-gray-100 p-4 border-b">
                <div className="flex items-center">
                  <div className="h-10 w-10 bg-[#1DA1F2] rounded-full flex items-center justify-center text-white font-bold">
                    FZ
                  </div>
                  <div className="ml-3">
                    <div className="flex items-center">
                      <p className="font-semibold">Fashion Zone</p>
                      <p className="text-gray-500 text-xs ml-2">@FashionZone</p>
                    </div>
                    <p className="text-xs text-gray-500">2h ago</p>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <p className="mb-4">
                  Just dropped: Our new sustainable denim collection is here! Made with 70% less water and recycled materials. Shop now and feel good about your fashion choices 🌎 #SustainableFashion #NewArrivals
                </p>
                <div className="aspect-video bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                  <p className="text-gray-500">Tweet Image</p>
                </div>
                <div className="flex justify-between text-gray-500 text-sm">
                  <span className="flex items-center"><MessageCircle className="h-4 w-4 mr-1" /> 32</span>
                  <span className="flex items-center"><Repeat2 className="h-4 w-4 mr-1" /> 128</span>
                  <span className="flex items-center">❤️ 245</span>
                </div>
              </div>
            </div>
            
            <div className="border rounded-lg overflow-hidden mb-6">
              <div className="bg-gray-100 p-4 border-b">
                <div className="flex items-center">
                  <div className="h-10 w-10 bg-[#1DA1F2] rounded-full flex items-center justify-center text-white font-bold">
                    FZ
                  </div>
                  <div className="ml-3">
                    <div className="flex items-center">
                      <p className="font-semibold">Fashion Zone</p>
                      <p className="text-gray-500 text-xs ml-2">@FashionZone</p>
                    </div>
                    <p className="text-xs text-gray-500">5h ago</p>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <p className="mb-4">
                  Which summer trend are you most excited about? Vote in our poll! 👇
                  <br /><br />
                  🔵 Bold prints<br />
                  🟢 Oversized linen<br />
                  🟡 Retro swimwear<br />
                  🔴 Platform sandals
                </p>
                <div className="flex justify-between text-gray-500 text-sm">
                  <span className="flex items-center"><MessageCircle className="h-4 w-4 mr-1" /> 57</span>
                  <span className="flex items-center"><Repeat2 className="h-4 w-4 mr-1" /> 42</span>
                  <span className="flex items-center">❤️ 189</span>
                </div>
              </div>
            </div>
            
            <div className="border rounded-lg overflow-hidden">
              <div className="bg-gray-100 p-4 border-b">
                <div className="flex items-center">
                  <div className="h-10 w-10 bg-[#1DA1F2] rounded-full flex items-center justify-center text-white font-bold">
                    FZ
                  </div>
                  <div className="ml-3">
                    <div className="flex items-center">
                      <p className="font-semibold">Fashion Zone</p>
                      <p className="text-gray-500 text-xs ml-2">@FashionZone</p>
                    </div>
                    <p className="text-xs text-gray-500">1d ago</p>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <p className="mb-4">
                  Customer spotlight! 🌟 @fashionlover123 styled our Oversized Linen Shirt three different ways and we're obsessed with each look! Share your Fashion Zone outfits with #MyFashionZone for a chance to be featured! 📸
                </p>
                <div className="flex justify-between text-gray-500 text-sm">
                  <span className="flex items-center"><MessageCircle className="h-4 w-4 mr-1" /> 14</span>
                  <span className="flex items-center"><Repeat2 className="h-4 w-4 mr-1" /> 23</span>
                  <span className="flex items-center">❤️ 107</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-6">Connect With Us Today</h3>
            <p className="max-w-2xl mx-auto mb-8 text-gray-600">
              Join our Twitter community for instant updates, exclusive offers, and to be part of the fashion conversation!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button size="lg" className="bg-[#1DA1F2] hover:bg-[#1A8CD8]">
                  <TwitterIcon className="mr-2 h-5 w-5" />
                  Follow @FashionZone
                </Button>
              </a>
              <a 
                href="https://twitter.com/search?q=%23FashionZone" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="lg">
                  <Hash className="mr-2 h-5 w-5" />
                  Explore #FashionZone
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Twitter;


import Header from "../components/Header";
import Footer from "../components/Footer";
import ChatBot from "../components/ChatBot";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PhoneCall, Mail, MessageSquare, Clock, MapPin } from "lucide-react";

const CustomerCare = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 bg-gray-50 py-10 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-flipkart-blue mb-2">Customer Care</h1>
            <p className="text-flipkart-text-secondary max-w-2xl mx-auto">
              We're here to help you with any questions or concerns about your orders, returns, or anything else.
            </p>
          </div>

          <Tabs defaultValue="contact" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="contact">Contact Us</TabsTrigger>
              <TabsTrigger value="faq">FAQs</TabsTrigger>
              <TabsTrigger value="support">Support Options</TabsTrigger>
            </TabsList>
            
            <TabsContent value="contact" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <PhoneCall className="h-5 w-5 text-flipkart-blue" />
                      Phone Support
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-2">Call us at:</p>
                    <p className="text-lg font-semibold">1-800-FASHION (1-800-327-4466)</p>
                    <p className="text-sm text-gray-500 mt-2 flex items-center">
                      <Clock className="h-4 w-4 mr-1" /> Mon-Sat: 9AM - 9PM, Sun: 10AM - 6PM
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Mail className="h-5 w-5 text-flipkart-blue" />
                      Email Support
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-2">Email us at:</p>
                    <p className="text-lg font-semibold">support@fashionzone.com</p>
                    <p className="text-sm text-gray-500 mt-2">
                      We typically respond within 24 hours
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MessageSquare className="h-5 w-5 text-flipkart-blue" />
                      Live Chat
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Chat with our customer service team in real-time using the chat bubble at the bottom right corner.</p>
                    <div className="mt-4">
                      <span className="inline-block px-2 py-1 text-sm bg-green-100 text-green-800 rounded">Online Now</span>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-flipkart-blue" />
                      Visit Us
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-2">Our Flagship Store:</p>
                    <p>123 Fashion Avenue</p>
                    <p>New York, NY 10001</p>
                    <p className="text-sm text-gray-500 mt-2 flex items-center">
                      <Clock className="h-4 w-4 mr-1" /> Daily: 10AM - 9PM
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="faq" className="mt-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-medium text-lg mb-2">How can I track my order?</h3>
                      <p className="text-gray-600">You can track your order by logging into your account and navigating to the "My Orders" section. Alternatively, use the tracking link sent in your shipping confirmation email.</p>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg mb-2">What is your return policy?</h3>
                      <p className="text-gray-600">We accept returns within 30 days of delivery. Items must be unworn with original tags attached. Initiate the return process through your account's "My Orders" section.</p>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg mb-2">How long does shipping take?</h3>
                      <p className="text-gray-600">Standard shipping takes 3-5 business days. Express shipping (1-2 business days) is available at checkout for an additional fee.</p>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg mb-2">Can I change or cancel my order?</h3>
                      <p className="text-gray-600">Orders can be modified or canceled within 1 hour of placing them. After that, please contact our customer service team for assistance.</p>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg mb-2">Do you offer international shipping?</h3>
                      <p className="text-gray-600">Yes, we ship to most international destinations. Shipping times and fees vary by location. You can see the specific options during checkout.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="support" className="mt-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <p>We offer multiple ways to get the support you need:</p>
                    
                    <ul className="list-disc pl-5 space-y-2">
                      <li>24/7 AI chatbot for immediate assistance (bottom right of this page)</li>
                      <li>Email support with 24-hour response time</li>
                      <li>Phone support during business hours</li>
                      <li>Live chat with our support team</li>
                      <li>In-store assistance at any of our retail locations</li>
                    </ul>
                    
                    <p className="mt-4">For order-specific inquiries, please have your order number ready.</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <div className="mt-12 text-center">
            <p className="text-lg font-medium">Need immediate assistance?</p>
            <p className="text-flipkart-text-secondary mb-4">
              Our AI chatbot is available 24/7. Click the chat icon in the bottom right corner.
            </p>
          </div>
        </div>
      </div>
      <Footer />
      <ChatBot />
    </div>
  );
};

export default CustomerCare;

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { PhoneCall, Mail, MapPin, MessageSquare, Clock, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "We've received your message and will get back to you shortly.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-gray-50 py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-3xl font-bold mb-8 text-center text-flipkart-blue">Contact Us</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-12">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Get In Touch</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex gap-4">
                    <div className="p-3 bg-blue-100 rounded-full h-min">
                      <PhoneCall className="h-6 w-6 text-flipkart-blue" />
                    </div>
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <p className="text-gray-600">+91 7076414186</p>
                      <p className="text-sm text-gray-500 mt-1 flex items-center">
                        <Clock className="h-4 w-4 mr-1" /> Mon-Sat: 9AM - 9PM, Sun: 10AM - 6PM
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="p-3 bg-blue-100 rounded-full h-min">
                      <Mail className="h-6 w-6 text-flipkart-blue" />
                    </div>
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-gray-600">support@fashionzone.com</p>
                      <p className="text-sm text-gray-500 mt-1">
                        We typically respond within 24 hours
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="p-3 bg-blue-100 rounded-full h-min">
                      <MapPin className="h-6 w-6 text-flipkart-blue" />
                    </div>
                    <div>
                      <h3 className="font-medium">Address</h3>
                      <p className="text-gray-600">
                        Fashion Zone Headquarters<br />
                        123 Fashion Avenue<br />
                        New York, NY 10001
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="p-3 bg-blue-100 rounded-full h-min">
                      <MessageSquare className="h-6 w-6 text-flipkart-blue" />
                    </div>
                    <div>
                      <h3 className="font-medium">Live Chat</h3>
                      <p className="text-gray-600">
                        Connect with our support team instantly through our chat support.
                      </p>
                      <Button asChild variant="link" className="p-0 h-auto text-flipkart-blue">
                        <a href="/customer-care">Go to Chat Support</a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="lg:col-span-3">
              <Card>
                <CardHeader>
                  <CardTitle>Send Us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">Name</label>
                        <Input id="name" placeholder="Your name" required />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">Email</label>
                        <Input id="email" type="email" placeholder="Your email" required />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                      <Input id="subject" placeholder="What's this about?" required />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">Message</label>
                      <Textarea 
                        id="message" 
                        placeholder="Tell us how we can help you..." 
                        rows={6}
                        required
                      />
                    </div>
                    
                    <Button type="submit" className="w-full gap-2">
                      <Send className="h-4 w-4" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
              
              <div className="mt-8 bg-white p-6 rounded-lg shadow-sm border">
                <h2 className="font-medium text-lg mb-3">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium">What are your business hours?</h3>
                    <p className="text-gray-600 text-sm mt-1">Our customer service team is available Monday to Saturday from 9AM to 9PM and Sunday from 10AM to 6PM.</p>
                  </div>
                  <div>
                    <h3 className="font-medium">How can I track my order?</h3>
                    <p className="text-gray-600 text-sm mt-1">You can track your order by logging into your account and navigating to the "My Orders" section.</p>
                  </div>
                  <div>
                    <h3 className="font-medium">What is your return policy?</h3>
                    <p className="text-gray-600 text-sm mt-1">We accept returns within 30 days of delivery. Items must be unworn with original tags attached.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;

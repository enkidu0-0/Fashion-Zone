
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ArrowLeftRight, Box, FileCheck, Printer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";

const Returns = () => {
  const [orderId, setOrderId] = useState("");
  const [email, setEmail] = useState("");
  const [showReturnSteps, setShowReturnSteps] = useState(false);

  const handleLookupOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (orderId && email) {
      setShowReturnSteps(true);
      toast({
        title: "Order found",
        description: "Please follow the instructions to complete your return.",
      });
    }
  };

  const returnSteps = [
    {
      icon: <FileCheck className="h-12 w-12 text-flipkart-blue" />,
      title: "Select items to return",
      description: "Choose which items from your order you want to return and specify the reason."
    },
    {
      icon: <ArrowLeftRight className="h-12 w-12 text-flipkart-blue" />,
      title: "Choose refund or exchange",
      description: "Decide whether you want a refund to your original payment method or exchange for another item."
    },
    {
      icon: <Printer className="h-12 w-12 text-flipkart-blue" />,
      title: "Print return label",
      description: "Download and print your prepaid return shipping label."
    },
    {
      icon: <Box className="h-12 w-12 text-flipkart-blue" />,
      title: "Pack & ship",
      description: "Pack your items securely and drop off at any authorized shipping location."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gray-50">
        <div className="bg-flipkart-blue text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">Returns & Exchanges</h1>
            <p className="text-xl max-w-2xl">
              Start your return or exchange in a few simple steps
            </p>
          </div>
        </div>
        
        <section className="container mx-auto py-12 px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6">Find Your Order</h2>
            <form onSubmit={handleLookupOrder}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="orderId" className="block text-sm font-medium text-gray-700 mb-1">Order Number</label>
                  <Input 
                    id="orderId" 
                    value={orderId}
                    onChange={(e) => setOrderId(e.target.value)}
                    placeholder="e.g., FZ123456789" 
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <Input 
                    id="email" 
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="email@example.com" 
                    required
                  />
                </div>
              </div>
              <Button type="submit" className="mt-6 w-full md:w-auto">Look Up Order</Button>
            </form>
          </div>
          
          {showReturnSteps && (
            <>
              <h2 className="text-2xl font-bold mb-6 text-center">Return Process</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {returnSteps.map((step, index) => (
                  <Card key={index} className="text-center">
                    <CardHeader>
                      <div className="flex justify-center">
                        <div className="bg-blue-50 p-4 rounded-full">
                          {step.icon}
                        </div>
                      </div>
                      <CardTitle className="mt-4">{step.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{step.description}</p>
                    </CardContent>
                    <CardFooter className="flex justify-center">
                      <div className="bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center font-bold text-flipkart-blue">
                        {index + 1}
                      </div>
                    </CardFooter>
                  </Card>
                ))}
              </div>
              
              <div className="flex justify-center">
                <Card className="max-w-md w-full">
                  <CardHeader>
                    <CardTitle>Order #FZ{orderId.toUpperCase()}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded flex justify-between items-center">
                      <span className="font-medium">Blue Cotton T-Shirt</span>
                      <label className="inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" />
                        <div className="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-flipkart-blue"></div>
                      </label>
                    </div>
                    <div className="bg-gray-50 p-4 rounded flex justify-between items-center">
                      <span className="font-medium">Slim Fit Jeans</span>
                      <label className="inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" />
                        <div className="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-flipkart-blue"></div>
                      </label>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline">Cancel</Button>
                    <Button>Continue</Button>
                  </CardFooter>
                </Card>
              </div>
            </>
          )}
          
          <div className="bg-blue-50 rounded-lg p-8 mt-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3 flex justify-center">
                <ArrowLeftRight className="h-24 w-24 text-flipkart-blue" />
              </div>
              <div className="md:w-2/3">
                <h2 className="text-2xl font-bold mb-4">Return Policy Highlights</h2>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-1 mr-3 mt-1">
                      <svg className="h-3 w-3 text-flipkart-blue" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>Return within 30 days of delivery</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-1 mr-3 mt-1">
                      <svg className="h-3 w-3 text-flipkart-blue" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>Items must be unworn with tags attached</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-1 mr-3 mt-1">
                      <svg className="h-3 w-3 text-flipkart-blue" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>Free return shipping on all eligible items</span>
                  </li>
                </ul>
                <div className="mt-4">
                  <a href="/return-policy" className="text-flipkart-blue font-medium hover:underline">
                    View full return policy →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Returns;

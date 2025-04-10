
import Header from "../components/Header";
import Footer from "../components/Footer";
import { CreditCard, ShieldCheck, Banknote, Smartphone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Payments = () => {
  const paymentMethods = [
    {
      icon: <CreditCard className="h-8 w-8 text-flipkart-blue mb-2" />,
      title: "Credit & Debit Cards",
      description: "Securely pay with Visa, Mastercard, American Express, and more"
    },
    {
      icon: <Banknote className="h-8 w-8 text-flipkart-blue mb-2" />,
      title: "Cash on Delivery",
      description: "Pay when your order is delivered to your doorstep"
    },
    {
      icon: <Smartphone className="h-8 w-8 text-flipkart-blue mb-2" />,
      title: "Mobile Wallets",
      description: "Use Apple Pay, Google Pay, Samsung Pay, or PayPal"
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-flipkart-blue mb-2" />,
      title: "Secure Processing",
      description: "All transactions are encrypted and compliant with PCI standards"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gray-50">
        <div className="bg-flipkart-blue text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">Payment Options</h1>
            <p className="text-xl max-w-2xl">
              Convenient and secure payment methods for a seamless shopping experience
            </p>
          </div>
        </div>
        
        <section className="container mx-auto py-12 px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {paymentMethods.map((method, index) => (
              <Card key={index}>
                <CardHeader className="pb-2">
                  {method.icon}
                  <CardTitle>{method.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{method.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <Tabs defaultValue="cards">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="cards">Credit/Debit Cards</TabsTrigger>
                <TabsTrigger value="wallets">Digital Wallets</TabsTrigger>
                <TabsTrigger value="cod">Cash on Delivery</TabsTrigger>
              </TabsList>
              <TabsContent value="cards" className="space-y-4">
                <h3 className="text-2xl font-semibold">Credit & Debit Cards</h3>
                <p>We accept all major credit and debit cards including Visa, Mastercard, American Express, Discover, JCB, and Diners Club. Your card details are securely processed and never stored on our servers.</p>
                <div className="flex flex-wrap gap-4 mt-4">
                  <img src="https://img.icons8.com/color/48/000000/visa.png" alt="Visa" className="h-12" />
                  <img src="https://img.icons8.com/color/48/000000/mastercard.png" alt="Mastercard" className="h-12" />
                  <img src="https://img.icons8.com/color/48/000000/amex.png" alt="American Express" className="h-12" />
                  <img src="https://img.icons8.com/color/48/000000/discover.png" alt="Discover" className="h-12" />
                </div>
              </TabsContent>
              <TabsContent value="wallets" className="space-y-4">
                <h3 className="text-2xl font-semibold">Digital Wallets</h3>
                <p>Quickly pay using your preferred digital wallet. We integrate with all popular services for a fast and secure checkout experience.</p>
                <div className="flex flex-wrap gap-4 mt-4">
                  <img src="https://img.icons8.com/color/48/000000/apple-pay.png" alt="Apple Pay" className="h-12" />
                  <img src="https://img.icons8.com/color/48/000000/google-pay.png" alt="Google Pay" className="h-12" />
                  <img src="https://img.icons8.com/color/48/000000/paypal.png" alt="PayPal" className="h-12" />
                  <img src="https://img.icons8.com/color/48/000000/samsung-pay.png" alt="Samsung Pay" className="h-12" />
                </div>
              </TabsContent>
              <TabsContent value="cod" className="space-y-4">
                <h3 className="text-2xl font-semibold">Cash on Delivery</h3>
                <p>Pay for your order when it reaches your doorstep. Please note that this option is available for orders under $500 and in select locations. Our delivery staff carries mobile POS devices that accept both cash and cards.</p>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4">
                  <p className="font-medium">Important: Due to COVID-19 safety protocols, we encourage contactless payments.</p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-6 md:mb-0">
                <ShieldCheck className="h-16 w-16 text-flipkart-blue mb-4" />
                <h2 className="text-2xl font-bold mb-3">Secure Payments Guarantee</h2>
                <p className="text-gray-700">
                  All transactions on Fashion Zone are protected with bank-grade security. We use industry-leading encryption and fraud prevention systems to ensure your payment information is always safe.
                </p>
              </div>
              <div className="md:w-1/2 md:pl-8">
                <h3 className="text-xl font-semibold mb-3">Have questions about payments?</h3>
                <p className="mb-4">Our customer support team is ready to help you with any payment-related issues.</p>
                <a href="/customer-care" className="bg-flipkart-blue text-white px-6 py-2 rounded inline-block hover:bg-blue-700 transition-colors">
                  Contact Support
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Payments;

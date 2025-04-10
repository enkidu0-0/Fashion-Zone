
import Header from "../components/Header";
import Footer from "../components/Footer";
import { TruckIcon, Calendar, MapPin, Zap, Package } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Shipping = () => {
  const shippingOptions = [
    {
      icon: <TruckIcon className="h-8 w-8 text-flipkart-blue mb-2" />,
      title: "Standard Shipping",
      description: "Free for orders over $50, delivered in 3-5 business days",
      cost: "Free / $4.99"
    },
    {
      icon: <Zap className="h-8 w-8 text-flipkart-blue mb-2" />,
      title: "Express Shipping",
      description: "Get your order in 1-2 business days",
      cost: "$9.99"
    },
    {
      icon: <Calendar className="h-8 w-8 text-flipkart-blue mb-2" />,
      title: "Same-Day Delivery",
      description: "Available in select cities for orders placed before 12 PM",
      cost: "$14.99"
    },
    {
      icon: <MapPin className="h-8 w-8 text-flipkart-blue mb-2" />,
      title: "International Shipping",
      description: "Available to 100+ countries worldwide",
      cost: "Varies by location"
    }
  ];

  const faqs = [
    {
      question: "How can I track my order?",
      answer: "Once your order ships, you'll receive a tracking number via email and SMS. You can also track your order in your account dashboard under 'My Orders'."
    },
    {
      question: "What if I'm not available when my order arrives?",
      answer: "For standard deliveries, our carrier will leave a notice and attempt delivery again the next business day. For valuable items requiring signature confirmation, you may need to pick up from a local collection point."
    },
    {
      question: "Can I change my delivery address after placing my order?",
      answer: "Address changes can be made within 2 hours of placing your order. After that, please contact customer support for assistance."
    },
    {
      question: "Do you ship to P.O. boxes?",
      answer: "Yes, we ship to P.O. boxes for standard shipping only. Express and same-day delivery are not available for P.O. box addresses."
    },
    {
      question: "How are shipping costs calculated?",
      answer: "Shipping costs are calculated based on the destination, weight of the items, and the shipping method you choose. Free standard shipping is available for orders over $50."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gray-50">
        <div className="bg-flipkart-blue text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">Shipping Information</h1>
            <p className="text-xl max-w-2xl">
              Reliable delivery options to get your fashion items where they need to go
            </p>
          </div>
        </div>
        
        <section className="container mx-auto py-12 px-4">
          <h2 className="text-2xl font-bold mb-8">Delivery Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {shippingOptions.map((option, index) => (
              <Card key={index}>
                <CardHeader className="pb-2">
                  {option.icon}
                  <CardTitle>{option.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-2">{option.description}</p>
                  <div className="font-semibold text-flipkart-blue">{option.cost}</div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3 flex justify-center">
                <Package className="h-32 w-32 text-flipkart-blue" />
              </div>
              <div className="md:w-2/3">
                <h2 className="text-2xl font-bold mb-4">Packaging & Sustainability</h2>
                <p className="mb-4">
                  We're committed to reducing our environmental impact through sustainable packaging practices.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-1 mr-3 mt-1">
                      <svg className="h-3 w-3 text-flipkart-blue" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>Recyclable packaging materials</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-1 mr-3 mt-1">
                      <svg className="h-3 w-3 text-flipkart-blue" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>Plastic-free where possible</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-1 mr-3 mt-1">
                      <svg className="h-3 w-3 text-flipkart-blue" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>Right-sized packaging to minimize waste</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-1 mr-3 mt-1">
                      <svg className="h-3 w-3 text-flipkart-blue" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>Carbon-offset shipping options</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="bg-white rounded-lg shadow">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="mt-12 text-center">
            <p className="mb-4">Have more questions about shipping or delivery?</p>
            <a href="/customer-care" className="bg-flipkart-blue text-white px-6 py-3 rounded inline-block hover:bg-blue-700 transition-colors">
              Contact Support
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Shipping;

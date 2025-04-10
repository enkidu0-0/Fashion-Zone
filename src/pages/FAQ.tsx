
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useState } from "react";

const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const faqCategories = [
    {
      id: "orders",
      title: "Orders & Shipping",
      faqs: [
        {
          question: "How do I track my order?",
          answer: "You can track your order by logging into your account and navigating to 'My Orders'. Click on the specific order to view its current status and tracking information. You can also use the tracking number provided in your shipping confirmation email."
        },
        {
          question: "How long will it take to receive my order?",
          answer: "Standard delivery typically takes 3-5 business days within the continental US. Express shipping delivers within 1-2 business days. International shipping times vary by destination, ranging from 7-21 days."
        },
        {
          question: "Can I change my shipping address after placing an order?",
          answer: "Address changes can be requested within 2 hours of placing your order. After that, please contact our customer service team immediately, and we'll do our best to accommodate your request if the order hasn't been shipped."
        },
        {
          question: "Do you ship internationally?",
          answer: "Yes, we ship to over 100 countries worldwide. Shipping costs and delivery times vary by location. You can see the full list of countries and estimated delivery times in our International Shipping section."
        }
      ]
    },
    {
      id: "returns",
      title: "Returns & Refunds",
      faqs: [
        {
          question: "What is your return policy?",
          answer: "We offer a 30-day return policy for most items. Products must be unused, in their original packaging, and with all tags attached. Some exclusions apply, such as underwear, swimwear, and personalized items."
        },
        {
          question: "How do I initiate a return?",
          answer: "To initiate a return, log into your account, go to 'My Orders', select the order containing the item(s) you wish to return, and click 'Return Items'. Follow the instructions to complete your return request and print your return shipping label."
        },
        {
          question: "How long does it take to process a refund?",
          answer: "Once we receive your returned item(s), it typically takes 1-2 business days to inspect the return and approve the refund. After approval, refunds take 5-7 business days to appear in your account, depending on your payment method and financial institution."
        },
        {
          question: "Do I have to pay for return shipping?",
          answer: "For standard returns, customers are responsible for return shipping costs unless the item was defective or we sent the wrong item. Premium and VIP members receive free return shipping on all orders."
        }
      ]
    },
    {
      id: "account",
      title: "Account & Payments",
      faqs: [
        {
          question: "How do I create an account?",
          answer: "You can create an account by clicking the 'Sign Up' button in the top right corner of our website. Fill in your email address, create a password, and provide your basic information. You can also sign up using your Google or Facebook account for quicker registration."
        },
        {
          question: "I forgot my password. How do I reset it?",
          answer: "Click on the 'Login' button, then select 'Forgot Password'. Enter the email address associated with your account, and we'll send you a password reset link. If you don't receive the email within a few minutes, check your spam folder."
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept major credit and debit cards (Visa, Mastercard, American Express, Discover), PayPal, Apple Pay, Google Pay, and Shop Pay. In select locations, we also offer Cash on Delivery."
        },
        {
          question: "Is it safe to save my credit card information on your site?",
          answer: "Yes, we use industry-standard encryption and security measures to protect your payment information. We are PCI-DSS compliant and never store your full credit card details on our servers."
        }
      ]
    },
    {
      id: "products",
      title: "Products & Sizing",
      faqs: [
        {
          question: "How do I find the right size?",
          answer: "Each product page includes a size guide specific to that item. For general guidance, visit our Size Guide page where you'll find detailed measurements and fit recommendations for all our product categories."
        },
        {
          question: "Are your products true to size?",
          answer: "We work hard to ensure our sizing is consistent, but there may be slight variations between different brands and styles. We recommend checking the specific size guide on each product page and reading customer reviews for fit feedback."
        },
        {
          question: "How do I care for my purchases?",
          answer: "Care instructions are provided on each product's tag and on the product page. Generally, we recommend following the specific washing and care instructions for each item to maintain its quality and longevity."
        },
        {
          question: "Do you offer price matching?",
          answer: "Yes, we offer price matching on identical items found at lower prices from authorized retailers. Submit your price match request within 7 days of purchase through our customer service portal with a link to the competitor's offer."
        }
      ]
    }
  ];

  // Filter FAQs based on search query
  const filteredFAQs = searchQuery
    ? faqCategories.map(category => ({
        ...category,
        faqs: category.faqs.filter(faq => 
          faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
          faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
        )
      })).filter(category => category.faqs.length > 0)
    : faqCategories;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gray-50">
        <div className="bg-flipkart-blue text-white py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Find quick answers to common questions about shopping with Fashion Zone
            </p>
            <div className="max-w-xl mx-auto mt-8">
              <div className="relative">
                <Input 
                  type="text" 
                  placeholder="Search for answers..."
                  className="pl-10 py-6 rounded-full bg-white text-gray-900"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
        
        <section className="container mx-auto py-12 px-4">
          <Tabs defaultValue="orders" className="mb-12">
            <TabsList className="mb-8 flex flex-wrap justify-center">
              {faqCategories.map(category => (
                <TabsTrigger key={category.id} value={category.id} className="px-4 py-2">
                  {category.title}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {filteredFAQs.length > 0 ? (
              filteredFAQs.map(category => (
                <TabsContent key={category.id} value={category.id}>
                  <Accordion type="single" collapsible className="bg-white rounded-lg shadow">
                    {category.faqs.map((faq, index) => (
                      <AccordionItem key={index} value={`${category.id}-${index}`}>
                        <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-4">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </TabsContent>
              ))
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg mb-4">No results found for "{searchQuery}"</p>
                <Button onClick={() => setSearchQuery("")} variant="outline">
                  Clear Search
                </Button>
              </div>
            )}
          </Tabs>
          
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
            <p className="mb-6">Our customer support team is ready to help you with any other questions you might have.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="/customer-care">
                <Button variant="default">Chat With Us</Button>
              </a>
              <a href="/contact">
                <Button variant="outline">Contact Support</Button>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;

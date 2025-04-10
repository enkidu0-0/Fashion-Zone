
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ArrowLeftRight, Clock, Ban, HelpCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Cancellation = () => {
  const steps = [
    {
      icon: <Clock className="h-8 w-8 text-flipkart-blue mb-2" />,
      title: "Time Frame",
      description: "Orders can be cancelled within 24 hours of placement or before shipping confirmation"
    },
    {
      icon: <ArrowLeftRight className="h-8 w-8 text-flipkart-blue mb-2" />,
      title: "Refund Process",
      description: "Refunds are processed within 5-7 business days to the original payment method"
    },
    {
      icon: <Ban className="h-8 w-8 text-flipkart-blue mb-2" />,
      title: "Cancellation Restrictions",
      description: "Some personalized or sale items cannot be cancelled once processing has begun"
    },
    {
      icon: <HelpCircle className="h-8 w-8 text-flipkart-blue mb-2" />,
      title: "Support",
      description: "For assistance with cancellations, contact our customer service team"
    }
  ];

  const faqs = [
    {
      question: "How do I cancel my order?",
      answer: "To cancel your order, log into your account and go to 'My Orders'. Find the order you wish to cancel and click the 'Cancel Order' button. If the order has already been shipped, you'll need to initiate a return instead."
    },
    {
      question: "Will I be charged a cancellation fee?",
      answer: "No, Fashion Zone does not charge any cancellation fees for orders cancelled before they've been shipped. However, if the order has been shipped and you refuse delivery, return shipping costs may apply."
    },
    {
      question: "How long does it take to get my refund after cancellation?",
      answer: "After your cancellation is processed, refunds typically take 5-7 business days to appear in your account. This timing can vary depending on your payment method and financial institution."
    },
    {
      question: "Can I cancel part of my order?",
      answer: "Yes, you can cancel individual items in your order if they haven't been shipped yet. Go to 'My Orders', select the order, and choose which items you want to cancel."
    },
    {
      question: "What if my order has already been shipped?",
      answer: "If your order has already been shipped, you cannot cancel it. However, you can refuse delivery or initiate a return once you receive the package."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gray-50">
        <div className="bg-flipkart-blue text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">Cancellations & Returns</h1>
            <p className="text-xl max-w-2xl">
              Easy solutions when your order doesn't work out
            </p>
          </div>
        </div>
        
        <section className="container mx-auto py-12 px-4">
          <h2 className="text-2xl font-bold mb-8">Cancellation Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {steps.map((step, index) => (
              <Card key={index}>
                <CardHeader className="pb-2">
                  {step.icon}
                  <CardTitle>{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6">Cancellation Policy</h2>
            <div className="space-y-4">
              <p>
                At Fashion Zone, we understand that sometimes you need to cancel an order. We've made our cancellation process as simple and fair as possible.
              </p>
              <h3 className="text-xl font-semibold">Order Cancellation Time Frame</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Orders can be cancelled within 24 hours of placement.</li>
                <li>Once an order has been shipped (you'll receive a shipping confirmation email), it cannot be cancelled.</li>
                <li>For orders that cannot be cancelled, you may refuse delivery or return the item after receiving it.</li>
              </ul>
              <h3 className="text-xl font-semibold">Exclusions</h3>
              <p>The following items cannot be cancelled once processing has begun:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Personalized items</li>
                <li>Final sale or clearance items</li>
                <li>Undergarments and intimate apparel for hygiene reasons</li>
              </ul>
              <h3 className="text-xl font-semibold">Refund Information</h3>
              <p>
                When your cancellation is processed, we'll refund your payment using the same method you used for purchase. Refunds typically take 5-7 business days to process, depending on your financial institution.
              </p>
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
          
          <div className="bg-blue-50 rounded-lg p-8 mt-12">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-2/3 mb-6 md:mb-0">
                <h2 className="text-2xl font-bold mb-3">Need More Help?</h2>
                <p className="text-gray-700">
                  Our customer support team is available to assist you with any questions regarding cancellations or returns.
                </p>
              </div>
              <div className="md:w-1/3 flex justify-center md:justify-end">
                <a href="/customer-care" className="bg-flipkart-blue text-white px-6 py-3 rounded inline-block hover:bg-blue-700 transition-colors">
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

export default Cancellation;

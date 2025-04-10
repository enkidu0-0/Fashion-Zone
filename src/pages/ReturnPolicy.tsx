
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ArrowLeft, Truck, Calendar, CheckCheck, BadgeAlert } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const ReturnPolicy = () => {
  const returnSteps = [
    {
      icon: <Calendar className="h-8 w-8 text-flipkart-blue mb-2" />,
      title: "30-Day Window",
      description: "Return most items within 30 days of delivery for a full refund"
    },
    {
      icon: <CheckCheck className="h-8 w-8 text-flipkart-blue mb-2" />,
      title: "Item Condition",
      description: "Items must be unworn, unwashed, and with all original tags attached"
    },
    {
      icon: <Truck className="h-8 w-8 text-flipkart-blue mb-2" />,
      title: "Free Returns",
      description: "We provide a prepaid return shipping label for your convenience"
    },
    {
      icon: <ArrowLeft className="h-8 w-8 text-flipkart-blue mb-2" />,
      title: "Easy Process",
      description: "Initiate returns through your account and track the entire process"
    }
  ];

  const faqs = [
    {
      question: "How do I return an item?",
      answer: "To return an item, log into your account and go to 'My Orders'. Find the order containing the item(s) you wish to return and click 'Return Items'. Follow the instructions to print your return shipping label, package your item securely, and drop it off at any authorized shipping location."
    },
    {
      question: "What items cannot be returned?",
      answer: "For hygiene reasons, we cannot accept returns on underwear, swimwear, earrings, and certain beauty products if opened. Sale items marked as 'Final Sale' and personalized items are also non-returnable unless defective."
    },
    {
      question: "Can I exchange an item instead of returning it?",
      answer: "Yes, you can request an exchange for a different size or color during the return process. If the exchange item is in stock, we'll ship it to you as soon as we receive your return. If the item is out of stock, we'll issue a refund instead."
    },
    {
      question: "How long will it take to get my refund?",
      answer: "Once we receive your return, it typically takes 1-2 business days to inspect and process. After processing, refunds are issued to your original payment method and may take 5-7 business days to appear in your account, depending on your financial institution."
    },
    {
      question: "What if I received a defective item?",
      answer: "If you received a defective or damaged item, please contact our customer service team within 48 hours of delivery. We'll arrange for a return and replacement at no cost to you, or provide a full refund including any shipping charges."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gray-50">
        <div className="bg-flipkart-blue text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">Return Policy</h1>
            <p className="text-xl max-w-2xl">
              Hassle-free returns to ensure your complete satisfaction with every purchase
            </p>
          </div>
        </div>
        
        <section className="container mx-auto py-12 px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {returnSteps.map((step, index) => (
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
            <h2 className="text-2xl font-bold mb-6">Our Return Policy</h2>
            <div className="space-y-4">
              <p>
                At Fashion Zone, we want you to love everything you purchase. If you're not completely satisfied, we're here to help.
              </p>
              
              <h3 className="text-xl font-semibold">Return Eligibility</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Items must be returned within 30 days of the delivery date.</li>
                <li>Products must be in their original condition: unworn, unwashed, and with all tags attached.</li>
                <li>Original packaging should be intact when possible.</li>
                <li>A valid receipt or proof of purchase is required.</li>
              </ul>
              
              <h3 className="text-xl font-semibold">Non-Returnable Items</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Underwear, swimwear, and earrings (for hygiene reasons)</li>
                <li>Beauty products that have been opened or used</li>
                <li>Items marked as "Final Sale"</li>
                <li>Personalized or custom-made items</li>
                <li>Gift cards</li>
              </ul>
              
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
                <div className="flex">
                  <BadgeAlert className="h-6 w-6 text-yellow-700 mr-2 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-yellow-700">Special Note</p>
                    <p className="text-sm text-yellow-600">
                      Items purchased during special promotions or clearance events may have modified return policies, which will be clearly stated at the time of purchase.
                    </p>
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold">Refund Process</h3>
              <p>
                Refunds will be issued to the original payment method used for the purchase. Please allow 5-7 business days for the refund to appear in your account after we've processed your return.
              </p>
              <p>
                Shipping charges are non-refundable unless you received a defective item or we made a shipping error.
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
          
          <div className="mt-12 text-center">
            <p className="mb-4">Have more questions about our return policy?</p>
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

export default ReturnPolicy;

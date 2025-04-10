
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Lock, Shield, CreditCard, Server } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Security = () => {
  const securityFeatures = [
    {
      icon: <Lock className="h-8 w-8 text-flipkart-blue mb-2" />,
      title: "Secure Encryption",
      description: "All data transmitted to and from our platform is encrypted using industry-standard SSL/TLS protocols"
    },
    {
      icon: <CreditCard className="h-8 w-8 text-flipkart-blue mb-2" />,
      title: "PCI DSS Compliant",
      description: "We follow strict Payment Card Industry Data Security Standards to protect your payment information"
    },
    {
      icon: <Shield className="h-8 w-8 text-flipkart-blue mb-2" />,
      title: "Advanced Fraud Protection",
      description: "Our sophisticated fraud detection systems help keep your account secure from unauthorized access"
    },
    {
      icon: <Server className="h-8 w-8 text-flipkart-blue mb-2" />,
      title: "Data Protection",
      description: "Your personal data is stored securely and protected with multiple layers of security controls"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gray-50">
        <div className="bg-flipkart-blue text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">Security</h1>
            <p className="text-xl max-w-2xl">
              How we protect your information and ensure a safe shopping experience
            </p>
          </div>
        </div>
        
        <section className="container mx-auto py-12 px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {securityFeatures.map((feature, index) => (
              <Card key={index}>
                <CardHeader className="pb-2">
                  {feature.icon}
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6">Our Security Commitment</h2>
            <div className="space-y-6">
              <p className="text-lg">
                At Fashion Zone, we take security seriously. We've implemented comprehensive security measures to protect your personal information, payment details, and account data. Here's how we keep your information safe:
              </p>
              
              <h3 className="text-xl font-semibold">Secure Transactions</h3>
              <p>
                Every transaction on our platform is encrypted using industry-standard SSL/TLS protocols. This ensures that all data exchanged between your browser and our servers remains private and integral. You can verify this by looking for the padlock icon in your browser's address bar when visiting our website.
              </p>
              
              <h3 className="text-xl font-semibold">Payment Security</h3>
              <p>
                We adhere to strict Payment Card Industry Data Security Standards (PCI DSS) to handle credit card information securely. We do not store complete credit card numbers on our servers. Instead, we work with trusted payment processors who specialize in the secure handling of sensitive financial data.
              </p>
              
              <h3 className="text-xl font-semibold">Account Protection</h3>
              <p>
                We offer multiple layers of account security, including:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Strong password requirements</li>
                <li>Account activity monitoring to detect suspicious behavior</li>
                <li>Automatic account lockout after multiple failed login attempts</li>
                <li>Email notifications for important account changes</li>
              </ul>
              
              <h3 className="text-xl font-semibold">Data Privacy</h3>
              <p>
                We collect only the information necessary to provide our services and improve your shopping experience. We never sell your personal information to third parties. For details on how we handle your data, please review our <a href="/privacy" className="text-flipkart-blue hover:underline">Privacy Policy</a>.
              </p>
              
              <h3 className="text-xl font-semibold">Continuous Monitoring</h3>
              <p>
                Our security team continuously monitors our systems for potential vulnerabilities and suspicious activities. We regularly update our security protocols to address evolving threats and maintain a safe environment for all users.
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Your Role in Security</h2>
            <p className="mb-6">
              While we implement robust security measures on our end, your actions are equally important in maintaining the security of your account and personal information:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Do:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Use strong, unique passwords</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Keep your account information updated</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Log out when using shared computers</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Verify emails come from official Fashion Zone domains</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Keep your devices and browsers updated</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Don't:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-red-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                    <span>Share your password with others</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-red-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                    <span>Click on suspicious links in emails claiming to be from us</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-red-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                    <span>Use public Wi-Fi for shopping without a VPN</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-red-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                    <span>Provide your password or OTP in response to calls or emails</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-red-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                    <span>Save your payment information on public computers</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50 rounded-lg p-8 mt-12">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-2/3 mb-6 md:mb-0">
                <h2 className="text-2xl font-bold mb-3">Report Security Concerns</h2>
                <p className="text-gray-700">
                  If you notice any suspicious activity related to your account or have security concerns, please contact our security team immediately.
                </p>
              </div>
              <div className="md:w-1/3 flex justify-center md:justify-end">
                <a href="/customer-care" className="bg-flipkart-blue text-white px-6 py-3 rounded inline-block hover:bg-blue-700 transition-colors">
                  Contact Security Team
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

export default Security;

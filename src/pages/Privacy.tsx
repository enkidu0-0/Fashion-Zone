
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ShieldCheck, Eye, FileText } from "lucide-react";

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gray-50">
        <div className="bg-flipkart-blue text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-xl max-w-2xl">
              How we collect, use, and protect your personal information
            </p>
          </div>
        </div>
        
        <section className="container mx-auto py-12 px-4">
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <div className="flex items-center mb-6">
              <ShieldCheck className="h-6 w-6 text-flipkart-blue mr-2" />
              <p className="text-sm text-gray-500">Last Updated: April 10, 2024</p>
            </div>
            
            <div className="prose max-w-none">
              <p className="text-lg">At Fashion Zone, we take your privacy seriously. This Privacy Policy describes how we collect, use, and share information about you when you use our website, mobile applications, and other online products and services (collectively, the "Services").</p>
              
              <h2 className="text-2xl font-semibold mb-4 mt-8">Information We Collect</h2>
              <p>We collect information you provide directly to us when you:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Create an account or profile</li>
                <li>Make a purchase</li>
                <li>Sign up for our newsletters or promotions</li>
                <li>Participate in surveys, contests, or other promotions</li>
                <li>Contact customer service</li>
                <li>Post reviews or comments</li>
              </ul>
              
              <p className="mt-4">This information may include:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Your name, email address, postal address, phone number, and payment information</li>
                <li>Your username and password</li>
                <li>Your preferences, interests, and purchase history</li>
                <li>Any other information you choose to provide</li>
              </ul>
              
              <p className="mt-4">We also automatically collect certain information when you use our Services, including:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Log information (such as IP address, browser type, referring/exit pages, operating system)</li>
                <li>Device information (such as hardware model, operating system version, unique device identifiers)</li>
                <li>Location information (such as general location based on IP address)</li>
                <li>Usage information (such as pages viewed, search terms, time spent on our Services)</li>
              </ul>
              
              <h2 className="text-2xl font-semibold mb-4 mt-8">How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Process and fulfill your orders</li>
                <li>Manage your account and provide you with customer support</li>
                <li>Send you transaction confirmations, updates, security alerts, and support messages</li>
                <li>Communicate with you about products, services, offers, promotions, and events</li>
                <li>Personalize your online experience and provide advertisements, content, or features that match your profile and interests</li>
                <li>Monitor and analyze trends, usage, and activities in connection with our Services</li>
                <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
                <li>Improve our Services and develop new products and services</li>
                <li>Comply with legal obligations</li>
              </ul>
              
              <h2 className="text-2xl font-semibold mb-4 mt-8">Sharing Your Information</h2>
              <p>We may share your information in the following circumstances:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>With service providers:</strong> We share information with third-party vendors, consultants, and other service providers who need access to such information to carry out work on our behalf.</li>
                <li><strong>In response to legal process:</strong> We may disclose information if required to do so by law or in response to valid legal process.</li>
                <li><strong>For protection purposes:</strong> We may disclose information when we believe disclosure is necessary to protect the rights, property, or safety of Fashion Zone, our users, or others.</li>
                <li><strong>In connection with a sale or merger:</strong> If we're involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.</li>
                <li><strong>With your consent:</strong> We may share information with third parties when you direct us to do so.</li>
              </ul>
              
              <p className="mt-4">We may also share aggregated or de-identified information that cannot reasonably be used to identify you.</p>
              
              <h2 className="text-2xl font-semibold mb-4 mt-8">Your Choices</h2>
              <p>You have several choices regarding the information we collect and how it's used:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Account Information:</strong> You can update your account information by logging into your account settings. You may also contact us to request deletion of your account.</li>
                <li><strong>Marketing Communications:</strong> You can opt out of receiving promotional communications from us by following the instructions in those communications or by updating your preferences in your account settings.</li>
                <li><strong>Cookies:</strong> Most web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser to remove or reject cookies. Please note that if you choose to remove or reject cookies, this could affect the availability and functionality of our Services.</li>
                <li><strong>Mobile Push Notifications:</strong> With your permission, we may send push notifications to your mobile device. You can deactivate these notifications by changing your notification settings on your device.</li>
              </ul>
              
              <h2 className="text-2xl font-semibold mb-4 mt-8">Data Retention</h2>
              <p>We store the information we collect about you for as long as is necessary for the purpose(s) for which we originally collected it. We may retain certain information for legitimate business purposes or as required by law.</p>
              
              <h2 className="text-2xl font-semibold mb-4 mt-8">Security</h2>
              <p>We take reasonable measures to help protect information about you from loss, theft, misuse, and unauthorized access, disclosure, alteration, and destruction. However, no security system is impenetrable, and we cannot guarantee the security of our systems or your information.</p>
              
              <h2 className="text-2xl font-semibold mb-4 mt-8">Children's Privacy</h2>
              <p>Our Services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If we learn we have collected personal information from a child under 13, we will delete that information.</p>
              
              <h2 className="text-2xl font-semibold mb-4 mt-8">Changes to This Privacy Policy</h2>
              <p>We may update this Privacy Policy from time to time. If we make material changes, we will notify you by email or through our Services, or as otherwise required by applicable law. We encourage you to review the Privacy Policy whenever you access our Services to stay informed about our information practices.</p>
              
              <h2 className="text-2xl font-semibold mb-4 mt-8">Contact Us</h2>
              <p>If you have any questions about this Privacy Policy or our information practices, please contact us at <a href="mailto:privacy@fashionzone.com" className="text-flipkart-blue hover:underline">privacy@fashionzone.com</a> or write to us at:</p>
              <p className="mt-2">
                Fashion Zone<br />
                Attn: Privacy Officer<br />
                123 Fashion Avenue<br />
                New York, NY 10001<br />
                USA
              </p>
            </div>
          </div>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="md:w-1/4 flex justify-center">
                <Eye className="h-24 w-24 text-flipkart-blue" />
              </div>
              <div className="md:w-3/4">
                <h2 className="text-2xl font-bold mb-4">Your Privacy Rights</h2>
                <p className="mb-4">
                  Depending on where you live, you may have specific rights regarding your personal information. These may include:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Right to Access</h3>
                    <p className="text-sm text-gray-600">You can request a copy of the personal information we hold about you.</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Right to Rectification</h3>
                    <p className="text-sm text-gray-600">You can ask us to correct any inaccurate information we have about you.</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Right to Deletion</h3>
                    <p className="text-sm text-gray-600">You can ask us to delete your personal information in certain circumstances.</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Right to Object</h3>
                    <p className="text-sm text-gray-600">You can object to our processing of your information in certain situations.</p>
                  </div>
                </div>
                <div className="mt-4">
                  <a href="/contact" className="text-flipkart-blue font-medium hover:underline flex items-center">
                    <FileText className="h-4 w-4 mr-1" />
                    <span>Submit a data request</span>
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

export default Privacy;


import Header from "../components/Header";
import Footer from "../components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gray-50">
        <div className="bg-flipkart-blue text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">Terms of Use</h1>
            <p className="text-xl max-w-2xl">
              Please read these terms carefully before using our platform
            </p>
          </div>
        </div>
        
        <section className="container mx-auto py-12 px-4">
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <div className="prose max-w-none">
              <p className="text-sm text-gray-500 mb-6">Last Updated: April 10, 2024</p>
              
              <h2 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
              <p>By accessing or using Fashion Zone's website, mobile applications, or any other services offered by Fashion Zone (collectively, the "Services"), you agree to be bound by these Terms of Use ("Terms"). If you do not agree to these Terms, please do not use our Services.</p>
              
              <h2 className="text-2xl font-semibold mb-4 mt-8">2. Changes to Terms</h2>
              <p>Fashion Zone reserves the right to modify these Terms at any time. We will provide notice of any material changes by updating the "Last Updated" date at the top of these Terms. Your continued use of our Services following the posting of any changes constitutes your acceptance of such changes.</p>
              
              <h2 className="text-2xl font-semibold mb-4 mt-8">3. Account Registration</h2>
              <p>To access certain features of our Services, you may be required to create an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete. You are responsible for safeguarding your password and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.</p>
              
              <h2 className="text-2xl font-semibold mb-4 mt-8">4. Privacy Policy</h2>
              <p>Your privacy is important to us. Our <a href="/privacy" className="text-flipkart-blue hover:underline">Privacy Policy</a> describes how we collect, use, and share information about you when you use our Services. By using our Services, you consent to the collection, use, and sharing of your information as described in our Privacy Policy.</p>
              
              <h2 className="text-2xl font-semibold mb-4 mt-8">5. User Content</h2>
              <p>Our Services may allow you to post, link, store, share, and otherwise make available certain content, including but not limited to text, images, videos, and audio (collectively, "User Content"). You are solely responsible for your User Content and the consequences of posting or publishing it.</p>
              <p>By posting User Content on or through our Services, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, adapt, publish, translate, distribute, and display such User Content in connection with the operation and promotion of our Services.</p>
              <p>You represent and warrant that: (i) you own or have the necessary rights to use and authorize us to use your User Content as described in these Terms; (ii) your User Content does not violate the rights of any third party; and (iii) your User Content complies with all applicable laws and regulations.</p>
              
              <h2 className="text-2xl font-semibold mb-4 mt-8">6. Prohibited Activities</h2>
              <p>You agree not to engage in any of the following prohibited activities:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Using our Services for any illegal purpose or in violation of any local, state, national, or international law;</li>
                <li>Harassing, threatening, intimidating, or impersonating others;</li>
                <li>Posting or transmitting any content that is abusive, harassing, threatening, obscene, defamatory, libelous, or otherwise objectionable;</li>
                <li>Attempting to interfere with, compromise the system integrity or security, or decipher any transmissions to or from the servers running our Services;</li>
                <li>Taking any action that imposes an unreasonable or disproportionately large load on our infrastructure;</li>
                <li>Uploading or transmitting viruses, malware, or other types of malicious software;</li>
                <li>Using automated means, including spiders, robots, crawlers, data mining tools, or similar methods to collect data from our Services;</li>
                <li>Impersonating another person or otherwise misrepresenting your affiliation with a person or entity;</li>
                <li>Using our Services to send unsolicited communications, promotions, or advertisements, or to spam;</li>
                <li>Attempting to decipher, decompile, disassemble, or reverse engineer any of the software comprising or making up our Services.</li>
              </ul>
              
              <h2 className="text-2xl font-semibold mb-4 mt-8">7. Purchases and Payment</h2>
              <p>If you wish to purchase products available through our Services ("Products"), you may be asked to supply certain information relevant to your purchase, including your credit card number, the expiration date of your credit card, your billing address, and your shipping information.</p>
              <p>You represent and warrant that: (i) you have the legal right to use any credit card(s) or other payment method(s) in connection with any purchase; and (ii) the information you supply to us is true, correct, and complete.</p>
              <p>Fashion Zone reserves the right to refuse or cancel your order at any time for reasons including, but not limited to, product availability, errors in the description or price of the product, error in your order, or for any other reason.</p>
              
              <h2 className="text-2xl font-semibold mb-4 mt-8">8. Intellectual Property</h2>
              <p>Our Services and their original content (excluding User Content), features, and functionality are and will remain the exclusive property of Fashion Zone and its licensors. Our Services are protected by copyright, trademark, and other laws of both the United States and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Fashion Zone.</p>
              
              <h2 className="text-2xl font-semibold mb-4 mt-8">9. Termination</h2>
              <p>We may terminate or suspend your account and bar access to our Services immediately, without prior notice or liability, for any reason whatsoever, including, without limitation, if you breach these Terms.</p>
              <p>All provisions of these Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.</p>
              
              <h2 className="text-2xl font-semibold mb-4 mt-8">10. Disclaimer</h2>
              <p>Our Services are provided on an "AS IS" and "AS AVAILABLE" basis. Fashion Zone expressly disclaims all warranties of any kind, whether express or implied, including, but not limited to, the implied warranties of merchantability, fitness for a particular purpose, and non-infringement.</p>
              <p>Fashion Zone makes no warranty that: (i) our Services will meet your requirements; (ii) our Services will be uninterrupted, timely, secure, or error-free; (iii) the results that may be obtained from the use of our Services will be accurate or reliable; or (iv) the quality of any products, services, information, or other material purchased or obtained by you through our Services will meet your expectations.</p>
              
              <h2 className="text-2xl font-semibold mb-4 mt-8">11. Contact Us</h2>
              <p>If you have any questions about these Terms, please contact us at <a href="mailto:legal@fashionzone.com" className="text-flipkart-blue hover:underline">legal@fashionzone.com</a> or through our <a href="/contact" className="text-flipkart-blue hover:underline">Contact Page</a>.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;

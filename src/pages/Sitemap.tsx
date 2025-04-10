
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { LayoutGrid, Tag, ShoppingBag, User, Info, HelpCircle } from "lucide-react";

const Sitemap = () => {
  const sitemapSections = [
    {
      title: "Main Pages",
      icon: <LayoutGrid className="h-6 w-6 text-flipkart-blue" />,
      links: [
        { name: "Home", url: "/" },
        { name: "About Us", url: "/about" },
        { name: "Contact", url: "/contact" },
        { name: "Customer Care", url: "/customer-care" },
        { name: "Careers", url: "/careers" },
        { name: "Fashion Zone Stories", url: "/stories" },
      ]
    },
    {
      title: "Shop",
      icon: <Tag className="h-6 w-6 text-flipkart-blue" />,
      links: [
        { name: "Men", url: "/categories/men" },
        { name: "Women", url: "/categories/women" },
        { name: "Kids", url: "/categories/kids" },
        { name: "T-shirts", url: "/categories/t-shirts" },
        { name: "Hoodies", url: "/categories/hoodies" },
        { name: "Shirts", url: "/categories/shirts" },
        { name: "Jeans", url: "/categories/jeans" },
        { name: "Dresses", url: "/categories/dresses" },
        { name: "Accessories", url: "/categories/accessories" },
        { name: "Outerwear", url: "/categories/outerwear" },
        { name: "Activewear", url: "/categories/activewear" },
      ]
    },
    {
      title: "Orders & Returns",
      icon: <ShoppingBag className="h-6 w-6 text-flipkart-blue" />,
      links: [
        { name: "Track Order", url: "/orders" },
        { name: "Returns & Exchanges", url: "/returns" },
        { name: "Shipping Information", url: "/shipping" },
        { name: "Return Policy", url: "/return-policy" },
        { name: "Cancellation", url: "/cancellation" },
        { name: "Payment Options", url: "/payments" },
        { name: "Wholesale", url: "/wholesale" },
      ]
    },
    {
      title: "Account",
      icon: <User className="h-6 w-6 text-flipkart-blue" />,
      links: [
        { name: "Login / Sign Up", url: "/login" },
        { name: "My Orders", url: "/orders" },
        { name: "Wishlist", url: "/wishlist" },
        { name: "Notification Preferences", url: "/notification-preferences" },
      ]
    },
    {
      title: "Help & Information",
      icon: <HelpCircle className="h-6 w-6 text-flipkart-blue" />,
      links: [
        { name: "FAQ", url: "/faq" },
        { name: "Report Infringement", url: "/report" },
        { name: "Terms of Use", url: "/terms" },
        { name: "Security", url: "/security" },
        { name: "Privacy Policy", url: "/privacy" },
      ]
    },
    {
      title: "Social",
      icon: <Info className="h-6 w-6 text-flipkart-blue" />,
      links: [
        { name: "Facebook", url: "/facebook" },
        { name: "Twitter", url: "/twitter" },
        { name: "YouTube", url: "/youtube" },
        { name: "Instagram", url: "/instagram" },
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gray-50">
        <div className="bg-flipkart-blue text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">Sitemap</h1>
            <p className="text-xl max-w-2xl">
              Find everything on our site in one place
            </p>
          </div>
        </div>
        
        <section className="container mx-auto py-12 px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sitemapSections.map((section, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                  {section.icon}
                  <h2 className="text-xl font-bold ml-2">{section.title}</h2>
                </div>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex} className="hover:bg-gray-50 rounded">
                      <Link
                        to={link.url}
                        className="block py-2 px-3 text-gray-700 hover:text-flipkart-blue transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="mt-12 bg-white rounded-lg shadow-md p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Didn't Find What You're Looking For?</h2>
            <p className="mb-6">Our customer support team is always ready to help you navigate our website.</p>
            <div className="flex justify-center gap-4">
              <a href="/customer-care">
                <button className="bg-flipkart-blue text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors">
                  Contact Support
                </button>
              </a>
              <a href="/">
                <button className="border border-flipkart-blue text-flipkart-blue px-6 py-2 rounded hover:bg-blue-50 transition-colors">
                  Back to Home
                </button>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Sitemap;


import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-flipkart-text-primary text-white pt-10 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-gray-400 font-medium mb-4 uppercase text-xs">ABOUT</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/careers">Careers</Link></li>
              <li><Link to="/stories">Fashion Zone Stories</Link></li>
              <li><Link to="/wholesale">Press</Link></li>
              <li><Link to="/wholesale">Fashion Zone Wholesale</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-gray-400 font-medium mb-4 uppercase text-xs">HELP</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/payments">Payments</Link></li>
              <li><Link to="/shipping">Shipping</Link></li>
              <li><Link to="/cancellation">Cancellation & Returns</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/report">Report Infringement</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-gray-400 font-medium mb-4 uppercase text-xs">POLICY</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/return-policy">Return Policy</Link></li>
              <li><Link to="/terms">Terms Of Use</Link></li>
              <li><Link to="/security">Security</Link></li>
              <li><Link to="/privacy">Privacy</Link></li>
              <li><Link to="/sitemap">Sitemap</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-gray-400 font-medium mb-4 uppercase text-xs">SOCIAL</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/facebook">Facebook</Link></li>
              <li><Link to="/twitter">Twitter</Link></li>
              <li><Link to="/youtube">YouTube</Link></li>
              <li><Link to="/instagram">Instagram</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between">
          <div className="flex flex-col md:flex-row gap-4 mb-4 md:mb-0">
            <div className="flex items-center gap-2">
              <span className="text-yellow-400">Advertise</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-yellow-400">Gift Cards</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-yellow-400">Help Center</span>
            </div>
          </div>
          <div className="text-gray-400 text-sm">
            © 2023 Fashion Zone
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

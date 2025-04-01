
import { useState } from "react";
import { Search, ShoppingCart, ChevronDown, User, Heart, Bell } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const cartCount = 0;

  return (
    <header className="w-full bg-flipkart-blue text-white">
      <div className="container mx-auto px-4 py-2.5 flex items-center">
        {/* Logo */}
        <Link to="/" className="mr-4 flex flex-col">
          <span className="text-xl font-bold">Fashion Grown</span>
          <span className="text-xs text-flipkart-yellow flex items-center">
            Explorer Plus <ChevronDown className="w-3 h-3 ml-1" />
          </span>
        </Link>

        {/* Search Bar */}
        <div className="flex-1 max-w-2xl">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for products, brands and more"
              className="w-full py-2 px-4 rounded text-flipkart-text-primary focus:outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="absolute right-0 top-0 bottom-0 bg-white px-3 rounded-r">
              <Search className="w-5 h-5 text-flipkart-blue" />
            </button>
          </div>
        </div>

        {/* Navigation Items */}
        <nav className="ml-auto flex items-center gap-5">
          <div className="relative group cursor-pointer">
            <div className="flex items-center gap-1">
              <User className="w-5 h-5" />
              <span className="hidden md:inline">Login</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            <div className="hidden group-hover:block absolute right-0 mt-2 w-48 bg-white text-flipkart-text-primary rounded shadow-md z-50">
              <div className="p-3 border-b">
                <div className="flex justify-between">
                  <span>New Customer?</span>
                  <Link to="/signup" className="text-flipkart-blue">Sign Up</Link>
                </div>
              </div>
              <ul className="py-2">
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link to="/profile" className="flex items-center gap-2">
                    <User className="w-4 h-4" /> My Profile
                  </Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link to="/orders" className="flex items-center gap-2">
                    <ShoppingCart className="w-4 h-4" /> Orders
                  </Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link to="/wishlist" className="flex items-center gap-2">
                    <Heart className="w-4 h-4" /> Wishlist
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <Link to="/become-seller" className="hidden md:block">Become a Seller</Link>
          <div className="relative group cursor-pointer">
            <div className="flex items-center gap-1">
              <span className="hidden md:inline">More</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            <div className="hidden group-hover:block absolute right-0 mt-2 w-48 bg-white text-flipkart-text-primary rounded shadow-md z-50">
              <ul className="py-2">
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link to="/notification-preferences" className="flex items-center gap-2">
                    <Bell className="w-4 h-4" /> Notification Preferences
                  </Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link to="/customer-care" className="flex items-center gap-2">
                    24x7 Customer Care
                  </Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link to="/advertise" className="flex items-center gap-2">
                    Advertise
                  </Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link to="/download-app" className="flex items-center gap-2">
                    Download App
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <Link to="/cart" className="flex items-center gap-1">
            <div className="relative">
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-flipkart-yellow text-flipkart-blue text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </div>
            <span className="hidden md:inline">Cart</span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;


import React, { useState, useRef, useEffect } from "react";
import { Search, ShoppingCart, ChevronDown, User, Heart, Bell, Shield } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeDropdown, setActiveDropdown] = useState<'user' | 'more' | null>(null);
  const cartCount = 0;
  const navigate = useNavigate();
  const dropdownTimerRef = useRef<NodeJS.Timeout | null>(null);

  const handleDropdownEnter = (dropdown: 'user' | 'more') => {
    if (dropdownTimerRef.current) {
      clearTimeout(dropdownTimerRef.current);
    }
    
    dropdownTimerRef.current = setTimeout(() => {
      setActiveDropdown(dropdown);
    }, 200);
  };

  const handleDropdownLeave = () => {
    if (dropdownTimerRef.current) {
      clearTimeout(dropdownTimerRef.current);
    }
    
    dropdownTimerRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 500);
  };

  const handleCartClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    if (!isLoggedIn) {
      navigate('/login');
      return;
    }
    navigate('/cart');
  };

  return (
    <header className="w-full bg-flipkart-blue text-white">
      <div className="container mx-auto px-4 py-2.5 flex items-center">
        <Link to="/" className="mr-4 flex flex-col">
          <span className="text-xl font-bold">Fashion Zone</span>
          <span className="text-xs text-flipkart-yellow flex items-center">
            Explorer Plus <ChevronDown className="w-3 h-3 ml-1" />
          </span>
        </Link>

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

        <nav className="ml-auto flex items-center gap-5">
          <div 
            className="relative group cursor-pointer"
            onMouseEnter={() => handleDropdownEnter('user')}
            onMouseLeave={handleDropdownLeave}
          >
            <div className="flex items-center gap-1">
              <User className="w-5 h-5" />
              <span className="hidden md:inline">Login</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            {activeDropdown === 'user' && (
              <div 
                className="absolute right-0 mt-2 w-48 bg-white text-flipkart-text-primary rounded-md shadow-lg z-50 overflow-hidden"
                onMouseEnter={() => {
                  if (dropdownTimerRef.current) clearTimeout(dropdownTimerRef.current);
                }}
                onMouseLeave={handleDropdownLeave}
              >
                <div className="p-3 border-b border-gray-100">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">New Customer?</span>
                    <Link to="/signup" className="text-flipkart-blue text-sm font-medium">Sign Up</Link>
                  </div>
                </div>
                <ul className="py-1">
                  <li>
                    <Link to="/login" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-50 transition-colors duration-150">
                      <User className="w-4 h-4" /> 
                      <span className="text-sm">My Profile</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/orders" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-50 transition-colors duration-150">
                      <ShoppingCart className="w-4 h-4" /> 
                      <span className="text-sm">Orders</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/wishlist" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-50 transition-colors duration-150">
                      <Heart className="w-4 h-4" /> 
                      <span className="text-sm">Wishlist</span>
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>

          <div 
            className="relative group cursor-pointer"
            onMouseEnter={() => handleDropdownEnter('more')}
            onMouseLeave={handleDropdownLeave}
          >
            <div className="flex items-center gap-1">
              <span className="hidden md:inline">More</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            {activeDropdown === 'more' && (
              <div 
                className="absolute right-0 mt-2 w-48 bg-white text-flipkart-text-primary rounded-md shadow-lg z-50 overflow-hidden"
                onMouseEnter={() => {
                  if (dropdownTimerRef.current) clearTimeout(dropdownTimerRef.current);
                }}
                onMouseLeave={handleDropdownLeave}
              >
                <ul className="py-1">
                  <li>
                    <Link to="/notification-preferences" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-50 transition-colors duration-150">
                      <Bell className="w-4 h-4 text-flipkart-blue" /> 
                      <span className="text-sm">Notification Preferences</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/customer-care" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-50 transition-colors duration-150">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-flipkart-blue">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                      <span className="text-sm">24x7 Customer Care</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/admin" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-50 transition-colors duration-150">
                      <Shield className="w-4 h-4 text-flipkart-blue" /> 
                      <span className="text-sm">Admin Panel</span>
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>

          <Link to="#" onClick={handleCartClick} className="flex items-center gap-1">
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

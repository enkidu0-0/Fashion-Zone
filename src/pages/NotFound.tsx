
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 flex items-center justify-center bg-flipkart-bg-light">
        <div className="text-center p-8 bg-white rounded shadow-sm max-w-md">
          <h1 className="text-6xl font-bold text-flipkart-blue mb-4">404</h1>
          <p className="text-xl text-flipkart-text-primary mb-6">Oops! Page not found</p>
          <p className="text-flipkart-text-secondary mb-8">
            The page you are looking for might have been removed, had its name changed,
            or is temporarily unavailable.
          </p>
          <Link
            to="/"
            className="btn-primary inline-block px-8 py-3"
          >
            Return to Home
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;

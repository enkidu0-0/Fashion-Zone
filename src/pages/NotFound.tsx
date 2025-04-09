
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { HomeIcon, SearchIcon, ArrowLeftIcon, Frown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

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
      <div className="flex-1 flex items-center justify-center bg-gray-50 px-4 py-12">
        <Card className="max-w-lg w-full shadow-lg border-0 overflow-hidden animate-fade-in">
          <div className="h-2 bg-gradient-to-r from-flipkart-blue via-blue-400 to-flipkart-blue"></div>
          
          <div className="flex justify-center mt-8 mb-2">
            <div className="p-4 bg-gray-100 rounded-full">
              <Frown className="h-16 w-16 text-flipkart-blue" />
            </div>
          </div>
          
          <CardContent className="text-center pt-4 pb-6">
            <h1 className="text-6xl font-bold text-flipkart-blue mb-4">404</h1>
            <h2 className="text-2xl font-semibold text-flipkart-text-primary mb-4">Page Not Found</h2>
            <p className="text-flipkart-text-secondary mb-6 max-w-md mx-auto">
              We couldn't find the page you were looking for. The page might have been removed, 
              renamed, or is temporarily unavailable.
            </p>
            
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 mb-6">
              <p className="text-sm font-medium text-gray-600">
                You tried to access: <span className="font-semibold text-flipkart-blue">{location.pathname}</span>
              </p>
            </div>
          </CardContent>
          
          <CardFooter className="flex flex-col sm:flex-row gap-3 justify-center pb-8">
            <Button variant="default" className="w-full sm:w-auto" asChild>
              <Link to="/">
                <HomeIcon className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
            <Button variant="outline" className="w-full sm:w-auto" asChild>
              <Link to="/">
                <SearchIcon className="mr-2 h-4 w-4" />
                Browse Products
              </Link>
            </Button>
            <Button variant="ghost" className="w-full sm:w-auto" onClick={() => window.history.back()}>
              <ArrowLeftIcon className="mr-2 h-4 w-4" />
              Go Back
            </Button>
          </CardFooter>
        </Card>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;

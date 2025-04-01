
import { useEffect, useState } from "react";
import { Product } from "../types";
import ProductCard from "./ProductCard";
import { Clock, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

interface DealsSectionProps {
  products: Product[];
}

const DealsSection = ({ products }: DealsSectionProps) => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 10,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        const totalSeconds =
          prev.hours * 3600 + prev.minutes * 60 + prev.seconds - 1;
        
        if (totalSeconds <= 0) {
          clearInterval(timer);
          return { hours: 0, minutes: 0, seconds: 0 };
        }

        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;

        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white p-4 rounded shadow-sm mb-6">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <h2 className="text-xl font-medium mr-4">Deals of the Day</h2>
          <div className="flex items-center text-flipkart-text-secondary">
            <Clock className="w-4 h-4 mr-1" />
            <span className="font-medium">
              {String(timeLeft.hours).padStart(2, "0")}:
              {String(timeLeft.minutes).padStart(2, "0")}:
              {String(timeLeft.seconds).padStart(2, "0")}
            </span>
          </div>
        </div>
        <Link
          to="/deals"
          className="flex items-center text-flipkart-blue font-medium"
        >
          VIEW ALL <ChevronRight className="w-4 h-4" />
        </Link>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {products.slice(0, 5).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default DealsSection;

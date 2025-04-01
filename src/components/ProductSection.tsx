
import { Product } from "../types";
import ProductCard from "./ProductCard";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ProductSectionProps {
  title: string;
  products: Product[];
  viewAllLink: string;
}

const ProductSection = ({ title, products, viewAllLink }: ProductSectionProps) => {
  return (
    <div className="bg-white p-4 rounded shadow-sm mb-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-medium">{title}</h2>
        <Link
          to={viewAllLink}
          className="flex items-center text-flipkart-blue font-medium"
        >
          VIEW ALL <ChevronRight className="w-4 h-4" />
        </Link>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductSection;

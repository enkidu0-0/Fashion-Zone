
import { useState, useEffect } from "react";
import { products, productsByCategory } from "../data/products";
import Header from "../components/Header";
import CategoryNav from "../components/CategoryNav";
import BannerCarousel from "../components/BannerCarousel";
import DealsSection from "../components/DealsSection";
import ProductSection from "../components/ProductSection";
import Footer from "../components/Footer";

const Index = () => {
  // Initialize categories with products
  const [tshirts, setTshirts] = useState<typeof products>([]);
  const [hoodies, setHoodies] = useState<typeof products>([]);
  const [jeans, setJeans] = useState<typeof products>([]);
  const [dresses, setDresses] = useState<typeof products>([]);

  useEffect(() => {
    // Populate products by categories
    setTshirts(productsByCategory("tshirts"));
    setHoodies(productsByCategory("hoodies"));
    setJeans(productsByCategory("jeans"));
    setDresses(productsByCategory("dresses"));
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <CategoryNav />
      <main className="flex-1 container mx-auto px-4 py-4">
        <BannerCarousel />
        <div className="my-6">
          <DealsSection products={products} />
          
          {tshirts.length > 0 && (
            <ProductSection 
              title="T-shirts" 
              products={tshirts} 
              viewAllLink="/categories/tshirts" 
            />
          )}
          
          {hoodies.length > 0 && (
            <ProductSection 
              title="Hoodies" 
              products={hoodies} 
              viewAllLink="/categories/hoodies" 
            />
          )}
          
          {jeans.length > 0 && (
            <ProductSection 
              title="Jeans" 
              products={jeans} 
              viewAllLink="/categories/jeans" 
            />
          )}
          
          {dresses.length > 0 && (
            <ProductSection 
              title="Dresses" 
              products={dresses} 
              viewAllLink="/categories/dresses" 
            />
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;

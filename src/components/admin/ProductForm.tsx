
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useProductStore } from "@/store/ProductStore";
import { Product } from "@/types";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";

const CATEGORIES = ["tshirts", "hoodies", "jeans", "dresses", "shirts", "kids"];

const ProductForm = ({ 
  product, 
  onSubmit 
}: { 
  product?: Product,
  onSubmit?: () => void
}) => {
  const { addProduct, updateProduct } = useProductStore();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState<Partial<Product>>(
    product || {
      title: "",
      price: 0,
      originalPrice: 0,
      discountPercentage: 0,
      image: "",
      rating: 0,
      ratingCount: 0,
      category: "tshirts"
    }
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    let parsedValue: string | number = value;
    
    // Parse numeric values
    if (["price", "originalPrice", "discountPercentage", "rating", "ratingCount"].includes(name)) {
      parsedValue = parseFloat(value);
    }
    
    setFormData({
      ...formData,
      [name]: parsedValue
    });
  };

  const handleCategoryChange = (value: string) => {
    setFormData({
      ...formData,
      category: value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Calculate discount percentage if not provided
    if (!formData.discountPercentage && formData.originalPrice && formData.price) {
      const discount = ((formData.originalPrice - formData.price) / formData.originalPrice) * 100;
      formData.discountPercentage = Math.round(discount);
    }
    
    // Ensure all required fields are present
    if (!formData.title || !formData.price || !formData.image || !formData.category) {
      toast({
        title: "Error",
        description: "Please fill all required fields",
        variant: "destructive"
      });
      return;
    }
    
    if (product) {
      // Update existing product
      updateProduct(formData as Product);
      toast({
        title: "Success",
        description: "Product updated successfully"
      });
    } else {
      // Add new product
      addProduct(formData as Product);
      toast({
        title: "Success",
        description: "Product added successfully"
      });
      
      // Clear form
      setFormData({
        title: "",
        price: 0,
        originalPrice: 0,
        discountPercentage: 0,
        image: "",
        rating: 0,
        ratingCount: 0,
        category: "tshirts"
      });
    }
    
    if (onSubmit) {
      onSubmit();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">
          Product Title*
        </label>
        <Input
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Product title"
          required
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="price" className="block text-sm font-medium text-gray-700">
            Sale Price*
          </label>
          <Input
            id="price"
            name="price"
            type="number"
            value={formData.price}
            onChange={handleChange}
            placeholder="Sale price"
            required
          />
        </div>
        
        <div>
          <label htmlFor="originalPrice" className="block text-sm font-medium text-gray-700">
            Original Price*
          </label>
          <Input
            id="originalPrice"
            name="originalPrice"
            type="number"
            value={formData.originalPrice}
            onChange={handleChange}
            placeholder="Original price"
            required
          />
        </div>
      </div>
      
      <div>
        <label htmlFor="image" className="block text-sm font-medium text-gray-700">
          Image URL*
        </label>
        <Input
          id="image"
          name="image"
          value={formData.image}
          onChange={handleChange}
          placeholder="Image URL"
          required
        />
        {formData.image && (
          <div className="mt-2">
            <img 
              src={formData.image} 
              alt="Product preview" 
              className="h-32 object-cover rounded-md"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "https://placehold.co/400x300?text=Invalid+Image+URL";
              }}
            />
          </div>
        )}
      </div>
      
      <div>
        <label htmlFor="category" className="block text-sm font-medium text-gray-700">
          Category*
        </label>
        <Select 
          value={formData.category} 
          onValueChange={handleCategoryChange}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select a category" />
          </SelectTrigger>
          <SelectContent>
            {CATEGORIES.map((category) => (
              <SelectItem key={category} value={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="rating" className="block text-sm font-medium text-gray-700">
            Rating (0-5)
          </label>
          <Input
            id="rating"
            name="rating"
            type="number"
            min="0"
            max="5"
            step="0.1"
            value={formData.rating}
            onChange={handleChange}
            placeholder="Rating"
          />
        </div>
        
        <div>
          <label htmlFor="ratingCount" className="block text-sm font-medium text-gray-700">
            Rating Count
          </label>
          <Input
            id="ratingCount"
            name="ratingCount"
            type="number"
            value={formData.ratingCount}
            onChange={handleChange}
            placeholder="Rating count"
          />
        </div>
      </div>
      
      <Button type="submit" className="bg-flipkart-blue w-full">
        {product ? "Update Product" : "Add Product"}
      </Button>
    </form>
  );
};

export default ProductForm;

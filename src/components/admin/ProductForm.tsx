
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
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
import { Label } from "@/components/ui/label";

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
      rating: 4.0,
      ratingCount: 0,
      category: "tshirts",
      description: "",
      stock: 10
    }
  );

  // Calculate discount percentage when original price or price changes
  useEffect(() => {
    if (formData.originalPrice && formData.price) {
      const discountPercentage = ((formData.originalPrice - formData.price) / formData.originalPrice) * 100;
      setFormData(prev => ({
        ...prev,
        discountPercentage: Math.round(discountPercentage)
      }));
    }
  }, [formData.originalPrice, formData.price]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    let parsedValue: string | number = value;
    
    // Parse numeric values
    if (["price", "originalPrice", "discountPercentage", "rating", "ratingCount", "stock"].includes(name)) {
      parsedValue = value === "" ? 0 : parseFloat(value);
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

  const generateSKU = () => {
    const category = formData.category?.substring(0, 3).toUpperCase() || 'PRD';
    const timestamp = new Date().getTime().toString().substr(-6);
    return `${category}-${timestamp}`;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Ensure all required fields are present
    if (!formData.title || !formData.price || !formData.originalPrice || !formData.image || !formData.category) {
      toast({
        title: "Error",
        description: "Please fill all required fields",
        variant: "destructive"
      });
      return;
    }
    
    // If discount percentage is not provided or calculated
    if (!formData.discountPercentage && formData.originalPrice && formData.price) {
      const discount = ((formData.originalPrice - formData.price) / formData.originalPrice) * 100;
      formData.discountPercentage = Math.round(discount);
    }
    
    // Generate SKU for new products if not already set
    if (!product && !formData.sku) {
      formData.sku = generateSKU();
    }
    
    // Set default stock if not provided
    if (formData.stock === undefined) {
      formData.stock = 10;
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
        rating: 4.0,
        ratingCount: 0,
        category: "tshirts",
        description: "",
        stock: 10
      });
    }
    
    if (onSubmit) {
      onSubmit();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="title" className="block text-sm font-medium text-gray-700">
          Product Title*
        </Label>
        <Input
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Product title"
          required
        />
      </div>
      
      <div>
        <Label htmlFor="description" className="block text-sm font-medium text-gray-700">
          Product Description
        </Label>
        <Textarea
          id="description"
          name="description"
          value={formData.description || ""}
          onChange={handleChange}
          placeholder="Product description"
          rows={3}
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <Label htmlFor="originalPrice" className="block text-sm font-medium text-gray-700">
            Original Price*
          </Label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">₹</span>
            <Input
              id="originalPrice"
              name="originalPrice"
              type="number"
              value={formData.originalPrice}
              onChange={handleChange}
              placeholder="Original price"
              className="pl-7"
              required
            />
          </div>
        </div>
        
        <div>
          <Label htmlFor="price" className="block text-sm font-medium text-gray-700">
            Sale Price*
          </Label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">₹</span>
            <Input
              id="price"
              name="price"
              type="number"
              value={formData.price}
              onChange={handleChange}
              placeholder="Sale price"
              className="pl-7"
              required
            />
          </div>
        </div>
        
        <div>
          <Label htmlFor="discountPercentage" className="block text-sm font-medium text-gray-700">
            Discount %
          </Label>
          <Input
            id="discountPercentage"
            name="discountPercentage"
            type="number"
            value={formData.discountPercentage}
            onChange={handleChange}
            placeholder="Discount percentage"
            readOnly
          />
          <p className="text-xs text-gray-500 mt-1">Auto-calculated from prices</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="category" className="block text-sm font-medium text-gray-700">
            Category*
          </Label>
          <Select 
            value={formData.category} 
            onValueChange={handleCategoryChange}
          >
            <SelectTrigger className="w-full">
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
        
        <div>
          <Label htmlFor="stock" className="block text-sm font-medium text-gray-700">
            Stock Available*
          </Label>
          <Input
            id="stock"
            name="stock"
            type="number"
            value={formData.stock}
            onChange={handleChange}
            placeholder="Available stock"
            required
          />
        </div>
      </div>
      
      <div>
        <Label htmlFor="image" className="block text-sm font-medium text-gray-700">
          Image URL*
        </Label>
        <Input
          id="image"
          name="image"
          value={formData.image}
          onChange={handleChange}
          placeholder="Image URL"
          required
        />
        <p className="text-xs text-gray-500 mt-1">
          Provide a URL to an image (recommended size: 500x500px)
        </p>
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
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="rating" className="block text-sm font-medium text-gray-700">
            Rating (0-5)
          </Label>
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
          <Label htmlFor="ratingCount" className="block text-sm font-medium text-gray-700">
            Rating Count
          </Label>
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
      
      {formData.sku && (
        <div>
          <Label htmlFor="sku" className="block text-sm font-medium text-gray-700">
            SKU
          </Label>
          <Input
            id="sku"
            name="sku"
            value={formData.sku}
            readOnly
            className="bg-gray-50"
          />
        </div>
      )}
      
      <Button type="submit" className="bg-flipkart-blue w-full">
        {product ? "Update Product" : "Add Product"}
      </Button>
    </form>
  );
};

export default ProductForm;

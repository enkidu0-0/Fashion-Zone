
import { Link } from "react-router-dom";

// Define reliable category images
const categories = [
  { id: 1, name: "Men", image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=200&q=80" },
  { id: 2, name: "Women", image: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&w=200&q=80" },
  { id: 3, name: "Kids", image: "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?auto=format&fit=crop&w=200&q=80" },
  { id: 4, name: "T-shirts", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=200&q=80" },
  { id: 5, name: "Hoodies", image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=200&q=80" },
  { id: 6, name: "Shirts", image: "https://images.unsplash.com/photo-1598032895397-b9472444bf93?auto=format&fit=crop&w=200&q=80" },
  { id: 7, name: "Jeans", image: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=200&q=80" },
  { id: 8, name: "Dresses", image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=200&q=80" },
  { id: 9, name: "Accessories", image: "https://images.unsplash.com/photo-1635767798638-3665968aef03?auto=format&fit=crop&w=200&q=80" },
  { id: 10, name: "Outerwear", image: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?auto=format&fit=crop&w=200&q=80" },
  { id: 11, name: "Activewear", image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=200&q=80" },
];

const CategoryNav = () => {
  return (
    <div className="bg-white shadow-sm sticky top-0 z-40">
      <div className="container mx-auto">
        <div className="flex justify-between overflow-x-auto py-4 px-4 gap-2">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/categories/${category.name.toLowerCase()}`}
              className="flex flex-col items-center min-w-[85px] text-center px-2 transition-transform duration-200 hover:scale-105"
            >
              <div className="w-16 h-16 rounded-full bg-gray-100 p-1 mb-2 flex items-center justify-center overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <span className="text-sm font-medium whitespace-nowrap">{category.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryNav;

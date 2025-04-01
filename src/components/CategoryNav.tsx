
import { categories } from "../data/products";
import { Link } from "react-router-dom";

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

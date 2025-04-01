
import { categories } from "../data/products";
import { Link } from "react-router-dom";

const CategoryNav = () => {
  return (
    <div className="bg-white shadow-sm">
      <div className="container mx-auto">
        <div className="flex justify-between overflow-x-auto py-3 px-4">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/categories/${category.name.toLowerCase()}`}
              className="flex flex-col items-center min-w-[75px] text-center px-2"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-16 h-16 object-contain mb-1"
              />
              <span className="text-sm whitespace-nowrap">{category.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryNav;

import Image from "next/image";

interface MenuItem {
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
}

const menuItems: MenuItem[] = [
  {
    name: "Classic Focaccia",
    description: "Fresh tomato, onion, and basil with a hint of sweetness",
    price: "$24.99",
    image: "/images/menu/f1.jpg",
    category: "Bread",
  },
  {
    name: "Dill",
    description: "Warm Foccacia topped with Sea Salt and Dill",
    price: "$22.99",
    image: "/images/menu/f2.png",
    category: "Bread",
  },
  {
    name: "Red Pepper",
    description: "Foccacia topped with Roasted Sweet Peppers",
    price: "$22.99",
    image: "/images/menu/f3.jpg",
    category: "Bread",
  },
  {
    name: "Classic Focaccia",
    description: "Fresh tomato, onion, and basil with a hint of sweetness",
    price: "$24.99",
    image: "/images/menu/f1.jpg",
    category: "Bread",
  },
  {
    name: "Dill",
    description: "Warm Foccacia topped with Sea Salt and Dill",
    price: "$22.99",
    image: "/images/menu/f2.png",
    category: "Bread",
  },
  {
    name: "Red Pepper",
    description: "Foccacia topped with Roasted Sweet Peppers",
    price: "$22.99",
    image: "/images/menu/f3.jpg",
    category: "Bread",
  }
];

export default function Menu() {
  return (
    <div className="min-h-screen py-16 bg-bakery-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Our Menu</h1>
        
        {/* Categories Filter */}
        {/* <div className="flex flex-wrap gap-4 justify-center mb-12">
          <button className="px-6 py-2 rounded-full bg-bakery-900 text-white font-semibold">
            All
          </button>
          <button className="px-6 py-2 rounded-full bg-bakery-900 text-white font-semibold">
            Cakes
          </button>
          <button className="px-6 py-2 rounded-full bg-bakery-900 text-white font-semibold">
            Cupcakes
          </button>
          <button className="px-6 py-2 rounded-full bg-bakery-900 text-white font-semibold">
            Pastries
          </button>
          <button className="px-6 py-2 rounded-full bg-bakery-900 text-white font-semibold">
            Cookies
          </button>
        </div> */}

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-bakery-900 font-semibold">{item.price}</span>
                  <button className="bg-bakery-500 text-white px-4 py-2 rounded-full hover:bg-bakery-600 transition-colors">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

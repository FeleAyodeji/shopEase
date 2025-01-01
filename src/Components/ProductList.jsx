import ProductItem from "./ProductItem";
import { useCart } from "../context/CartContext";

const products = [
  {
    id: 1,
    name: "Laptop",
    price: 899.99,
    imageUrl: "/images/laptop.jpg",
  },
  {
    id: 2,
    name: "Smartphone",
    price: 499.99,
    imageUrl: "/images/smartphone.jpeg",
  },
  {
    id: 3,
    name: "Headphones",
    price: 99.99,
    imageUrl: "/images/headphone.jpeg",
  },
];

function ProductList({ searchQuery }) {
  const { addToCart } = useCart();

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {filteredProducts.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          addToCart={addToCart}
        />
      ))}
    </div>
  );
}

export default ProductList;

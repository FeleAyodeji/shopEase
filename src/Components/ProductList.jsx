import ProductItem from "./ProductItem";
import { useCart } from "../context/CartContext";

const products = [
  { id: 1, name: "Laptop", price: 899.99 },
  { id: 2, name: "Smartphone", price: 499.99 },
  { id: 3, name: "Headphones", price: 99.99 },
  { id: 4, name: "Television", price: 799.99 },
  { id: 5, name: "Tablet", price: 299.99 },
  { id: 6, name: "Smartwatch", price: 199.99 },
  { id: 7, name: "Camera", price: 599.99 },
  { id: 8, name: "Gaming Console", price: 399.99 },
  { id: 9, name: "Wireless Mouse", price: 29.99 },
  { id: 10, name: "Keyboard", price: 49.99 },
  { id: 11, name: "Monitor", price: 149.99 },
  { id: 12, name: "Printer", price: 129.99 },
  { id: 13, name: "Router", price: 89.99 },
  { id: 14, name: "External Hard Drive", price: 79.99 },
  { id: 15, name: "USB Flash Drive", price: 19.99 },
  { id: 16, name: "Power Bank", price: 39.99 },
  { id: 17, name: "Earbuds", price: 49.99 },
  { id: 18, name: "Webcam", price: 59.99 },
  { id: 19, name: "Drone", price: 999.99 },
  { id: 20, name: "Bluetooth Speaker", price: 129.99 },
  { id: 21, name: "VR Headset", price: 399.99 },
  { id: 22, name: "Fitness Tracker", price: 149.99 },
  { id: 23, name: "Electric Scooter", price: 599.99 },
  { id: 24, name: "Smart Thermostat", price: 249.99 },
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

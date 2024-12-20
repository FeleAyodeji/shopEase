import { useState } from "react";
import ProductList from "./Components/ProductList";
import SearchBar from "./Components/SearchBar";
import Cart from "./Components/Cart";
import { CartProvider } from "./context/CartContext";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <CartProvider>
      <div className="container mx-auto p-4">
        <SearchBar setSearchQuery={setSearchQuery} />
        <ProductList searchQuery={searchQuery} />
        <Cart />
      </div>
    </CartProvider>
  );
}

export default App;

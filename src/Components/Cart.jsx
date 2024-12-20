import { useCart } from "../context/CartContext";

function Cart() {
  const { cart, removeFromCart } = useCart();

  return (
    <div className="mt-4">
      <h2 className="text-2xl font-semibold">Shopping Cart</h2>
      <ul>
        {cart.map((item) => (
          <li
            key={item.id}
            className="flex justify-between p-2 border-b"
          >
            <span>
              {item.name} - ${item.price}
            </span>
            <button
              className="text-red-500"
              onClick={() => removeFromCart(item.id)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <p className="font-bold">
          Total: ${cart.reduce((sum, item) => sum + item.price, 0)}
        </p>
      </div>
    </div>
  );
}

export default Cart;

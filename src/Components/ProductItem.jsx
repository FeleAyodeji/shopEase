function ProductItem({ product, addToCart }) {
  return (
    <div className="p-4 border rounded shadow-lg">
      {/* Display the product image */}
      <img
        src={product.imageUrl} // Source URL of the product image
        alt={product.name}
        className="w-full h-48 object-cover rounded mb-4"
      />

      {/* Display the product name */}
      <h3 className="text-xl font-semibold">{product.name}</h3>

      {/* Display the product price */}
      <p className="text-gray-600">${product.price}</p>

      {/* Button to add the product to the cart */}
      <button
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={() => addToCart(product)} // Handle the click event by calling addToCart with the product
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductItem;

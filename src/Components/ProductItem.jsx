function ProductItem({ product, addToCart }) {
  return (
    <div className="p-4 border rounded shadow-lg">
      <h3 className="text-xl font-semibold">{product.name}</h3>
      <p className="text-gray-600">${product.price}</p>
      <button
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductItem;

import React, { useEffect, useState } from 'react';

function Projects() {
  const [count, setCount] = useState(100);
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const countUp = () => setCount(prev => prev * 2);
  const countDown = () => setCount(prev => prev / 2);

  const handleAddToCart = (item) => setCart(prev => [...prev, item]);
  const handleRemoveFromCart = (id) => setCart(prev => prev.filter(item => item.id !== id));

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  const filteredData = data.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );


  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0).toFixed(2);

  return (
    <div>
   
      <div className="bg-gray-800 text-white p-4 flex flex-wrap justify-between items-center gap-4">
        <h1 className="text-xl font-bold">🛒 My Store</h1>
        <div>Counter: {count}</div>
      </div>

     
      {cart.length > 0 && (
        <div className="bg-yellow-100 border-b border-yellow-400 p-4">
          <h2 className="text-lg font-semibold mb-2">🛍 Cart Items ({cart.length}):</h2>
          <ul className="list-none space-y-2">
            {cart.map((item) => (
              <li key={item.id} className="flex justify-between items-center flex-wrap gap-2">
                <span>{item.title} - ${item.price}</span>
                <button
                  onClick={() => handleRemoveFromCart(item.id)}
                  className="ml-4 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-4 font-semibold">
            <span>Total Price: </span>
            <span className="text-green-700">${totalPrice}</span>
          </div>
        </div>
      )}

     
      <div className="p-4 flex justify-center">
        <input
          type="text"
          placeholder="Search products..."
          className="border px-4 py-2 w-full max-w-md rounded shadow"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
        {filteredData.length > 0 ? (
          filteredData.map((item) => (
            <div key={item.id} className="border p-4 rounded shadow flex flex-col justify-between">
              <h2 className="text-lg font-semibold">{item.title}</h2>
              <p className="text-sm mb-2 line-clamp-3">{item.description}</p>
              <img
                src={item.image}
                alt={item.title}
                className="h-40 object-contain mx-auto mb-2"
              />
              <p className="font-bold text-green-700">${item.price}</p>
              <button
                onClick={() => handleAddToCart(item)}
                className="border px-5 py-2 m-2 bg-blue-500 rounded"
              >
                Add to Cart
              </button>
            </div>
          ))
        ) : (
          <p className="text-center col-span-3 text-gray-600">No products found.</p>
        )}
      </div>
    </div>
  );
}

export default Projects;

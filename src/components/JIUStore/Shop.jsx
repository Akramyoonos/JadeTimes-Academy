import React from 'react';
import JIUStoreImg01 from '../../assets/Images/JIUStoreImg01.webp';
import JIUStoreImg02 from '../../assets/Images/JIUStoreImg02.webp';

const products = [
  {
    id: 1,
    name: 'Rising Brands 2025',
    price: '$75.00',
    image: JIUStoreImg01,
    isNew: true,
  },
  {
    id: 2,
    name: 'Rising Brands 2024',
    price: '$45.00',
    image: JIUStoreImg02,
    isNew: false,
  },
];

const ProductCard = ({ product }) => (
  <div className="group relative w-full max-w-xs mx-auto overflow-hidden bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
    {product.isNew && (
      <span className="absolute top-2 left-2 rotate-[-4deg] bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-md">
        NEW
      </span>
    )}
    <img
      src={product.image}
      alt={product.name}
      className="w-full h-auto object-cover"
    />
    <div className="p-4">
      <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
      <p className="text-base text-gray-600 mt-1">{product.price}</p>
      <button className="w-full bg-gray-800 text-white py-2 mt-3 rounded-md hover:bg-gray-900 transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-opacity-50">
        Add to Cart
      </button>
    </div>
  </div>
);

const Shop = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-5xl font-extrabold text-center text-gray-900 mb-6">JadeTimes Store</h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Explore our exclusive collection of publications and merchandise.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      {/* Floating Blackbox Icon */}
      <div className="fixed bottom-6 right-6 bg-black p-4 rounded-full shadow-lg cursor-pointer hover:bg-gray-800 transition-colors">
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="6" cy="6" r="2" fill="white" />
          <circle cx="12" cy="6" r="2" fill="white" />
          <circle cx="18" cy="6" r="2" fill="white" />
          <circle cx="6" cy="12" r="2" fill="white" />
          <circle cx="12" cy="12" r="2" fill="white" />
          <circle cx="18" cy="12" r="2" fill="white" />
          <circle cx="6" cy="18" r="2" fill="white" />
          <circle cx="12" cy="18" r="2" fill="white" />
          <circle cx="18" cy="18" r="2" fill="white" />
        </svg>
      </div>
    </div>
  );
};

export default Shop;

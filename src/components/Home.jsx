import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className=" ">
      <nav className="bg-red-500 text-white p-4 flex justify-center space-x-4">
        <Link to="/" className="text-blue-500 hover:underline">Home</Link>
        <Link to="/shop" className="hover:underline">Shop</Link>
        <Link to="/about" className="hover:underline">About</Link>
        <Link to="/contact" className="hover:underline">Contact Page</Link>

      </nav>
    
    </div>
  );
}

export default Home;

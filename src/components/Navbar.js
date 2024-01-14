import React from 'react';
import './navbar.css'; // Import your CSS file
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Navbar() {
  const cartProducts = useSelector((state) => state.cart);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Logo</Link> {/* Use Link for the logo */}
      </div>
      <ul className="navbar-menu">
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/">Shop</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/cart">
            Cart {cartProducts ? cartProducts.length : 0}
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

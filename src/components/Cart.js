import React from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { removeFromCart } from '../Store/cartSlice';
import "../style/Cart.css"
export const Cart = () => {
  const productCart = useSelector(state => state.cart);
    const dispatch =useDispatch();

    const handleRemoveFromCart = (productId)=>{
        dispatch(removeFromCart(productId))
    }
  return (
    <div>
      <h1>Cart</h1>
      {productCart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {productCart.map((product) => (
            <div key={product.id} className="cart-item">
              <img src={product.image} alt={product.title} />
              <div className="cart-item-details">
                <h2>{product.title}</h2>
                <p>Price: ${product.price}</p>
                {/* Add any other product information you want to display */}
              </div>
              <button onClick={() => handleRemoveFromCart(product.id)}>Remove item</button>
            </div>
          ))}
         
        </div>
      )}
    </div>
  );
};

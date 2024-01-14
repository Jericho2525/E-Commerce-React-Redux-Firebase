import React, { useState, useEffect } from 'react';
import "../style/product.css"
import { useDispatch , useSelector} from "react-redux";
import { addToCart } from '../Store/cartSlice';
import { getProducts } from '../Store/productSlice';
import { StatusCode } from '../utils/StatusCode';

export const Product = () => {
  const dispatch =useDispatch();
const {data: products ,status} = useSelector(state => state.products);
    const handleToCart = (product) =>{
        dispatch(addToCart(product))
    }

  useEffect(() => {
    //Dispatch an action for FetchProducts
    dispatch(getProducts());



    // Fetch products from API
    // fetch('https://fakestoreapi.com/products')
    //   .then((response) => response.json())
    //   .then((data) => setProducts(data));
  }, []);
  if(status === StatusCode.LOADING){
    return<p>Loading.....</p>
  }
  if(status === StatusCode.ERROR){
    return <p>Something wrong.Try again later</p>
  }

  return (
    <div className="product">
      {products.map((product) => (
        <div key={product.id} className="cards">
          {product.title}
          <div className="text-center">
          <img src={product.image}/>
          </div>
          <button onClick={() => handleToCart(product)}>Add To Cart</button>
        </div>
      ))}
    </div>
  );
};

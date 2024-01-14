import React from "react";
import "../style/Home.css";
import { Link } from "react-router-dom";


export const Home = () => {
  return (
    <div className="home">
      <div className="headerContainer" >
        <h1>Classy</h1>
        <p>This is your sign to thrift <br/>something that makes you smile.!</p>
        <Link to="/">
          <button>Order Now!</button>
        </Link>
      </div>
    </div>
  );
};

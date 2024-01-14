import "./App.css";
import Navbar from "./components/Navbar";
import { Product } from "./components/Product";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Cart } from "./components/Cart";
import { Home } from "./Pages/Home";
import { Contact } from "./Pages/Contact";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/home" element={<Home/>}/>
        <Route path="/shop" element={<Product/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </Router>
  );
}

export default App;

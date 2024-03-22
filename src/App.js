import React, { useState, useEffect } from "react";
import { commerce } from "./lib/commerce";
import Navbar from "./components/navbar/navbar";
import Products from "./components/products/products";
import Cart from "./components/cart/cart";
import { BrowserRouter as Router, Switch, Route ,Link} from "react-router-dom";

const App = () => {
  const [products, setproducts] = useState([]);
  const [cart, setcart] = useState([]);

  const fetchproducts = async () => {
    const { data } = await commerce.products.list();

    setproducts(data);
  };
  console.log(products);

  const fetchcart = async () => {
    setcart(await commerce.cart.retrieve());
  };
  
  console.log(products);
  const handleAddcart = async (productID, quantity) => {
    const {cart}= await commerce.cart.add(productID, quantity);
    setcart(cart);
  };
  
  const handlecartquantity = async (productID, quantity) => {
    const {cart} = await commerce.cart.update(productID, {quantity});
    setcart(cart);
  };
  const handlecartremove = async (productID) => {
    const {cart} = await commerce.cart.remove(productID);
    setcart(cart);
  };
  const handlecartempty = async () => {
    const {cart} = await commerce.cart.empty();
    setcart(cart);
  };

  console.log(cart);
  

  useEffect(() => {
    fetchproducts();
    fetchcart();
  }, []);

 


  return (
    <Router>
      <div>
        <Navbar totalitems={cart.total_items} />
        <Switch>
          <Route exact path="/">
            <Products products={products} onaddcart={handleAddcart} />
          </Route>
          <Route exact path="/cart">
            <Cart cart={cart} handlecartempty={handlecartempty} handlecartremove={handlecartremove} handlecartquantity={handlecartquantity} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;

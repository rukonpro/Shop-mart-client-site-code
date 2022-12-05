import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Product from "../Product/Product";
const Products = () => {
  const [homeProducts, setHomeProducts] = useState([]);
  useEffect(() => {
    const url = `https://shop-mart-server.onrender.com/homeProducts`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setHomeProducts(data));
  }, []);
  return (
    <div className="container">
      <Row lg={4}>
        {homeProducts.map((homeProduct) => (
          <Product key={homeProduct._id} homeProduct={homeProduct}></Product>
        ))}
      </Row>
    </div>
  );
};

export default Products;

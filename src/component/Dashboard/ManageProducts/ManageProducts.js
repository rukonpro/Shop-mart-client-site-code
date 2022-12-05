import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import axios from "axios";
import Swal from "sweetalert2";
import ManageProduct from "../ManageProduct/ManageProduct";
// import NavBar from "../../../Shared/NavBar/NavBar";
const ManageProducts = () => {
  const [allProducts, setAllProducts] = useState([]);
  useEffect(() => {
    fetch("https://shop-mart-server.onrender.com/allproducts")
      .then((res) => res.json())
      .then((data) => setAllProducts(data));
  }, []);
  // handle delete btn
  const handleDeletBtn = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`https://shop-mart-server.onrender.com/productDelete/${id}`)
          .then((res) => {
            const remaining = allProducts.filter((order) => order._id !== id);
            setAllProducts(remaining);
          });
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };
  return (
    <div>
      {/* <NavBar /> */}
      <h3 style={{ borderBottom: "3px solid skyblue", width: "40%" }}>
        All Products
      </h3>
      <div className="container-fluid">
        <Row lg="4">
          {allProducts.map((allProduct) => (
            <ManageProduct
              key={allProduct._id}
              allProduct={allProduct}
              handleDeletBtn={handleDeletBtn}
            ></ManageProduct>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default ManageProducts;

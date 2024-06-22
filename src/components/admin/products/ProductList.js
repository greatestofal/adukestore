import React, { useState } from "react";
import { Link } from "react-router-dom";

const ProductList = () => {
  //reading from the created api
  const [products, setProducts] = useState([]);
  function getProducts() {
    fetch("http://localhost:4000/products")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        alert("Unable to get data");
      });
  }

  return (
    <div className="container my-4">
      <h2 className="text-center mb-4"> Products</h2>

      <div className="row mb-3">
        {/* Column 1 */}
        <div className="col">
          <Link
            className="btn btn-primary me-1"
            to="/admin/products/create"
            role="button"
          >
            Create Product
          </Link>
          <button type="button" className="btn btn-outline-primary">
            Refresh
          </button>
        </div>
        {/* Column 2 */}
        <div className="col"></div>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Brand</th>
            <th scope="col">Category</th>
            <th scope="col">Price</th>
            <th scope="col">Image</th>
            <th scope="col">Created At</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => {
            return (
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td style={{ width: "10px", whiteSpace: "nowrap" }}>
                  <Link
                    className="btn btn-primary btn-sm me-1"
                    to={"/admin/products/edit"}
                  >
                    {" "}
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger btn-sm"
                    type="button"
                    onClick={() => {}}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;

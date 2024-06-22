import React from "react";

const ProductList = () => {
  return (
    <div className="container my-4">
      <h2 className="text-center mb-4"> Products</h2>

      <div className="row mb-3">
        <div className="col">
          <a
            className="btn btn-primary me-1"
            href="/admin/products/create"
            role="button"
          >
            Create Product
          </a>
          <button type="button" className="btn btn-outline-primary">
            Refresh
          </button>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
};

export default ProductList;

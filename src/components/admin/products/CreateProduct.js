import React from "react";

const CreateProduct = () => {
  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-md-8 mx-auto rounded border p-4">
          <h3 className="text-center mb-5 text-danger-emphasis">
            Create Product
          </h3>

          <form>
            {/* Name */}
            <div className="row mb-3">
              <label htmlFor="name" className="col-form-label col-sm-4">
                Name
              </label>
              <div className="col-sm-8">
                <input className="form-control" name="name" />
                <span className="text-danger"></span>
                {/* For validation error */}
              </div>
            </div>

            {/* Brand */}
            <div className="row mb-3">
              <label className="col-form-label col-sm-4">Brand</label>
              <div className="col-sm-8">
                <input className="form-control" name="name" />
                <span className="text-danger"></span>
                {/* For validation error */}
              </div>
            </div>

            {/* Category */}
            <div className="row mb-3">
              <label className="col-form-label col-sm-4">Category</label>
              <div className="col-sm-8">
                <select className="form-select" name="category">
                  <option value="Other"> Other</option>
                  <option value="Electronics"> Electronics</option>
                  <option value="Home"> Home</option>
                  <option value="Grocery"> Grocery</option>
                  <option value="Health"> Health</option>
                  <option value="Beauty"> Kitchen Utensils</option>
                  <option value="Clothing"> Clothing</option>
                  <option value="Books"> Books</option>
                  <option value="Furniture"> Furniture</option>
                  <option value="Sports"> Sports</option>
                  <option value="Toys"> Toys</option>
                  <option value="Food"> Food</option>
                  <option value="Beauty"> Beauty</option>
                </select>
                <span className="text-danger"></span>
                {/* For validation error */}
              </div>
            </div>

            {/* Price */}
            <div className="row mb-3">
              <label className="col-form-label col-sm-4">Price</label>
              <div className="col-sm-8">
                <input
                  className="form-control"
                  name="price"
                  type="number"
                  step={0.1}
                  min={9}
                />
                <span className="text-danger"></span>
                {/* For validation error */}
              </div>
            </div>

            {/* Description */}
            <div className="row mb-3">
              <label htmlFor="name" className="col-form-label col-sm-4">
                Description
              </label>
              <div className="col-sm-8">
                <textarea
                  className="form-control"
                  name="description"
                  rows="4"
                />
                <span className="text-danger"></span>
                {/* For validation error */}
              </div>
            </div>

            {/* Image */}
            <div className="row mb-3">
              <label htmlFor="name" className="col-form-label col-sm-4">
                Upload
              </label>
              <div className="col-sm-8">
                <input className="form-control" type="file" name="upload" />
                {/* For validation error */}
                <span className="text-danger"></span>
              </div>
            </div>

            {/* Name */}
            <div className="row">
              <div className="offset-sm-4 col-sm-4 d-grid">
                <button className="btn btn-primary">Submit</button>
              </div>
              <div className="col-sm-4 d-grid">
                <a
                  className="col-sm-4 d-grid text-decoration-none border btn btn-danger"
                  href="/admin/products"
                  role="button"
                >
                  Cancel
                </a>
                <span className="text-danger"></span>
                {/* For validation error */}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;

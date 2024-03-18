import React, { useState, useEffect } from "react";
import "./ProductTable.css"; // Import CSS file for styling


export default function ProductForm() {
  const [input, setInput] = useState({
    product_name: "",
    description: "",
    price: "",
    stockquantity: "",
    image: null, // State to store the selected image file
  });

  const [products, setProducts] = useState(() => {
    // Initialize products state with data from local storage or an empty array
    const storedProducts = JSON.parse(localStorage.getItem("products"));
    return storedProducts || [];
  });

  const [editIdx, setEditIdx] = useState(-1); // State to track the index of the product being edited

  useEffect(() => {
    // Update local storage whenever products state changes
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  const hdlChange = (e) => {
    if (e.target.name === "image") {
      // Handle image file selection
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        setInput((prev) => ({ ...prev, image: reader.result }));
      };
      reader.readAsDataURL(file);
    } else {
      setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }
  };

  const hdlSubmit = (e) => {
    e.preventDefault();
    if (editIdx === -1) {
      // Add new product if not in edit mode
      const newProduct = { ...input };
      setProducts([...products, newProduct]); // Add new product to the products array
    } else {
      // Update existing product if in edit mode
      const updatedProducts = [...products];
      updatedProducts[editIdx] = { ...input };
      setProducts(updatedProducts);
      setEditIdx(-1); // Exit edit mode after updating
    }
    // Reset the form after adding/updating the product
    setInput({
      product_name: "",
      description: "",
      price: "",
      stockquantity: "",
      image: null,
    });
  };

  const hdlDelete = (index) => {
    const updatedProducts = [...products];
    updatedProducts.splice(index, 1);
    setProducts(updatedProducts);
  };

  const hdlEdit = (index) => {
    setEditIdx(index); // Enter edit mode for the selected product
    const productToEdit = products[index];
    setInput({
      product_name: productToEdit.product_name,
      description: productToEdit.description,
      price: productToEdit.price,
      stockquantity: productToEdit.stockquantity,
      image: productToEdit.image, // Use the image data URL directly
    });
  };

  return (
    <div>
      <form onSubmit={hdlSubmit}>
        <label>
          Product Name:
          <input
            type="text"
            name="product_name"
            value={input.product_name}
            onChange={hdlChange}
          />
        </label>
        <br />
        <label>
          Description:
          <input
            type="text"
            name="description"
            value={input.description}
            onChange={hdlChange}
          />
        </label>
        <br />
        <label>
          Price:
          <input
            type="number"
            name="price"
            value={input.price}
            onChange={hdlChange}
          />
        </label>
        <br />
        <label>
          Stock Quantity:
          <input
            type="number"
            name="stockquantity"
            value={input.stockquantity}
            onChange={hdlChange}
          />
        </label>
        <br />
        <label>
          Image:
          <input
            type="file"
            name="image"
            onChange={hdlChange}
          />
        </label>
        <br />
        <button type="submit">{editIdx === -1 ? "Add Product" : "Update Product"}</button>
      </form>
      <hr />
      <h2>Product List</h2>
      <table className="product-table">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Stock Quantity</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>{product.product_name}</td>
              <td>{product.description}</td>
              <td>{product.price}</td>
              <td>{product.stockquantity}</td>
              <td>
                {product.image && (
                  <img src={product.image} alt="Product" className="product-image" />
                )}
              </td>
              <td>
                <button onClick={() => hdlEdit(index)} className="edit-button">Edit</button>
                <button onClick={() => hdlDelete(index)} className="delete-btn">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


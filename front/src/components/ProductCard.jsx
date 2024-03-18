import React from "react";
import axios from "axios";

export default function ProductCard(props) {
  const { product, openModal, setTrigger } = props;

  const handleDelete = async (e) => {
    try {
      e.stopPropagation();
      const token = localStorage.getItem("token");
      const response = await axios.delete(`http://localhost:8889/products/${product.id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert("Delete successful");
      setTrigger((prev) => !prev);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div
      className={`card w-5/6 shadow-xl mx-auto cursor-pointer active:shadow-none active:translate-x-2 active:translate-y-1`}
      onClick={() => openModal(product.id)}
    >
      <div className="card-body">
        <div className="flex justify-between">
          <h2 className="card-title">{product.title}</h2>
          <div className="badge badge-secondary" onClick={handleDelete}>
            delete
          </div>
        </div>
        <div className="flex">
          <p>Description: {product.description}</p>
          <p className="text-right">Price: ${product.price}</p>
        </div>
      </div>
    </div>
  );
}

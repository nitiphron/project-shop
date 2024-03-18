import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom for navigation
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
      {/* Your product card code here */}
      {/* Ensure to add proper onClick handlers for edit and delete buttons */}
      {/* Also, add form inputs for product details and an image upload input */}
      {/* Remember to update the product card to display data from products state */}

      {/* Example product card */}
      <div className="flex justify-center flex-wrap">
        {/* Card 1 */}
        <button
          className="card w-full bg-base-100 shadow-xl m-4 flex items-center"
          onClick={() => handleProductClick(1)} // Pass the product ID or unique identifier here
        >
          <div className="card-body w-3/4 flex justify-between">
            <div className="card-content">
              {/* Product Name */}
          <h2 className="card-title">MagSafe! EW56 Magnetic Powerbank</h2>
              {/* Product Description */}
              <p>คำอธิบาย : แบตเตอรี่สำรอง Eloop EW56 PD 20W ความจุ 7,000mAh MagSafe / Magnetic Wireless Power Bank ของแท้ 100% ได้รับมาตรฐาน มอก. รองรับการใช้งานชาร์จไร้สายระบบแม่เหล็ก Magnetic สำหรับ iPhone 12 / 13 ทุกซีรียส์ (สำหรับสมาร์ทโฟน Android สามารถใช้งานชาร์จไร้สายกับรุ่นที่รองรับ) รองรับการชาร์จแบบไร้สายสูงสุด 15W และชาร์จด้วยใช้สายชาร์จสูงสุดที่ 20W การชาร์จแบบใช้สายสามารถใช้ได้กับมือถือทุกรุ่น ด้านหลัง powerbank จะมีฐานตั้งสำหรับวางมือถือ และสามารถพับเก็บภายในตัวได้</p>
              {/* Price */}
              <p>ราคา : 990</p>
            </div>
            <div className="card-image">
            <img
                src="./nh.jpg" // Update with the actual image URL
                alt="Product Name"
                style={{ maxWidth: "60%", maxHeight: "250px" }}
              />
            </div>
          </div>
          <div className="card-actions justify-end" style={{ flex: 1, textAlign: "right" }}>
            {/* เพิ่มปุ่มชำระเงินหรือลิงก์ไปยังหน้าชำระเงินที่นี่ */}
            <Link to="/payment" className="btn btn-primary">ชำระเงิน</Link>
            {/* <Link to="/cart" className="btn btn-primary">Go to Cart</Link> */}
          </div>
        </button>
      </div>
    </div>
  );
}

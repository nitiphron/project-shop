
import React from 'react';
import { Link } from 'react-router-dom';

export default function Product() {
  // Function to handle clicking on a product card
  const handleProductClick = (productId) => {
    // Replace this console log with your logic to show product details or add to cart
    console.log('Product clicked:', productId);
  };

  return (
    <div className="flex justify-center flex-wrap">
      {/* Card 1 */}
      <button
        className="card w-96 bg-base-100 shadow-xl m-4"
        onClick={() => handleProductClick(1)} // Pass the product ID or unique identifier here
      >
        <figure>
          <img
            src="./sam.jpg"
            alt="Zinc 15mg"
            style={{ maxWidth: "60%", maxHeight: "250px" }}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Galaxy S22 Ultra</h2>
          <p>คำอธิบาย : 6.8นิ้วจอ Dynamic AMOLED 2X 24-bit1440 x 3080 พิกเซล
           108 MP + 12MP (Ultrawide) + 10MP (Telephoto) + 10MP (Periscope) กล้องหน้า 40MP.
           Qualcomm Snapdragon 8 Gen 1 Octa Core ความเร็ว 3.0 GHz.
           One UI One UI 4.1 based on Android 12.
           หน่วยความจำ RAM 8/12 GB. ROM 128/256/512 GB.</p>
          <p>ราคา : 39,900</p>
          <div className="card-actions justify-end">
            {/* <button className="btn btn-primary" onClick={(e) => { e.stopPropagation(); console.log('Details clicked:', 1); }}>
              ดูรายละเอียด
            </button> */}
            <Link to="/cart" className="btn btn-primary">Go to Cart</Link>
          </div>
        </div>
      </button>
      
      {/* Repeat the same structure for the remaining products */}
      
      {/* Card 2 */}
      <button
        className="card w-96 bg-base-100 shadow-xl m-4"
        onClick={() => handleProductClick(2)} // Pass the product ID or unique identifier here
      >
        <figure>
          <img
            src="./sark.jpg" 
            alt="Product Name"
            style={{ maxWidth: "60%", maxHeight: "250px" }}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Tecno Spark 10 Pro</h2>
          <p>คำอธิบาย : Tecno Spark 10 Pro เป็นสมาร์ทโฟนอีกรุ่นหนึ่งที่มีสเปกคุ้มราคา และมีประสิทธิภาพสูงพอที่จะเล่นเกมได้อย่างสบายใจ โดยมากับชิปเซ็ต MediaTek Helio G88 พร้อม RAM 8GB แรงพอที่จะเล่นเกมสามัญประจำเครื่องอย่าง RoV, PUBG, Free Fire ได้สบาย พร้อมหน้าจอขนาดใหญ่ถึง 6.8 นิ้ว ความละเอียดระดับ FHD+ ช่วยให้เห็นชัดทุกการเคลื่อนไหว ไม่ต้องเพ่งให้ปวดตา หรือถ้าอยากจะพักจากการการเล่นเกมไปถ่ายรูปเล่นบ้าง ก็มีกล้องหลังความละเอียด 50MP และกล้องหน้า 32MP ซึ่งถือว่าเป็นความละเอียดที่สูงมากมาให้ใช้งานกันด้วย</p>
          <p>ราคา : 4,139</p>
          <div className="card-actions justify-end">
            {/* <button className="btn btn-primary" onClick={(e) => { e.stopPropagation(); console.log('Details clicked:', 2); }}>
              ดูรายละเอียด
            </button> */}
            <Link to="/cart" className="btn btn-primary">Go to Cart</Link>
          </div>
        </div>
      </button>
      
      {/* Repeat the same structure for the remaining products */}
      
      {/* Add more card elements as needed */}
      <button
        className="card w-96 bg-base-100 shadow-xl m-4"
        onClick={() => handleProductClick(2)} // Pass the product ID or unique identifier here
      >
        <figure>
        <img
                src="./mam.jpg" // Update with the actual image URL
                alt="Product Name"
                style={{ maxWidth: "60%", maxHeight: "250px" }}
              />
        </figure>
        <div className="card-body">
        <h2 className="card-title"> มาม่า</h2>
              {/* Product Description */}
              <p>คำอธิบาย : มาม่า บะหมี่กึ่งสำเร็จรูป รสต้มยำกุ้ง 55 ก. แพ็ค 10 ซอง</p>
              {/* Price */}
              <p>ราคา : 78</p>
          <div className="card-actions justify-end">
            {/* <button className="btn btn-primary" onClick={(e) => { e.stopPropagation(); console.log('Details clicked:', 2); }}>
              ดูรายละเอียด
            </button> */}
            <Link to="/cart" className="btn btn-primary">Go to Cart</Link>
          </div>
        </div>
      </button>

      <button
        className="card w-96 bg-base-100 shadow-xl m-4"
        onClick={() => handleProductClick(2)} // Pass the product ID or unique identifier here
      >
        <figure>
        <img
                src="./man.jpg" // Update with the actual image URL
                alt="Product Name"
                style={{ maxWidth: "60%", maxHeight: "250px" }}
              />
        </figure>
        <div className="card-body">
          {/* Product Name */}
               <h2 className="card-title"> มองต์เฟลอน้ำ </h2>
               {/* Product Description */}
               <p>คำอธิบาย : น้ำแร่มองต์เฟลอ น้ำแร่ 100% จากธรรมชาติ มองต์เฟลอใส่ใจสุขภาพ

              • กำเนิดจากแหล่งน้ำพุใต้ผิวโลกที่ลึกกว่า 10,000 ฟุต จากแหล่งน้ำพุบนยอดเขาสูง อำเภอพบพระ จังหวัดตาก

              • ผ่านการรับรองและตรวจวิเคราะห์จากสถาบัน CARSO - laboratoire ประเทศฝรั่งเศส และการันตรีรสชาติระดับ 3 ดาว โดยสถาบัน iTQi2018 ประเทศเบลเยี่ยม
              • อุดมไปด้วยแร่ธาตุนานาชนิด ในปริมาณที่พอเหมาะต่อร่างกาย สามารถดื่มได้เป็นประจำทุกวัน  </p>           {/* Price */}               <p>ราคา : 120</p>
          <div className="card-actions justify-end">
            {/* <button className="btn btn-primary" onClick={(e) => { e.stopPropagation(); console.log('Details clicked:', 2); }}>
              ดูรายละเอียด
            </button> */}
            <Link to="/cart" className="btn btn-primary">Go to Cart</Link>
          </div>
        </div>
      </button>

      <button
        className="card w-96 bg-base-100 shadow-xl m-4"
        onClick={() => handleProductClick(2)} // Pass the product ID or unique identifier here
      >
        <figure>
        <img
                src="./nesca.jpg" // Update with the actual image URL
                alt="Product Name"
                style={{ maxWidth: "60%", maxHeight: "250px" }}
              />
        </figure>
        <div className="card-body">
           {/* Product Name */}
               <h2 className="card-title">เนสกาแฟ</h2>
               {/* Product Description */}
              <p>คำอธิบาย : เนสกาแฟเบลนด์แอนด์บรูริชอโรมากาแฟปรุงสำเร็จชนิดผง 17กรัม แพค 40ซอง</p>
              {/* Price */}
               <p>ราคา : 147</p>
          <div className="card-actions justify-end">
            {/* <button className="btn btn-primary" onClick={(e) => { e.stopPropagation(); console.log('Details clicked:', 2); }}>
              ดูรายละเอียด
            </button> */}
            <Link to="/cart" className="btn btn-primary">Go to Cart</Link>
          </div>
        </div>
      </button>

      <button
        className="card w-96 bg-base-100 shadow-xl m-4"
        onClick={() => handleProductClick(2)} // Pass the product ID or unique identifier here
      >
        <figure>
          <img
                src="./bu.jpg" // Update with the actual image URL
                alt="Product Name"
                style={{ maxWidth: "60%", maxHeight: "250px" }}
              />
        </figure>
        <div className="card-body">
           {/* Product Name */}
           <h2 className="card-title">ชุดไขควงมือ X LINE Bule</h2>
              {/* Product Description */}
              <p>คำอธิบาย : BOSCH ชุดไขควงมือ 46 ชิ้น Blue
ในชุดประกอบด้วย - หัวไขควง + PH</p>
              {/* Price */}
              <p>ราคา : 449</p>
          <div className="card-actions justify-end">
            {/* <button className="btn btn-primary" onClick={(e) => { e.stopPropagation(); console.log('Details clicked:', 2); }}>
              ดูรายละเอียด
            </button> */}
            <Link to="/cart" className="btn btn-primary">Go to Cart</Link>
          </div>
        </div>
      </button>

      <button
        className="card w-96 bg-base-100 shadow-xl m-4"
        onClick={() => handleProductClick(2)} // Pass the product ID or unique identifier here
      >
        <figure>
        <img
      src="./o.jpg" // Update with the actual image URL
      alt="หน้ากากอนามัย 9055"
      style={{ maxWidth: "80%", maxHeight: "500px" }} // Adjusted maxWidth and maxHeight
    />
        </figure>
        <div className="card-body">
          {/* Product Name */}
    <h2 className="card-title">หน้ากากอนามัย 9055</h2>
    {/* Product Description */}
    <p>คำอธิบาย : หน้ากากอนามัยแบบ 3 ชั้น สำหรับป้องกันฝุ่นละอองและการแพร่กระจายของเชื้อโรค
    กรองเชื้อแบคทีเรีย (BFE) ได้มากถึง 99%
    น้ำหนักเบา เส้นใยเนื้อนุ่ม ไม่ระคายเคืองผิวหน้า
    ทดสอบตามมาตรฐาน ASTM F2101</p>
    {/* Price */}
    <p>ราคา : 125</p>
          <div className="card-actions justify-end">
            {/* <button className="btn btn-primary" onClick={(e) => { e.stopPropagation(); console.log('Details clicked:', 2); }}>
              ดูรายละเอียด
            </button> */}
            <Link to="/cart" className="btn btn-primary">Go to Cart</Link>
          </div>
        </div>
      </button>

      <button
        className="card w-96 bg-base-100 shadow-xl m-4"
        onClick={() => handleProductClick(2)} // Pass the product ID or unique identifier here
      >
        <figure>
        <img
                src="./nh.jpg" // Update with the actual image URL
                alt="Product Name"
                style={{ maxWidth: "60%", maxHeight: "250px" }}
              />
        </figure>
        <div className="card-body">
          {/* Product Name */}
          <h2 className="card-title">MagSafe! EW56 Magnetic Powerbank</h2>
              {/* Product Description */}
              <p>คำอธิบาย : แบตเตอรี่สำรอง Eloop EW56 PD 20W ความจุ 7,000mAh MagSafe / Magnetic Wireless Power Bank ของแท้ 100% ได้รับมาตรฐาน มอก. รองรับการใช้งานชาร์จไร้สายระบบแม่เหล็ก Magnetic สำหรับ iPhone 12 / 13 ทุกซีรียส์ (สำหรับสมาร์ทโฟน Android สามารถใช้งานชาร์จไร้สายกับรุ่นที่รองรับ) รองรับการชาร์จแบบไร้สายสูงสุด 15W และชาร์จด้วยใช้สายชาร์จสูงสุดที่ 20W การชาร์จแบบใช้สายสามารถใช้ได้กับมือถือทุกรุ่น ด้านหลัง powerbank จะมีฐานตั้งสำหรับวางมือถือ และสามารถพับเก็บภายในตัวได้</p>
              {/* Price */}
              <p>ราคา : 990</p>
          <div className="card-actions justify-end">
            {/* <button className="btn btn-primary" onClick={(e) => { e.stopPropagation(); console.log('Details clicked:', 2); }}>
              ดูรายละเอียด
            </button> */}
            <Link to="/cart" className="btn btn-primary">Go to Cart</Link>
          </div>
        </div>
      </button>

      <button
        className="card w-96 bg-base-100 shadow-xl m-4"
        onClick={() => handleProductClick(2)} // Pass the product ID or unique identifier here
      >
        <figure>
        <img
                src="./lobo.jpg" // Update with the actual image URL
                alt="Product Name"
                style={{ maxWidth: "60%", maxHeight: "250px" }}
              />
        </figure>
        <div className="card-body">
        <h2 className="card-title">แป้งชุบกล้วยแขก 85 กรัม</h2>
              {/* Product Description */}
              <p>คำอธิบาย : ส่วนประกอบ: แป้ง (ข้าวเจ้า สาลี ข้าวโพด) 50% น้ําตาล 18% มะพร้าวเกล็ด 15% งา 10% ถั่วลิสง 5% เกลือ 1.5% สารช่วยให้ฟู (ไดโซเดียมฟอสเฟต โซเดียมไฮโดรเจนคาร์บอเนต) 0.5% </p>
              {/* Price */}
              <p>ราคา : 22</p>
          <div className="card-actions justify-end">
            {/* <button className="btn btn-primary" onClick={(e) => { e.stopPropagation(); console.log('Details clicked:', 2); }}>
              ดูรายละเอียด
            </button> */}
            <Link to="/cart" className="btn btn-primary">Go to Cart</Link>
          </div>
        </div>
      </button>
    </div>
  );
}

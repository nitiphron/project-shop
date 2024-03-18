import React from 'react';

const Payment = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <div>
        <h2>หน้าชำระเงิน</h2>
        <div className="card-image">
          <img
            src="./qr.jpg"
            alt="Zinc 15mg"
            style={{ width: "100%", height: "80%" }} // ปรับขนาดตามต้องการ
          />
        </div>
      </div>
    </div>
  );
};

export default Payment;

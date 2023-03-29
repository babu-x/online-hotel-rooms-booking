import "./index.css";
import CartItem from "../CartItem";
import { getBookingData } from "../../Api";
import { useEffect, useState } from "react";

const Cart = () => {
  const [allBookedData, setAllBookedData] = useState([]);
  useEffect(() => {
    getAllBookingsData();
  }, []);

  const getAllBookingsData = async () => {
    const response = await getBookingData();
    setAllBookedData(response.data);
  };
  return (
    <div>
      <h1 className="cart-title">Your Cart Items</h1>
      {allBookedData.map((eachBooking) => (
        <CartItem
          data={eachBooking}
          key={eachBooking._id}
          getAllBookingsData={getAllBookingsData}
        />
      ))}
    </div>
  );
};

export default Cart;

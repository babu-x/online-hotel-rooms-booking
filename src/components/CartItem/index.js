import "./index.css";
import { formatDistanceToNow } from "date-fns";
import { cancelBookingRoom } from "../../Api";
import { useState } from "react";

const CartItem = (props) => {
  const { data, getAllBookingsData } = props;
  const { _id, hotelName, comfortType, name, phoneNumber, time } = data;
  const date = new Date(time);

  const [totalPrice, setTotalPrice] = useState("2999");

  const cancelBooking = async (_id) => {
    await cancelBookingRoom(_id);
    getAllBookingsData();
  };

  const continuePayment = () => {
    alert("Payment Process is in Progress");
  };

  const getRooms = (e, type) => {
    const value = e.target.value;
    const amount =
      type === "Premium" ? parseInt(value) * 2999 : parseInt(value) * 1999;
    setTotalPrice(amount);
  };
  return (
    <div className="cart-container">
      <p className="date">{formatDistanceToNow(date)} ago</p>
      <div className="cart">
        <img
          className="cart-booked-image"
          src="https://res.cloudinary.com/dxnwg4dyz/image/upload/v1679372869/pexels-pixabay-164595_1_qhxqdj.jpg"
          alt="room"
        />
        <div className="price-container">
          <p className="type">{comfortType}</p>
          <h1 className="price">
            {comfortType === "Premium" ? "Rs 2999" : "Rs 1999"}
          </h1>
        </div>
        <hr className="hr" />
        <div>
          <h1 className="hotel-title">{hotelName}</h1>

          <div className="rooms-container">
            <p className="rooms-title">Rooms</p>
            <select
              className="rooms"
              onChange={(e) => {
                getRooms(e, comfortType);
              }}
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
        </div>
        <hr className="hr" />
        <div>
          <h1 className="title">{name}</h1>
          <h1 className="title">{phoneNumber}</h1>
        </div>
        <hr className="hr" />
        <div className="cost">
          <h1 className="title">Total Cost</h1>
          <h1 className="title-cost">{`Rs ${totalPrice}`}</h1>
        </div>
        <hr className="hr" />
        <div className="button-container">
          <button className="continue" onClick={continuePayment}>
            Continue
          </button>
          <button
            className="cancel"
            onClick={() => {
              cancelBooking(_id);
            }}
          >
            Cancel
          </button>
        </div>
      </div>
      <hr className="hr1" />
    </div>
  );
};

export default CartItem;

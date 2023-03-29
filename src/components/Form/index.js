import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { postFormData } from "../../Api";
import { useHistory } from "react-router-dom";
import "./index.css";

const data = {
  id: uuidv4(),
  hotelName: "",
  hotelCity: "",
  comfortType: "",
  name: "",
  email: "",
  phoneNumber: "",
  address: "",
  aadhar: "",
  time: new Date(),
};

const Form = (props) => {
  const { closeBookingForm, hotelName, hotelCity } = props;
  const [formData, setFormData] = useState(data);

  const closeForm = () => {
    closeBookingForm();
  };

  const history = useHistory();

  const getFormData = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
      hotelName: hotelName,
      hotelCity: hotelCity,
    });
    // console.log(e.target.name, e.target.value);
  };

  const postData = async () => {
    await postFormData(formData);
    history.push("/cart");
  };
  return (
    <div className="form">
      <h1 className="form-title">Book Your Room online at anywhere</h1>
      <div className="input-container">
        <label className="label">Your selected hotel name</label>
        <input
          className="input"
          name="hotelName"
          value={hotelName}
          onChange={(e) => {
            getFormData(e);
          }}
        />
      </div>
      <div className="input-container">
        <label className="label">City of Hotel</label>
        <input
          className="input"
          name="hotelCity"
          value={hotelCity}
          onChange={(e) => {
            getFormData(e);
          }}
        />
      </div>
      <div className="input-container">
        <label className="label">Choose your comfort</label>
        <select
          name="comfortType"
          className="input"
          onChange={(e) => {
            getFormData(e);
          }}
        >
          <option>Select</option>
          <option value="Standard">Standard</option>
          <option value="Premium">Premium</option>
        </select>
      </div>
      <div className="input-container">
        <label className="label">Name</label>
        <input
          className="input"
          name="name"
          placeholder="Enter your name"
          onChange={(e) => {
            getFormData(e);
          }}
        />
      </div>
      <div className="input-container">
        <label className="label">Email</label>
        <input
          className="input"
          name="email"
          placeholder="Enter your email address"
          onChange={(e) => {
            getFormData(e);
          }}
        />
      </div>
      <div className="input-container">
        <label className="label">Phone Number</label>
        <input
          className="input"
          name="phoneNumber"
          placeholder="Enter your Phone number"
          onChange={(e) => {
            getFormData(e);
          }}
        />
      </div>
      <div className="input-container">
        <label className="label">Address</label>
        <input
          className="input"
          name="address"
          placeholder="Enter your Address"
          onChange={(e) => {
            getFormData(e);
          }}
        />
      </div>
      <div className="input-container">
        <label className="label">Aadhar</label>
        <input
          className="input"
          name="aadhar"
          placeholder="Enter your Aadhar Number"
          onChange={(e) => {
            getFormData(e);
          }}
        />
      </div>
      <div className="booking-btn-container">
        <button className="booking-btn" onClick={postData}>
          Book
        </button>
        <button className="booking-btn-close" onClick={closeForm}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Form;

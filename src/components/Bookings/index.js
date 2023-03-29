import "./index.css";
import hotelsData from "../../hotelsData";
import { useState } from "react";
import Form from "../Form";

const Bookings = () => {
  const [filterData, setFilterData] = useState(hotelsData);
  const [openForm, setOpenForm] = useState(false);
  const [hotelName, setHotelName] = useState("");
  const [hotelCity, setHotelCity] = useState("");

  const getUserSearchValue = (event) => {
    const value = event.target.value;
    const filter = hotelsData.filter((each) =>
      each.HotelName.toLowerCase().includes(value.toLowerCase())
    );
    setFilterData(filter);
  };

  const bookHotel = (name, city) => {
    setHotelCity(city);
    setHotelName(name);
    setOpenForm(true);
  };

  const closeBookingForm = () => {
    setOpenForm(false);
  };
  return (
    <>
      {openForm === false && (
        <div className="booking-app-container">
          <div
            className="hotels-data"
            style={{ width: openForm ? "80%" : "100%" }}
          >
            <div className="booking-input-container">
              <input
                placeholder="Search"
                type="text"
                className="input-booking"
                onChange={(e) => {
                  getUserSearchValue(e);
                }}
              />
            </div>
            <ul className="hotels-list-container">
              {filterData.map((eachHotel) => (
                <li key={eachHotel.HotelId} className="hotel-container">
                  <div className="hotel">
                    <img
                      className="booking-hotel-image"
                      src="https://res.cloudinary.com/dxnwg4dyz/image/upload/v1679300968/pexels-andrea-davis-2873951_1_l8d8be.jpg"
                      alt="booking hotel"
                    />
                    <div>
                      <h1 className="hotel-name">{eachHotel.HotelName}</h1>
                      <p className="hotel-des">{`Category: ${eachHotel.Category}`}</p>
                      <p className="location">{`Location: ${eachHotel.Address.City}`}</p>
                      <p className="location">
                        {eachHotel.ParkingIncluded
                          ? "Parking Avaliability: Yes"
                          : `Parking Avaliability: No`}
                      </p>
                      <p className="location">{`Rating : ${eachHotel.Rating}`}</p>
                      <p className="location">Tags: </p>
                      <ul className="tags-list">
                        {eachHotel.Tags.map((eachTag, i) => (
                          <button className="tag" key={i}>
                            {eachTag}
                          </button>
                        ))}
                      </ul>
                      <div>
                        <button
                          className="book-hotel"
                          onClick={() => {
                            bookHotel(
                              eachHotel.HotelName,
                              eachHotel.Address.City
                            );
                          }}
                        >
                          Book
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
      {openForm && (
        <div className="form-container">
          <Form
            hotelName={hotelName}
            hotelCity={hotelCity}
            closeBookingForm={closeBookingForm}
          />
        </div>
      )}
    </>
  );
};

export default Bookings;

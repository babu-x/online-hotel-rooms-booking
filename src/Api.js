import axios from "axios";

const url = "http://localhost:3001";

export const postFormData = async (data) => {
  try {
    return await axios.post(`${url}/bookings`, data);
  } catch (error) {
    console.log("Error while calling postFormData Method");
  }
};

export const getBookingData = async (data) => {
  try {
    return await axios.get(`${url}/cart`, data);
  } catch (error) {
    console.log(`error while calling GetBookingdata Method ${error}`);
  }
};

export const cancelBookingRoom = async (id) => {
  try {
    return await axios.delete(`${url}/${id}`);
  } catch (error) {
    console.log(`error in while calling cancelBookingRoom method ${error} `);
  }
};

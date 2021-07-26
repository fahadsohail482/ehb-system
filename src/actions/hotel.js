import axios from "axios";

export const createHotel = async (token, data) =>
  await axios.post(`${process.env.REACT_APP_API}/create-hotel`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const allHotels = async () =>
  await axios.get(`${process.env.REACT_APP_API}/hotels`);

export const sellerHotels = async (token) =>
  await axios.get(`${process.env.REACT_APP_API}/seller-hotels`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

import React from "react";
<h6>Starters - Non Vegetarian</h6>;
const menu = [
  {
    name: "chicken tikka",
    price: "600",
  },
  {
    name: "Hariyali Chicken Tikka",
    price: "800",
  },
  {
    name: "Tandoori Chicken",
    price: "700",
  },
  {
    name: "Lamb Chops",
    price: "1000",
  },
  {
    name: "Boti Kebab",
    price: "100",
  },
  {
    name: "Lamb Tawa Masala",
    price: "1000",
  },
  {
    name: "Lamb Samosa",
    price: "100",
  },
  {
    name: "Fish Pakora",
    price: "500",
  },
  {
    name: "Fish Amritsari",
    price: "600",
  },
  {
    name: "Fish Amritsari",
    price: "600",
  },
];
<h7>Starters - Vegetarian</h7>;
const veg = [
  {
    name: "Vegetable Spring Roll",
    price: "200",
  },
  {
    name: "Vegetable Samosa",
    price: "100",
  },
  {
    name: "Papadi Chaat",
    price: "200",
  },
  {
    name: "Chilli Paneer",
    price: "300",
  },
  {
    name: "Paneer Tikka",
    price: "500",
  },
  {
    name: "Aloo Tikki Chaat",
    price: "200",
  },
  {
    name: "Paneer Shaslik",
    price: "600",
  },
  {
    name: "Harabhara Kebab",
    price: "300",
  },
];

const Foodmenu = () => {
  return (
    <div className="menu">
      {menu.map((value, index) => (
        <div>
          <div>{value.name}</div>
          <div>{value.price}</div>
        </div>
      ))}
    </div>
  );
};
export default Foodmenu;

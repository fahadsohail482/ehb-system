import React from "react";
const halls = [
  {
    name: "Hassan Marriage Hall",
    capacity: 600,
    menu: [],
  },
  {
    name: "Kanwal Marriage Hall",
    capacity: 600,
    menu: [],
  },
  {
    name: "Solace Marriage Hall",
    capacity: 600,
    menu: [],
  },
  { name: "Tasqand Marriage Hall", capacity: 600, menu: [] },
];
const ManageHalls = () => {
  return (
    <div className="halls">
      {halls.map((value, index) => (
        <div>
          <div>{value.name}</div>
          <div>{value.capacity}</div>
        </div>
      ))}
    </div>
  );
};
export default ManageHalls;

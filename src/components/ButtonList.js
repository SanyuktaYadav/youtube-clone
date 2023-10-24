import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const list = [
    "All",
    "Gaming",
    "Live",
    "Cricket",
    "Soccer",
    "Songs",
    "Cooking",
    "News",
    "Soccer",
    "Songs",
    "Cooking",
  ];
  return (
    <div className="flex">
      {list.map((item, index) => (
        <Button key={`button-${index}`} name={item} />
      ))}
    </div>
  );
};

export default ButtonList;

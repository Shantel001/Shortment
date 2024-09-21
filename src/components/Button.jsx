import React from "react";

const Button = ({ text }) => {
  return (
    <button className="bg-primary text-white p-[15px] rounded-[10px] ">
      {text}
    </button>
  );
};

export default Button;

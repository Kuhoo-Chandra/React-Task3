import "./Colorpick.css";
import { useState } from "react";

function Colourpick() {
  const [isOpen, setIsOpen] = useState(false);
  const [color, setColor] = useState("rgb(255, 255, 255)");

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleColor = (value) => {
    setColor(value);
  };

  const colorOptions = [
    "rgb(254, 0, 0)",
    "rgb(0, 255, 1)",
    "rgb(1, 0, 252)",
    "rgb(255, 255, 0)",
    "rgb(253, 0, 254)",
    "rgb(0, 255, 255)",
    "rgb(254, 165, 0)",
    "rgb(129, 0, 127)",
    "rgb(255, 192, 203)",
    "rgb(254, 99, 71)",
    "rgb(255, 255, 255)",
    "rgb(0, 128, 1)",
    "rgb(0, 206, 209)",
    "rgb(139, 69, 18)",
    "rgb(255, 139, 0)",
    "rgb(70, 129, 179)",
    "rgb(251, 212, 0)",
  ];

  return (
    <div className="carous d-flex flex-row justify-content-center align-items-center shadow-lg" style={{ backgroundColor: color }}>
      <div className="d-flex flex-row text-center">
        <button className="btn btn-success border-1 rounded-0" onClick={handleClick} style={{ maxWidth: "150px" }}>
          Pick a colour
        </button>
      </div>
      {isOpen && (
        <div className="d-flex mt-4 pb-3">
          {colorOptions.map((option, index) => (
            <div
              key={index}
              className="colorbox border border-dark border-1"
              style={{ backgroundColor: option }}
              onClick={() => handleColor(option)}
            ></div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Colourpick;
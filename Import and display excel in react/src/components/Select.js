import React, { useState } from "react";

import "./Select.css";

const Select = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="custom-select">
      <div className="select-wrapper">
        <input
          type="text"
          value={selectedOption}
          placeholder="Select an option"
          readOnly
          className="selected-option"
        />
        <ul className="options-list">
          <li
            className={`option ${selectedOption === "option1" ? "active" : ""}`}
            onClick={() => handleOptionChange({ target: { value: "option1" } })}
          >
            Option 1
          </li>
          <li
            className={`option ${selectedOption === "option2" ? "active" : ""}`}
            onClick={() => handleOptionChange({ target: { value: "option2" } })}
          >
            Option 2
          </li>
          <li
            className={`option ${selectedOption === "option3" ? "active" : ""}`}
            onClick={() => handleOptionChange({ target: { value: "option3" } })}
          >
            Option 3
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Select;

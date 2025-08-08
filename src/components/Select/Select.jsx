import React, { useState } from "react";

const Select = ({ label, options, className }) => {
  const [focused, setFocused] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    if (!selectedOption) {
      setFocused(false);
    }
  };

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className="tw-relative tw-mb-5">
      <select
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={`tw-block tw-w-full tw-px-3 tw-py-3 tw-text-sm tw-text-gray-dark tw-bg-lightGray tw-border tw-border-gray-300 tw-focus:outline-none tw-focus:ring-2 tw-focus:ring-blue-500 tw-rounded-xl ${className}`}
      >
        <option value="" disabled selected hidden>Select Country</option>
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
      <label
        htmlFor="select"
        className={`tw-absolute tw-text-md tw-pb-2.5 tw-text-gray tw-duration-300 tw-origin-0 ${
          focused || selectedOption ? 'tw-top-1 -tw-translate-y-3 tw-text-red-600 tw-font-semibold' : 'tw-top-2/4 -tw-translate-y-1/2'
        }`}
      >
        {label}
      </label>
    </div>
  );
};

export default Select;

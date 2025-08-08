import React, { useState } from "react";

const Input = ({
  label,
  placeholder,
  name,
  type,
  className,
  onChange,
  value,
  Icon,
  required,
  star,
}) => {
  const [focused, setFocused] = useState(false);

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    if (!value) {
      setFocused(false);
    }
  };

  return (
    <div className="tw-relative tw-mb-5">
      <input
        value={value}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        // placeholder={focused ? "" : placeholder}
        name={name}
        id={name}
        type={type}
        required={required}
        className={`tw-block tw-w-full tw-px-2.5 tw-py-1.5 tw-text-sm tw-text-gray-900 tw-bg-transparent tw-rounded-lg tw-border tw-border-gray tw-focus:outline-none ${className}`}
      />
      <label
        htmlFor={name}
        className={`tw-absolute   tw-text-gray-500 tw-origin-0 tw-bg-transparent tw-px-1.5 tw-transition-all tw-duration-300 ${
          focused
            ? "-tw-top-[0.85rem]  tw-text-xs  tw-text-white tw-text-bold tw-text- tw-translate-y-0 tw-left-3 tw-text-blue-600"
            : "tw-top-1/2 tw-left-3 tw-text-sm  tw-text-gray tw-translate-y-[-60%]"
        }`}
      >
        {label}
      </label>
      {/* <span className="tw-text-red-600 tw-font-semibold">{star}</span> */}
      <div className="tw-absolute tw-right-3 tw-top-3">
        {Icon && <i>{Icon}</i>}
      </div>
    </div>
  );
};

export default Input;

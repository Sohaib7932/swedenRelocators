import React, { useState } from "react";

import { useTranslation } from "react-i18next";

const Select = ({
  label,
  name,
  options,
  className,
  onChange,
  value,
  Icon,
  required,
}) => {

  const { t} = useTranslation();
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
      <select
        value={value}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        name={name}
        id={name}
        required={required}
        className={`tw-block tw-w-full tw-px-2.5 tw-py-1.5 tw-text-sm tw-text-gray-900 tw-bg-transparent tw-rounded-lg tw-border tw-border-gray tw-focus:outline-none ${className}`}
      >
        <option value="" disabled hidden>
          {focused ? "" : t(label)}
        </option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {t(option.label)}
          </option>
        ))}
      </select>
      <label
        htmlFor={name}
        className={`tw-absolute tw-text-gray-500 tw-mr-5 tw-origin-0 tw-bg-white tw-px-1.5 tw-transition-all tw-duration-300 ${
          focused
            ? "-tw-top-2 tw-text-xs tw-font-medium tw-translate-y-0 tw-left-3 tw-text-blue-600"
            : "tw-top-1/2 tw-left-3 tw-text-sm tw-text-gray tw-translate-y-[-50%]"
        }`}
      >
        {t(label)}
      </label>
      <div className="tw-absolute tw-right-3 tw-top-3">
        {Icon && <i>{Icon}</i>}
      </div>
    </div>
  );
};

export default Select;

import React from "react";
import { useId } from "react";

const select = ({ options, label, className, ...props }, ref) => {
  const Id = useId();

  return (
    <div className="w-full">
      {label && <label htmlFor={Id} className=""></label>}
      <select
        {...props}
        id={Id}
        ref={ref}
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none foucs:bg-gray-50 diration-200 border-gray-200 w-full ${className}`}
      >
        {options?.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default React.forwardRef(select);

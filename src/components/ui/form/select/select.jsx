import React from "react";
import ReactSelect, { Props } from "react-select";
import { selectStyles } from "./select.styles";

const Select = React.forwardRef(
  (
    { className = "block", label, name, error, labelClassName, ...rest },
    ref
  ) => {
    return (
      <div className={className}>
        {label && (
          <label
            htmlFor={name}
            className={`block font-normal text-sm leading-none mb-3 cursor-pointer ${
              labelClassName || "text-base text-opacity-70"
            }`}
          >
            {label}
          </label>
        )}
        <ReactSelect ref={ref} styles={selectStyles} {...rest} />
        {error && <p className="my-2 text-[13px] text-rose-600">{error}</p>}
      </div>
    );
  }
);
Select.displayName = "Select";
export default Select;

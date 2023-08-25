import cn from "classnames";
import React from "react";

const classes = {
  root: "py-2 px-4 w-full appearance-none transition duration-150 ease-in-out border text-input text-13px lg:text-sm  rounded-sm placeholder-[#B3B3B3] min-h-12 transition duration-200 ease-in-out text-base",
  normal:
    "bg-gray-100 border-gray-300 focus:shadow focus:bg-fill focus:border-primary",
  solid:
    "bg-fill border-orange focus:border-2 focus:outline-none focus:border-primary h-11 md:h-12",
  outline: "border-gray-700 focus:border-primary",
  shadow: "focus:shadow",
};
const Input = React.forwardRef(
  (
    {
      className = "block",
      label,
      name,
      error,
      placeholder,
      variant = "normal",
      shadow = false,
      type = "text",
      inputClassName,
      labelClassName,
      ...rest
    },
    ref
  ) => {
    const rootClassName = cn(
      classes.root,
      {
        [classes.normal]: variant === "normal",
        [classes.solid]: variant === "solid",
        [classes.outline]: variant === "outline",
      },
      {
        [classes.shadow]: shadow,
      },
      inputClassName
    );

    return (
      <div className={className}>
        {label && (
          <label
            htmlFor={name}
            className={`block font-medium text-sm leading-none mb-2 cursor-pointer ${
              labelClassName || "text-base text-opacity-70"
            }`}
          >
            {label}
          </label>
        )}
        <input
          id={name}
          name={name}
          type={type}
          ref={ref}
          placeholder={placeholder}
          className={rootClassName}
          autoComplete="off"
          spellCheck="false"
          aria-invalid={error ? "true" : "false"}
          {...rest}
        />
        {error && <p className="mt-1 text-[13px] text-rose-600">{error}</p>}
      </div>
    );
  }
);

export default Input;

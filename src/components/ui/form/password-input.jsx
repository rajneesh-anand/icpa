import cn from "classnames";
import React, { InputHTMLAttributes, useState } from "react";
import Eye from "@assets/icons/eye-icon";
import EyeOff from "@assets/icons/eye-off-icon";

const classes = {
  root: "py-2 px-4 w-full appearance-none transition duration-150 ease-in-out border text-input text-13px lg:text-sm font-body rounded placeholder-[#B3B3B3] min-h-12 transition duration-200 ease-in-out text-skin-base",
  normal:
    "bg-gray-100 border-gray-300 focus:shadow focus:bg-skin-fill focus:border-skin-primary",
  solid:
    "bg-skin-fill border-skin-two focus:border-2 focus:outline-none focus:border-skin-primary h-11 md:h-12",
  outline: "border-gray-300 focus:border-skin-primary",
  shadow: "focus:shadow",
};

const PasswordInput = React.forwardRef(
  (
    {
      className = "block",
      label,
      name,
      error,
      placeholder,
      variant = "normal",
      shadow = false,
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
    const [show, setShow] = useState(false);

    return (
      <div className={className}>
        {label && (
          <label
            htmlFor={name}
            className="block text-skin-base opacity-70 font-normal text-sm leading-none mb-3 cursor-pointer"
          >
            {label}
          </label>
        )}
        <div className="relative">
          <input
            id={name}
            name={name}
            type={show ? "text" : "password"}
            ref={ref}
            className={rootClassName}
            autoComplete="off"
            spellCheck="false"
            {...rest}
          />
          <label
            htmlFor={name}
            className="absolute right-4 top-4 -mt-2 text-skin-base text-opacity-30 cursor-pointer"
            onClick={() => setShow((prev) => !prev)}
          >
            {show ? (
              <EyeOff className="w-6 h-6" />
            ) : (
              <Eye className="w-6 h-6" />
            )}
          </label>
        </div>
        {error && <p className="my-2 text-[13px] text-rose-600">{error}</p>}
      </div>
    );
  }
);

export default PasswordInput;

PasswordInput.displayName = "PasswordInput";

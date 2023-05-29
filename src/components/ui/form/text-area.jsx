import React, { TextareaHTMLAttributes } from "react";
import cn from "classnames";

const variantClasses = {
  normal:
    "bg-white border border-gray-100 focus:shadow focus:outline-none focus:border-heading",
  solid:
    "border border-gray-100 focus:bg-white focus:border-2 focus:border-primary",
  outline: "border border-gray-300 focus:border-primary",
};

const TextArea = React.forwardRef((props, ref) => {
  const {
    className,
    label,
    name,
    placeholder,
    error,
    variant = "normal",
    shadow = false,
    inputClassName,
    labelClassName,
    ...rest
  } = props;
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
      <textarea
        id={name}
        name={name}
        className={cn(
          "px-4 py-3 flex items-center w-full rounded appearance-none transition duration-300 ease-in-out text-base text-[13px] lg:text-sm focus:outline-none focus:ring-0 placeholder-[#B3B3B3]",
          shadow && "focus:shadow",
          variantClasses[variant],
          inputClassName
        )}
        autoComplete="off"
        spellCheck="false"
        rows={5}
        ref={ref}
        // @ts-ignore
        placeholder={placeholder}
        {...rest}
      />
      {error && <p className="my-2 text-[13px] text-rose-600">{error}</p>}
    </div>
  );
});

export default TextArea;

TextArea.displayName = "TextArea";

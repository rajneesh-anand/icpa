import CloseIcon from "@assets/icons/close-icon";
import cn from "classnames";

const variantBasedClasses = {
  primary: "bg-yellow",
};

const HighlightedBar = ({
  variant = "primary",
  onClose,
  children,
  className,
}) => {
  return (
    <div
      className={cn(
        "w-full min-h-[40px] py-2 px-4 md:px-6 lg:px-8 flex items-center justify-center relative text-sm ",
        variantBasedClasses[variant],
        className
      )}
    >
      {children}
      <button
        onClick={onClose}
        aria-label="Close Button"
        className="outline-none absolute flex items-center justify-center w-7 md:w-8 h-7 md:h-8 rounded-full right-2 md:right-3 transition-colors duration-200 hover:bg-skin-fill hover:bg-opacity-10 focus:bg-skin-fill focus:bg-opacity-10"
      >
        <CloseIcon />
      </button>
    </div>
  );
};

export default HighlightedBar;

import CloseIcon from "@assets/icons/close-icon";
import cn from "classnames";

const variantBasedClasses = {
  primary: "bg-yellow",
  purple: "bg-indigo-900",
};

const HighlightedBar = ({ variant, onClose, children, className }) => {
  return (
    <div
      className={cn(
        "w-full min-h-[32px] py-1 px-4 md:px-6 lg:px-8 flex items-center justify-center relative  ",
        variantBasedClasses[variant],
        className
      )}
    >
      {children}
      <button
        onClick={onClose}
        aria-label="Close Button"
        className="outline-none absolute flex items-center align-middle justify-center w-7 md:w-8 h-7 md:h-8 rounded-full right-2 md:right-3 transition-colors duration-200 hover:bg-fill hover:bg-opacity-70 focus:bg-fill focus:bg-opacity-10"
      >
        <CloseIcon color="#ffffff" />
      </button>
    </div>
  );
};

export default HighlightedBar;

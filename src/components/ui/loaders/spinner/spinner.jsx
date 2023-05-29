import styles from "./spinner.module.css";
import cn from "classnames";

const Spinner = (props) => {
  const { className, showText = true, text = "Loading", simple } = props;
  return (
    <>
      {simple ? (
        <span className={cn(className, styles.simple_loading)} />
      ) : (
        <span
          className={cn(
            "flex h-screen w-full flex-col items-center justify-center",
            className
          )}
        >
          <span className={styles.loading} />

          {showText && (
            <h3 className="text-lg font-semibold italic text-body">{text}</h3>
          )}
        </span>
      )}
    </>
  );
};

export const SpinnerLoader = (props) => {
  const { className } = props;
  return (
    <span
      className={cn(
        "inline-flex h-5 w-5 animate-spin rounded-full border-2 border-t-2 border-transparent border-t-accent",
        className
      )}
    />
  );
};

export default Spinner;

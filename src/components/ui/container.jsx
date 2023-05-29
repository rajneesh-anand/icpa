import cn from "classnames";

const Container = ({ children, className, el = "div", clean }) => {
  const rootClassName = cn(className, {
    "mx-auto max-w-[1920px] px-4 md:px-6 lg:px-8 2xl:px-10": !clean,
  });

  return <div className={rootClassName}>{children}</div>;
};

export default Container;

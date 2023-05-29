import React from "react";
import ActiveLink from "@components/ui/active-link";
import useBreadcrumb, { convertBreadcrumbTitle } from "@utils/use-breadcrumb";
import cn from "classnames";

const BreadcrumbItem = ({ children, ...props }) => {
  return (
    <li
      className="text-sm text-skin-muted px-2.5 transition duration-200 ease-in first:ps-0 last:pe-0 hover:text-skin-base"
      {...props}
    >
      {children}
    </li>
  );
};

const BreadcrumbSeparator = ({ children, ...props }) => {
  return (
    <li className="text-base mt-[1px]" {...props}>
      {children}
    </li>
  );
};

export const BreadcrumbItems = (props) => {
  let children = React.Children.toArray(props.children);

  children = children.map((child, index) => (
    <BreadcrumbItem key={`breadcrumb_item${index}`}>{child}</BreadcrumbItem>
  ));

  const lastIndex = children.length - 1;

  children = children.reduce((acc, child, index) => {
    const notLast = index < lastIndex;
    if (notLast) {
      acc.push(
        child,
        <BreadcrumbSeparator key={`breadcrumb_sep${index}`}>
          {props.separator}
        </BreadcrumbSeparator>
      );
    } else {
      acc.push(child);
    }
    return acc;
  }, []);

  return (
    <div className={cn("breadcrumb flex items-center")}>
      <ol className="flex items-center w-full overflow-hidden">{children}</ol>
    </div>
  );
};

const Breadcrumb = ({
  separator = <i className="fi-bs-angle-right text-opacity-40 text-[14px]"></i>,
}) => {
  const breadcrumbs = useBreadcrumb();

  return (
    <BreadcrumbItems separator={separator}>
      <ActiveLink href="/" activeClassName="font-medium text-heading">
        <a className="inline-flex items-center">Home</a>
      </ActiveLink>

      {breadcrumbs?.map((breadcrumb) => (
        <ActiveLink
          href={breadcrumb.href}
          activeClassName="font-medium text-heading"
          key={breadcrumb.href}
        >
          <a className="capitalize">
            {convertBreadcrumbTitle(breadcrumb.breadcrumb)}
          </a>
        </ActiveLink>
      ))}
    </BreadcrumbItems>
  );
};

export default Breadcrumb;

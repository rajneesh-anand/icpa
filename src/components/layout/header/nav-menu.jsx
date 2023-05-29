import Link from "@components/ui/link";
import ListMenu from "@components/ui/list-menu";
import cn from "classnames";

const NavMenu = ({ data, className }) => {
  return (
    <nav className={cn("hidden ml-auto lg:flex lg:items-center  ", className)}>
      {data?.map((item, idx) => (
        <div
          className={`navMenu group cursor-pointer py-1.5  ml-4 relative`}
          key={idx}
        >
          <Link
            href={item.path}
            className="uppercase font-medium  text-sm lg:text-[14px] text-sky-800 py-2 hover:text-orange"
          >
            {item.label}
          </Link>

          {item?.subMenu && Array.isArray(item?.subMenu) && (
            <div className="subMenu absolute z-30 opacity-0 shadow-dropDown transition-all duration-300 invisible bg-gray-100 ltr:left-0 rtl:right-0 w-[220px] xl:w-[240px] group-hover:opacity-100">
              <ul className="py-5 text-sm text-brand-muted">
                {item.subMenu.map((menu, index) => {
                  const dept = 1;
                  const menuName = `menu-${dept}-${index}`;
                  return (
                    <ListMenu
                      dept={dept}
                      data={menu}
                      hasSubMenu={menu.subMenu}
                      menuName={menuName}
                      key={menuName}
                      menuIndex={index}
                    />
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      ))}
    </nav>
  );
};

export default NavMenu;

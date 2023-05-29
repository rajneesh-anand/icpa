import cn from "classnames";
import { Disclosure, Transition } from "@headlessui/react";
import ArrowDown from "@assets/icons/arrow-down";

export const Accordion = ({ item, variant = "gray" }) => {
  const { title, content } = item;
  return (
    <div className="w-full">
      <div className="w-full mx-auto mb-4 shadow-category bg-skin-fill rounded group">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between w-full px-5 py-4 2xl:px-6 2xl:py-6 text-base font-medium text-start text-skin-base focus:outline-none">
                <span
                  className={cn(
                    "text-sm font-medium leading-relaxed text-heading pe-2",
                    {
                      "md:text-base": variant === "gray",
                      "md:text-base lg:text-lg": variant === "transparent",
                    }
                  )}
                >
                  {title}
                </span>
                <ArrowDown
                  className={`text-xl lg:text-2xl text-skin-base text-opacity-60 group-hover:text-opacity-100 -mr-2 lg:-mr-1.5 flex-shrink-0 ${
                    open ? "transform rotate-180" : ""
                  }`}
                />
              </Disclosure.Button>

              <Transition
                show={open}
                enter="transition duration-500 ease-out"
                enterFrom="transform scale-5 opacity-0"
                enterTo="transform scale-10 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-5 opacity-0"
              >
                {open && (
                  <Disclosure.Panel static>
                    <div className="px-5 pb-4 2xl:pb-7  2xl:px-6  -mt-1 2xl:mt-0 leading-7 text-sm 2xl:text-15px  text-skin-base opacity-70">
                      {content}
                    </div>
                  </Disclosure.Panel>
                )}
              </Transition>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
};

export default Accordion;

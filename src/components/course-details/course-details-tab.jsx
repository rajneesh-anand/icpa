import { useState } from "react";
import { Tab } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function CourseDetailTab({ list }) {
  let [tabHeading] = useState({
    Course_Overview: "",
    Course_Description: "",
  });

  return (
    <div className="w-full">
      <Tab.Group>
        <Tab.List className="block border-b border-slate-200">
          {Object.keys(tabHeading).map((item) => (
            <Tab
              key={item}
              className={({ selected }) =>
                classNames(
                  "relative inline-block transition-all text-[15px] lg:text-17px leading-5 text-brand-dark focus:outline-none focus:border-none pb-3 lg:pb-5 hover:text-brand mr-8 ",
                  selected
                    ? "font-semibold after:absolute after:w-full after:h-0.5 after:bottom-0 after:translate-y-[1px] after:left-0  after:bg-orange"
                    : ""
                )
              }
            >
              {item.split("_").join(" ")}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2 lg:mt-4">
          <Tab.Panel>
            {list.map((item, index) => (
              <div key={index} className="ml-2">
                <p className="px-4 py-2 rounded bg-indigo-100 mb-2 font-medium text-[18px] text-slate-700">
                  {item.unit_name}
                </p>
                {item.unit_chapters.map((itm, idx) => (
                  <div key={idx} className="ml-2">
                    <p className="px-4 mb-2 font-normal text-[16px] text-slate-700/60">
                      {itm.chapter_name}
                    </p>
                  </div>
                ))}
              </div>
            ))}
          </Tab.Panel>
          <Tab.Panel></Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}

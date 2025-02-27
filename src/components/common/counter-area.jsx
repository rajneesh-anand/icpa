import React from "react";
import Count from "./count";
import Container from "@components/ui/container";
import { counter_data } from "@data/counter";
import { FadeIn, FadeInStagger } from "@components/common/fade-in";

// counter data

const CounterArea = ({ style_counter }) => {
  return (
    <>
      <section className="bg-gray-50 py-16 mt-8">
        <Container>
          <div className="flex justify-center">
            <div className="space-y-5 text-center">
              <h1 className="text-2xl text-gray-800 uppercase tracking-widest dark:text-white">
                OUR RECOGNITIONS
              </h1>
              <div className="h-0.5 bg-red-500 w-14 mx-auto"></div>
              <p className="text-gray-700 pb-8 ">
                ICPA Institute provides quality education at affordable price.
                We have been serving the students for more than 10 years.
              </p>
            </div>
          </div>
        </Container>
        <Container>
          <FadeInStagger faster className="grid grid-cols-12 gap-2 ">
            {counter_data.map((item, index) => (
              <FadeIn
                key={index}
                className="col-span-6 md:col-span-4 lg:col-span-3 shadow-md rounded-lg bg-yellow bg-opacity-25 "
              >
                <div className="counter-item py-16 text-center">
                  <div className="flex justify-center mb-2">
                    <img
                      src={item.icon}
                      alt={item.title}
                      height={112}
                      width={112}
                    />
                  </div>
                  <div className="counter-item__content">
                    {item.count_number && (
                      <h4 className="counter-item__title">
                        <span className="counter">
                          <Count
                            add_style={true}
                            number={item.count_number}
                            text={item.thousand}
                          />
                        </span>
                      </h4>
                    )}
                    <p className="uppercase font-semibold text-[12px] lg:text-[16px]">
                      {item.title}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </FadeInStagger>

          {/* <section>








            <div className="grid grid-cols-12 gap-2">
              {counter_data.map((item) => (
                <div
                  key={item.id}
                  className="col-span-6 md:col-span-4 lg:col-span-3 shadow-md rounded-lg bg-yellow bg-opacity-25 "
                >
                  <div className="counter-item py-16 text-center">
                    <div className="flex justify-center mb-2">
                      <img
                        src={item.icon}
                        alt={item.title}
                        height={112}
                        width={112}
                      />
                    </div>
                    <div className="counter-item__content">
                      {item.count_number && (
                        <h4 className="counter-item__title">
                          <span className="counter">
                            <Count
                              add_style={true}
                              number={item.count_number}
                              text={item.thousand}
                            />
                          </span>
                        </h4>
                      )}
                      <p className="uppercase font-semibold text-[12px] lg:text-[16px]">
                        {item.title}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section> */}
        </Container>
      </section>
    </>
  );
};

export default CounterArea;

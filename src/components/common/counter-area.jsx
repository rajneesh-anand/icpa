import React from "react";
import Count from "./count";
import Container from "@components/ui/container";
import { counter_data } from "@data/counter";

// counter data

const CounterArea = ({ style_counter }) => {
  return (
    <Container>
      <section>
        <div className="grid grid-cols-12 gap-2">
          {counter_data.map((item) => (
            <div
              key={item.id}
              className="col-span-6 md:col-span-4 xl:col-span-3 shadow-card rounded-lg"
            >
              <div className="counter-item py-16 text-center">
                <div className="mb-25">
                  <i className={item.icon}></i>
                </div>
                <div className="counter-item__content">
                  <h4 className="counter-item__title">
                    <span className="counter">
                      <Count
                        add_style={true}
                        number={item.count_number}
                        text={item.thousand}
                      />
                    </span>
                  </h4>
                  <p>{item.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
};

export default CounterArea;

import Container from "@components/ui/container";
import React from "react";

// feature_data_3
const feature_data_3 = [
  {
    icon: "fi fi-rr-paper-plane",
    title: "Online Courses",
  },
  {
    icon: "fi fi-rr-user",
    title: "Expert Trainer",
  },
  {
    icon: "fi fi-rr-document",
    title: "Get Certificate",
  },
  {
    icon: "fi fi-rr-calendar",
    title: "Life Time Access",
  },
];
const FeatureArea = ({ style_about }) => {
  return (
    <Container>
      <section
        className="feature-area pt-115 pb-90 wow fadeInUp"
        data-wow-duration=".8s"
        data-wow-delay=".3s"
      >
        <div>
          {style_about ? (
            ""
          ) : (
            <div className="section-title mb-70">
              <span className="tp-bline-stitle mb-15">What We Offer</span>
              <h2 className="tp-section-title">For Your Future Learning.</h2>
            </div>
          )}
          <div className="tp-feature-cn">
            <div className="grid grid-cols-12 gap-2">
              {feature_data_3.map((item, i) => (
                <div key={i} className="xl:col-span-3 md:col-span-6">
                  <div
                    className="tpfea tp-feature-item text-center mb-30 wow fadeInUp"
                    data-wow-duration=".8s"
                    data-wow-delay="1s"
                  >
                    <div className="tpfea__icon mb-25">
                      <i className={item.icon}></i>
                    </div>
                    <div className="tpfea__text">
                      <h5 className="tpfea__title mb-5">{item.title}</h5>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default FeatureArea;

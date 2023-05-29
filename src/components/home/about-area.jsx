import Link from "next/link";
import React from "react";

// shape_img data
const shape_img = [
  {
    id: 1,
    shape: "/assets/img/about/about-shape-03.png",
    cls: "tp-aline-one",
  },
  {
    id: 2,
    shape: "/assets/img/about/about-shape-04.png",
    cls: "tp-aline-two",
  },
  {
    id: 3,
    shape: "/assets/img/about/about-shape-05.png",
    cls: "tp-aline-three",
  },
];

// about info
const about_info = {
    img_1: "/assets/img/about/about-img.png",
    img_2: "/assets/img/about/about-shape-01.png",
    img_3: "/assets/img/about/about-shape-02.png",
    about_title: "About Our Courses",
    sub_title:"Explore Thousands of Creative Classes.",
    des: <>Dramatically supply transparent deliverables beforese backward comp internal or "organic" sources. Comp  transparent leverage other.</>,
    about_btn: "Read More"
}

const {img_1, img_2, img_3, about_title, sub_title, des, about_btn} = about_info

const AboutArea = () => {
  return (
    <>
      <section
        className="tp-about-area pt-120 pb-90 wow fadeInUp"
        data-wow-duration="1.5s"
        data-wow-delay=".4s"
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xxl-7 col-xl-6 col-lg-6 col-md-6">
              <div className="tp-about-img p-relative pb-30 ml-10">
                <img src={img_1} alt="about-img" />
                <div className="tp-about-line-shape d-none d-md-block">
                  {shape_img.map((item) => (
                    <img
                      key={item.id}
                      src={item.shape}
                      alt="about-shape"
                      className={item.cls}
                    />
                  ))}
                
                </div>
                <div className="tp-about-shape  d-none d-xl-block">
                  <img
                    src={img_2}
                    alt="about-shape"
                    className="a-shape-one"
                  />
                  <img
                    src={img_3}
                    alt="about-shape"
                    className="a-shape-two"
                  />
                </div>
              </div>
            </div>
            <div className="col-xxl-5 col-xl-6 col-lg-6 col-md-6">
              <div className="tp-about-content pb-30 ml-80">
                <div className="section-title mb-55">
                  <span className="tp-sub-title mb-20">{about_title}</span>
                  <h2 className="tp-section-title mb-15">
                   {sub_title}
                  </h2>
                  <p>
                    {des}
                  </p>
                </div>
                <div className="about-btn">
                  <Link href="/about" className="tp-btn">
                    {about_btn}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutArea;

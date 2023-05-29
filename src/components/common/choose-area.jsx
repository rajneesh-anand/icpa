import Link from "next/link";
import React from "react";

// choose data 
const choose_data = {
title: "Why Choose Us",
sub_title: "Why You Choose Our E-Pora Online learning",
des: <>Dramatically supply transparent deliverables before & you
backward comp internal or "organic" sources.</>,
  experiences_years: "23",


}
const {title,sub_title, des, experiences_years} = choose_data

// choose list data
const choose_list_data = [
  {
    list: "Increasing Your Learning Skills",
  },
  {
    list: "High Quality Video  & Audio Classes",
  },
  {
    list: "Finish Your Course, Get Certificate",
  },
];
const ChooseArea = ({style_about, style_2}) => {
  return (
    <>
      <section
        className={`choose-area bg-bottom ${style_about ? "pb-120" : "grey-bg"} ${style_2 ? "pt-120 pb-90" : ""} wow fadeInUp`}
        data-wow-duration=".8s"
        data-wow-delay=".4s"
        style={{ backgroundImage: style_about ? null : `url(/assets/img/bg/shape-bg-1.png)`  }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-5 col-lg-6 col-md-12">
              <div className="tp-choose-content mb-30">
                <div className="section-title mb-25">
                  <span className="tp-sub-title-box mb-15">{title}</span>
                  <h2 className="tp-section-title mb-20">
                   {sub_title}
                  </h2>
                  <p>
                    {des}
                  </p>
                </div>
                <div className="tp-choose-list tp-choose-bg mb-60">
                  <ul>
                    {choose_list_data.map((item, i) => (
                      <li key={i}>
                        <div className="tp-list-bg">
                          <i className="fa-light fa-check"></i>
                          {item.list}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="choose-btn">
                  <Link href="/about" className="tp-btn">
                    More Details
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-7 col-lg-6 col-md-12">
              <div className="tp-choose-img tp-choose-img-2 p-relative mb-30 mr-50 text-end">
                <img src="/assets/img/bg/choose-2-img.jpg" alt="choose-img" />
                <div className="tpchoose-img-text tp-chose-shape d-none d-md-block">
                  <ul>
                    <li>
                      <i>{experiences_years}+</i>
                      <p>Years Experiences</p>
                    </li>
                    <li>
                      <i className="fa-light fa-check"></i>
                      <p>Fully Safe & Secure</p>
                    </li>
                    <li>
                      <p>Total Students</p>
                      <img
                        src="/assets/img/icon/choose-2-shape.png"
                        alt="choose-shape"
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ChooseArea;

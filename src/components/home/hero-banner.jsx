import Link from "@components/ui/link";
import React from "react";
import Container from "@components/ui/container";

const HeroBanner = () => {
  return (
    <Container className="bg-[url('/images/banner/banner-01.jpg')]">
      <section className="banner-area fixed relative">
        <div className="banner-bg">
          <div className="grid grid-cols-12">
            <div className="col-span-12 lg:col-span-6">
              <div className="hero-content">
                <span>Learn New Skills & Popular Courses</span>
                <h2 className="hero-title mb-35">
                  For Computer <i>Professionals</i>.
                </h2>
                <p>
                  Dramatically supply transparent deliverables before backward
                  <br />
                  comp internal or "organic" sources. Competently leverage
                  other.
                </p>
                <div className="tp-banner-btn">
                  <Link href="/course-list" className="tp-btn">
                    Explore Courses
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-6">
              <div className="banner-info">
                <ul>
                  <li>
                    <span>10+K</span>Students
                  </li>
                  <li>
                    <span>3.5K</span>Free Pro Courses
                  </li>
                  <li>
                    <span>
                      4.7<i className="fi fi-rr-star "></i>
                    </span>
                    Reviews
                  </li>
                </ul>
              </div>
            </div>
            <div className="banner-shape hidden lg:block">
              <img
                src="/images/banner/banner-shape-01.png"
                alt="banner-shape"
                className="b-shape"
              />
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default HeroBanner;

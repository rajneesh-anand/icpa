import Link from "next/link";
import React from "react";
import Container from "@components/ui/container";
import { category_data } from "@data/course-category";

const CategoryArea = () => {
  return (
    <Container className="bg-[url('/images/bg/shape-bg-1.png')]">
      <section
        className="tp-category-area bg-bottom  pt-110 pb-80 wow fadeInUp"
        data-wow-duration="1.5s"
        data-wow-delay=".4s"
      >
        <div className="flex items-center justify-center section-title">
          <h2 className="tp-section-title">Top Categories</h2>
        </div>
        <div className="grid grid-cols-12 gap-2">
          {category_data.map((item) => (
            <div
              key={item.id}
              className="col-span-12 xl:col-span-3 md:col-span-6"
            >
              <div className="tp-cat-item mb-40 flex items-center">
                <div className="tp-category-icon mr-15">
                  <img src={item.img} alt="category-img" />
                </div>
                <h4 className="tp-category-title">
                  <Link href={item.link}>{item.title}</Link>
                </h4>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
};

export default CategoryArea;

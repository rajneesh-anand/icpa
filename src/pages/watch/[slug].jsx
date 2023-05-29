import React from "react";
import PlayList from "@components/course/playlist";
import Container from "@components/ui/container";
import Layout from "@components/layout";
import { courseData } from "@data/course";
import { getSession } from "next-auth/react";
import axios from "axios";
import Image from "next/image";
import Link from "@components/ui/link";

function CoursePlaylist({ data }) {
  return (
    <Container>
      {data ? (
        <PlayList mediaData={data} />
      ) : (
        <div className="flex flex-col items-center justify-center h-[583px]">
          <Image
            src="/images/hero/empty-cart.svg"
            alt="no-product"
            width={280}
            height={280}
          />

          <p className="my-8 font-medium text-[18px] text-red-700">
            You have not puchased the course !
          </p>
          <Link href="/" className="underline hover:no-underline text-cyan-600">
            Get the premium courses at affordable price !
          </Link>
        </div>
      )}
    </Container>
  );
}
CoursePlaylist.Layout = Layout;

export default CoursePlaylist;

export const getServerSideProps = async (ctx) => {
  const session = await getSession(ctx);
  const { slug } = ctx.params;
  const course = courseData.find((itm) => itm.slug === slug);

  if (course.course_type === "free") {
    return {
      props: {
        data: course.course_media.length > 0 ? course.course_media : null,
      },
    };
  } else {
    if (!session) {
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      };
    } else {
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_NODE_API}/order/order-list`,
        { email: session?.user?.email },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const user_paid_courses = data.orders;

      if (user_paid_courses.length > 0) {
        let user_course = user_paid_courses.find(
          (item) => JSON.parse(item.orderItem).slug === slug
        );

        if (user_course) {
          return {
            props: {
              data: course.course_media.length > 0 ? course.course_media : null,
            },
          };
        } else {
          return {
            props: { data: null },
          };
        }
      } else {
        return {
          props: { data: null },
        };
      }
    }
  }
};

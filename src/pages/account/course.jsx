import Seo from "@components/seo/seo";
import Container from "@components/ui/container";
import Layout from "@components/layout";
import { getSession, useSession, signOut } from "next-auth/react";
import AccountLayout from "@components/account/account-layout";
import CourseTable from "@components/course/course-table";
import axios from "axios";
import Link from "@components/ui/link";
import Image from "next/image";

export default function CoursePage({ courses }) {
  return (
    <>
      <Seo
        title="My Courses | ICPA Institue"
        description="Fastest E-commerce template built with React, NextJS, TypeScript, React-Query and Tailwind CSS."
        path="account/course"
      />
      {courses.length > 0 ? (
        <AccountLayout>
          <CourseTable data={courses} />
        </AccountLayout>
      ) : (
        <Container>
          <div className="flex flex-col items-center justify-center h-[583px]">
            <Image
              src="/images/hero/empty-cart.svg"
              alt="no-product"
              width={280}
              height={280}
            />

            <p className="my-8 font-medium text-[18px] text-red-700">
              You have not purchased any premium course!
            </p>
            <Link
              href="/"
              className="underline hover:no-underline text-cyan-600"
            >
              Get the premium courses at affordable price !
            </Link>
          </div>
        </Container>
      )}
    </>
  );
}

CoursePage.Layout = Layout;

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  const { data } = await axios.post(
    `${process.env.NEXT_PUBLIC_NODE_API}/order/order-list`,
    { email: session?.user?.email },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return {
    props: {
      courses: data.orders,
    },
  };
};

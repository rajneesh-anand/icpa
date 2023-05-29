import React, { useEffect, useState } from "react";
import Image from "next/image";
import CourseDetailTab from "./course-details-tab";
import usePrice from "@utils/use-price";
import { useModalAction } from "@components/common/modal/modal.context";
import { useRouter } from "next/router";
import Link from "@components/ui/link";
import { useSession } from "next-auth/react";

const CourseDetailsArea = ({ data }) => {
  const { openModal } = useModalAction();
  const [processingStatus, setProcessingStatus] = useState(false);
  const router = useRouter();
  const { data: session } = useSession();

  const { price, basePrice, discount } = usePrice({
    amount: Number(data.sale_price),
    baseAmount: Number(data.price),
    currencyCode: "INR",
  });

  const initializeRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    if (!session) {
      return openModal("LOGIN_VIEW");
    } else {
      setProcessingStatus(true);
      const res = await initializeRazorpay();

      if (!res) {
        alert("Razorpay SDK Failed to load");
        return;
      }
      const data = await fetch(
        `${process.env.NEXT_PUBLIC_NODE_API}/payment/razorpay/create`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: session?.user?.name,
            email: session?.user?.email,
            course: {
              name: title,
              slug: slug,
              image: image,
              playlistId: youtube_playlist_id,
            },
            slug: slug,
          }),
        }
      ).then((t) => t.json());
      let orderNumber = data.orderNumber;
      var options = {
        key: process.env.RAZORPAY_KEY,
        name: "ICPA Institute",
        currency: data.currency,
        amount: data.amount,
        order_id: data.id,
        description: "Thank you for placing an order",
        image: `${process.env.NEXT_PUBLIC_SITE_URL}/images/logo.jpg`,
        handler: async function (response) {
          setProcessingStatus(false);
          const bodydata = {
            paymentId: response.razorpay_payment_id,
            orderId: response.razorpay_order_id,
            signature: response.razorpay_signature,
            orderNumber: orderNumber,
          };
          const data = await fetch(
            `${process.env.NEXT_PUBLIC_NODE_API}/payment/razorpay/verify`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(bodydata),
            }
          ).then((t) => t.json());

          if (data.message === "success") {
            router.push("/account/course");
          } else {
            setError("failed");
          }
        },
        prefill: {
          name: " ",
          email: "",
          contact: "",
        },
      };

      const paymentObject = window.Razorpay(options);
      paymentObject.open();
    }
  };

  return (
    <div className="grid grid-cols-12 my-2">
      <div className="col-span-12 lg:col-span-8">
        <div className="relative h-[240px] lg:h-[400px]">
          <Image
            src={data.image ?? productPlaceholder}
            alt={data.title || "course-image"}
            layout="fill"
            quality={100}
            className="object-cover rounded-md"
          />
        </div>
        <div>
          <p className="py-8">{data.about_course_details}</p>
        </div>
        <div>
          <CourseDetailTab list={data.course_media} />
        </div>
      </div>
      <div className="col-span-12 lg:col-span-4 rounded-sm border broder-slate-200 mt-4 lg:mt-0  lg:ml-2">
        <div className="p-4 lg:p-8">
          <table>
            <tbody>
              <tr>
                <td>
                  <i className="fi-rs-book text-orange text-[18px]"></i>{" "}
                  <label>Lesson - Units</label>
                </td>
                <td className="pl-6">{data.total_Unit}</td>
              </tr>
              <tr>
                <td>
                  <i className="fi-rs-clock text-orange text-[18px]"></i>{" "}
                  <label>Duration</label>
                </td>
                <td className="pl-6">{data.course_duration}</td>
              </tr>
              <tr>
                <td>
                  <i className="fi fi-rr-user text-orange text-[18px]"></i>{" "}
                  <label>Enrolled Students</label>
                </td>
                <td className="pl-6">{data.total_student}</td>
              </tr>
              <tr>
                <td>
                  <i className="fi fi-sr-stats text-orange text-[18px]"></i>{" "}
                  <label>Skill Level</label>{" "}
                </td>
                <td className="pl-6">{data.skill_level}</td>
              </tr>
              <tr>
                <td>
                  <i className="fi fi-rr-comments text-orange text-[18px]"></i>{" "}
                  <label>Course Language</label>{" "}
                </td>
                <td className="pl-6">{data.course_language}</td>
              </tr>
              <tr>
                <td>
                  <i className="fi fi-rs-diploma text-orange text-[18px]"></i>{" "}
                  <label>Certificate</label>{" "}
                </td>
                <td className="pl-6">{data.certificate}</td>
              </tr>
            </tbody>
          </table>
          <div className="mt-8">
            {data.course_type === "free" ? (
              <>
                <div className="w-full text-center py-[4px] px-[16px] lg:py-[6px] lg:px-[24px] bg-[#245d51]/75 rounded-sm mb-4">
                  <p className="text-[14px] lg:text-[18px] text-white">Free</p>
                </div>

                <div className="w-full text-center py-[4px] px-[16px] lg:py-[6px]  lg:px-[24px]  bg-orange/90 rounded-sm text-[14px] lg:text-[18px] text-white">
                  <Link
                    href={`/watch/${data.slug}`}
                    className="w-full text-[14px] lg:text-[18px] text-white"
                  >
                    Watch Now
                  </Link>
                </div>
              </>
            ) : basePrice === price ? (
              <>
                <div className="w-full text-center py-[4px] px-[16px] lg:py-[6px] lg:px-[24px] bg-[#245d51]/75 rounded-sm mb-4">
                  <p className="text-[14px] lg:text-[18px] text-white">
                    {price}
                  </p>
                </div>

                <button
                  onClick={handlePayment}
                  className="w-full text-center py-[4px] px-[16px] lg:py-[6px]  lg:px-[24px]  bg-orange/90 rounded-sm text-[14px] lg:text-[18px] text-white"
                >
                  {processingStatus ? "Processing ... " : "Pay Now"}
                </button>
              </>
            ) : (
              <>
                <div className="w-full flex justify-center items-center py-[4px] px-[16px] lg:py-[6px] lg:px-[24px] bg-[#245d51]/75 rounded-sm mb-4">
                  <p className="text-[18px] lg:text-[20px] text-white">
                    {price}
                  </p>
                  <del className="ml-1 text-[12px] text-white text-opacity-70">
                    {basePrice}
                  </del>
                </div>

                <button
                  onClick={handlePayment}
                  className="w-full text-center py-[4px] px-[16px] lg:py-[6px]  lg:px-[24px]  bg-orange/90 rounded-sm text-[14px] lg:text-[18px] text-white"
                >
                  {processingStatus ? "Processing ... " : "Pay Now"}
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailsArea;

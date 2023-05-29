import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import relativeTime from "dayjs/plugin/relativeTime";
import timezone from "dayjs/plugin/timezone";
import Image from "next/image";
import Link from "@components/ui/link";

export const CreatedAt = ({ createdAt }) => {
  dayjs.extend(relativeTime);
  dayjs.extend(utc);
  dayjs.extend(timezone);
  return (
    <span className="whitespace-nowrap">
      {dayjs.utc(createdAt).tz(dayjs.tz.guess()).fromNow()}
    </span>
  );
};

export const Status = ({ item }) => {
  return (
    <span className={item?.status?.name?.replace(/\s/g, "_").toLowerCase()}>
      <span
        className="bullet"
        style={{ backgroundColor: item?.status?.color }}
      />
      {item?.status?.name}
    </span>
  );
};

const CourseTable = ({ data }) => {
  return (
    <>
      <div className="my-4 text-center ">
        <h2 className="font-medium text-sm md:text-xl text-orange uppercase py-4">
          My Courses
        </h2>
      </div>

      {data?.map((itm, idx) => {
        return (
          <div key={idx} className="flex flex-col lg:flex-row mb-6">
            <div className="h-auto w-full lg:w-2/3 bg-slate-100">
              <div
                className={`w-full flex justify-start items-center  px-8 py-4 md:py-7 relative `}
              >
                <Image
                  src={
                    JSON.parse(itm.orderItem).image ??
                    "/placeholder/cart-item.svg"
                  }
                  width={100}
                  height={100}
                  loading="eager"
                  alt={"Product Image"}
                  className="object-cover"
                />
                <div className="pl-3 md:pl-4">
                  <p> {JSON.parse(itm.orderItem).name}</p>
                </div>
              </div>
              <div className="pl-8 pb-8">
                <Link
                  href={`/watch/${JSON.parse(itm.orderItem).slug}`}
                  className="py-[6px] px-6 bg-orange/90 rounded-sm text-[18px] text-white"
                >
                  Watch Now
                </Link>
              </div>
            </div>
            <div className="h-auto w-full lg:w-1/3 bg-white shadow-lg rounded-sm border border-gray-200">
              <div className="overflow-x-auto p-3">
                <table className="table-auto w-full font-poppins">
                  <tbody className="text-sm divide-y divide-gray-100">
                    <tr>
                      <td className="p-2">
                        <h3 className="font-medium text-[12px] lg:text-[14px]">
                          Order Number
                        </h3>
                      </td>
                      <td className="p-2">
                        <h3 className="font-medium text-left text-[12px] lg:text-[14px]">
                          {itm.orderNumber}
                        </h3>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2">
                        <h3 className="font-medium text-[12px] lg:text-[14px]">
                          Order Date
                        </h3>
                      </td>
                      <td className="p-2">
                        <h3 className="font-medium text-left text-[12px] lg:text-[14px]">
                          {dayjs(itm.orderDate).format("MMM D, YYYY")}
                        </h3>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2">
                        <h3 className="font-medium text-[12px] lg:text-[14px]">
                          Amount
                        </h3>
                      </td>
                      <td className="p-2">
                        <h3 className="font-medium text-left text-[12px] lg:text-[14px]">
                          &#x20B9; {JSON.parse(itm.amount)}
                        </h3>
                      </td>
                    </tr>

                    <tr>
                      <td className="p-2">
                        <h3 className="font-semibold text-[14px] lg:text-[18px]">
                          Total Amount
                        </h3>
                      </td>
                      <td className="p-2">
                        <h3 className="font-medium text-left text-[14px] lg:text-[18px] ">
                          &#x20B9; {JSON.parse(itm.totalAmount)}
                        </h3>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CourseTable;

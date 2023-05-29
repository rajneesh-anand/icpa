import { useUI } from "@contexts/ui.context";
import Link from "@components/ui/link";
import { useSession, signOut } from "next-auth/react";

export default function mobileAuthMenu() {
  const { data: session, status } = useSession();
  const { closeDrawer } = useUI();

  return (
    <>
      <div className="w-full text-end">
        <button
          className="ml-auto text-2xl px-4 md:px-6 py-6 lg:py-7 hover:opacity-60"
          onClick={closeDrawer}
          aria-label="close"
        >
          <IoClose />
        </button>
      </div>
      <div className="flex flex-col justify-center items-center ">
        <img
          className="rounded-full "
          src={session?.user?.image ?? "/images/placeholder/avatar.svg"}
          width="128"
          height="128"
          alt={session?.user?.name}
        />
        <p className="text-[22px] font-poppins font-semibold mt-4 uppercase ">
          {session?.user?.name}
        </p>
        <hr className="w-full bg-gray-400 my-4 mx-2" />
        <div>
          <ul>
            <li className="px-4 pb-2" onClick={closeDrawer}>
              <Link
                href="/account/profile"
                className="font-medium font-poppins text-[18px]"
              >
                My Profile
              </Link>
            </li>
            <li className="px-4 pb-2" onClick={closeDrawer}>
              <Link
                href="/account/order"
                className="font-medium font-poppins text-[18px]"
              >
                My Orders
              </Link>
            </li>
            <li className="px-4 pb-2">
              <button
                type="button"
                className="font-poppins text-[18px] inline-flex items-center rounded-sm border border-transparent bg-indigo-600 px-4 py-2 font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                onClick={() => signOut()}
              >
                Sign Out
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

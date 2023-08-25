import { useState } from "react";
import Input from "@components/ui/form/input";
import PasswordInput from "@components/ui/form/password-input";
import { useForm, Controller } from "react-hook-form";
import Logo from "@components/ui/logo";
import Alert from "@components/ui/alert";
import Image from "@components/ui/image";
import { useModalAction } from "@components/common/modal/modal.context";
import CloseButton from "@components/ui/close-button";
import cn from "classnames";
import PhoneInputWithCountry from "@components/ui/form/phone-input";
import MobileInput from "@components/ui/form/mobile-input";

const SignUpForm = ({ isPopup = true, className }) => {
  const { closeModal, openModal } = useModalAction();
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  function handleSignIn() {
    return openModal("LOGIN_VIEW");
  }

  async function onSubmit({ name, email, mobile, password }) {
    setProcessing(true);
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("mobile", mobile);

    formData.append("userType", "Customer");
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_NODE_API}/auth/register`,
        {
          method: "POST",
          body: formData,
        }
      );

      const result = await res.json();

      if (res.status >= 400 && res.status < 600) {
        throw new Error(result.message);
      } else {
        setProcessing(false);
        handleSignIn();
      }
    } catch (error) {
      console.log(error.message);
      setProcessing(false);
      setError(error?.message);
    }
  }

  return (
    // <div
    //   className={cn(
    //     "flex bg-fill mx-auto rounded-lg w-full lg:w-[1000px] 2xl:w-[1200px]",
    //     className
    //   )}
    // >
    //   {isPopup === true && <CloseButton onClick={closeModal} />}
    //   <div className="flex bg-fill mx-auto rounded-lg overflow-hidden w-full">
    //     <div className="md:w-[55%] xl:w-[60%] hidden md:block relative ">
    //       <Image
    //         src="/images/hero/registration.png"
    //         alt="sign up"
    //         layout="fill"
    //         // width={800}
    //         // height={620}
    //         // objectFit="contain"
    //         className="w-full"
    //       />
    //     </div>
    //     <div className="w-full md:w-[45%] xl:w-[40%] py-6 sm:py-10 px-4 sm:px-8 lg:px-12  rounded-md shadow-dropDown flex flex-col justify-center">
    //       <div className="text-center mb-6 pt-2.5">
    //         <div onClick={closeModal}>
    //           <Logo />
    //         </div>

    //         <div className="text-[14px]  text-center mt-3 mb-1">
    //           Are you already registered ?
    //           <button
    //             type="button"
    //             className="ml-1 text-[14px] text-orange  underline  font-normal hover:no-underline focus:outline-none"
    //             onClick={handleSignIn}
    //           >
    //             Sign In
    //           </button>
    //         </div>
    //       </div>

    //       <form
    //         onSubmit={handleSubmit(onSubmit)}
    //         className="flex flex-col justify-center"
    //         noValidate
    //       >
    //         <div className="flex flex-col space-y-4">
    //           <Input
    //             label="Name"
    //             type="text"
    //             placeholder="Enter your name !"
    //             variant="outline"
    //             {...register("name", {
    //               required: "full name is required !",
    //             })}
    //             error={errors.name?.message}
    //           />

    //           <MobileInput
    //             label="Mobile Number"
    //             variant="outline"
    //             control={control}
    //             className="col-span-12 lg:col-span-6 mb-2 lg:ml-1"
    //             error={errors.mobile?.message}
    //           />
    //           <Input
    //             label="Email"
    //             type="email"
    //             variant="outline"
    //             placeholder="Enter your email !"
    //             {...register("email", {
    //               required: "email id is required !",
    //               pattern: {
    //                 value:
    //                   /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    //                 message: "wrong email format !",
    //               },
    //             })}
    //             error={errors.email?.message}
    //           />
    //           <PasswordInput
    //             placeholder="Enter your password !"
    //             label="Password"
    //             variant="outline"
    //             error={errors.password?.message}
    //             {...register("password", {
    //               required: "password is required !",
    //             })}
    //           />

    //           <div className="relative">
    //             <button
    //               type="submit"
    //               className="inline-flex items-center justify-center w-full  px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-orange/90 rounded-sm shadow-sm focus:outline-none hover:bg-opacity-90"
    //             >
    //               {processing ? "Registering ... " : "Register"}
    //             </button>
    //           </div>
    //         </div>
    //       </form>

    //       {error && (
    //         <Alert
    //           message={error}
    //           variant="error"
    //           closeable={true}
    //           className="mt-5"
    //           onClose={() => setError(null)}
    //         />
    //       )}
    //     </div>
    //   </div>
    // </div>
    <div className="w-full  py-6 sm:py-10 px-4 sm:px-8 xl:px-12 relative bg-fill rounded-md shadow-dropDown flex flex-col justify-center">
      {isPopup === true && <CloseButton onClick={closeModal} color="#000000" />}
      <div className="text-center mb-2 ">
        <Logo />

        <div className="text-[12.5px] lg:text-[14px] font-medium text-center my-2">
          Already have an account ?
          <button
            type="button"
            className="text-orange text-[12.5px] lg:text-[14px] ml-1 underline  font-normal hover:no-underline focus:outline-none"
            onClick={handleSignIn}
          >
            Sign In
          </button>
        </div>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-center"
        noValidate
      >
        <div className="flex flex-col space-y-4">
          <Input
            label="Name"
            type="text"
            placeholder="Enter your name !"
            variant="outline"
            {...register("name", {
              required: "full name is required !",
            })}
            error={errors.name?.message}
          />

          <MobileInput
            label="Mobile Number"
            variant="outline"
            control={control}
            className="col-span-12 lg:col-span-6 mb-2 lg:ml-1"
            error={errors.mobile?.message}
          />
          <Input
            label="Email"
            type="email"
            variant="outline"
            placeholder="Enter your email !"
            {...register("email", {
              required: "email id is required !",
              pattern: {
                value:
                  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "wrong email format !",
              },
            })}
            error={errors.email?.message}
          />
          <PasswordInput
            placeholder="Enter your password !"
            label="Password"
            variant="outline"
            error={errors.password?.message}
            {...register("password", {
              required: "password is required !",
            })}
          />

          <div className="relative">
            <button
              type="submit"
              className="inline-flex items-center justify-center w-full  px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-orange/90 rounded-sm shadow-sm focus:outline-none hover:bg-opacity-90"
            >
              {processing ? "Registering ... " : "Register"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;

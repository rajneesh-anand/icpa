import { useState, useEffect } from "react";
import Input from "@components/ui/form/input";
import { useForm, Controller } from "react-hook-form";
import { toast } from "react-toastify";
import { useModalAction } from "@components/common/modal/modal.context";
import CloseButton from "@components/ui/close-button";
import cn from "classnames";
import { educationOptions, professionOptions } from "@data/constant";
import Select from "@components/ui/form/select/select";
import MobileInput from "@components/ui/form/mobile-input";
import TextArea from "@components/ui/form/text-area";

const PopUpForm = ({ isPopup = true, className }) => {
  const { closeModal, openModal } = useModalAction();
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState("");
  const [education, setEducation] = useState(educationOptions[0]);
  const [profession, setProfession] = useState(professionOptions[0]);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (error === "success") {
      toast.error("Thanks, we will contact you shortly !", {
        progressClassName: "fancy-progress-bar",
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  }, [error]);

  async function onSubmit({ name, email, mobile, message }) {
    setProcessing(true);
    const bodyData = {
      name: name,
      email: email,
      mobile: mobile,
      message: message,
      education: education.value,
    };

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_NODE_API}/user/info/email`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify(bodyData),
        }
      );

      const result = await res.json();

      if (res.status >= 400 && res.status < 600) {
        throw new Error(result.message);
      } else {
        setProcessing(false);
        setError("success");
        closeModal();
      }
    } catch (error) {
      setError("failed");
      closeModal();
      console.log(error.message);
      setProcessing(false);
    }
  }

  return (
    <div className="w-full py-6 sm:py-10 px-4 sm:px-8 xl:px-12 relative bg-fill rounded-sm shadow-dropDown flex flex-col justify-center">
      {isPopup === true && <CloseButton onClick={closeModal} color="#000000" />}

      <div className="text-[12.5px] lg:text-[14px] font-medium text-center my-2">
        <p className="py-2 font-medium text-rose-700 text-[14px] px-0">
          Fill up the form to get latest offers and discount on courses
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} noValidate className="mt-4">
        <div className="grid grid-cols-12 ">
          <Input
            label="Full Name"
            type="text"
            placeholder="Enter your full name !"
            className="col-span-12 lg:col-span-6 mb-2"
            variant="outline"
            {...register("name", {
              required: "full name is required ! ",
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
        </div>
        <div className="grid grid-cols-12 ">
          <Input
            label="Email"
            type="email"
            variant="outline"
            className="col-span-12 lg:col-span-6 mb-2"
            placeholder="Enter your email !"
            {...register("email", {
              required: "email is required !",
              pattern: {
                value:
                  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "wrong email format !",
              },
            })}
            error={errors.email?.message}
          />
          <Select
            id="province"
            label="Select Education"
            className="col-span-12 lg:col-span-6 lg:ml-1"
            defaultValue={education}
            options={educationOptions}
            isSearchable={false}
            onChange={(value) => setEducation(value)}
          />
        </div>

        <div className="grid grid-cols-12 ">
          <TextArea
            label="Write your message"
            placeholder="message"
            className="col-span-12  mb-2"
            variant="outline"
            {...register("message")}
            error={errors.message?.message}
          />
        </div>
        <div className="relative">
          <button
            type="submit"
            className="inline-flex items-center justify-center w-full font-nunito px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-orange rounded-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 hover:bg-opacity-90"
          >
            {processing ? "Sending... " : "Send Message"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default PopUpForm;

import { useState, useEffect } from "react";
import Input from "@components/ui/form/input";
import { useForm, Controller } from "react-hook-form";
import { toast } from "react-toastify";
import cn from "classnames";
import { educationOptions } from "@data/constant";
import Select from "@components/ui/form/select/select";
import MobileInput from "@components/ui/form/mobile-input";
import TextArea from "@components/ui/form/text-area";

const ContactForm = ({ className }) => {
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState("");
  const [education, setEducation] = useState(educationOptions[0]);

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
        `${process.env.NEXT_PUBLIC_NODE_API}/user/email`,
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
      }
    } catch (error) {
      setProcessing(false);
      setError("failed");
      console.log(error.message);
    }
  }

  return (
    <div className="p-5 border bg-white shadow-lg border-indigo-900 rounded-lg text-center w-full lg:w-[320px]">
      <h4 className="mb-2 text-slate-700 text-sm md:text-md font-medium">
        Get free career counselling & consultation
      </h4>
      <div className="flex items-center justify-center align-middle mb-2 ">
        <i className="fi fi-rr-phone-call align-middle text-white pr-2"></i>
        <span className="font-bold  md:text-xl text-slate-700">
          +91 701 189 88-21
        </span>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
        <Input
          type="text"
          placeholder="Full Name "
          className="mb-2"
          variant="outline"
          {...register("name", {
            required: "full name is required ! ",
          })}
          error={errors.name?.message}
        />
        <MobileInput
          placeholder="Mobile Number"
          variant="outline"
          control={control}
          className="mb-2 bg-white"
          error={errors.mobile?.message}
        />
        <Input
          type="email"
          variant="outline"
          className=" mb-2"
          placeholder="Email Address"
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
          defaultValue="Graduate"
          options={educationOptions}
          isSearchable={false}
          onChange={(value) => setEducation(value)}
          placeholder="Education"
        />
        <TextArea
          placeholder="write your message ..."
          className=" mb-2"
          variant="outline"
          {...register("message")}
          error={errors.message?.message}
        />

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

export default ContactForm;

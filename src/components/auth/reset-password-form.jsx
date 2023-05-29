import { useState, useEffect } from "react";
import PasswordInput from "@components/ui/form/password-input";
import { useForm } from "react-hook-form";
import { useModalAction } from "@components/common/modal/modal.context";
import Alert from "@components/ui/alert";
import { useRouter } from "next/router";
import Spinner from "@components/ui/loaders/spinner/spinner";

export default function ResetPassword() {
  const router = useRouter();
  const [status, setStatus] = useState();
  const [errorMsg, setErrorMsg] = useState();
  const { closeModal, openModal } = useModalAction();
  const [flag, setFlag] = useState(true);

  const accessToken = router?.query?.access;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function handleForgetPassword() {
    return openModal("FORGET_PASSWORD");
  }

  useEffect(() => {
    const fetchTokenStatus = async () => {
      const url = `${process.env.NEXT_PUBLIC_NODE_API}/auth/reset-password/${router.query.access}`;

      try {
        const res = await fetch(url);
        const result = await res.json();

        if (res.status >= 400 && res.status < 600) {
          throw new Error(result.message);
        } else {
          setStatus("success");
          setFlag(false);
        }
      } catch (error) {
        setFlag(false);
        setStatus("failed");
        setErrorMsg(error.message);
      }
    };
    if (accessToken) {
      fetchTokenStatus();
    }
  }, [accessToken]);

  async function onSubmit(data) {
    if (data.password != data.repassword) {
      setErrorMsg("Password didn't match ! ");
      return;
    } else {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_NODE_API}/auth/reset-password/reset/${router.query.access}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ password: data.password }),
          }
        );

        const result = await res.json();

        if (res.status >= 400 && res.status < 600) {
          throw new Error(result.message);
        } else {
          setStatus("success");
        }
      } catch (error) {
        setStatus("failed");
        setErrorMsg(error.message);
      }
    }
  }

  return (
    <div className="flex flex-col items-center justify-center my-8 py-6 px-5 sm:p-8  mx-auto border border-slate-200 rounded-md  min-h-[480px] sm:w-96 md:w-450px">
      {flag ? (
        <Spinner />
      ) : status === "failed" ? (
        <>
          <Alert
            message={errorMsg}
            variant="error"
            closeable={false}
            className="mb-4"
          />
          <button
            type="button"
            onClick={handleForgetPassword}
            className="inline-flex items-center justify-center w-full px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-orange/90 rounded-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 hover:bg-opacity-90"
          >
            Reset Password
          </button>
        </>
      ) : (
        <>
          <Alert
            message={errorMsg}
            variant="error"
            closeable={true}
            className="mb-4"
            onClose={() => setErrorMsg("")}
          />
          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="flex flex-col justify-center"
          >
            <PasswordInput
              label="Set Your New Password"
              placeholder="new password"
              variant="outline"
              className="mb-4"
              {...register("password", {
                required: "This field is required !",
                pattern: {
                  value: /^(?=.*).{8,}$/,
                  message: "password should be minimum 8 characters !",
                },
              })}
              error={errors?.password?.message}
            />

            <PasswordInput
              label="Confirm Password"
              placeholder="re-write the above password"
              variant="outline"
              className="mb-4"
              {...register("repassword", {
                required: "This field is required !",
                pattern: {
                  value: /^(?=.*).{8,}$/,
                  message: "password should be minimum 8 characters !",
                },
              })}
              error={errors?.repassword?.message}
            />

            <button
              type="submit"
              className="inline-flex items-center justify-center w-full px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-orange/90 rounded-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 hover:bg-opacity-90"
            >
              Reset Password
            </button>
          </form>
        </>
      )}
    </div>
  );
}

"use client";
import FoundXFromProvider from "@/src/components/foundx-from/FoundXFrom";
import FoundXInput from "@/src/components/foundx-from/FoundXInput";
import Container from "@/src/components/ui/container";
import LoadingPage from "@/src/components/ui/loading/loading";
import { useUser } from "@/src/context/userContext";
import { useUserLogin } from "@/src/hooks/auth.hook";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import { FieldValues } from "react-hook-form";

function Login() {
  const { setUserLoading } = useUser();
  const router = useRouter();
  const searchPrams = useSearchParams();
  const redirect = searchPrams.get("redirect");
  const {
    mutate: userLogin,
    data: resData,
    isError,
    isPending,
    isSuccess,
  } = useUserLogin();

  const onSubmit = async (data: FieldValues) => {
    userLogin(data);
    setUserLoading(true);
  };

  useEffect(() => {
    if (!isPending && isSuccess) {
      if (redirect) {
        router.push(redirect);
      } else {
        router.push("/");
      }
    }
  }, [isPending, isSuccess]);

  return (
    <Container>
      {isPending && !isError && <LoadingPage />}
      <div className="w-full h-screen flex justify-center items-center flex-col">
        <div className=" h-[500px] w-screen max-w-[450px]  backdrop-blur-md bg-white/10 border border-white/20 rounded-xl shadow-lg p-6">
          <div className="space-y-4 ">
            <h2 className="text-3xl font-semibold uppercase text-center">
              Wellcome to FoundX
            </h2>
            <h3 className="text-xl capitalize text-center text-amber-500">
              Login From
            </h3>
          </div>
          <FoundXFromProvider onSubmit={onSubmit}>
            <div className="grid grid-cols-2 gap-2 space-y-5 mt-5 ">
              <div className="py-2 shadow-md px-2 shadow-amber-50 rounded-medium col-span-2">
                <FoundXInput
                  name="email"
                  type="email"
                  label="Enter your email"
                  variant="underlined"
                />
              </div>
              <div className="py-1 shadow-md px-2 shadow-amber-50 rounded-medium col-span-2">
                <FoundXInput
                  name="password"
                  type="password"
                  label="Enter your password"
                  variant="underlined"
                />
              </div>

              <div className="col-span-2 ">
                <Button
                  type="submit"
                  className="px-6 py-3 w-full rounded-xl font-medium text-white
         backdrop-blur-md bg-white/10 border border-white/20
         shadow-lg transition-all duration-300
         hover:bg-white/20 hover:scale-105
         active:scale-95
         focus:outline-none focus:ring-2 focus:ring-white/40"
                >
                  Login
                </Button>
              </div>
              <div className="flex gap-1 -mt-5 capitalize col-span-2 justify-center ">
                <p>Create a account</p>
                <Link href="/register">Register Now</Link>
              </div>
            </div>
          </FoundXFromProvider>
        </div>
      </div>
    </Container>
  );
}

export default Login;

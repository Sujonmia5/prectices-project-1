"use client";
import FoundXFromProvider from "@/src/components/foundx-from/FoundXFrom";
import FoundXInput from "@/src/components/foundx-from/FoundXInput";
import Container from "@/src/components/ui/container";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import React from "react";
import { FieldValues } from "react-hook-form";
import RegisterInput from "./_components";
import { useUserRegistration } from "@/src/hooks/auth.hook";

function Register() {
  const {
    mutate: RegisterMutation,
    data,
    isPending,
    isSuccess,
  } = useUserRegistration();
  const onSubmit = async (data: FieldValues) => {
    RegisterMutation(data);
  };
  const defaultValues = {
    name: "Tanmoy Parvez",
    email: "tanmoyparvez@gmail.com",
    password: "123456",
    mobileNumber: "1234567890",
    profilePhoto:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
  };
  return (
    <Container>
      <div className="w-full h-screen flex justify-center items-center flex-col">
        <div className=" h-[550px] w-screen max-w-[450px]  backdrop-blur-md bg-white/10 border border-white/20 rounded-xl shadow-lg p-6">
          <h2 className="text-3xl font-semibold uppercase text-center">
            Create account to FoundX
          </h2>
          <h3 className="text-xl capitalize text-center text-amber-500">
            Register From
          </h3>
          <FoundXFromProvider defaultValues={defaultValues} onSubmit={onSubmit}>
            <RegisterInput />
          </FoundXFromProvider>
        </div>
      </div>
    </Container>
  );
}

export default Register;

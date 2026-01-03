"use client";

import { Input } from "@heroui/input";
import React from "react";
import { useFormContext } from "react-hook-form";
interface FoundXInputProps {
  type: "text" | "email" | "file" | "number" | "password";
  name: string;
  label?: string;
  variant?: "flat" | "bordered" | "underlined" | "faded";
  isRequired?: boolean;
}

function FoundXInput({
  type = "text",
  name,
  label,
  variant,
  isRequired,
}: FoundXInputProps) {
  const { register } = useFormContext();
  return (
    <Input
      isRequired
      {...register(name, { required: true })}
      errorMessage={({ validationDetails, validationErrors }) => {
        if (validationDetails.typeMismatch) {
          return "Please enter a valid email address";
        }

        return validationErrors;
      }}
      label={label}
      labelPlacement="outside"
      name={name}
      placeholder={label}
      type={type}
    />
  );
}

export default FoundXInput;

import { Textarea } from "@heroui/input";
import React from "react";
import { useFormContext } from "react-hook-form";

interface IFoundXTexArea {
  name: string;
  label: string;
  isRequired?: boolean;
  row?: number;
}

function FoundXTextArea({
  name,
  label,
  isRequired = false,
  row = 5,
}: IFoundXTexArea) {
  const { register } = useFormContext();
  return (
    <Textarea
      isRequired={isRequired}
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
      rows={row}
    />
  );
}

export default FoundXTextArea;

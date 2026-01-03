"use client";

import React, { ReactNode } from "react";
import {
  useForm,
  FormProvider,
  FieldValues,
  SubmitHandler,
  UseFormProps,
} from "react-hook-form";
interface FoundXFromProviderProps {
  onSubmit: SubmitHandler<FieldValues>;
  children: ReactNode;
  defaultValues?: FieldValues;
}

function FoundXFromProvider({
  onSubmit,
  children,
  defaultValues,
}: FoundXFromProviderProps) {
  const config: UseFormProps = {};
  if (defaultValues) {
    config["defaultValues"] = defaultValues;
  }
  const methods = useForm(config);
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
}

export default FoundXFromProvider;

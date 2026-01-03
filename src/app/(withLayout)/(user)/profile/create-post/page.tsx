"use client";
import FoundXInput from "@/src/components/foundx-from/FoundXInput";
import FoundXTextArea from "@/src/components/foundx-from/FoundXTextArea";
import { AddIcon, CloseIcon } from "@/src/components/icons";
import { Button } from "@heroui/button";
import { Divider } from "@heroui/divider";
import { Image } from "@heroui/image";
import React, { ChangeEvent, useState } from "react";
import {
  FieldValues,
  FormProvider,
  useFieldArray,
  useForm,
} from "react-hook-form";

function CreatePost() {
  const [uploadImages, setUploadImages] = useState<File[]>([]);
  const [previewImages, setPreviewImages] = useState<string[] | []>([]);
  const methods = useForm({
    shouldUnregister: true,
  });

  const { control, handleSubmit } = methods;

  const { fields, append, remove } = useFieldArray({
    control, // control props comes from useForm (optional: if you are using FormProvider)
    name: "questions", // unique name for your Field Array
  });

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  // Owner questions Handle
  const AddQuestion = () => append({ question: "" });
  const RemoveQuestion = (i: number) => remove(i);

  // image Handling
  const handleImage = (e: ChangeEvent<HTMLInputElement>) => {
    // if (previewImages.length >= 4) return;
    // const files = Array.from(e.target.files || []);
    // files.forEach((file) => {
    //   setUploadImages((prev) => [...prev, file]);
    //   const reader = new FileReader();
    //   reader.onloadend = () => {
    //     setPreviewImages((prev) => [...prev, reader.result as string]);
    //   };
    //   reader.readAsDataURL(file);
    // });

    if (!e.target.files) return;

    const files = Array.from(e.target.files);

    files.slice(0, 4 - previewImages.length).forEach((file) => {
      const url = URL.createObjectURL(file);

      setUploadImages((prev) => [...prev, file]);
      setPreviewImages((prev) => [...prev, url]);
    });

    e.target.value = "";
  };
  const removeImages = (i: number) => {
    URL.revokeObjectURL(previewImages[i]); // 💣 memory cleanup

    setPreviewImages((prev) => prev.filter((_, index) => index !== i));
    setUploadImages((prev) => prev.filter((_, index) => index !== i));
  };
  console.log(previewImages);

  return (
    <div className="my-5">
      <div className="shadow-xl rounded-2xl p-5 max-w-4xl w-full min-h-[688px] bg-gradient-to-b from-default-100 ">
        <div className="mb-5">
          <h2 className="text-2xl capitalize font-bold text-center bg-gradient-to-r from-amber-300 to-amber-900 bg-clip-text text-transparent">
            Create Founded Items Post
          </h2>
        </div>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-2 gap-4 mx-4 ">
              <FoundXInput label="Item Name" type="text" name="title" />
              <FoundXInput
                label="Select Founded date"
                type="text"
                name="dateFound"
              />
              <FoundXInput label="Category" type="text" name="category" />

              <FoundXInput label="Address" type="text" name="location" />

              <FoundXInput label="City" type="text" name="city" />

              <div className="min-w-fit flex place-items-center gap-2 ">
                {previewImages.length > 0 &&
                  previewImages.map((image, i) => (
                    <div className="min-w-24 min-h-24 max-w-[100px] max-h-[100px] bg-red-500 relative overflow-hidden">
                      <Button
                        isIconOnly
                        variant="light"
                        className="absolute top-0 -left-2 z-50 w-5 h-5 border-none"
                        color="danger"
                        onClick={() => removeImages(i)}
                      >
                        <CloseIcon />
                      </Button>
                      <Image
                        src={image}
                        width={100}
                        height={100}
                        className="rounded-none object-fill   h-full w-full"
                      />
                    </div>
                  ))}
                {previewImages.length === 4 ? (
                  ""
                ) : (
                  <label
                    className="flex-1 flex h-14 w-full cursor-pointer items-center justify-center rounded-xl border-2 border-default-200 text-default-500 shadow-sm transition-all duration-100 hover:border-default-400 text-center"
                    htmlFor="image"
                  >
                    Upload image
                  </label>
                )}
                <input
                  multiple
                  className="hidden"
                  id="image"
                  type="file"
                  onChange={(e) => handleImage(e)}
                />
              </div>
              <div className="col-span-2 mt-1">
                <FoundXTextArea name="description" label="Description" />
              </div>

              <Divider className="my-1 col-span-2 " />

              <div className="flex justify-between items-center mb-5 col-span-2">
                <h1 className="text-xl">Owner verification questions</h1>
                {fields.length < 6 && (
                  <Button
                    type="button"
                    isIconOnly
                    onClick={() => AddQuestion()}
                  >
                    <AddIcon />
                  </Button>
                )}
              </div>

              <div className="col-span-2 flex flex-col gap-y-4">
                {fields.length > 0 &&
                  fields.map((field, i) => (
                    <div key={field.id} className="relative ">
                      <FoundXInput
                        label={`Question ${i + 1}`}
                        type="text"
                        name={`questions.${i}.question`}
                      />
                      <Button
                        type="button"
                        isIconOnly
                        variant="light"
                        color="danger"
                        className="absolute right-0 top-6"
                        onClick={() => RemoveQuestion(i)}
                      >
                        <CloseIcon />
                      </Button>
                    </div>
                  ))}
              </div>
              <div className="col-span-2 w-full flex justify-end items-center">
                <Button type="submit" variant="solid" color="primary">
                  Post Now
                </Button>
              </div>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}

export default CreatePost;

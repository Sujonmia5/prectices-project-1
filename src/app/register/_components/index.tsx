import FoundXInput from "@/src/components/foundx-from/FoundXInput";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import React from "react";

function RegisterInput() {
  return (
    <div className="grid grid-cols-2 gap-2 space-y-5 mt-5 ">
      <div className="py-2 shadow-md px-2 shadow-amber-50 rounded-medium">
        <FoundXInput
          name="name"
          type="text"
          label="Enter your Full Name"
          variant="underlined"
        />
      </div>

      <div className="py-1 shadow-md px-2 shadow-amber-50 rounded-medium">
        <FoundXInput
          name="mobileNumber"
          type="number"
          label="Enter your Number"
          variant="underlined"
        />
      </div>
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
          Register Now
        </Button>
      </div>
      <div className="flex gap-1 -mt-5 capitalize col-span-2 justify-center ">
        <p>Already have a Account</p>
        <Link href="/login">Login Now</Link>
      </div>
    </div>
  );
}

export default RegisterInput;

import React from "react";
import { Spinner } from "@heroui/spinner";

function LoadingPage() {
  return (
    <div className="fixed top-0 left-0 right-0  w-full h-screen bg-black/5 backdrop-blur-sm flex justify-center items-center z-[900]">
      <div>
        <Spinner color="warning" label="Loading..." />
      </div>
    </div>
  );
}

export default LoadingPage;

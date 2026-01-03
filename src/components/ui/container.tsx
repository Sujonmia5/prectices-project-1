import React, { ReactNode } from "react";

function Container({ children }: { children: ReactNode }) {
  return <div className={`max-w-7xl w-full  mx-auto `}>{children}</div>;
}

export default Container;

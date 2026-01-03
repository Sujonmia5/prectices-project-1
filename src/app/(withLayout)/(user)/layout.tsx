import Container from "@/src/components/ui/container";
import Sidebar from "@/src/components/ui/sidebar/sidebar";
import React, { ReactNode } from "react";

export default function layout({ children }: { children: ReactNode }) {
  return (
    <Container>
      <div className="w-full h-full grid grid-cols-12 gap-5">
        <div className="col-span-3 mt-5">
          <Sidebar />
        </div>
        <div className="col-span-9">{children}</div>
      </div>
    </Container>
  );
}

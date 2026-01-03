import React, { ReactNode } from "react";
interface HomeLayoutProps {
  children: ReactNode;
  recentPost: ReactNode;
}
export default function layout({ children, recentPost }: HomeLayoutProps) {
  return (
    <>
      {children}
      {recentPost}
    </>
  );
}

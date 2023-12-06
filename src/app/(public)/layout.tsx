import { Header } from "@/components/header";
import React, { PropsWithChildren } from "react";

const layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      {/* <Menu /> */}
      {children}
      {/* <Footer /> */}
    </>
  );
};

export default layout;

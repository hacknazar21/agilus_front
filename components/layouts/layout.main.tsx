import React, { PropsWithChildren } from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";

interface LayoutMainProps {}

export default function LayoutMain({
  children,
}: PropsWithChildren<LayoutMainProps>) {
  return (
    <div className="wrapper">
      <Header />
      <main className="main no-search">
        <div className="main__container">{children}</div>
      </main>
      <Footer />
    </div>
  );
}

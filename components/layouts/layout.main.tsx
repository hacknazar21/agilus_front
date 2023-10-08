import React, { PropsWithChildren } from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";

interface LayoutMainProps {
  isNoSearch?: boolean;
}

export default function LayoutMain({
  children,
  isNoSearch = true,
}: PropsWithChildren<LayoutMainProps>) {
  return (
    <div className="wrapper">
      <Header />
      <main className={["main", isNoSearch ? "no-search" : ""].join(" ")}>
        <div className="main__container">{children}</div>
      </main>
      <Footer />
    </div>
  );
}

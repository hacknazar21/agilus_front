"use client";
import React, { PropsWithChildren } from "react";
import { Provider } from "react-redux";
import { store } from "../../../store/store";

interface LayoutStoreProps {}

export default function LayoutStore({
  children,
}: PropsWithChildren<LayoutStoreProps>) {
  return <Provider store={store}>{children}</Provider>;
}

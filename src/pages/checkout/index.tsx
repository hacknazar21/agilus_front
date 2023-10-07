import React from "react";
import Checkout from "../../../components/Checkout";

interface IndexProps {}

export default function Index({}: IndexProps) {
  return <Checkout step={1} />;
}

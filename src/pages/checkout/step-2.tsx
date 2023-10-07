import React from "react";
import CheckoutHeader from "../../../components/checkout/checkout.header";
import Checkout from "../../../components/Checkout";

interface Step2Props {}

export default function CheckoutStep2({}: Step2Props) {
  return <Checkout step={2} />;
}

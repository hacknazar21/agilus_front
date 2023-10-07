import React, { useState } from "react";
import CheckoutHeader from "./checkout/checkout.header";
import CheckoutCard from "./checkout/checkout.card";
import CheckoutForm from "./checkout/checkout.form";

interface CheckoutProps {
  step: number;
}

export default function Checkout({ step }: CheckoutProps) {
  return (
    <div className="checkout">
      <div className="checkout__container">
        <CheckoutHeader active_step={step} />
        {step === 1 && <CheckoutCard />}
        {step === 2 && <CheckoutForm />}
      </div>
    </div>
  );
}

import React from "react";

interface CheckoutHeaderProps {
  active_step: number;
}

export default function CheckoutHeader({ active_step }: CheckoutHeaderProps) {
  return (
    <div className="checkout__header checkout-header">
      <h1 className="checkout-header__title">Форма оформления заказа</h1>
      <div className="checkout-header__steps">
        <div
          className={[
            "checkout-header__step",
            active_step === 1 ? "active" : "done",
          ].join(" ")}
        >
          <div className="checkout-header__step-number">
            1
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="18"
                viewBox="0 0 23 18"
                fill="none"
              >
                <path
                  d="M19.5049 0L7.3673 12.1376L2.59697 7.38572L0 9.9827L7.3673 17.35L22.1019 2.61539L19.5049 0Z"
                  fill="white"
                />
              </svg>
            </span>
          </div>
          <div className="checkout-header__step-name">КОРЗИНА</div>
        </div>
        <div
          className={[
            "checkout-header__step",
            active_step === 2 ? "active" : "",
          ].join(" ")}
        >
          <div className="checkout-header__step-number">
            2{" "}
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="18"
                viewBox="0 0 23 18"
                fill="none"
              >
                <path
                  d="M19.5049 0L7.3673 12.1376L2.59697 7.38572L0 9.9827L7.3673 17.35L22.1019 2.61539L19.5049 0Z"
                  fill="white"
                />
              </svg>
            </span>
          </div>
          <div className="checkout-header__step-name">ДАННЫЕ ПАЦИЕНТА</div>
        </div>
      </div>
    </div>
  );
}

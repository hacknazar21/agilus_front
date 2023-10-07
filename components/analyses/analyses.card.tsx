"use client";
import React, { useContext } from "react";
import { contextCheckout } from "../context/context.checkout";
import { IAnalysesItem } from "../../interfaces/interface.catalogue";
import { useRouter } from "next/router";

interface AnalysesCardProps {
  analysesDetail: IAnalysesItem;
}

export default function AnalysesCard({ analysesDetail }: AnalysesCardProps) {
  const { addOrderLine, isOrderLineAlreadyAdded } = useContext(contextCheckout);

  function onAddOrderLine() {
    if (isOrderLineAlreadyAdded(analysesDetail)) {
      return;
    }
    addOrderLine(analysesDetail);
  }
  return (
    <button onClick={onAddOrderLine} className="analyses-item__card">
      <svg
        width="19"
        height="17"
        viewBox="0 0 19 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.7028 2.91024C18.448 2.59488 18.0692 2.41405 17.6636 2.41405H3.18163L3.0523 1.48721C2.96072 0.8309 2.39191 0.335938 1.72918 0.335938H0.593747C0.26585 0.335938 0 0.601788 0 0.929684C0 1.25758 0.26585 1.52343 0.593747 1.52343H1.72918C1.8028 1.52343 1.86603 1.57843 1.87616 1.65135L3.47887 13.1377C3.57046 13.7941 4.13927 14.289 4.802 14.289H5.44581C5.3799 14.4748 5.34368 14.6746 5.34368 14.8827C5.34368 15.8649 6.14275 16.664 7.12492 16.664C8.10709 16.664 8.90616 15.8649 8.90616 14.8827C8.90616 14.6746 8.86994 14.4748 8.80404 14.289H11.977C11.9111 14.4748 11.8749 14.6746 11.8749 14.8827C11.8749 15.8649 12.674 16.664 13.6561 16.664C14.6383 16.664 15.4374 15.8649 15.4374 14.8827C15.4374 14.6746 15.4012 14.4748 15.3352 14.289H16.6249C16.9528 14.289 17.2186 14.0231 17.2186 13.6952C17.2186 13.3673 16.9528 13.1015 16.6249 13.1015H4.80204C4.72841 13.1015 4.66518 13.0465 4.65505 12.9736L4.5072 11.914H16.2004C16.826 11.914 17.3754 11.47 17.5068 10.8579L18.97 4.02997C19.055 3.63361 18.9576 3.22548 18.7028 2.91024ZM7.71871 14.8827C7.71871 15.2101 7.45234 15.4765 7.12496 15.4765C6.79758 15.4765 6.53121 15.2101 6.53121 14.8827C6.53121 14.5554 6.79758 14.289 7.12496 14.289C7.45234 14.289 7.71871 14.5553 7.71871 14.8827ZM14.2499 14.8827C14.2499 15.2101 13.9835 15.4765 13.6562 15.4765C13.3288 15.4765 13.0624 15.2101 13.0624 14.8827C13.0624 14.5554 13.3288 14.289 13.6562 14.289C13.9835 14.289 14.2499 14.5553 14.2499 14.8827ZM17.8089 3.78104L16.3457 10.6089C16.3311 10.677 16.27 10.7265 16.2004 10.7265H4.34147L3.34732 3.60151H17.6636C17.7223 3.60151 17.7589 3.63149 17.7793 3.65665C17.7996 3.68177 17.8212 3.72374 17.8089 3.78104Z"
          fill="#009AFF"
        ></path>
      </svg>
      <span>В корзину</span>
    </button>
  );
}

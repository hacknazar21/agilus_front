"use client";
import React, { MouseEventHandler, useEffect } from "react";

interface CatalogueArrowProps {}

export default function CatalogueArrow({}: CatalogueArrowProps) {
  const onClickSubMenu: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    const catalogue_box = event.currentTarget.closest(".categories__list-box");
    if (catalogue_box) {
      catalogue_box.classList.toggle("submenu-open");
      const submenu_box = catalogue_box.querySelector(".categories__sub-list");
      if (submenu_box) {
        if (catalogue_box.classList.contains("submenu-open"))
          submenu_box.setAttribute(
            "style",
            `height: ${submenu_box.scrollHeight}px;`
          );
        else submenu_box.removeAttribute("style");
      }
    }
  };

  return (
    <button onClick={onClickSubMenu} className="arrow">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="10"
        height="5"
        viewBox="0 0 10 5"
        fill="none"
      >
        <path d="M0 0L5 5L10 0L0 0Z" fill="#9892B5" />
      </svg>
    </button>
  );
}

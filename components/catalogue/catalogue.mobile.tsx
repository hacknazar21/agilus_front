"use client";
import React, { MouseEventHandler } from "react";
import { ICategoriesItem } from "../../interfaces/interface.catalogue";

interface CatalogueMobileProps {
  currentActive?: string | undefined;
  currentCategory?: ICategoriesItem | undefined;
}

export default function CatalogueMobile({
  currentCategory,
  currentActive,
}: CatalogueMobileProps) {
  const onClickCatalogueMobile: MouseEventHandler<HTMLButtonElement> = (
    event
  ) => {
    event.stopPropagation();
    const categories_box = event.currentTarget.closest(".categories");
    if (categories_box) {
      categories_box.classList.toggle("menu-open");
      const aside_box = categories_box.querySelector(".categories__aside");
      if (aside_box) {
        if (categories_box.classList.contains("menu-open"))
          aside_box.setAttribute(
            "style",
            `height: ${aside_box.scrollHeight}px;`
          );
        else aside_box.removeAttribute("style");
      }
    }
  };

  return (
    <button onClick={onClickCatalogueMobile} className="categories__current">
      {currentActive === "initial-category"
        ? "Все исследования"
        : currentCategory?.name}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 4H4V0H0V4ZM6 16H10V12H6V16ZM4 16H0V12H4V16ZM0 10H4V6H0V10ZM10 10H6V6H10V10ZM12 0V4H16V0H12ZM10 4H6V0H10V4ZM12 10H16V6H12V10ZM16 16H12V12H16V16Z"
          fill="#9892B5"
        />
      </svg>
    </button>
  );
}

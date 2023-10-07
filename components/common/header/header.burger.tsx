"use client";
import React, { MouseEventHandler, useState } from "react";

interface HeaderBurgerProps {}

export default function HeaderBurger({}: HeaderBurgerProps) {
  const onOpenMenuClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    const header_box = event.currentTarget.closest(".header");
    if (header_box) {
      header_box.classList.toggle("header__menu-open");
      document.documentElement.classList.toggle("lock");
    }
  };
  return (
    <button onClick={onOpenMenuClick} className="header__menu-button">
      <span />
      <span />
      <span />
    </button>
  );
}

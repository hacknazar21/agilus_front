"use client";
import React, { MouseEventHandler } from "react";

interface AnalysesDetailButtonProps {
  id: string;
  text: string;
  isActive: boolean;
  onClick: (id: string) => void;
}

export default function AnalysesDetailButton({
  id,
  text,
  isActive,
  onClick,
}: AnalysesDetailButtonProps) {
  const onClickButton: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    onClick(id);
    const info_box = event.currentTarget.closest(".analyses-detail__info");
    if (info_box) {
      const allActiveBoxes = info_box.querySelectorAll(
        ".analyses-detail__text-box.active"
      );
      allActiveBoxes.forEach((activeBox) => {
        activeBox.classList.remove("active");
      });
      const needToActiveBox = info_box.querySelector(
        `.analyses-detail__text-box.${id}`
      );
      if (needToActiveBox) {
        needToActiveBox.classList.add("active");
      }
    }
  };

  return (
    <button
      onClick={onClickButton}
      className={["analyses-detail__button", isActive ? "active" : ""].join(
        " "
      )}
    >
      {text}
    </button>
  );
}

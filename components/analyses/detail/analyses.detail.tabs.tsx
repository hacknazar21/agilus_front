"use client";
import React, { useState } from "react";
import AnalysesDetailButton from "./analyses.detail.button";
import { IAnalysesDetail } from "../../../interfaces/interface.catalogue";

interface AnalysesDetailButtonsProps {}

export default function AnalysesDetailTabs({}: AnalysesDetailButtonsProps) {
  const [currentActive, setCurrentActive] = useState("main-info");
  function onClickButton(id: string) {
    setCurrentActive(id);
  }

  return (
    <>
      <div className="analyses-detail__buttons">
        <AnalysesDetailButton
          onClick={onClickButton}
          isActive={currentActive === "main-info"}
          id="main-info"
          text="Основная информация"
        />
        <AnalysesDetailButton
          onClick={onClickButton}
          isActive={currentActive === "more-info"}
          id="more-info"
          text="Подробная информация"
        />
      </div>
    </>
  );
}

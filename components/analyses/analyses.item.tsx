import React from "react";
import { IAnalysesItem } from "../../interfaces/interface.catalogue";
import AnalysesCard from "./analyses.card";
import Link from "next/link";

interface AnalysesItemProps {
  analysesItem: IAnalysesItem;
}

export default function AnalysesItem({ analysesItem }: AnalysesItemProps) {
  return (
    <div className="analyses-section__item analyses-item">
      <div className="analyses-item__info">
        <div className="analyses-item__info-header">
          <div className="analyses-item__info-code">
            Код: {analysesItem.code}
          </div>
          <div className="analyses-item__info-time">
            {analysesItem.deadline}
          </div>
        </div>
        <div className="analyses-item__info-title">
          <Link href={`/analyses/${analysesItem.id}`}>{analysesItem.name}</Link>
        </div>
      </div>
      <div className="analyses-item__right">
        <div className="analyses-item__price">
          {Number(analysesItem.price).toLocaleString("ru-RU")} ₸
        </div>
        <AnalysesCard analysesDetail={analysesItem} />
      </div>
    </div>
  );
}

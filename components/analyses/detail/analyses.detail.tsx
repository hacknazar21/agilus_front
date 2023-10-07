import React from "react";
import { IAnalysesDetail } from "../../../interfaces/interface.catalogue";
import AnalysesDetailTabs from "./analyses.detail.tabs";
import AnalysesDetailCard from "./analyses.detail.card";

interface AnalysesDetailProps {
  analysesDetail: IAnalysesDetail;
}

export default function AnalysesDetail({
  analysesDetail,
}: AnalysesDetailProps) {
  return (
    <div className="analyses-detail">
      <div className="analyses-detail__info">
        <h1 className="analyses-detail__title">{analysesDetail.name}</h1>
        <AnalysesDetailTabs />
        <div
          className="analyses-detail__text-box main-info active"
          dangerouslySetInnerHTML={{ __html: analysesDetail.description }}
        />
        <div
          className="analyses-detail__text-box more-info"
          dangerouslySetInnerHTML={{ __html: analysesDetail.notes }}
        />
      </div>
      <div className="analyses-detail__checkout">
        <div className="analyses-detail__checkout-section">
          <h3 className="analyses-detail__checkout-section-title">
            Код исследования:
          </h3>
          <div className="analyses-detail__checkout-section-value analyses-detail__checkout-code">
            {analysesDetail.code}
          </div>
        </div>
        <div className="analyses-detail__checkout-section">
          <h3 className="analyses-detail__checkout-section-title">
            Срок исполнения:
          </h3>
          <div className="analyses-detail__checkout-section-value analyses-detail__checkout-deadline">
            {analysesDetail.deadline}
          </div>
        </div>
        <div className="analyses-detail__checkout-section">
          <h3 className="analyses-detail__checkout-section-title">Цена:</h3>
          <div className="analyses-detail__checkout-section-value analyses-detail__checkout-price">
            {analysesDetail.discount_price} ₸
          </div>
          {analysesDetail.has_discount && (
            <div className="analyses-detail__checkout-section-value analyses-detail__checkout-price-old">
              {analysesDetail.price} ₸
            </div>
          )}
        </div>
        <AnalysesDetailCard analysesDetail={analysesDetail} />
      </div>
    </div>
  );
}

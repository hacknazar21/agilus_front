import React from "react";
import { ICategoriesWithAnalyses } from "../interfaces/interface.catalogue";
import AnalysesItem from "./analyses/analyses.item";
import AnalysesHeader from "./analyses/analyses.header";

interface AnalysesProps {
  categories_with_analyses_res: ICategoriesWithAnalyses;
  searchValue?: string;
}

export default function Analyses({
  categories_with_analyses_res,
  searchValue,
}: AnalysesProps) {
  return (
    <div className="analyses">
      <AnalysesHeader searchValue={searchValue} />
      {!!categories_with_analyses_res.length ? (
        <div className="analyses__sections">
          {categories_with_analyses_res.map((category_with_analyses_res) => (
            <div
              key={category_with_analyses_res.id}
              className="analyses__section analyses-section"
            >
              <h2 className="analyses-section__title">
                {category_with_analyses_res.name}
              </h2>
              <div className="analyses-section__items">
                {category_with_analyses_res.analyses.map((analysesItem) => (
                  <AnalysesItem
                    key={analysesItem.id}
                    analysesItem={analysesItem}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <span>Ничего не найдено.</span>
      )}
    </div>
  );
}

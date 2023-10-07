import React from "react";
import {
  ICategories,
  ICategoriesItem,
} from "../interfaces/interface.catalogue";
import CatalogueItem from "./catalogue/catalogue.item";
import CatalogueMobile from "./catalogue/catalogue.mobile";

interface CatalogueProps {
  categories: ICategories;
  currentActive?: string;
  currentCategory?: ICategoriesItem;
}

export default function Catalogue({
  categories,
  currentActive,
  currentCategory,
}: CatalogueProps) {
  return (
    <div className="categories">
      <CatalogueMobile
        currentActive={currentActive}
        currentCategory={currentCategory}
      />
      <aside className="categories__aside">
        <ul className="categories__list">
          <CatalogueItem
            key={"initial-category-item"}
            currentActive={currentActive}
            category={{
              id: "initial-category",
              name: "Все исследования",
              children: [],
            }}
          />
          {categories.map((category) => (
            <CatalogueItem
              key={category.id}
              currentActive={currentActive}
              category={category}
            />
          ))}
        </ul>
      </aside>
    </div>
  );
}

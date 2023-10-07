import React from "react";
import { ICategoriesItem } from "../../interfaces/interface.catalogue";
import CatalogueArrow from "./catalogue.arrow";
import Link from "next/link";

interface CatalogueItemProps {
  category: ICategoriesItem;
  currentActive?: string | undefined;
}

export default function CatalogueItem({
  category,
  currentActive,
}: CatalogueItemProps) {
  const isHasChildren = !!category.children.length;
  const isActive =
    currentActive === category.id ||
    category.children.some(
      (child_category) => child_category.id === currentActive
    );
  return (
    <div
      className={["categories__list-box", isActive ? "submenu-open" : ""].join(
        " "
      )}
    >
      <li className="categories__list-item">
        <Link
          href={`/?category=${category.id}`}
          className="categories__list-link"
        >
          {category.name}
        </Link>
        {isHasChildren && <CatalogueArrow />}
      </li>
      {isHasChildren && (
        <ul
          style={
            isActive
              ? {
                  height: "100%",
                }
              : {}
          }
          className="categories__sub-list"
        >
          {category.children.map((child_category) => (
            <li
              key={child_category.id}
              className={[
                "categories__sub-list-item",
                currentActive === child_category.id ? "active" : "",
              ].join(" ")}
            >
              <Link
                href={`/?category=${child_category.id}`}
                className="categories__sub-list-link"
              >
                {child_category.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

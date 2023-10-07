import React from "react";

interface AnalysesSearchProps {
  defaultValue?: string | undefined;
}

export default function AnalysesSearch({ defaultValue }: AnalysesSearchProps) {
  return (
    <form method="GET" action="/" className="analyses-header__search">
      <input
        defaultValue={defaultValue}
        placeholder="Введите название заболевания, симптома или гена"
        name="search"
        className="analyses-header__search-input"
      />
      <button className="analyses-header__search-button">
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.71 11H12.5L17.49 16L16 17.49L11 12.5V11.71L10.73 11.43C9.59 12.41 8.11 13 6.5 13C2.91 13 0 10.09 0 6.5C0 2.91 2.91 0 6.5 0C10.09 0 13 2.91 13 6.5C13 8.11 12.41 9.59 11.43 10.73L11.71 11ZM2 6.5C2 8.99 4.01 11 6.5 11C8.99 11 11 8.99 11 6.5C11 4.01 8.99 2 6.5 2C4.01 2 2 4.01 2 6.5Z"
            fill="#fff"
          ></path>
        </svg>
        <span>Поиск</span>
      </button>
    </form>
  );
}
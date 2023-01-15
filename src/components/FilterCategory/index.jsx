import { useState } from "react";
import "./FilterCategory.css";

const FilterCategory = ({ productFilter: { filterName, filterOptions } }) => {
  const [isFilterOptionsCollapsed, setIsFilterOptionsCollapsed] =
    useState(true);

  return (
    <section
      onClick={() => setIsFilterOptionsCollapsed((prev) => !prev)}
      className="filter-category-container"
    >
      <header className="filter-category-header">
        <h3 className="filter-category-header-heading">{filterName}</h3>
        <i
          className={`fa-solid fa-chevron-${
            isFilterOptionsCollapsed ? "down" : "up"
          } filter-category-header-icon`}
        ></i>
      </header>
      {!isFilterOptionsCollapsed && (
        <div className="filter-category-options">
          {filterOptions.map((productFilterOption) => (
            <label key={productFilterOption}>
              <input type="checkbox" className="checkbox" />
              {productFilterOption}
            </label>
          ))}
        </div>
      )}
    </section>
  );
};

export { FilterCategory };

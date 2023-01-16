import { useState } from "react";
import { useFilter } from "../../contexts/filter-context";
import "./FilterCategory.css";

const FilterCategory = ({ filterCategory }) => {
  const { filterCategoryName, filterCategoryOptions } = filterCategory;
  const [isFilterOptionsCollapsed, setIsFilterOptionsCollapsed] =
    useState(true);

  const { filterState, filterDispatch } = useFilter();

  return (
    <section className="filter-category-container">
      <header
        onClick={() => setIsFilterOptionsCollapsed((prev) => !prev)}
        className="filter-category-header"
      >
        <h3 className="filter-category-header-heading">{filterCategoryName}</h3>
        <i
          className={`fa-solid fa-chevron-${
            isFilterOptionsCollapsed ? "down" : "up"
          } filter-category-header-icon`}
        ></i>
      </header>
      {!isFilterOptionsCollapsed && (
        <div className="filter-category-options">
          {filterCategoryOptions.map((filterCategoryOption) => (
            <label key={filterCategoryOption}>
              <input
                type="checkbox"
                name={filterCategoryOption}
                checked={filterState[filterCategoryName][filterCategoryOption]}
                onChange={() =>
                  filterDispatch({
                    type: "TOGGLE_FILTER_OPTION",
                    payload: { filterCategoryName, filterCategoryOption },
                  })
                }
                className="checkbox"
              />
              {filterCategoryOption}
            </label>
          ))}
        </div>
      )}
    </section>
  );
};

export { FilterCategory };

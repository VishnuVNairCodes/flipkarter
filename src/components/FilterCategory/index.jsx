import "./FilterCategory.css";

const FilterCategory = ({ productFilter: { filterName, filterOptions } }) => {
  return (
    <section className="filter-category-container">
      <header className="filter-category-header">
        <h3 className="filter-category-header-heading">{filterName}</h3>
        <i className="fa-solid fa-chevron-down"></i>
        {/* <i className="fa-solid fa-chevron-up"></i> */}
      </header>
      <div className="filter-category-options">
        {filterOptions.map((productFilterOption) => (
          <label key={productFilterOption}>
            <input type="checkbox" className="checkbox" />
            {productFilterOption}
          </label>
        ))}
      </div>
    </section>
  );
};

export { FilterCategory };

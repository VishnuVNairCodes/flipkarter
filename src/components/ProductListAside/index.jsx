import { FilterCategory } from "..";
import { useFilter } from "../../contexts/filter-context";
import { brandOptions } from "../../utils/get-brand-options";
import "./ProductListAside.css";

const ProductListAside = () => {
  const { filterDispatch } = useFilter();

  const filterCategories = [
    {
      filterCategoryName: "gender",
      filterCategoryOptions: ["girl", "boy", "unisex"],
    },
    {
      filterCategoryName: "sizes",
      filterCategoryOptions: ["S", "M", "L", "Free"],
    },
    {
      filterCategoryName: "brand",
      filterCategoryOptions: brandOptions,
    },
  ];
  return (
    <aside className="product-list-aside-container">
      <header className="product-list-aside-header">
        <div>
          <h2 className="product-list-aside-header-heading">Filters</h2>
          <button
            onClick={() => filterDispatch({ type: "CLEAR_ALL_FILTERS" })}
            className="btn-clear-all"
          >
            CLEAR ALL
          </button>
        </div>
      </header>
      {filterCategories.map((filterCategory) => (
        <FilterCategory
          key={filterCategory.filterCategoryName}
          filterCategory={filterCategory}
        />
      ))}
    </aside>
  );
};

export { ProductListAside };

import { FilterCategory } from "..";
import { brandOptions } from "../../utils/get-brand-options";
import "./ProductListAside.css";

const ProductListAside = () => {
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
      filterCategoryName: "brands",
      filterCategoryOptions: brandOptions,
    },
  ];
  return (
    <aside className="product-list-aside-container">
      <header className="product-list-aside-header">
        <div>
          <h2 className="product-list-aside-header-heading">Filters</h2>
          <button className="btn-clear-all">CLEAR ALL</button>
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

import { FilterCategory } from "..";
import "./ProductListAside.css";

const ProductListAside = ({ products }) => {
  const brandOptions = products
    .map((product) => product.brand)
    .reduce((accumulator, currentValue) => {
      if (accumulator.includes(currentValue)) {
        return accumulator;
      }
      return [...accumulator, currentValue];
    }, []);

  const productFilters = [
    {
      filterName: "gender",
      filterOptions: ["girl", "boy", "unisex"],
    },
    {
      filterName: "sizes",
      filterOptions: ["S", "M", "L", "Free"],
    },
    {
      filterName: "brand",
      filterOptions: brandOptions,
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
      {productFilters.map((productFilter) => (
        <FilterCategory
          key={productFilter.filterName}
          productFilter={productFilter}
        />
      ))}
    </aside>
  );
};

export { ProductListAside };

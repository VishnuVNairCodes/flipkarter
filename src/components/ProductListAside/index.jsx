import { FilterCategory } from "..";
import { productsData } from "../../data";
import "./ProductListAside.css";

const ProductListAside = () => {
  const { products } = productsData;
  const productFilters = ["gender", "sizes", "brand"];

  console.log("Products", products);
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
          productFilter={productFilter}
          productFilterOptions={products[productFilter]}
        />
      ))}
    </aside>
  );
};

export { ProductListAside };

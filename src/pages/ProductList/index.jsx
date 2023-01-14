import { ProductListAside, ProductListMain } from "./components";

import "./ProductList.css";

const ProductList = () => {
  return (
    <div className="product-list-container">
      <ProductListAside />
      <ProductListMain />
    </div>
  );
};

export { ProductList };

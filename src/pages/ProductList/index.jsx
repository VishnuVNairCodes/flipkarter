import { productsData } from "../../data";
import { ProductListAside, ProductListMain } from "../../components";

import "./ProductList.css";

const ProductList = () => {
  const { products } = productsData;
  return (
    <div className="product-list-container">
      <ProductListAside />
      <ProductListMain products={products} />
    </div>
  );
};

export { ProductList };

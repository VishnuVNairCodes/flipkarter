import { ProductCard } from "..";
import { useFilter } from "../../contexts/filter-context";
import { getFilteredProducts } from "../../utils/filter-utils";
import "./ProductListMain.css";

const ProductListMain = ({ products }) => {
  const { filterState } = useFilter();
  const filteredProducts = getFilteredProducts(products, filterState);

  return (
    <main className="product-list-main-container">
      {!filteredProducts.length && (
        <p className="msg-no-products">No products available</p>
      )}
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </main>
  );
};

export { ProductListMain };

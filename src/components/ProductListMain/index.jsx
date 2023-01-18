import { ProductCard } from "..";
import { useFilter } from "../../contexts/filter-context";
import { getFilteredProducts } from "../../utils/filter-utils";
import { getSortedProducts } from "../../utils/sort-utils";
import { SortMenu } from "../SortMenu";
import "./ProductListMain.css";

const ProductListMain = ({ products }) => {
  const { filterState } = useFilter();
  const filteredProducts = getFilteredProducts(products, filterState);
  const sortedAndFilteredProducts = getSortedProducts(
    filteredProducts,
    filterState.sortByPrice
  );

  return (
    <main className="product-list-main-container">
      {!sortedAndFilteredProducts.length ? (
        <p className="msg-no-products">No products available</p>
      ) : (
        <SortMenu />
      )}

      {sortedAndFilteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </main>
  );
};

export { ProductListMain };

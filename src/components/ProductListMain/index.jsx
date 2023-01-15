import { ProductCard } from "..";
import "./ProductListMain.css";

const ProductListMain = ({ products }) => {
  return (
    <main className="product-list-main-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </main>
  );
};

export { ProductListMain };

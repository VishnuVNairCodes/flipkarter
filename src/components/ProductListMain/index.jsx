import { productsData } from "../../data";
import { ProductCard } from "..";
import "./ProductListMain.css";

const ProductListMain = () => {
  const { products } = productsData;
  return (
    <main className="product-list-main-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </main>
  );
};

export { ProductListMain };

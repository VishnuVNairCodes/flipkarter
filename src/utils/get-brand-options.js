import { productsData } from "../data";

const { products } = productsData;

const brandOptions = products
  .map((product) => product.brand)
  .reduce((accumulator, currentValue) => {
    if (accumulator.includes(currentValue)) {
      return accumulator;
    }
    return [...accumulator, currentValue];
  }, []);

export { brandOptions };

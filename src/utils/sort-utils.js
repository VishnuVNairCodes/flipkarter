const getSortedProducts = (products, sortOrder) => {
  switch (sortOrder) {
    case "PRICE_LOW_TO_HIGH":
      return [...products].sort(
        (product1, product2) =>
          product1.discountedPrice - product2.discountedPrice
      );
    case "PRICE_HIGH_TO_LOW":
      return [...products].sort(
        (product1, product2) =>
          product2.discountedPrice - product1.discountedPrice
      );
    case "NULL":
      return products;
    default:
      return products;
  }
};

export { getSortedProducts };

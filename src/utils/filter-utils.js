const getCategoryFilteredProducts = (products, filterState, filterCategory) => {
  // filterCategory example: gender, sizes, brand

  // get filter category options - Eg: girl, boy, unisex
  const filterCategoryOptions = Object.getOwnPropertyNames(
    filterState.toggleBasedFilters[filterCategory]
  );

  // get active filter options - Eg: girl only
  const activeFilterOptions = filterCategoryOptions.filter(
    (filterCategoryOption) =>
      filterState.toggleBasedFilters[filterCategory][filterCategoryOption]
  );

  // checking if there are any active filter options, if not then return the original products array
  if (activeFilterOptions.length === 0) {
    return products;
  }

  // if there are active filter options, let's go further

  let categoryFilteredProducts = [];
  // filtering for all active filters in this specific category
  for (const activeFilterOption of activeFilterOptions) {
    categoryFilteredProducts = [
      ...categoryFilteredProducts,
      ...products.filter((product) =>
        product[filterCategory]
          .toString()
          .split(",")
          .includes(activeFilterOption)
      ),
    ];
  }
  // product[filterCategory] can be of two data types
  // if there is only a single option for the filterCategory within the product, the data is a string. Eg: product.gender will be say, "girl"
  // if there are multiple options for the filterCategory within the product, the data is an array. Eg: product.sizes will be say ["S", "M", "L"]
  // toString() and split() is used in succession to bring all product[filterCategory] to same data type, i.e., array

  // Creating object to avoid product duplication
  const categoryFilteredProductsObject = categoryFilteredProducts.reduce(
    (accumulator, currentValue) => ({
      ...accumulator,
      [currentValue.id]: currentValue,
    }),
    {}
  );

  // Using keys of categoryFilteredProductsObject to remove all duplicate products from categoryFilteredProducts array
  categoryFilteredProducts = categoryFilteredProducts.filter((product) =>
    Object.keys(categoryFilteredProductsObject).includes(product.id)
  );

  return categoryFilteredProducts;
};

const getFilteredProducts = (products, filterState) => {
  const filterCategories = Object.getOwnPropertyNames(
    filterState.toggleBasedFilters
  );

  let categoryFilteredProducts = products;
  for (const filterCategory of filterCategories) {
    categoryFilteredProducts = getCategoryFilteredProducts(
      categoryFilteredProducts,
      filterState,
      filterCategory
    );
  }
  const filteredProducts = categoryFilteredProducts;
  return filteredProducts;
};

export { getFilteredProducts };

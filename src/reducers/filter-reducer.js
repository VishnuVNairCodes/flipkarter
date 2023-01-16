import { brandOptions } from "../utils/get-brand-options";

const brandFilters = brandOptions.reduce(
  (accumulator, currentValue) => ({
    ...accumulator,
    [currentValue]: false,
  }),
  {}
);

const filterStateInitial = {
  gender: {
    boy: false,
    girl: false,
    unisex: false,
  },
  sizes: {
    S: false,
    M: false,
    L: false,
    Free: false,
  },
  brands: brandFilters,
};

const filterReducerFunc = (filterState, filterAction) => {
  switch (filterAction.type) {
    case "TOGGLE_FILTER_OPTION":
      const {
        payload: { filterCategoryName, filterCategoryOption },
      } = filterAction;
      return {
        ...filterState,
        [filterCategoryName]: {
          ...filterState[filterCategoryName],
          [filterCategoryOption]:
            !filterState[filterCategoryName][filterCategoryOption],
        },
      };
    case "CLEAR_FILTERS":
      return {
        ...filterStateInitial,
      };
    default:
      return filterState;
  }
};

export { filterReducerFunc, filterStateInitial };

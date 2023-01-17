import { brandOptions } from "../utils/get-brand-options";

const brandFilters = brandOptions.reduce(
  (accumulator, currentValue) => ({
    ...accumulator,
    [currentValue]: false,
  }),
  {}
);

const filterStateInitial = {
  toggleBasedFilters: {
    gender: {
      girl: false,
      boy: false,
      unisex: false,
    },
    sizes: {
      S: false,
      M: false,
      L: false,
      Free: false,
    },
    brand: brandFilters,
  },
};

const filterReducerFunc = (filterState, filterAction) => {
  switch (filterAction.type) {
    case "TOGGLE_FILTER_OPTION":
      const {
        payload: { filterCategoryName, filterCategoryOption },
      } = filterAction;
      return {
        ...filterState,
        toggleBasedFilters: {
          ...filterState.toggleBasedFilters,
          [filterCategoryName]: {
            ...filterState.toggleBasedFilters[filterCategoryName],
            [filterCategoryOption]:
              !filterState.toggleBasedFilters[filterCategoryName][
                filterCategoryOption
              ],
          },
        },
      };
    case "CLEAR_ALL_FILTERS":
      return {
        ...filterStateInitial,
      };
    default:
      return filterState;
  }
};

export { filterReducerFunc, filterStateInitial };

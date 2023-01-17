import { useFilter } from "../../contexts/filter-context";
import "./SortMenu.css";

const SortMenu = () => {
  const {
    filterState: { sortByPrice },
    filterDispatch,
  } = useFilter();
  const handleChangePriceSortOrder = (e) =>
    filterDispatch({ type: "SORT_BY_PRICE", payload: e.target.value });
  return (
    <menu className="sort-menu">
      <h3 className="sort-menu-heading">Sort By</h3>
      <button>
        <input
          type="radio"
          name="sort-by-price"
          value="PRICE_LOW_TO_HIGH"
          checked={sortByPrice === "PRICE_LOW_TO_HIGH"}
          onChange={handleChangePriceSortOrder}
          id="sort-price-low-high"
        />
        <label className="label-sort-radio" htmlFor="sort-price-low-high">
          Price--Low to High
        </label>
      </button>
      <button>
        <input
          type="radio"
          name="sort-by-price"
          value="PRICE_HIGH_TO_LOW"
          checked={sortByPrice === "PRICE_HIGH_TO_LOW"}
          onChange={handleChangePriceSortOrder}
          id="sort-price-high-low"
        />
        <label className="label-sort-radio" htmlFor="sort-price-high-low">
          Price--High to Low
        </label>
      </button>
    </menu>
  );
};

export { SortMenu };

import { createContext, useContext, useReducer } from "react";
import {
  filterReducerFunc,
  filterStateInitial,
} from "../reducers/filter-reducer";

const FilterContext = createContext(null);

const FilterProvider = ({ children }) => {
  const [filterState, filterDispatch] = useReducer(
    filterReducerFunc,
    filterStateInitial
  );

  return (
    <FilterContext.Provider value={{ filterState, filterDispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

const useFilter = () => useContext(FilterContext);

export { FilterProvider, useFilter };

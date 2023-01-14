import "./App.css";
import { NavBar } from "./components";
import { ProductList } from "./pages";

function App() {
  return (
    <div className="app">
      <NavBar />
      <ProductList />
    </div>
  );
}

export default App;

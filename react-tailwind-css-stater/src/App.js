import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./Pages/Home";
import { Departments } from "./Pages/Departments";
import { ProductList } from "./Pages/ProductList";
import { ProductDetail } from "./Pages/ProductDetail";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/departments" element={<Departments />}></Route>
        <Route path="/products" element={<ProductList />}></Route>
        <Route path="/products/:id" element={<ProductDetail />}></Route>

        <Route path="*" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;

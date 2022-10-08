import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartScreen from "./screens/CartScreen";
import HomeScreen from "./screens/HomeScreen";
import ProductListScreen from "./screens/ProductListScreen";
import ProductScreen from "./screens/ProductScreen";
import ProfileScreen from "./screens/ProfileScreen";
import SearchScreen from "./screens/SearchScreen";
function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <Routes>
          <Route exact path="/" element={<HomeScreen />}></Route>
          <Route path="/product/:id" element={<ProductScreen />}></Route>
          <Route path="/profile/" element={<ProfileScreen />}></Route>
          <Route path="/cart" element={<CartScreen />}></Route>

          <Route path="/search/name">
            <Route index element={<SearchScreen />} />
            <Route path=":name" element={<SearchScreen />} />
          </Route>
          <Route path="/productlist/" element={<ProductListScreen />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartScreen from "./screens/CartScreen";
import HomeScreen from "./screens/HomeScreen";
import ProductListScreen from "./screens/ProductListScreen";
import ProductScreen from "./screens/ProductScreen";
import ProfileScreen from "./screens/ProfileScreen";
import SearchScreen from "./screens/SearchScreen";
import UserListScreen from "./screens/UserListScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
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
          <Route path="/userlist/" element={<UserListScreen />}></Route>
          <Route path="/login/" element={<LoginScreen />}></Route>
          <Route path="/register/" element={<RegisterScreen />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

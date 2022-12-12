import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Cart from "./components/pages/Cart";
import CheckOut from "./components/pages/CheckOut";
import Login from "./components/pages/Login";
import Product from "./components/pages/Product";
import SignUp from "./components/pages/SignUp";

// toast-configuration method,
// it is compulsory method.
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header></Header>}>
          <Route
            path="/products"
            element={<Navigate to={"/products/1"}></Navigate>}
          ></Route>

          <Route
            path="/products/:productId"
            element={<Product></Product>}
          ></Route>
          <Route path="/cart" element={<Cart></Cart>}></Route>
          <Route path="/checkout" element={<CheckOut></CheckOut>}></Route>
        </Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
      </Routes>
    </>
  );
}

export default App;

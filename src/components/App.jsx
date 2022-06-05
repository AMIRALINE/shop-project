import { useEffect, useReducer } from "react";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/layOut";
import NoPage from "./pages/NoPage";
import AppContext from "../contexts/AppContext";
import AppReducer from "../reducers/appReducer";
import ProductPage from "./pages/ProductPage";
import Products from "./pages/Products";
import LogIn from "./pages/logIn";
import Categories from "./pages/categories";

export default function App(props) {
  let initState = {
    products: [
      {
        title: "loading...",
        price: NaN,
        description: "در حال لود شدن...",
      },
    ],
    categories: [],
    auth: false,
  };
  let [state, dispath] = useReducer(AppReducer, initState);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((json) =>
        dispath({
          type: "add_products",
          products: json,
          status: 200,
        })
      );
  }, []);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => dispath({ type: "add_categories", categories: json }));
  }, []);
  console.log(state);
  return (
    <AppContext.Provider value={{ state, dispath }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="*" element={<NoPage />} />
            {state.status == 404
              ? ""
              : state.products.map((pr) => (
                  <Route
                    key={pr.id}
                    path={`/products/product:${pr.id}`}
                    element={<ProductPage />}
                  />
                ))}
            {state.products.map((category) => (
              <Route
                key={category}
                path={`/categories/${category}`}
                element={<categoryPage />}
              />
            ))}
          </Route>
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

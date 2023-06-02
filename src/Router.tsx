import { createBrowserRouter } from "react-router-dom";
import ProductDetais from "./pages/Product/Product";
import StorePattern from "./patterns/StorePattern";
import Home from "./pages/Home/Home";
import SignIn from "./pages/SignIn/SignIn";
import ShoppingCart from "./pages/ShoppingCart/ShoppingCart";
import Error from "./pages/ErrorPage/Error";

const router = createBrowserRouter([
  { path: '/sign-in', element: <SignIn />, errorElement: <Error /> },
  {
    path: "/", element: <StorePattern />, errorElement: <Error />, children: [
      { path: "/", element: <Home /> },
      { path: "/error", element: <Error /> },
      { path: "produtos/:id", element: <ProductDetais /> },
      { path: "carrinho", element: <ShoppingCart /> },
    ]
  },
  // { path: "/admin", element: <AdminPattern />, errorElement: <ErrorPage /> },
]);

export default router;
import { createBrowserRouter } from "react-router-dom";
import ProductDetais from "./pages/Product/Product";
import StorePattern from "./patterns/StorePattern";
import Home from "./pages/Home/Home";
import SignIn from "./pages/SignIn/SignIn";
import ShoppingCart from "./pages/ShoppingCart/ShoppingCart";
import Error from "./pages/ErrorPage/Error";
import SignUp from "./pages/SignUp/SignUp";
import Checkout from "./pages/Checkout/Checkout";

const router = createBrowserRouter([
  { path: '/sign-in', element: <SignIn />, errorElement: <Error /> },
  { path: '/sign-up', element: <SignUp />, errorElement: <Error /> },
  {
    path: "/", element: <StorePattern />, errorElement: <Error />, children: [
      { path: "/", element: <Home /> },
      { path: "/error", element: <Error /> },
      { path: "produtos/:id", element: <ProductDetais /> },
      { path: "carrinho", element: <ShoppingCart /> },
      { path: "checkout", element: <Checkout /> },
    ]
  },
  // { path: "/admin", element: <AdminPattern />, errorElement: <ErrorPage /> },
]);

export default router;
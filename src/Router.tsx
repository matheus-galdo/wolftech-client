import { createBrowserRouter, useRouteError } from "react-router-dom";
import ProductDetais from "./pages/Product/Product";
import StorePattern from "./patterns/StorePattern";
import Home from "./pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/", element: <StorePattern/>, errorElement: <ErrorPage />, children: [
      { path: "/", element: <Home />, errorElement: <ErrorPage /> },
      { path: "produtos/:id", element: <ProductDetais />, errorElement: <ErrorPage /> },
    ]
  },
  // { path: "/admin", element: <AdminPattern />, errorElement: <ErrorPage /> },
]);

function ErrorPage() {
  const error = useRouteError();
  console.error(error);
  return <div>Deu ruim</div>;
}

export default router;
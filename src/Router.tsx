import { createBrowserRouter, useRouteError } from "react-router-dom";
import App from "./App";
import ProductDetails from "./pages/ProductDetails";

const router = createBrowserRouter([
  { path: "/", element: <App />, errorElement: <ErrorPage /> },
  { path: "/produtos/:id", element: <ProductDetails />, errorElement: <ErrorPage /> },
]);

function ErrorPage() {
  const error = useRouteError();
  console.error(error);
  return <div>Deu ruim</div>;
}

export default router;
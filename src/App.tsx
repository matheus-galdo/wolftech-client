import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import router from "./Router";
import AuthProvider from "./context/AuthContext";
import CartProvider from "./context/CartContext";

export default function App() {
    return <AuthProvider>
        <CartProvider>
            <Toaster />
            <RouterProvider router={router} />
        </CartProvider>
    </AuthProvider>;
}
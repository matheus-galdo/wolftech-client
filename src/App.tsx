import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import router from "./Router";
import AuthProvider from "./context/AuthContext";

export default function App() {
    return <AuthProvider>
        <Toaster />
        <RouterProvider router={router} />
    </AuthProvider>;
}
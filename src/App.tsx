import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import router from "./Router";

export default function App() {
    return <>
        <Toaster />
        <RouterProvider router={router} />
    </>;
}
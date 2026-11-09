import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/home/home/Home";
import Contact from "../pages/contact/Contact";
import AboutUs from "../pages/about-us/AboutUs";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/auth/login/Login";
import Register from "../pages/auth/register/Register";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children: [
            { index: true, Component: Home },
            { path: "about-us", Component: AboutUs },
            {
                path: "contact",
                Component: Contact,
                loader: () =>
                    fetch("./warehouses.json").then((res) => res.json()),
                HydrateFallback: () => <div>Loading...</div>,
            },
        ],
    },
    {
        path: "/",
        Component: AuthLayout,
        children: [
            { path: "auth/login", Component: Login },
            { path: "auth/register", Component: Register },
        ],
    },
]);

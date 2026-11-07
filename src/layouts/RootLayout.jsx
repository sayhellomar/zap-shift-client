import { Outlet } from "react-router";
import Header from "../pages/shared/header/Header";
import Footer from "../pages/shared/footer/Footer";

export default function RootLayout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}

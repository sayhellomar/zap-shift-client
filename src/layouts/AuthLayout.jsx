import Logo from "#components/logo/Logo";
import { Outlet } from "react-router";
import authImage from "../assets/authImage.png";
import Header from "../pages/shared/header/Header";

export default function AuthLayout() {
    return (
        <>
            <header className="relative z-1 bg-white">
                <Header />
            </header>
            <section className="auth-layout bg-white pl-8">
                <div className="container mx-auto">
                    <div className="h-[calc(100vh-90px)] flex items-center">
                        <Outlet />
                    </div>
                    <div className="auth-right flex-1 flex items-center justify-center h-screen bg-primary/20 absolute right-0 top-0 w-4xl">
                        <img src={authImage} alt="Auth Image" />
                    </div>
                </div>
            </section>
        </>
    );
}

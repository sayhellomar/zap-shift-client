import { Navigate, useLocation } from "react-router";
import useAuth from "../hooks/useAuth";
import FullPageLoader from "#components/loader/FullPageLoader";
import { Suspense } from "react";

export default function PrivateRoute({ children }) {
    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        return <FullPageLoader />;
    }

    if (user) {
        return children;
    }

    return (
        <>
            <FullPageLoader></FullPageLoader>
            <Navigate to="/auth/login" state={location.pathname} replace />
        </>
    );
}

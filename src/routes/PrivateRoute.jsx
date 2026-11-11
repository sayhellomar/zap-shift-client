import { Navigate } from "react-router";
import useAuth from "../hooks/useAuth";
import FullPageLoader from "#components/loader/FullPageLoader";
import { Suspense } from "react";

export default function PrivateRoute({ children }) {
    const { user, loading } = useAuth();

    if (!user) {
        return (
            <Suspense fallback={<FullPageLoader />}>
                <Navigate to="/auth/login" />
            </Suspense>
        );
    }

    return children;
}

import { RouterProvider } from "react-router/dom";
import { router } from "./routes/router";
import "./App.css";
import AuthProvider from "./contexts/AuthContext/AuthProvider";

function App() {
    return (
        <AuthProvider>
            <RouterProvider router={router} />
        </AuthProvider>
    );
}

export default App;

import { Navigate } from "react-router-dom";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ProtectedRoute = ({ children }: any) => {
    const isLogin = false;
    if (isLogin) return <Navigate to="/" />;

    return children;
};

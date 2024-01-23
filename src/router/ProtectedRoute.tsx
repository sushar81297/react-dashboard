import { Navigate } from "react-router-dom";
import { ReactNode } from "react";

interface Props {
    children : ReactNode
}
export const ProtectedRoute = ({ children }: Props) => {
    const isLogin = false;
    if (isLogin) return <Navigate to="/" />;

    return children;
};

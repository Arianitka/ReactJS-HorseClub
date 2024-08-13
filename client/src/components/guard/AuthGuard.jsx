import { Navigate } from "react-router";
import { useAuthContext } from "../../contexts/AuthContext"


export default function AuthGuard({ children }) {
    const { isAuthenticated } = useAuthContext();

    if (!isAuthenticated) {
        return <Navigate to="/login" />
    }
    return (
        <>
            {children}
        </>
    )
}
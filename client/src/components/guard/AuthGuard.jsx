import { Navigate } from "react-router";
import { useAuthContext } from "../../contexts/AuthContext"


export default function AuthGuard({ children }) {
    const { isAuthenticated } = useAuthContext();

    
    return isAuthenticated
           ? <Outlet/>
           : <Navigate to="/login" />

}
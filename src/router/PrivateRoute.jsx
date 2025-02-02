import { useContext, useEffect } from "react"
import { AuthContext } from "../auth/context";
import { Navigate, useLocation } from "react-router";



export const PrivateRoute = ({ children }) => {

    const { logged } = useContext(AuthContext);
    const { pathname, search } = useLocation();
    const lastPath = pathname + search;
    useEffect(() => {
        console.log(lastPath);
        
        localStorage.setItem('lastpath', lastPath)
    }, [lastPath])

    return (logged)
        ? children
        : <Navigate to="/login" />
}
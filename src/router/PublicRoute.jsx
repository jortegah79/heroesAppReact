import { useContext } from "react";
import { AuthContext } from "../auth/context"
import { Navigate } from "react-router";


export const PublicRoute = ({ children }) => {

    const { logged } = useContext(AuthContext);
    const lastpath = localStorage.getItem('lastpath') || '/marvel';   
    return (!logged)
        ? children
        : <Navigate to={lastpath} />
}
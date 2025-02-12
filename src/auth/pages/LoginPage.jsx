import { useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../context";


export const LoginPage = () => {

    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const onLogin = () => {
     
        login('El programador ninja')
        navigate('/marvel');
    }
    return (
        <div className="container mt-5">
            <h1>Login</h1>
            <hr />

            <button
                onClick={onLogin}
                className="btn btn-primary">
                Login
            </button>
        </div>
    );
}
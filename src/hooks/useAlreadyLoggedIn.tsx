import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export function useAlreadyLoggedIn() {
    const authContext = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (authContext?.userIsLoggedIn) {
            navigate('/');
        }
    }, [authContext, navigate]);
}
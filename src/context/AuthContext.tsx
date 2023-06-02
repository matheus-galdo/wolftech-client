import { createContext, useEffect, useState } from "react";
import { Authorization } from "../types/credentials";
import { User } from "../types/credentials";
import { SignInResponse } from "../types/Services/Auth";
import { getCredentials } from "../services/helpers";

export type AuthProviderContext = {
    token: Authorization | null;
    user: User | null;
    userIsLoggedIn: boolean;
    storeCredentials: (signInResponse: SignInResponse) => void;
    logout: () => void;
};

export const AuthContext = createContext<AuthProviderContext | null>(null);

type AuthProviderProps = {
    children: string | JSX.Element | JSX.Element[];
};

export default function AuthProvider(props: AuthProviderProps) {
    const [token, setToken] = useState<Authorization | null>(null);
    const [user, setUser] = useState<User | null>(null);
    const [userIsLoggedIn, setUserIsLoggedIn] = useState(false);

    useEffect(() => {
        const credentials = getCredentials();
        credentials && updateCredentialsState(credentials);
    }, []);

    function storeCredentials(signInResponse: SignInResponse): void {
        //TODO: don't store credentials on localStorage 
        localStorage.setItem('credentials', JSON.stringify(signInResponse));
        updateCredentialsState(signInResponse);
    }

    function logout(){
        localStorage.removeItem('credentials');
        setUser(null);
        setToken(null);
        setUserIsLoggedIn(false);
    }

    function updateCredentialsState(signInResponse: SignInResponse) {
        setToken(signInResponse.authorization);
        setUser(signInResponse.user);
        setUserIsLoggedIn(true);
    }

    return <AuthContext.Provider value={{ token, user, storeCredentials, userIsLoggedIn, logout }}>
        {props.children}
    </AuthContext.Provider>;
}
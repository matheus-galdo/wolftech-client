import { createContext, useEffect, useState } from "react";
import { Authorization } from "../types/credentials";
import { User } from "../types/credentials";
import { SignInResponse } from "../types/Services/Auth";

export type AuthProviderContext = {
    token: Authorization | null;
    user: User | null;
    storeCredentials: (signInResponse: SignInResponse) => void;
};

export const AuthContext = createContext<AuthProviderContext | null>(null);

type AuthProviderProps = {
    children: string | JSX.Element | JSX.Element[];
};

export default function AuthProvider(props: AuthProviderProps) {
    const [token, setToken] = useState<Authorization | null>(null);
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const credentialsString = localStorage.getItem('credentials');
        if (credentialsString) {
            const credentials: SignInResponse = JSON.parse(credentialsString);
            updateCredentialsState(credentials);
        }
    }, []);

    function storeCredentials(signInResponse: SignInResponse): void {
        localStorage.setItem('credentials', JSON.stringify(signInResponse));
        updateCredentialsState(signInResponse);
    }

    function updateCredentialsState(signInResponse: SignInResponse) {
        setToken(signInResponse.authorization);
        setUser(signInResponse.user);
    }

    return <AuthContext.Provider value={{ token, user, storeCredentials }}>
        {props.children}
    </AuthContext.Provider>;
}
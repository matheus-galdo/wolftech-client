import axios from "axios";
import { BASE_URL } from "./serviceAPIConfig";
import { SignInResponse } from "../types/Services/Auth";
import { SignInCredentials } from "../types/credentials";

export function signIn(credentials: SignInCredentials) {
    return axios.post<SignInResponse>(`${BASE_URL}/login`, credentials);
}

export function signUp() {
    return axios.get(`${BASE_URL}/register`);
}

export function logOut() {
    const credentials = getCredentials();
    return axios.post(`${BASE_URL}/logout`, {}, { headers: { Authorization: 'Bearer ' + credentials?.authorization.token, } });
}


export function getCredentials() {
    const credentialsString = localStorage.getItem('credentials');
    if (credentialsString) {
        const credentials: SignInResponse = JSON.parse(credentialsString);
        return credentials;
    }
}
import axios from "axios"
import { BASE_URL } from "./serviceAPIConfig"


export type SignInCredentials = {
    email: string;
    password: string;
}

export function signIn(credentials: SignInCredentials) {
    return axios.post(`${BASE_URL}/login`, credentials);
}

export function signUp(id: string) {
    return axios.get(`${BASE_URL}/products/${id}`);
}
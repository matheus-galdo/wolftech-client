import axios from "axios";
import { BASE_URL } from "./serviceAPIConfig";
import { SignInResponse } from "../types/Services/Auth";
import { SignInCredentials } from "../types/credentials";



export function signIn(credentials: SignInCredentials) {
    return axios.post<SignInResponse>(`${BASE_URL}/login`, credentials);
}

export function signUp(id: string) {
    return axios.get(`${BASE_URL}/products/${id}`);
}
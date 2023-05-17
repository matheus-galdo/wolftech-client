import axios from "axios";
import { BASE_URL } from "./serviceAPIConfig";
import { Authorization, SignInCredentials, User } from "../types/credentials";

export type SignInResponse = {
    user: User;
    authorization: Authorization
};

export function signIn(credentials: SignInCredentials) {
    return axios.post<SignInResponse>(`${BASE_URL}/login`, credentials);
}

export function signUp(id: string) {
    return axios.get(`${BASE_URL}/products/${id}`);
}
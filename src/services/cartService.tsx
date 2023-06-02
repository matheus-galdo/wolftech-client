import axios from "axios";
import { BASE_URL } from "./serviceAPIConfig";
import { Product } from "../types/Products";
import { getCredentials } from "./authService";
import { Cart } from "../types/Cart";


export function getCart(){
    const credentials = getCredentials();
    return axios.get<Cart>(`${BASE_URL}/cart`, { headers: { Authorization: 'Bearer ' + credentials?.authorization.token, }});
}

export function addProductToCart(productId: string){
    const credentials = getCredentials();

    return axios.post<Product[]>(`${BASE_URL}/cart/${productId}`, {ammout: 1}, { headers: { Authorization: 'Bearer ' + credentials?.authorization.token, }});
}


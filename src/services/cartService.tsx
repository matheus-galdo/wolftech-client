import axios from "axios";
import { BASE_URL } from "./serviceAPIConfig";
import { Cart } from "../types/Cart";
import { makeAuthHeaders } from "./helpers";


export function getCart(){
    return axios.get<Cart>(`${BASE_URL}/cart`, makeAuthHeaders());
}

export function addProductToCart(productId: string, ammount: number){
    return axios.post(`${BASE_URL}/cart/${productId}`, {ammount}, makeAuthHeaders());
}

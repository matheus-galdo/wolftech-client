import axios from "axios";
import { BASE_URL } from "./serviceAPIConfig";
import { Cart } from "../types/Cart";
import { makeAuthHeaders } from "./helpers";
import { CartProduct } from "../types/CartProduct";


export function getCart(){
    return axios.get<Cart>(`${BASE_URL}/cart`, makeAuthHeaders());
}

export function addProductToCart(payload: AddProductToCartPayload){
    return axios.post<CartProduct>(`${BASE_URL}/cart`, payload, makeAuthHeaders());
}

export type AddProductToCartPayload = {
    productId: string, 
    ammount: number,
};

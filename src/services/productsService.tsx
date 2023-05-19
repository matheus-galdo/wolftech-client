import axios from "axios";
import { BASE_URL } from "./serviceAPIConfig";
import { Product } from "../types/Products";


export function getProducts(){
    return axios.get<Product[]>(`${BASE_URL}/products`);
}

export function getProductById(id: string){
    return axios.get<Product>(`${BASE_URL}/products/${id}`);
}
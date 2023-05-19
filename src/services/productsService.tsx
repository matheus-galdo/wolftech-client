import axios from "axios";
import { BASE_URL } from "./serviceAPIConfig";


export function getProducts(){
    return axios.get(`${BASE_URL}/products`);
}

export function getProductById(id: string){
    return axios.get(`${BASE_URL}/products/${id}`);
}
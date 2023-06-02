import { CartProduct } from "./CartProduct";

export type Cart = {
    id: string;
    userId: string;
    cartProducts: CartProduct[];
};
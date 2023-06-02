import { Product } from './Products';

export type CartProduct = {
    id: string;
    ammount: number;
    cartId: string;
    product: Product;
};
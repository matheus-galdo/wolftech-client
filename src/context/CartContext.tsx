import { createContext, useEffect, useState } from "react";
import { Cart } from "../types/Cart";
import { getCart } from "../services/cartService";
import { CartProduct } from "../types/CartProduct";

export type CartProviderContext = {
    numberOfItens: number;
    cart: Cart | null;
    setCart: (itens: Cart) => void;
    addProduct: (itens: CartProduct) => void;
};

export const CartContext = createContext<CartProviderContext | null>(null);

type AuthProviderProps = {
    children: string | JSX.Element | JSX.Element[];
};

export default function CartProvider(props: AuthProviderProps) {
    const [cart, setCart] = useState<Cart | null>(null);
    const numberOfItens = cart ? cart.cartProducts.length : 0;

    useEffect(() => {
        getCart().then(response => {
            setCart(response.data);
        });
    }, []);

    function addProduct(responseCartProduct: CartProduct): void {
        if (cart) {
            const existingProduct = cart.cartProducts.find((cartProduct) => cartProduct.product.id === responseCartProduct.product.id);

            const newCart: Cart = { ...cart };
            if (existingProduct) {
                existingProduct.ammount = responseCartProduct.ammount;
            } else {
                newCart.cartProducts = [...cart.cartProducts, responseCartProduct];
            }

            setCart(newCart);
        }
    }

    return <CartContext.Provider value={{ numberOfItens, cart, setCart, addProduct }}>
        {props.children}
    </CartContext.Provider>;
}
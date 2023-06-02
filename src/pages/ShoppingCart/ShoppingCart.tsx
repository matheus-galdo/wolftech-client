import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getCart } from '../../services/cartService';
import { Cart } from '../../types/Cart';

export default function ShoppingCart() {
    const [cart, setCart] = useState<Cart | null>(null);

    useEffect(() => {
        getCart().then(response => setCart(response.data));
    }, []);

    return <div>
        <ItensContainer>
            {cart?.cartProducts.map(item => <CartItem key={item.id}>{item.product.name}</CartItem>)}
        </ItensContainer>
    </div>;
}

const ItensContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const CartItem = styled.div`
    background-color: #fff;
`;
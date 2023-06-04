import { useContext } from 'react';
import styled from 'styled-components';
import { CartContext } from '../../context/CartContext';

export default function ShoppingCart() {
    const cartContext = useContext(CartContext);

    return <div>
        <ItensContainer>
            {cartContext?.cart?.cartProducts.map(item => <CartItem key={item.id}>{item.product.name}</CartItem>)}
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
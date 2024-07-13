import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import CartItem from './Styled';
import formatProductPrice from '../../components/ProductCard/ProductPrice';
import styled from 'styled-components';
import { Button } from '../../components/Button/Button';
import { Link } from 'react-router-dom';

export default function ShoppingCart() {
    const cartContext = useContext(CartContext);

    return <CartContainer>
        <CartItem.ItensContainer>
            {cartContext?.cart?.cartProducts.map(({ id, product, ammount }) => <CartItem.Item key={id}>
                <CartItem.Picture src={product.imageUrl} alt={product.name} />

                <CartItem.Name>{product.name}</CartItem.Name>
                <CartItem.Name>{ammount}</CartItem.Name>
                <CartItem.Price>{formatProductPrice((Number(product.price) * ammount).toString())}</CartItem.Price>
            </CartItem.Item>)}
        </CartItem.ItensContainer>

        <CartSummary>


            <p>{cartContext?.cart?.cartProducts.length} produtos</p>
            <p>Total: {cartContext?.cart?.cartProducts.reduce((acc, product) => {
                return acc + (Number(product.product.price) * product.ammount);
            }, 0)}
            </p>
            <Link to="/checkout">
                <Button>
                    Ir para pagamento
                </Button>
            </Link>
        </CartSummary>
    </CartContainer>;
}

const CartSummary = styled.div`
    background-color: #fff;
    width: 300px;

`;

const CartContainer = styled.div`
    display: flex;
    gap: 2rem;

    justify-content: center;
`;
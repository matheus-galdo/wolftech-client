import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import CartItem from './Styled';
import formatProductPrice from '../../components/ProductCard/ProductPrice';
import styled from 'styled-components';
import { Product } from '../../types/Products';
import { CartProduct } from '../../types/CartProduct';
import { Button } from '../../components/Button/Button';
import { Field, Form, Formik } from 'formik';

export default function Checkout() {
    const cartContext = useContext(CartContext);

    function onSubmit(values, {setSubmitting}) {
        console.log(values);
        setSubmitting(false);
        
    }

    return <CartContainer>
            <Formik initialValues={{ email:"", password: "" }} onSubmit={onSubmit}>
                <Form>
                    <Field type="email" name="email"/>
                    <button>finalizar</button>
                </Form>
            </Formik>

        <CartSummary>


            <p>{cartContext?.cart?.cartProducts.length} produtos</p>
            <p>Total: {cartContext?.cart?.cartProducts.reduce((acc, product) => {                
                return acc + (Number(product.product.price) * product.ammount);
            }, 0)}
            </p>
            <Button>Finalizar compra</Button>
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
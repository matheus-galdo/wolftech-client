import { Link, useNavigate } from 'react-router-dom';
import './Card.scss';
import formatProductPrice from './ProductPrice';
import { Product } from '../../types/Products';
import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

export type ProductProps = {
    product: Product
};

export default function ProductCard({ product }: ProductProps) {
    const navigate = useNavigate();
    const authContext = useContext(AuthContext);

    //TODO: create generic and reusable function to add product to cart
    function addToCart(ev: React.MouseEvent, product: any) {
        ev.preventDefault();
        
        if (!authContext?.userIsLoggedIn) {
            const error = new Response("Unauthenticated", { status: 401 });
            return navigate("/error", {state: error});
        }

        //TODO: send post request to shopping-cart
        navigate("/carrinho");
    }

    return <div className="product-card">
        <Link to={`produtos/${product.id}`}>
            <div className='product-card-wrapper'>
                <div className="image-container">
                    <img src={product.imageUrl} alt={product.name} />
                </div>
                <div className="card-details">
                    <h1 className="name">{product.name}</h1>
                    <p className="price">{formatProductPrice(product.price)}</p>
                </div>
            </div>
        </Link >
        <div className="buttons">
            <button onClick={(ev) => addToCart(ev, {})}>Adicionar ao carrinho</button>
        </div>
    </div>;
}
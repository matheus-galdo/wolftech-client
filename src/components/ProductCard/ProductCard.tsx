import { Link, useNavigate } from 'react-router-dom';
import './Card.scss';
import formatProductPrice from './ProductPrice';
import { Product } from '../../types/Products';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { addProductToCart, AddProductToCartPayload } from '../../services/cartService';
import { CartContext } from '../../context/CartContext';

export type ProductProps = {
    product: Product
};

export default function ProductCard({ product }: ProductProps) {
    const navigate = useNavigate();
    const authContext = useContext(AuthContext);
    const cartContext = useContext(CartContext);

    function addToCart(product: Product) {
        if (!authContext?.userIsLoggedIn) {
            return navigate("/error", { state: { title: "Unauthenticated", status: 401 } });
        }

        const payload: AddProductToCartPayload = {
            ammount: 1,
            productId: product.id
        };

        addProductToCart(payload).then((response) => {
            cartContext?.addProduct(response.data);
            navigate("/carrinho");
        });
    }

    return <div className="product-card">
        <Link to={`produtos/${product.id}`}>
            <div className='product-card-wrapper'>
                <div className="image-container">
                    <img src={product.imageUrl} alt={product.name} />
                </div>
                <div className="card-details">
                    <p className="price">{formatProductPrice(product.price)}</p>
                    <h1 className="name">{product.name}</h1>
                </div>
            </div>
        </Link >
        <div className="buttons">
            <button onClick={() => addToCart(product)}>Adicionar ao carrinho</button>
        </div>
    </div>;
}
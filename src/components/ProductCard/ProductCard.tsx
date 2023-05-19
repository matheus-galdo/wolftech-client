import { Link } from 'react-router-dom';
import './Card.scss';
import formatProductPrice from './ProductPrice';

export type ProductProps = {
    product: Product
};

export type Product = {
    id: string
    name: string
    price: string
    description: string
    imageUrl: string
};

export default function ProductCard({ product }: ProductProps) {

    return <Link className="product-card" to={`produtos/${product.id}`}>
        <div className='product-card-wrapper'>
            <div className="image-container">
                <img src={product.imageUrl} alt={product.name} />
            </div>
            <div className="card-details">
                <h1 className="name">{product.name}</h1>
                <p className="price">{formatProductPrice(product.price)}</p>
                <div className="buttons">
                    <button>Adicionar ao carrinho</button>
                </div>
            </div>
        </div>
    </Link >;
}
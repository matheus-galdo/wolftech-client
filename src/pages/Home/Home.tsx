import { useEffect, useState } from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import axios from 'axios';
import './Home.scss';
import { Product } from '../../types/Products';

export default function Home() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        //TODO: change to products service
        axios.get('http://localhost:8000/api/products').then(response => setProducts(response.data));
    }, []);

    return <>
        <div className="slider">
            banner
        </div>
        <div className="categories">
            categorias
        </div>
        <div className="cards">
            {products.map(product => <ProductCard key={product.id} product={product} />)}
        </div >
    </>;
}
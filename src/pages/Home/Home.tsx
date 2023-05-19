import { useEffect, useState } from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import './Home.scss';
import { Product } from '../../types/Products';
import { getProducts } from '../../services/productsService';

export default function Home() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        getProducts().then(response => setProducts(response.data));
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
import { useEffect, useState } from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import { Product } from '../../types/Products';
import { getProducts } from '../../services/productsService';
import './Home.scss';

export default function Home() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        getProducts().then(response => setProducts(response.data));
    }, []);

    return <>
        {/* TODO: adicionar banner de promos recentes */}
        {/* <div className="slider">
            banner
        </div> */}
        
        {/* TODO: adicionar lista de categorias */}
        {/* <div className="categories">
            categorias
        </div> */}

        <div className="cards">
            {products.map(product => <ProductCard key={product.id} product={product} />)}
        </div >
    </>;
}
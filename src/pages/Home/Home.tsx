import { useEffect, useState } from 'react'
import ProductCard, { Product } from '../../components/ProductCard/ProductCard'
import axios from 'axios';
import './Home.scss'

export default function Home() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products').then(response => setProducts(response.data))
    }, [])

    console.log('aa', products);


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
    </>
}
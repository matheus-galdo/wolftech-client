import { useEffect, useState } from "react"
import { getProductById } from "../../services/productsService"
import { useParams } from "react-router-dom"
import { Product } from "../../components/ProductCard/ProductCard";
import formatProductPrice from "../../components/ProductCard/ProductPrice";
import './Product.scss';
import ProductThumbnail from "./ProductThumbnail";

export default function ProductDetais() {
    const [product, setProduct] = useState<Product | null>(null)
    const { id } = useParams() as { id: string };


    useEffect(() => {
        getProductById(id).then(response => setProduct(response.data));
    }, [id])


    return <div className="product">
        <section className="info">
            <ProductThumbnail product={product as Product}/>

            <div className="details">
                <h1 className="name">{product?.name}</h1>
                <p className="price">{formatProductPrice(product?.price)}</p>
                <p className="short-description"></p>
                <button id="comprar" className="btnComprar">Comprar Agora</button>
            </div>
        </section>
        <section className="description">
            <h1>Descrição</h1>
            {product?.description}
        </section>

        <section className="specs">
            <h1>Informações Técnica</h1>
            especificações técnicas do produto
        </section>

        <section className="sugestions">
            <h1>Produtos Similares</h1>
            produtos sugeridos
        </section>
    </div>
}
import { useEffect, useState } from "react"
import { getProductById } from "../services/productsService"
import { useParams } from "react-router-dom"
import { Product } from "../components/ProductCard/ProductCard";
import formatProductPrice from "../components/ProductCard/ProductPrice";

export default function ProductDetails() {
    const [product, setProduct] = useState<Product | null>(null)
    const { id } = useParams() as { id: string };


    useEffect(() => {
        getProductById(id).then(response => setProduct(response.data));
    }, [id])


    return <div className="produto">
        <section className="detalhes">
            <div className="foto">
                <img src="{{url('images/produtos/processador.jpg')}}" alt="" />
            </div>

            <div className="descricao">
                <h1 className="nome">{product?.name}</h1>
                <p className="valor">{formatProductPrice(product?.price as string)}</p>
                <p className="descricao">{product?.description}</p>
                <button id="comprar" className="btnComprar">Comprar</button>
            </div>
        </section>

        <section className="especificacoes">
            aaaaa
        </section>

        <section className="sugestions">
            produtos sugeridos
        </section>
    </div>
}
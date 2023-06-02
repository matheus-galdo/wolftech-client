import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProductById } from "../../services/productsService";
import formatProductPrice from "../../components/ProductCard/ProductPrice";
import ProductPreview from "./ProductPreview";
import { Button, SecondaryButton } from "../../components/Button/Button";
import { Product } from "../../types/Products";
import './Product.scss';
import { addProductToCart } from "../../services/cartService";
import { AuthContext } from "../../context/AuthContext";

export default function ProductDetais() {
    const [product, setProduct] = useState<Product | null>(null);
    const { id } = useParams() as { id: string };
    const navigate = useNavigate();
    const authContext = useContext(AuthContext);

    const installmentsValue = (Number(product?.price) / 12).toString();

    useEffect(() => {
        getProductById(id).then(response => setProduct(response.data));
    }, [id]);

    function addToCart(product: Product) {
        if (!authContext?.userIsLoggedIn) {
            return navigate("/error", { state: { title: "Unauthenticated", status: 401 } });
        }

        const ammountOfProducts = 1;
        addProductToCart(product.id, ammountOfProducts).then(() => {
            //TODO: update cart context
        });
    }

    function buyNow(product: Product) {
        if (!authContext?.userIsLoggedIn) {
            return navigate("/error", { state: { title: "Unauthenticated", status: 401 } });
        }

        const ammountOfProducts = 1;
        addProductToCart(product.id, ammountOfProducts).then(() => {
            //TODO: update cart context
            navigate("/carrinho");
        });
    }

    return <div className="product">
        <section className="info">
            <ProductPreview product={product} />

            <div className="details">
                <h1 className="name">{product?.name}</h1>
                <p className="price">{formatProductPrice(product?.price)}</p>
                <p className="installment-price">em 12x {formatProductPrice(installmentsValue)}</p>
                <p className="short-description">lorem impsum dolor sit amet dor um benc cazzo</p>

                {product && <div className="buttons">
                    <Button onClick={() => buyNow(product)}>Comprar Agora</Button>
                    <SecondaryButton onClick={() => addToCart(product)}>Adicionar ao Carrinho</SecondaryButton>
                </div>}
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
    </div>;
}
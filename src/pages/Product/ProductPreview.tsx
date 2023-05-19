import { ProductProps } from "../../components/ProductCard/ProductCard";
import './ProductPreview.scss';

export default function ProductPreview({product}: ProductProps) {
    return <div className="picture">
        <img src={product?.imageUrl} alt="" />
        <div className="pictures-list">
            <img alt=""/>
            <img alt=""/>
            <img alt=""/>
        </div>
    </div>;
}
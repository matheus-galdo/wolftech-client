import { ProductProps } from "../../components/ProductCard/ProductCard";

export default function ProductThumbnail({product}: ProductProps) {
    return <div className="picture">
        <img src={product?.imageUrl} alt="" />
        <div className="pictures-list">
            <img />
            <img />
            <img />
        </div>
    </div>;
}
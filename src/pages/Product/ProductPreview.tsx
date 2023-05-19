import { Product } from "../../types/Products";
import './ProductPreview.scss';

type ProductPreviewProps = {
    product: Product | null
};

export default function ProductPreview({ product }: ProductPreviewProps) {
    return <div className="picture">
        <img src={product?.imageUrl} alt="" />
        <div className="pictures-list">
            <img alt="" />
            <img alt="" />
            <img alt="" />
        </div>
    </div>;
}
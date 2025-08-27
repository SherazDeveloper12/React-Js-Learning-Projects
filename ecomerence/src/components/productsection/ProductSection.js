import Product from "../product/Product";
import './productsection.css'
import { productdata } from "../../constant/productdata";
export default function ProductSection() {
    return (
        <div className="product-section">
                             <h2>Featured Products</h2>
                             <div className="product-grid">
                              {productdata.map((item, index) => {
           return <Product data={item} key={index} />}
            )}</div>
        </div>
    )
}
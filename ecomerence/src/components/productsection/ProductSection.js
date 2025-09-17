import Product from "../product/Product";
import Styles from './productsection.module.css'
import AddProduct from '../addproduct/AddProduct';
import { useState } from "react";

export default function ProductSection() {    
    return (
        <div className={Styles.product_section}>
            <h2>Featured Products</h2>
            <div className={Styles.product_section}>
                <Product />
            </div>
        </div>
    )
}
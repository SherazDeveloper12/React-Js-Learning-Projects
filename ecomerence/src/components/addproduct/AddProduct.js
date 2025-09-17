import { useState, useEffect, } from "react"
import { useSelector, useDispatch } from "react-redux";
import { addPorduct } from "../../features/slices/productSlice";
import {products} from '../../features/slices/productSlice' 
import Styles from './addproduct.module.css'
export default function AddProduct() {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [count, setReviews] = useState("");
    const [rate, setRating] = useState("");
    const [image, setImage] = useState("");
    const [category, setCategory] = useState("")
    const [description, setDescription] = useState("");
    const dispatch=useDispatch();
    const rating = { rate, count }
    const products = useSelector((state) => state.productSlice.products);
    const handleSubmit = () => {
        function generateId() {
       return products.length > 0 ? Math.max(...products.map((u) => u.id)) : 0;}
   const id = generateId() + 1;
        let product = {
            id,
           title,
             price,
            count,
            rating,
            image,
             category,
            description
        }
        dispatch(addPorduct(product));
        console.log(product)
    }
    return (

        <div className={Styles.add_product}>
           <div className={Styles.form}>
                <input onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Product Title" />
                <input onChange={(e) => setPrice(e.target.value)} type="text" placeholder="Price" />
                <input onChange={(e) => setReviews(e.target.value)} type="text" placeholder="Total Reviews" />
                <input onChange={(e) => setRating(e.target.value)} type="text" placeholder="Rating" />
                <input onChange={(e) => setImage(e.target.value)} type="text" placeholder="Product image Url" />

                <div className={Styles.product_category_selector}> <p>Select Product Category:</p>
                    <select name="Category" id="category-select" onChange={(e) => setCategory(e.target.value)}>
                       <option value="" disabled selected>Select an option</option>
                        <option value="men's clothing">men's clothing</option>
                        <option value="jewelery">jewelery</option>
                        <option value="electronics">electronics</option>
                        <option value="women's clothing">women's clothing</option>
                    </select></div>
                <input onChange={(e) => setDescription(e.target.value)} type="text" placeholder="Description" />
                <button onClick={handleSubmit}>Add Product</button>
            </div>
        </div>
    )
}
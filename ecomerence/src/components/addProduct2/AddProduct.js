import { useState, useRef,useEffect } from "react";
import Styles from '../addProduct2/addproduct.module.css'
import { IoMdCloseCircle } from "react-icons/io";
import Button from "../button/Button";
import { useDispatch, useSelector } from "react-redux";
import {addingProducts, updateProduct, clearUpdateProduct} from '../../features/slices/products'
export default function AddProduct2(props) {
    const [Title, setTitle] = useState("");
    const [Price, setPrice] = useState("");
    const [Reviews, setReviews] = useState("");
    const [Rating, setRating] = useState("");
    const [StockAvailable, setStockAvailable] = useState("");
    const [TotalStock, setTotalStock] = useState("");
    const [ProductImageUrl, setProductImageUrl] = useState("");
    const [Category, setCategory] = useState("")
    const [description, setDescription] = useState("");
     const imgRef = useRef(null);
     const dispatch = useDispatch()
     const ProductBeingUpdated = useSelector(store=> store.products.updateProducts)

      const handleimagechange = async (e) =>{
  const file = e.target.files[0]
    if(!file)return
        const data = new FormData()
        data.append("file" ,  file)
        data.append("upload_preset", "image_uploader_preset" )
        data.append("cloud_name","dcli1vwir")
       const response =  await fetch("https://api.cloudinary.com/v1_1/dcli1vwir/image/upload",  {
           method: "post",
        body: data})
     const jsonResponse = await response.json()
     const url = jsonResponse.url
     console.log("img url is ", url)
    setProductImageUrl(url) 
   }
   useEffect(()=>{
    if(ProductBeingUpdated){
       setTitle(ProductBeingUpdated.Title)
        setPrice(ProductBeingUpdated.Price)
        setReviews(ProductBeingUpdated.Reviews)
        setRating(ProductBeingUpdated.Rating)
        setCategory(ProductBeingUpdated.Category)
        setDescription(ProductBeingUpdated.description)
        setStockAvailable(ProductBeingUpdated.StockAvailable)
        setTotalStock(ProductBeingUpdated.TotalStock)
        setProductImageUrl(ProductBeingUpdated.ProductImageUrl)
        }
   }, [ProductBeingUpdated])
   const cancelclickhandler = ()=>{
    props?.SetAddProduct2(false)
    dispatch(clearUpdateProduct(null))
   }
    const clickhandler = () => {
        let productCreated = {
            Title,
            Price,
            Category,
            Reviews,
            Rating,
            ProductImageUrl,
            StockAvailable,
            TotalStock,
            description,
        }
        if(ProductBeingUpdated){
            console.log("productbeingrunned if is running", productCreated)
            let updatedProduct = {
                id: ProductBeingUpdated.id,
                ...productCreated
            }
          dispatch(updateProduct(updatedProduct))
        } else{

            dispatch(addingProducts(productCreated))
}
        setTitle("")
        setPrice("")
        setReviews("")
        setRating("")
        setCategory("")
        setDescription("")
        setStockAvailable("")
        setTotalStock("")
         if (imgRef.current) {
      imgRef.current.value = ""; 
    
       
     
        props?.SetAddProduct2(false)
 }
    }
    return (

        <>
            <div className={Styles.outlay}></div>
            <div className={Styles.form}>
                <div className={Styles.formControls}> <IoMdCloseCircle className={Styles.Cancel} onClick={cancelclickhandler} /></div>
                <div className={Styles.formContainer}>
                    <div className={`${Styles.input_label_div} ${Styles.productTitle_div}`}>
                         <label>Type Product Title</label>
                                             <input value={Title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Product Title" />

                    </div>
                   <div className={Styles.PriceBox}>
                     <label>Price:  </label>
                    <input className={Styles.PriceInput} value={Price} onChange={(e) => setPrice(e.target.value)} type="text" placeholder="Price" />
                  </div>
                    <div className={Styles.product_category_selector}>
                         <label>Category:  </label>
                        <select name="Category" id="category-select" onChange={(e) => setCategory(e.target.value)}>
                            <option value="" disabled selected={Category === ""} >Select Category</option>
                            <option value="men's clothing" >men's clothing</option>
                            <option value="jewelery">jewelery</option>
                            <option value="electronics">electronics</option>
                            <option value="women's clothing">women's clothing</option>
                        </select>
                    </div>
                    <div className={Styles.ReviewRatingStockBox}>
                        <div className={Styles.input_label_div}>
                        <label>Reviews</label>
                        <input className={Styles.ReviewBox} value={Reviews} onChange={(e) => setReviews(e.target.value)} type="text" placeholder="Total Reviews" />
                     </div>
                     <div  className={Styles.input_label_div}>
                      <label>Rating</label>
                        <input className={Styles.RatingBox} value={Rating} onChange={(e) => setRating(e.target.value)} type="text" placeholder="Rating" />
                      </div>
                      <div  className={Styles.input_label_div}>
                       <label>Total Stock</label>
                       <input className={Styles.totalStock} value={TotalStock} onChange={(e) =>setTotalStock(e.target.value)} type="text" placeholder="Total Stock" />
                     </div>
                      <div  className={Styles.input_label_div}>
                       <label>Available Stock</label>
                        <input className={Styles.availableStock} value={StockAvailable} onChange={(e) => setStockAvailable(e.target.value)} type="text" placeholder="Available" />    
                    </div>
                    </div>
                    <label>{ProductBeingUpdated? "Choose New Product Image":"Choose Product Image:"}</label>
                     <input className={Styles.imageInput} placeholder="Choose Product Image"  ref={imgRef} type="file" onChange={handleimagechange}/>
                    <div className={`${Styles.input_label_div} ${Styles.Description_Div}`}>
                     <label>Write Product Description</label>
                    <textarea rows={8} value={description} onChange={(e) => setDescription(e.target.value)} type="text" placeholder="Description" />
                    </div>
                    <Button className={Styles.Button} label={ProductBeingUpdated? "Update Product": "Add Product" } BgColor="rgb(34, 113, 177)" onClick={clickhandler} />
                </div>
            </div>
        </>
    )
}
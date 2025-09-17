import {useDispatch , useSelector } from "react-redux"
import { useEffect, useState } from 'react';
import { fetchingProducts, restfilteredProducts,FilterProductsByCategory, } from '../../features/slices/products';
import Styles from '../ProductsContainer/productcontainer.module.css'
import Button from "../button/Button";

export default function ProductsContainer (){
    const dispatch = useDispatch()
        const Products =  useSelector((State)=> State.products.Products)
       const filteredProducts =  useSelector((State)=> State.products.filteredProducts)
             useEffect(()=>{dispatch(fetchingProducts())},[])
  
     const clickhandler = (e)=>{
        if (e==="null"){
            console.log(e)
            dispatch(restfilteredProducts(e))
        } else{
      dispatch(FilterProductsByCategory(e))
     }}
     const DisplayProducts = filteredProducts? filteredProducts : Products
     
    
    return(
        <div>       
            <ul className={Styles.categories}>
                <li onClick={()=>clickhandler("null")}>All</li>
                <li onClick={()=>clickhandler("electronics")}>Electronics</li>
                <li onClick={()=>clickhandler("jewelery")}>Jewelery</li>
                <li onClick={()=>clickhandler("men's clothing")}>Men's Clothing</li>
                <li onClick={()=>clickhandler("women's clothing")}>Women's Clothing</li>
                </ul>
             <div className={Styles.ProductContainer}>
            {DisplayProducts.map((product)=>(
                  <div className={Styles.Product}>
                    <div className={Styles.ProductImage}>
                             <img src={product.ProductImageUrl} width={140} height={170}/>
                    </div>
                    <div className={Styles.ProductDetails}>
                       <div><p className={Styles.asumedHeading}>{product.Category}</p></div>
                       <div className={Styles.ratingprice}>
                          <p className={Styles.Price}>${product.Price} </p>
                          <p className={Styles.Rating}>{product.Rating} ★</p>
                          </div>
                    </div>
               
            </div>
            ))}
          
        </div>
        </div>

    )
}
import Styles from '../product/product.module.css'
import { useSelector, useDispatch } from "react-redux";
import { useEffect, } from "react";
import { fetchProducts, deleteProduct } from "../../features/slices/productSlice";

export default function Product() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productSlice.products);
 const deleteClickHandler = (e) => {
    console.log(e);
    dispatch(deleteProduct(Number(e)));
  }
  const updateClickHandler = (e)=>{
    console.log(e)
  }
  
  {
   
    useEffect(() => { 
      if( products.length === 0 ){
      dispatch(fetchProducts(products));
      console.log("fetching products")
    }
    }, [])
  
  }
  { console.log(products) }
   
  return (
    <div>
     
      <div  className={Styles.product_container}>
     
        {products.map((product) => (
          <div className={Styles.product_card} key={product.id}>
            <div className={Styles.image}>

              <img src={product.image} alt={product.title} />
            </div>
            <div className={Styles.product_info}>
              <div className={Styles.product_title_price}>
                <h3>{product.title}</h3>
              </div>
              <div className={Styles.product_rating}>
                <span> <p>{product.rating.rate} ★</p></span>
                <p>{product.rating.count} reviews</p>
              </div>
              <p className={Styles.product_price}>${product.price}</p>

              <p >{product.description}</p>
              <div className={Styles.product_stock}>
                <div className={Styles.category}>
                  <p className={Styles.stockname} >Category:</p>
                  <p className={Styles.stockdetail}>{product.category}</p>
                </div>
                <div className={Styles.product_id}>
                  <p className={Styles.stockname}>Product id:</p>
                  <p className={Styles.stockdetail}>{product.id}</p>
                </div>
                <div className={Styles.Delivery}>
                  <p className={Styles.stockname}>Delivery:</p>
                  <p className={Styles.stockdetail}>all around the world</p>
                </div>
              </div>
              <div className={Styles.btn_group}>
                <button onClick={()=>deleteClickHandler(product.id)} >Delete</button>
                <button onClick={()=>updateClickHandler(product)}style={{ backgroundColor: "green" }}>Update</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

  )
}
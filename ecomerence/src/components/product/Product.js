import '../product/product.css'
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
     
      <div  className="product-container">
     
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <div className='image'>

              <img src={product.image} alt={product.title} />
            </div>
            <div className='product-info'>
              <div className='product-title-price'>
                <h3>{product.title}</h3>
              </div>
              <div className='product-rating'>
                <span> <p>{product.rating.rate} ★</p></span>
                <p>{product.rating.count} reviews</p>
              </div>
              <p className='product-price'>${product.price}</p>

              <p >{product.description}</p>
              <div className='product-stock'>
                <div className='category'>
                  <p className='stockname' >Category:</p>
                  <p className='stockdetail'>{product.category}</p>
                </div>
                <div className='product-id'>
                  <p className='stockname'>Product id:</p>
                  <p className='stockdetail'>{product.id}</p>
                </div>
                <div className='Delivery'>
                  <p className='stockname'>Delivery:</p>
                  <p className='stockdetail'>all around the world</p>
                </div>
              </div>
              <div className='btn-group'>
                <button onClick={()=>deleteClickHandler(product.id)} className='btn'>Delete</button>
                <button onClick={()=>updateClickHandler(product)} className='btn' style={{ backgroundColor: "green" }}>Update</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

  )
}
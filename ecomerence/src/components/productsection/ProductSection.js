import Product from "../product/Product";
import './productsection.css'
import AddProduct from '../addproduct/AddProduct';
export default function ProductSection() {
    const clickhandler=()=>{
        const popupform=document.querySelector('.popup-form');
        popupform.classList.toggle('active')
    }
    return (
        <div className="product-section">
            <h2>Featured Products</h2>
            <div className="product-section">
                   <button onClick={clickhandler} className="addnewuser-btn">Add New Product</button> 
                 <div  className='popup-form'>
        <AddProduct />
      </div>
                <Product />
            </div>
        </div>
    )
}
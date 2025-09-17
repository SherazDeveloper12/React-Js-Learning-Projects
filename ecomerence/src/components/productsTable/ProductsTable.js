import { useDispatch, useSelector } from 'react-redux';
import Styles from '../productsTable/productsTable.module.css'
import { useEffect, useState } from 'react';
import { fetchingProducts, deleteProduct, updateProduct, updateMyProduct, FilterProductsByCategory, restfilteredProducts } from '../../features/slices/products';
import Button from '../button/Button';
const ProductsTable = (props) => {
    const dispatch = useDispatch()
    const Products = useSelector((State) => State.products.Products)
    const filteredProducts = useSelector((State) => State.products.filteredProducts)
    const [isChecked, setisChecked] = useState(false)
    const [selectedCategories, setselectedCategories] = useState(null)
    console.log("checked is marked", isChecked)
    useEffect(() => { dispatch(fetchingProducts()) }, [])
    const DeleteClickHandler = (id) => {
        console.log("product to be deleted is", id)
        dispatch(deleteProduct(id))
    }
    const UpdateClickHandler = (id) => {
        console.log("product to be update is", id)
        props.SetAddProduct2((prev) => !prev);
        dispatch(updateMyProduct(id))
    }
    const changehandler = (e) => {
        console.log("selected value is", e)
        if (e === "null") {
            console.log(e)
            dispatch(restfilteredProducts(e))
        } else {
            dispatch(FilterProductsByCategory(e))
        }
    }
    const filterclickhandler = (e) => {
       changehandler(selectedCategories)
    }
    const DisplayProducts = filteredProducts? filteredProducts : Products;
    console.log("display products are", DisplayProducts)
     const productCount = DisplayProducts.length;
    return (
        <div className={Styles.ProductsTableContainer}>
           <div className={Styles.TableHeader}>
             <div className={Styles.TableControls}>
                <div className={Styles.ApplyBtns}>
                    <select className={Styles.select} name="Category" id="category-select">
                        <option value="" selected >Bulk Action</option>
                        <option >Delete All</option>
                        <option >Update ALL</option>
                    </select>
                    <Button className={Styles.TableControlBtns} label="Apply" onClick={() => { }} />
                </div>
                <div className={Styles.FilterBtns}>
                    <select className={Styles.select} name="Category" id="category-select" onChange={(e)=>{setselectedCategories(e.target.value)}}>
                        <option value="null" selected >All Category</option>
                        <option value="men's clothing" >men's clothing</option>
                        <option value="jewelery">jewelery</option>
                        <option value="electronics">electronics</option>
                        <option value="women's clothing">women's clothing</option>
                    </select>
                    <Button className={Styles.TableControlBtns} label="Filter" onClick={() => filterclickhandler()} />
                </div>

            </div>
            <div className={Styles.Counter}>{productCount} items</div>
            </div>
            <div className={Styles.Table}>
                <table>
                    <tr className={Styles.firstRow}>
                        <th><input className={Styles.checkbox} type='checkbox' checked={isChecked} onChange={() => setisChecked(!isChecked)} /></th>
                        <th>Title</th>
                        <th>Image</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Total Reviews</th>
                        <th>Rating</th>
                        <th>Available Stock</th>
                        <th>Total Stock</th>
                        <th>Description</th>
                    </tr>
                    {DisplayProducts.map((product) => (
                        <tr>
                            <td><input className={Styles.checkbox} type='checkbox' checked={isChecked} /></td>
                            <td>{product?.Title}
                                <div className={Styles.ProductBtns}>
                                    <p className={Styles.btn} onClick={() => DeleteClickHandler(product?.id)}>Delete</p>
                                    <p>|</p>
                                    <p className={Styles.btn} onClick={() => UpdateClickHandler(product?.id)}>Update</p>
                                </div>
                            </td>
                            <td><img src={product?.ProductImageUrl} width={50} /></td>
                            <td>{product?.Price}$</td>
                            <td>{product?.Category}</td>
                            <td>{product?.Reviews}</td>
                            <td>{product?.Rating} </td>
                            <td>{product?.StockAvailable}</td>
                            <td>{product?.TotalStock}</td>
                            <td className={Styles.descriptionColumn}>{product?.description}</td>
                        </tr>
                    ))}
                    <tr className={Styles.firstRow}>
                        <th className={Styles.checkbox} ><input type='checkbox' checked={isChecked} onChange={() => setisChecked(!isChecked)} /></th>
                        <th>Title</th>
                        <th>Image</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Total Reviews</th>
                        <th>Rating</th>
                        <th>Available Stock</th>
                        <th>Total Stock</th>
                        <th>Description</th>
                    </tr>
                </table>
            </div>
        </div>

    );
}

export default ProductsTable;
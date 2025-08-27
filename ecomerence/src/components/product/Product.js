import '../product/product.css'

export default function Product(props) {
    return (
        <div className="product">
           
            <div className="product-grid">
             
                    <div id={props?.data?.id} className="product-card">
                        <img src={props?.data?.CardImage} alt={props?.data?.CardTitle} />
                        <h3>{props?.data?.CardTitle}</h3>
                        <p>{props?.data?.CardPrice}</p>
                        <p>⭐{props?.data?.CardRating} </p>
                    </div>
             
            </div>
        </div>
    )
}
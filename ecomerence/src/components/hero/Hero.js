import '../hero/hero.css';
import Button from '../button/Button';
export default function Hero() {
    return (
        <div className="hero">
            <div className="content">
                <h1>ShopEase: <br></br> Your One-Stop Shopping Hub</h1>
                <p>Welcome to ShopEase, your one-stop shopping hub! Discover an array of top-quality products, unbeatable deals, and a seamless shopping experience. Shop smarter, live better with ShopEase!</p>
              <Button label="Shello Now" onClick={() => alert('Shop Now Clicked!')} />
            </div>
            <div className="image">
                <img src={require("../../assests/heroimg.png")} alt="Hero" />
        </div></div>
    )
}
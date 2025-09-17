import Styles from '../hero/hero.module.css';
import Button from '../button/Button';
export default function Hero() {
    return (
        <div className={Styles.hero}>
            <div className={Styles.content}>
                <h1>ShopEase: <br></br> Your One-Stop Shopping Hub</h1>
                <p>Welcome to ShopEase, your one-stop shopping hub! Discover an array of top-quality products, unbeatable deals, and a seamless shopping experience. Shop smarter, live better with ShopEase!</p>
              <Button label="Shello Now" onClick={() => alert('Shop Now Clicked!')} />
            </div>
            <div className={Styles.hero_image}>
                <img src={require("../../assests/heroimg.png")} alt="Hero" />
        </div></div>
    )
}
import HomeCss from'./home.module.css'
import Header  from "../../components/header/Header";
import Hero from '../../components/hero/Hero';  
import ProductsContainer from '../../components/ProductsContainer/ProductsContainer';
import ProductSection from '../../components/productsection/ProductSection';
export default function Home() {
  return (
    <div className={HomeCss.home}>
      <Header/>
      <Hero/>
      <ProductsContainer/>
      <ProductSection/>
    </div>
  );
}
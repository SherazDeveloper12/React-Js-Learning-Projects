import './home.css'
import Header  from "../../components/header/Header";
import Hero from '../../components/hero/Hero';  
import ProductSection from '../../components/productsection/ProductSection';
export default function Home() {
  return (
    <div className="home">
      <Header/>
      <Hero/>
      <ProductSection/>
    </div>
  );
}
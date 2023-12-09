import AboutUs from "../../components/homecomponent/aboutus/AboutUs";
import Cards from "../../components/homecomponent/cards/Cards";
import MainTitle from "../../components/homecomponent/maintitle/MainTitle";
import MyNavbar from "../../components/homecomponent/mynavbar/MyNavbar";
import "./Home.css";
import ProductTitle from "../../components/homecomponent/products/ProductsTitle";
import Icon from "../../components/footer/Icon";

import { FaWhatsapp, FaLinkedinIn } from "react-icons/fa";
import { GrTwitter } from "react-icons/gr";
import { SiInstagram } from "react-icons/si";
import Footer2 from "../../components/footer2/Footer2";
const Home = () => {
  return (
    <div>
      <MyNavbar />
      <MainTitle />
      <AboutUs />
      <ProductTitle/>
      <Cards />
      <Footer2 />
      <div className="font">
        <ul>
          <Icon icon={<FaWhatsapp />} />

          <Icon icon={<GrTwitter />} />

          <Icon icon={<SiInstagram />} />

          <Icon icon={<FaLinkedinIn />} />
        </ul>
      </div>
    </div>
  );
};
export default Home;

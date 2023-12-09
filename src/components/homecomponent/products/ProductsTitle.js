import about1 from '../../../assets/images/products.png'
import AOS from "aos"
import { useEffect } from 'react';
import "aos/dist/aos.css"
import './ProductTitle.css'



const ProductTitle=()=>{
        useEffect(()=>{
            AOS.init();
            AOS.refresh();
          } ,[]);
          return (
            <div className="container mt-3 p-2 abouttext1" >
              <div className="row " >
                <div className="col-md-6 aos-init aos-animate" data-aos="fade-left" data-aos-delay="800">
                    <img src={about1} alt="" className="img-fluid rounded-5"/>
                </div>
                <div className="col-md-6 text-white aos-init aos-animate" data-aos="fade-left" data-aos-delay="800" >
            <p>رطوبت سنج الکترونیکی محصولات زراعی رسا کالیبره بر اساس استانداردهای بین المللی  با گارانتی 2ساله وخدمات پس از فروش 10 ساله معتبر -با قابلیت کایبره محصولات جدید به درخواست مشتری - قابلیت اندازه گیری رطوبت غلات - خشکبار ، خوراک دام و طیور ،خوراک آبزیان ، انواع بذر ، انواع محصولات به صورت پودر و گرانول ،آرد ،  </p>
                </div>
              </div>
            </div>
    )
}
export default ProductTitle;
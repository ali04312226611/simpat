
import about from '../../../assets/images/about.png'
import './AboutUs.css'

import AOS from "aos"
import { useEffect } from 'react';
import "aos/dist/aos.css"

const AboutUs = () => {
  useEffect(()=>{
    
    AOS.init();
    AOS.refresh();
  } ,[]);
  return (
    <div className="container mt-3 p-2 abouttext1" >
      <div className="row " >
        <div className="col-md-6 text-white aos-init aos-animate" data-aos="fade-left" data-aos-delay="800" >
          <p>شرکت فنی و مهندسی سیستم های هوشمند سیم پات
شرکت فنی و مهندسی سیستم های هوشمند سیم پات (الکترونیک صنعتی البرز سابق -) از سال 1368 فعالیت خود را در زمینه تولید ابزارها وتجهیزات تخصصی صنایع کشاورزی آغاز نمود.این شرکت طی بیش از دو دهه فعالیت تخصصی خود با تلاش بی وقفه مدیران ومجموعه تولید موفق به تولید ابزارهای اندازه گیری گوناگونی جهت سنجش پارامترهایی نظیر رطوبت وافت محصولات کشاورزی با نام تجاری رسا گردید که این شرکت را به عنوان یکی از شرکت های مجرب و تخصصی در صنعت کشاورزی ایران مطرح نمود . فعالیت های شرکت سیم پات از سال 1389 بر پایه استانداردها و فن اوریهای روز دنیا در شاخه های نوینی همچون طراحی و ساخت ایزارهایی جدید اندازه گیری افت ،ضایعات و ... محصولات کشاورزی گسترش یافت .</p>
        </div>
        <div className="col-md-6 aos-init aos-animate" data-aos="fade-left" data-aos-delay="800">
            <img src={about} alt="" className="img-fluid rounded-5"/>
        </div>
      </div>
    </div>
  );
};
export default AboutUs;
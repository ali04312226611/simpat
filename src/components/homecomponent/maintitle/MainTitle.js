
import rasa3003 from "../../../assets/images/RASA-3003-300x300.png";
import rasa4000 from "../../../assets/images/rasa4000.png";
import "./MainTitle.css"
const MainTitle = () => {
  return (
    <div className="container maintitle ">
      <div className="container">
        <div className="row">
          <div className="col-md-6 maintext">
            <h1 className="maintexth1">رطوبت سنج الکترونیکی محصولات زراعی</h1>
            <h2 className="maintexth2">
              اندازه گیری رطوبت انواع محصولات زراعی
            </h2>
            <h2 className="maintexth2">
              از قبیل :غلات ،خشکبار،خوراک دام و طیور
            </h2>
            <h2 className="maintexth2">انواع بذر ،انواع گرانول ودانه ها </h2>
            <h2 className="maintexth2">وقابلیت کالیبراسیون محصولات درخواستی</h2>
          </div>
          <div className="col-md-5 mainpic rounded-3">
            <h1 className="maintexth4">
              Advancing Agriculture Through Innovative Sensing
            </h1>
            <h3 className="maintexth1">produced in the simpat company</h3>
            <h3 className="maintexth6">corn - wheat -soybean - barley </h3>
            <div className="productpic">
              <img src={rasa3003} alt="" />
              <img src={rasa4000} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MainTitle;

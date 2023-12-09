import { NavLink } from "react-bootstrap";
import './Footer2.css'
const Footer2=()=>{
    return (
      <footer className="footer">
        <div className="row">
          <div className="col-md-4 footer1">
              <h2 className="text-white">شماره تماس :</h2>
              <p className="text-white">02634708391</p>
              <p className="text-white">02634708392</p>
              <p className="text-white">02634700181</p>
            
          </div>
          <div className="col-md-4 footer1">
            <h2 className="text-white">لینک ها :</h2>
            <NavLink className="text-white mt-2">:درباره ما</NavLink>
            <NavLink className="text-white mt-2">محصولات</NavLink>
            <NavLink className="text-white mt-2">تماس با ما</NavLink>
          </div>
          <div className="col-md-4 footer1">
              <h2 className="text-white">ارتباط با ما :</h2>
              <p className="text-white">info@simpat.ir</p>
              <p className="text-white">09124679884</p>
            
          </div>
        </div>
      </footer>
    )
}
export default Footer2;
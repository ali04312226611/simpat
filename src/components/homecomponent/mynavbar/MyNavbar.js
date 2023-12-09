import "./MyNavbar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../../../assets/images/Untitled-1.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import {isLogin} from "../../../Utils";

const MyNavbar = () => {
  const[loginStatus,setLoginStatus]=useState(isLogin() ? 'خروج':'ورود')
  const logoutHandler=()=>{
    document.cookie = "username=admin; expires=Thu, 18 Dec 2020 12:00:00 UTC; path=/";
    setLoginStatus('ورود')
  }
  return (
    <div className="container-fluid navbar-1">
      <div className="container ">
        <Navbar expand="md" className=" m-1 rounded-2 blur">
          <Container>
            <Navbar.Brand className="text-white">شرکت سیم پات</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Link to='/' className="navcolor text-white decor">
                  صفحه اصلی
                </Link>
                <Link to='/about' className="text-white decor ">
                  درباره ما
                </Link>

                <NavDropdown
                  title="محصولات"
                  id="navbarScrollingDropdown"
                  className="droppcolor"
                >
                  <NavDropdown.Item > <Link to='/Rasa4000' className="decor">رسا 4000</Link></NavDropdown.Item>
                  <NavDropdown.Item ><Link to='/Rasa3003' className="decor">رسا 3003</Link> </NavDropdown.Item>

                  <NavDropdown.Item ><Link to='/Rasa3000' className="decor">رسا 3000</Link></NavDropdown.Item>
                  <NavDropdown.Item ><Link to='/Rasa2000' className="decor">رسا 2000</Link> </NavDropdown.Item>
                </NavDropdown>

                <Link to="/contact" className="text-white decor">
                  تماس با ما
                </Link>
                {isLogin() ?
               <Link to='/login' onClick={logoutHandler} className="text-white decor"> {loginStatus}</Link> 
               :<Link to='/login' className="text-white decor"> {loginStatus}</Link>
              }
                <Link to='/panel' className="text-white decor">
                   داشبورد
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div className="logo ">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
      </div>
    </div>
  );
};
export default MyNavbar;

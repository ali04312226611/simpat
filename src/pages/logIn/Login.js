import { useState } from "react";
import MyNavbar from "../../components/homecomponent/mynavbar/MyNavbar";
import "./Login.css";
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";
const Login = () => {
    const [username ,setUsername]=useState('')
    const [password ,setPassword]=useState('')
    const navigate =useNavigate()
const submitHandler =()=>{
    if (username=="admin" && password=='123456'){
      document.cookie = "username=admin; expires=Thu, 18 Dec 2025 12:00:00 UTC; path=/";
        navigate('/panel')
    }else{
        Swal.fire({
            title: 'خطا!',
            text: 'رمز عبور یا نام کاربری اشتباه است',
            icon: 'error',
            confirmButtonText: 'بستن'
          })
    }
}
  return (
    <div className="login">
      <MyNavbar />
      <div className="container loginform">
        <div className="row mt-5">
          <div className="col-md-6 log">
            <form>
              <div className="mb-3">
                <label
                  htmlFor="exampleInputEmail1"
                  className="form-label "
                >
                  نام کاربری
                </label>
                <input
                onChange={(e)=> setUsername(e.target.value)}
                  type="text"
                  className="form-control"
                  id="exampleInputEmail2"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleInputPassword1"
                  className="form-label "
                >
                  رمز عبور
                </label>
                <input
                onChange={(e)=> setPassword(e.target.value)}
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
            
              <button onClick={submitHandler} type="button" className="btn btn-primary">
                ورود
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import About from "./pages/aboutUs/About";
import Product from "./pages/products/Product";
import ContactUs from "./pages/contactUs/ContactUs";
import Login from "./pages/logIn/Login";
import Panel from "./pages/panel/Panel";

import Rasa4 from "./pages/products/rasa4000/Rasa4";

import Rasa3 from "./pages/products/rasa3003/Rasa3";
import Rasa30 from "./pages/products/rasa3000/Rasa30";
import Rasa2 from "./pages/products/rasa2000/Rasa2";
import Setting from "./pages/Setting";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Product />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/panel" element={<PrivateRoute><Panel/></PrivateRoute>} />
        <Route path="/rasa4000" element={<Rasa4 />} />
        <Route path="/rasa3003" element={<Rasa3 />} />
        <Route path="/rasa3000" element={<Rasa30 />} />
        <Route path="/rasa2000" element={<Rasa2 />} />
        <Route path="/setting" element={<PrivateRoute><Setting/></PrivateRoute>} />
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;

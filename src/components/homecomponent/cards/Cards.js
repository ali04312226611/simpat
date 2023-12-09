import { useEffect, useState } from "react";
import './Cards.css'
import rasa3003 from '../../../assets/images/RASA-3003-300x300.png'

const Cards = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then(resData=> setData(resData))
      
  });
  const newData = data.filter(item =>item.id < 5);
  

  return (
    <div className="container mt-5 ">
      <div className="row productsrow">
        {newData.map((item) => (
          <div className="col-md-3 cardpage" key={item.id}>
            <div className="card cardsimgposition">
              <img src={item.image} className="img-fluid cardsimgsize" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text overflow-hidden">
                {item.description}
                </p>
                <a href="#" className="btn btn-primary">
                 ثبت سفارش
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Cards;

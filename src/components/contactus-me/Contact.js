import "./Contact.css";
const Contact = () => {
  return (
    <div className="container-fluid cantactmain contact1">
      <div className="row colcontact">
        <div className="col-md-6 ">
          <form>
            <div className="mb-1">
              <label
                htmlFor="exampleInputEmail1"
                className="form-label text-white"
              >
                ایمیل
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-1">
              <label
                htmlFor="exampleInputPassword1"
                className="form-label text-white"
              >
                شماره موبایل
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div className="mb-1">
              <label
                htmlFor="exampleInputPassword1"
                className="form-label text-white"
              >
                متن درخواست
              </label>
              <textarea
                name="title"
                id="textarea"
                cols="30"
                rows="10"
                className="textarea1"
              >
                {" "}
              </textarea>
            </div>
            <div className="mb-1 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label
                className="form-check-label text-white"
                htmlFor="exampleCheck1"
              >
                قبول تمامی قوانین و شرایط
              </label>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
        <div className="col-md-6 contactnumber ">
          <div className="col">
            <h4 className="text-warning">شماره تماس :</h4>
            <h5 className="text-white">02634708391</h5>
            <h5 className="text-white">02634708392</h5>
            <h5 className="text-white">02634557273</h5>
          </div>
          <div className="col ">
            <h4 className="text-warning mt-2">راه های ارتباط :</h4>
            <h5 className="text-white">واتساپ</h5>
            <h5 className="text-white">09124679884</h5>
            <h5 className="text-white">تلگرام</h5>
            <h5 className="text-white">09124679884</h5>
            <h5 className="text-white">اینستاگرام</h5>
            <h5 className="text-white">@simpat-rasa</h5>

            
            
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;

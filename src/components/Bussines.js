import React from 'react';
import Footer from './Footer'


function ForBussines() {
  return (

    <div className="title">
      <section>
        <h1> Welcome! Here you can purchase our insurance for bussines </h1>
      </section>
      <section className="row justify-content-center">
        <div className="col-sm-6 col-lg-4">
          <div className="card ">
            <img src="http://molpred63.ru/content/uploads/2019/01/Komanda-_1.jpg" className="card-img-top" alt="insurance" />
            <div className="card-body">
              <h5 className="card-title">
                VIP insurance</h5>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
              <a href="/" className="btn">Purchase insurance</a>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-4">
          <div className="card">
            <img src="https://liga-stroy.com.ua/wp-content/uploads/2019/07/13.jpg" className="card-img-top" alt="insurance" />
            <div className="card-body">
              <h5 className="card-title">
                Team insurance</h5>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
              <a href="/" className="btn">Purchase insurance</a>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-4">
          <div className="card">
            <img src="https://www.bigredcloud.com/wp-content/uploads/Tthree-ways-your-company-can-benefit-from-collaborating-with-other-companies.jpg" className="card-img-top" alt="insurance" />
            <div className="card-body">
              <h5 className="card-title">
                Company insurance</h5>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
              <a href="/" className="btn">Purchase insurance</a>
            </div>
          </div>
        </div>



        <div className="col-sm-6 col-lg-4">
          <div className="card">
            <img src="http://www.hrhome.ru/images/upload/article2/personal-chto-eto-takoe-podgotovka-upravlenie.png" className="card-img-top" alt="insurance" />
            <div className="card-body">
              <h5 className="card-title">
                Staff insurance</h5>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
              <a href="/" className="btn">Purchase insurance</a>
            </div>
          </div>
        </div>
      </section>
      <Footer />


    </div>
  )
}



export default ForBussines;
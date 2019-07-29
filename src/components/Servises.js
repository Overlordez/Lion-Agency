import React from 'react';
import Footer from './Footer';


function Servises() {
  return (

    <div className="title">

      <section>
        <h1> Welcome! Here you can purchase our insurance </h1>
      </section>
      <section className="row justify-content-center">
        <div className="col-sm-6 col-lg-4">
          <div className="card ">
            <img src="https://www.investopedia.com/thmb/UOV6iAttBeIlwRQ1oZ_AfHQ5I98=/2120x1414/filters:fill(auto,1)/auto-and-car-insurance-policy-with-keys-1048031806-6dbe3526b6d84e14aa23d07fbe11c40e.jpg" className="card-img-top" alt="insurance" />
            <div className="card-body">
              <h5 className="card-title">
                Car insurance</h5>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
              <a href="/" className="btn">Purchase insurance</a>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-4">
          <div className="card">
            <img src="https://investtalk.ru/wp-content/uploads/2015/01/24.jpg" className="card-img-top" alt="insurance" />
            <div className="card-body">
              <h5 className="card-title">
                Life insurance</h5>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
              <a href="/" className="btn">Purchase insurance</a>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-4">
          <div className="card">
            <img src="https://rubic.us/wp-content/uploads/2019/01/Amex-Travel-Insurance-e1548006088184.jpg" className="card-img-top" alt="insurance" />
            <div className="card-body">
              <h5 className="card-title">
                Travel insurance</h5>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
              <a href="/" className="btn">Purchase insurance</a>
            </div>
          </div>
        </div>
      </section>

      <section className="row justify-content-center">
        <div className="col-sm-6 col-lg-4">
          <div className="card">
            <img src="https://previews.123rf.com/images/vinnstock/vinnstock1306/vinnstock130600073/20555558-claim-form-paperwork-and-legal-document-accident-and-insurance-concepts.jpg" className="card-img-top" alt="insurance" />
            <div className="card-body">
              <h5 className="card-title">
                Accident insurance</h5>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
              <a href="/" className="btn">Purchase insurance</a>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-4">
          <div className="card">
            <img src="https://blog.securenow.in/wp-content/uploads/2017/06/commercial-property-insurance.jpg" className="card-img-top" alt="insurance" />
            <div className="card-body">
              <h5 className="card-title">
                Property insurance</h5>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
              <a href="/" className="btn">Purchase insurance</a>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-4">
          <div className="card">
            <img src="https://www.tripeds.com/Portals/4/Blog%20Photos/health%20insurance%20pediatric%20medicine.jpeg?ver=2016-02-17-064450-180" className="card-img-top" alt="insurance" />
            <div className="card-body">
              <h5 className="card-title">
                Medicine insurance</h5>
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



export default Servises;
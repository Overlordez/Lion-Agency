import React from 'react';
import Footer from './Footer';


function Main() {
    return (
        <React.Fragment>
            <div className="title">
                <section>
                    <h1> Welcome to the LION AGENCY </h1>
                </section>
            </div>

            <div className="container">
                <div className="row flex-md-row align-items-md-center first-block">
                    <div className="col-6">
                        <h1 className="sliderRight">
                            Our insurance company LION provides the highest quality services worldwide. You can insure absolutely everything, a car, an apartment, your life and the like. </h1>
                    </div>
                    <div className="col-6">
                        <img className="image-item" src="https://img4.goodfon.ru/wallpaper/nbig/3/e6/london-city-uk-gb-unitedkingdom-england-photo-photography--3.jpg" alt="photo" height="300" />

                    </div>

                </div>

            </div>


            <div className="title">
                <section>
                    <h1> Why can you trust us? </h1>
                </section>
            </div>

            <div className="container">
                <div className="row flex-md-row align-items-md-center first-block">
                    <div className="col-6">
                        <h1 className="sliderRight">

                            
The company provides such insurance claims as: accident, property, medicine, travel, life. You do not have to worry about your life, you are in safe hands. Enjoy your life! </h1>


                    </div>
                    <div className="col-6">
                        <img className="image-item" src="http://www.golegal.co.za/wp-content/uploads/2019/05/system.png" alt="photo" height="300" />

                    </div>


                </div>

            </div>

            <Footer/>

           
        </React.Fragment>
        



    )


}
export default Main;

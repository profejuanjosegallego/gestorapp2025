import React from "react";
import "./Home.css";
import AboutUs from "../../common/AboutUs/AboutUs";
import Header from "../../common/Header/Header";
import InThePress from "../../common/InThePress/InThePress";
import Footer from "../../common/Footer/Footer";
import roomPhoto from "../../../assets/img/86ec4070fa250138f07d1eb7c08f0304.jpg"

const Home = () => {
    return (
        <>
            <section className="home__banner">
                <p className="home__banner-text">WELCOME TO</p>
                <div className="home__banner-content">
                    <h2 className="home__banner-title">The Wellhall</h2>
                    <p className="home__banner-subtitle">Resort & Spa Hotel</p>
                </div>
                <div className="home__banner-actions">
                    <button className="home__banner-button">LEARN MORE</button>
                </div>
            </section>
            <Header />
            <AboutUs />
            <div class="room">
                <div class="room__info">
                    <h2 class="room__title">The Family <br /> Suite</h2>
                    <p class="room__description">
                        Showcase the best your property has to offer by highlighting one of your accommodations.
                        Add a flattering photo, then describe the room's best feature.
                    </p>
                </div>
                <div class="room__media">
                    <div class="room__image-wrapper">
                        <img class="room__image" src={roomPhoto} alt="Family Suite" />
                        <div class="room__caption">
                            <p class="room__caption-text">
                                An intriguing caption that describes the room goes here.
                                <br />
                                Use a flattering photo, then describe away!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <InThePress />
            <Footer />
        </>
    );
}

export default Home;

import React from "react";
import "./Home.css";
import AboutUs from "../../common/AboutUs/AboutUs";
import Header from "../../common/Header/Header";
import InThePress from "../../common/InThePress/InThePress";
import Footer from "../../common/Footer/Footer";

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
            <AboutUs />
            <InThePress />
            <Footer />
        </>
    );
}

export default Home;

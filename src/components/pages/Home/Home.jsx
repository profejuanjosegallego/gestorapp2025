import React, { useRef } from "react";
import "./Home.css";
import AboutUs from "../../common/AboutUs/AboutUs";
import Header from "../../common/Header/Header";
import InThePress from "../../common/InThePress/InThePress";
import roomPhoto from "/img/86ec4070fa250138f07d1eb7c08f0304.jpg";
import diningRoom from "/img/the-wellhall-room-1.png";
import bathRoom from "/img/the-wellhall-room-2.png";

const Home = () => {
    const aboutUsRef = useRef(null);

    const scrollToAboutUs = () => {
        aboutUsRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            <section className="home__banner">
                <p className="home__banner-text">WELCOME TO</p>
                <div className="home__banner-content">
                    <h2 className="home__banner-title">The Wellhall</h2>
                    <p className="home__banner-subtitle">Resort & Spa Hotel</p>
                </div>
                <div className="home__banner-actions">
                    <button className="home__banner-button" onClick={scrollToAboutUs}>
                        LEARN MORE
                    </button>
                </div>
            </section>
            <Header />
            <AboutUs ref={aboutUsRef} />
        </>
    );
};

export default Home;

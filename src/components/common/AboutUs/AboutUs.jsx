import React from 'react';
import "../AboutUs/AboutUs.css";
import Header from "../../common/Header/Header";

const AboutUs = () => {
    return (
        <>
            <Header />
            <section className="about-us">
                <div className="about-us__image-container">
                </div>
                <div className="about-us__content">
                    <h2 className="about-us__title">
                        Welcome to your luxurious home away from home
                    </h2>
                    <p className="about-us__description">
                        Write a paragraph that talks about your brand or property here. Convince your
                        prospective clients to choose you and your offerings by highlighting the qualities
                        that set you apart from the competition. Your audience is already on your website,
                        so push a little bit harder to seal the deal!
                    </p>
                </div>
            </section>
        </>
    );
}

export default AboutUs;

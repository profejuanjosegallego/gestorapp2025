import React from 'react';
import './InThePress.css';
import doubleQuotationMarks from "/img/icon.png"

const InThePress = () => {
    return (
        <div className="in-the-press">
            <h2 className="in-the-press__title">In the Press</h2>
            <div className="in-the-press__list">
                <div className="in-the-press__item">
                    <div className="in-the-press__image">
                        <img className="in-the-press__image-icon" src={doubleQuotationMarks} alt="Quotation Marks" />
                    </div>
                    <div className="in-the-press__text">
                        <p className="in-the-press__text-paragraph">
                            Boost your product and service's credibility by adding testimonials from your clients.
                            People love recommendations, so feedback from others who've tried it is invaluable.
                        </p>
                    </div>
                    <div className="in-the-press__source">
                        <p className="in-the-press__source-paragraph">Santa Solana Post</p>
                    </div>
                </div>

                <div className="in-the-press__item">
                    <div className="in-the-press__image">
                        <img className="in-the-press__image-icon" src={doubleQuotationMarks} alt="Quotation Marks" />
                    </div>
                    <div className="in-the-press__text">
                        <p className="in-the-press__text-paragraph">
                            Boost your product and service's credibility by adding testimonials from your clients.
                            People love recommendations, so feedback from others who've tried it is invaluable.
                        </p>
                    </div>
                    <div className="in-the-press__source">
                        <p className="in-the-press__source-paragraph">Mariana's Luxe Travels</p>
                    </div>
                </div>

                <div className="in-the-press__item">
                    <div className="in-the-press__image">
                        <img className="in-the-press__image-icon" src={doubleQuotationMarks} alt="Quotation Marks" />
                    </div>
                    <div className="in-the-press__text">
                        <p className="in-the-press__text-paragraph">
                            Boost your product and service's credibility by adding testimonials from your clients.
                            People love recommendations, so feedback from others who've tried it is invaluable.
                        </p>
                    </div>
                    <div className="in-the-press__source">
                        <p className="in-the-press__source-paragraph">Fairhill Journal</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InThePress;

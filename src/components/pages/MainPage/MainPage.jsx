import React from 'react';
import './mainPage.sass';

import Slider from "../../Slider/Slider"



const MainPage = ({sliderImg}) => {
    return (
        <>
            <div className="overlay">
                <div className="preview">
                    <div className="preview__left">
                        <div className="text">
                            <h2>NEW COLLECTION</h2>
                            <h3>"PSYCHOKIDS"</h3>
                        </div>
                        <img src="/img/support__logo.png" alt="" className="support__logo" />
                    </div>

                    <div className="preview__right">
                        <img src="/img/clothes__preview.png" alt="" className="clothes__img" />
                    </div>
                </div>
            </div>
            <div className="photo">
                Photo
            </div>
            <Slider obj={sliderImg}/>
        </>
    );
};

export default MainPage;
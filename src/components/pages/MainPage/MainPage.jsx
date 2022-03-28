import React from 'react';
import './mainPage.sass';

import SupportLogo from '../../../img/support__logo.png'
import ClothesImg from '../../../img/clothes__preview.png';

import Slider from "../../Slider/Slider"

const MainPage = () => {
    return (
        <>
            <div className="overlay">
                <div className="preview">
                    <div className="preview__left">
                        <div className="text">
                            <h2>NEW COLLECTION</h2>
                            <h3>"PSYCHOKIDS"</h3>
                        </div>
                        <img src={SupportLogo} alt="" className="support__logo" />
                    </div>

                    <div className="preview__right">
                        <img src={ClothesImg} alt="" className="clothes__img" />
                    </div>
                </div>
            </div>
            <div className="photo">
                Photo
            </div>
            <Slider/>
        </>
    );
};

export default MainPage;
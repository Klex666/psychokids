import React from 'react';
import ContentLoader from "react-content-loader"

import './card.sass';

const Card = ({img, name, cost, loading = false}) => {

    return (
        <>
            <div className="card" >
                {loading ? (
                <ContentLoader 
                speed={2}
                width={500}
                height={500}
                viewBox="0 0 500 500"
                backgroundColor="#fafafa"
                foregroundColor="#5f5d5d"
              >
                <rect x="0" y="0" rx="30" ry="30" width="340" height="500" />
              </ContentLoader> 
              ) : (
                <>
                <div className="clothes__preview">
                        <img src={img} alt="" className="clothes__img" height={290} width={260}/>
                    </div>
                    <div className="card__info">
                    <img className='card__support-img' src="/img/card-img/card__support-logo.png" alt="SupportLogo" width={220} height={220}/>
                        <div className="clothes__name">
                            {name}
                        </div>
                        <div className="clothes__size">
                            SIZE: M / L / XL
                        </div>
                        <div className="clothes__cost">
                            {cost}
                        </div>
                </div>
                </>
              )}
            </div>
        </>
    );
};

export default Card;
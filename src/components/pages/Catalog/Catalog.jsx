import React from 'react';
import './catalog.sass'

import Card from '../../Card/Card';



const Catalog = ({isLoading, clothes}) => {
    
    const renderItems = () => {
        return (isLoading ? [...Array(8)] : clothes).map((card, index) => (
            <Card
              key={index}
              loading={isLoading}
              {...card}
            />
          ));
    };

    return (
        <>
            <div className="catalog">
                {renderItems()}
            </div>
        </>
    );
};

export default Catalog;
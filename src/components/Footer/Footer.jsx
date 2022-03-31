import React from 'react';

import "./footer.sass";
import FooterImg from '../../img/footer-img.png';

const Footer = () => {
    return (
        <footer>
            <div className="footer-img">
                <img src={FooterImg} alt="FooterImg" height={90} width={800}/>
            </div>

        </footer>
    );
};

export default Footer;
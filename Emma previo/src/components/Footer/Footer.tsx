import './Footer.styles.scss';
import { FaFacebook  } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-text">
            Emma Crown © All rights reserved 
            </div>
            <div className="social-icons">
                <a  href="https://www.facebook.com/profile.php?id=61554777906089" target="_blank" rel="noopener noreferrer">
                    <FaFacebook className="icon" />
                </a>
                
            </div>
        </div>
    );
};

export { Footer };
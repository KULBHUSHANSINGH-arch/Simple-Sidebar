import React from 'react';
import { FaInstagram, FaFacebook, FaWhatsapp, FaTwitter, FaLinkedin } from 'react-icons/fa';

function Footer() {
    return (
        <section className="bg-blue-light">
            {/* <div className="container">
                            <a href="https://www.instagram.com">
                                <FaInstagram className="mx-2" size={30} />
                            </a>
                            <a href="https://www.facebook.com">
                                <FaFacebook className="mx-2" size={30} />
                            </a>
                            <a href="https://wa.me/1234567890">
                                <FaWhatsapp className="mx-2" size={30} />
                            </a>
                            <a href="https://twitter.com">
                                <FaTwitter className="mx-2" size={30} />
                            </a>
                            <a href="https://www.linkedin.com">
                                <FaLinkedin className="mx-2" size={30} />
                            </a>
            </div> */}
             <div className="container  justify-content-center">
                <a href="https://www.instagram.com">
                    <FaInstagram className="mx-2" size={30} />
                </a>
                <a href="https://www.facebook.com">
                    <FaFacebook className="mx-2" size={30} />
                </a>
                <a href="https://wa.me/1234567890">
                    <FaWhatsapp className="mx-2" size={30} />
                </a>
                <a href="https://twitter.com">
                    <FaTwitter className="mx-2" size={30} />
                </a>
                <a href="https://www.linkedin.com">
                    <FaLinkedin className="mx-2" size={30} />
                </a>
            </div>
        
        </section>
    )
}

export default Footer;

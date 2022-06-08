import React from 'react';
import Image from 'next/image';
import styles from '../styles/Components/Footer.module.scss';
import { Logo } from '../public';

const Footer = (): JSX.Element => {
    return (
        <footer className={styles.footer}>
            <Image src={Logo} layout={'fixed'} height={50} width={150} />
            <div>
                <div>
                    <p>About</p>
                    <a href={'/about'}>
                        <h5>About Us</h5>
                    </a>
                    <a href={'/servers'}>
                        <h5>Our Servers</h5>
                    </a>
                    <a href={'/pricing'}>
                        <h5>Our Pricing</h5>
                    </a>
                </div>
                <div>
                    <p>Help</p>
                    <a href={'/faq'}>
                        <h5>FAQs</h5>
                    </a>
                    <a href={'/knowledgebase'}>
                        <h5>Knowledgebase</h5>
                    </a>
                    <a href={'/contact'}>
                        <h5>Contact Us</h5>
                    </a>
                </div>
                <div>
                    <p>Legal</p>
                    <a href={'/faq'}>
                        <h5>Privacy Policy</h5>
                    </a>
                    <a href={'/knowledgebase'}>
                        <h5>Terms & Conditions</h5>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

import React from 'react';
import Image from 'next/image';
import styles from '../styles/Components/NavBar.module.scss';
import { Logo } from '../public';

export enum CurrentPage {
    Home,
    Servers,
    Pricing,
}

interface NavBarProps {
    currentPage: CurrentPage;
    loggedIn: boolean;
}

const NavBar = ({ currentPage, loggedIn }: NavBarProps): JSX.Element => {
    return (
        <div>
            <nav className={styles.accountBar}>
                {loggedIn ? <a href={'/account'}>ACCOUNT</a> : <a href={'/login'}>LOGIN</a>}
                <div />
                {loggedIn ? <a href={'/panel'}>CONTROL PANEL</a> : <a href={'/signup'}>SIGN UP</a>}
            </nav>
            <div className={styles.navbar}>
                <div className={styles.content}>
                    <div>
                        <div className={styles.logo}>
                            <Image src={Logo} />
                        </div>
                        <div className={styles.underlay} />
                    </div>
                    <nav>
                        <div className={styles.underlay} />
                        <div className={styles.triangle} />
                        <a href={'/'} style={{ opacity: currentPage === CurrentPage.Home ? 1 : 0.25 }}>
                            <h5>Home</h5>
                            {currentPage === CurrentPage.Home ? (
                                <>
                                    <div className={styles.selector} />
                                    <div className={styles.glow} />
                                </>
                            ) : null}
                        </a>
                        <a href={'/servers'} style={{ opacity: currentPage === CurrentPage.Servers ? 1 : 0.25 }}>
                            {currentPage === CurrentPage.Servers ? (
                                <>
                                    <div className={styles.selector} />
                                    <div className={styles.glow} />
                                </>
                            ) : null}
                            <h5>Servers</h5>
                        </a>
                        <a href={'/pricing'} style={{ opacity: currentPage === CurrentPage.Pricing ? 1 : 0.25 }}>
                            {currentPage === CurrentPage.Pricing ? (
                                <>
                                    <div className={styles.selector} />
                                    <div className={styles.glow} />
                                </>
                            ) : null}
                            <h5>Pricing</h5>
                        </a>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default NavBar;

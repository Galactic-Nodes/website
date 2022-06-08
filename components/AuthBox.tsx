import React from 'react';
import Image from 'next/image';
import { Asteroid, Logo } from '../public';
import styles from '../styles/Auth.module.scss';

const AuthBox = ({ children }: { children: React.ReactNode }): JSX.Element => {
    return (
        <div className={styles.authBox}>
            <a href={'/'}>
                <Image priority src={Asteroid} layout={'fixed'} height={50} />
                <div className={styles.logo}>
                    <Image src={Logo} layout={'fixed'} width={150} height={50} />
                </div>
            </a>
            <div className={styles.container}>{children}</div>
        </div>
    );
};

export default AuthBox;

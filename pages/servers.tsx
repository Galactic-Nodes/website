import React from 'react';
import Head from 'next/head';
import type { NextPage } from 'next';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { loadStarsPreset } from 'tsparticles-preset-stars';
import styles from '../styles/Home.module.scss';
import Footer from '../components/Footer';
import NavBar, { CurrentPage } from '../components/NavBar';

const Servers: NextPage = () => {
    return (
        <>
            <Head>
                <title>Galactic Nodes - Servers</title>
                <meta name={'description'} content={'Generated by create next app'} />
                <link rel={'icon'} href={'/favicon.ico'} />
            </Head>

            <main className={styles.main}>
                <div className={styles.mainSector}>
                    <Particles
                        style={{
                            position: 'absolute',
                            top: 0,
                            zIndex: 5,
                        }}
                        height={'800px'}
                        width={'100%'}
                        options={{
                            preset: 'stars',
                            background: { color: 'transparent' },
                            particles: {
                                number: {
                                    value: 350,
                                },
                            },
                            fullScreen: false,
                        }}
                        init={async engine => {
                            await loadStarsPreset(engine);
                            await loadFull(engine);
                        }}
                    />
                    <NavBar currentPage={CurrentPage.Servers} />
                </div>
            </main>

            <Footer />
        </>
    );
};

export default Servers;

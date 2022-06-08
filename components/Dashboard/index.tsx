import React, { useMemo, useRef, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { createAvatar } from '@dicebear/avatars';
import * as style from '@dicebear/avatars-identicon-sprites';
import Image from 'next/image';
import axios from 'axios';
import { useRouter } from 'next/router';
import Sidebar, { Menu } from '../Sidebar';
import styles from '../../styles/Dashboard.module.scss';
import General from './General';
import Account from './Account';
import Billing from './Billing';
import { User, dataContext, userApiUrl } from '../utils';
import { useEventListener } from '../hooks';

const Index = ({
    initialSelectedIndex,
    initialSelectedGroup,
    user,
}: {
    initialSelectedIndex: number;
    initialSelectedGroup: number;
    user: User;
}): JSX.Element => {
    const [menu, setMenu] = useState(false);
    const [currentSelectedIndex, setCurrentSelectedIndex] = useState(initialSelectedIndex);
    const [currentSelectedGroup, setCurrentSelectedGroup] = useState(initialSelectedGroup);
    const [userState, setUser] = useState<User | null>(user);
    const router = useRouter();
    const menuRef = useRef<HTMLDivElement>(null);

    const menus: Menu = {
        general: {
            route: () => '/dashboard',
            options: {
                overview: <General />,
            },
            bars: {
                bar1: { marginLeft: 21, marginRight: 10 },
                bar3: { marginLeft: 10, marginRight: 22 },
            },
        },
        servers: {
            route: index => `/dashboard/servers/${index}`,
            options: {
                'Minecraft 1': <div />,
                'Arma 3 Node 1': <div />,
            },
            bars: {
                bar1: { marginLeft: 10, marginRight: 21 },
                bar3: { marginLeft: 21, marginRight: 11 },
                gap: 5,
            },
        },
        manage: {
            route: index => `/dashboard/services/${index}`,
            options: {
                'Game Services': <div />,
                Databases: <div />,
                Backups: <div />,
                Images: <div />,
                Monitors: <div />,
            },
            bars: {
                bar1: { marginLeft: 12, marginRight: 21 },
                bar2: { marginLeft: 21, marginRight: 0 },
                bar3: { marginLeft: 0, marginRight: 21 },
                gap: 5,
            },
        },
        account: {
            route: index => `/dashboard/account${index === 0 ? '' : index === 1 ? '/billing' : index === 2 ? '/api' : '/teams'} `,
            options: {
                account: <Account />,
                Billing: <Billing />,
                API: <div />,
                Teams: <div />,
            },
        },
    };

    const profilePicture = useMemo(
        () =>
            createAvatar(style, {
                seed: userState?.name,
                dataUri: true,
                backgroundColor: 'rgba(214,214,217,0.34)',
            }),
        [userState],
    );

    useEventListener('click', e => {
        if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
            setMenu(false);
        }
    });

    const value = useMemo(
        () => ({
            user: userState,
            setUser,
        }),
        [userState, setUser],
    );

    return (
        <dataContext.Provider value={value}>
            <div className={styles.dashboard}>
                <Sidebar
                    selectedTab={{ index: currentSelectedIndex, groupNumber: currentSelectedGroup }}
                    menus={menus}
                    onChange={(index, group) => {
                        setCurrentSelectedIndex(index);
                        setCurrentSelectedGroup(group);
                    }}
                />
                <div className={styles.left}>
                    <div className={styles.topBar}>
                        <div className={styles.search}>
                            <AiOutlineSearch />
                            <input type={'text'} />
                        </div>
                        <div ref={menuRef} className={styles.profile}>
                            <div className={styles.name}>
                                <h6>{userState?.name}</h6>
                                <div className={styles.pic}>
                                    <Image src={{ src: profilePicture, height: 45, width: 45 }} onClick={() => setMenu(true)} />
                                </div>
                            </div>
                            <div id={'menu'} className={styles.menu} style={menu ? { top: '120%', opacity: 1 } : { top: '90%', opacity: 0 }}>
                                <div className={styles.name}>
                                    <div className={styles.pic}>
                                        <Image src={{ src: profilePicture, height: 30, width: 30 }} />
                                    </div>
                                    <h6>{userState?.name}</h6>
                                </div>
                                <button
                                    id={'my-account'}
                                    type={'button'}
                                    onClick={() => {
                                        setMenu(false);
                                        setCurrentSelectedGroup(3);
                                        setCurrentSelectedIndex(0);
                                        window.history.replaceState(undefined, '', '/dashboard/account');
                                    }}
                                >
                                    <h5>My Account</h5>
                                </button>
                                <button
                                    id={'sign-out'}
                                    type={'button'}
                                    onClick={async () => {
                                        setMenu(false);
                                        const loggedOut = await axios.delete(`${userApiUrl}/session`, { withCredentials: true });
                                        if (loggedOut.status === 200) {
                                            await router.push('/login');
                                        }
                                    }}
                                >
                                    <h5>Sign out</h5>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.mainContent}>
                        {Object.values(Object.values(menus)[currentSelectedGroup].options)[currentSelectedIndex]}
                    </div>
                </div>
            </div>
        </dataContext.Provider>
    );
};

export default Index;

// Object.keys(pageLayout[Object.keys(pageLayout)[selectedGroup]])[selectedIndex]

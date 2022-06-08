import React, { useContext, useMemo } from 'react';
import Image from 'next/image';
import { HiCog } from 'react-icons/hi';
import { FcGoogle } from 'react-icons/fc';
import { AiOutlineMail, AiOutlineQrcode } from 'react-icons/ai';
import { createAvatar } from '@dicebear/avatars';
import * as style from '@dicebear/avatars-identicon-sprites';
import styles from '../../styles/Dashboard.module.scss';
import { dataContext } from '../utils';

const Account = (): JSX.Element => {
    const { user } = useContext(dataContext);

    // const user = {
    //     name: 'Kieran Lewin',
    //     email: 'kieran.lewin2000@gmail.com',
    //
    // };

    const address = { lineOne: '7 orchid place', lineTwo: 'Broughton Astley', city: 'Leicester', postCode: 'LE96NN' };

    const connections = [
        {
            title: 'Google Account',
            icon: <FcGoogle size={25} />,
            info: 'kieran.lewin2000@gmail.com',
        },
        {
            title: 'Email Two Factor',
            icon: <AiOutlineMail size={25} color={'#9E7DE3'} />,
            info: 'kieran.lewin2000@gmail.com',
        },
        {
            title: 'Authenticator',
            icon: <AiOutlineQrcode size={25} color={'#9E7DE3'} />,
            info: 'ifs32v7-%387h#"uinh4332',
        },
    ];

    const profilePicture = useMemo(
        () =>
            createAvatar(style, {
                seed: user?.name || 'vanduvhbqsadkjn',
                dataUri: true,
                backgroundColor: 'rgba(214,214,217,0.34)',
            }),
        [user],
    );

    return (
        <div className={styles.account}>
            <div>
                <h2>Account</h2>
                <div className={styles.details}>
                    <div className={styles.profilePic}>
                        <Image src={{ src: profilePicture, height: 60, width: 60 }} />
                    </div>
                    <div className={styles.info}>
                        <p>
                            <strong>{user?.name}</strong>
                        </p>
                        <h5>{user?.email}</h5>
                        <span>
                            <h5>{address.lineOne}</h5>
                            <h5>{address.lineTwo}</h5>
                            <h5>{address.city}</h5>
                            <h5>{address.postCode}</h5>
                        </span>
                    </div>
                </div>
            </div>
            <div>
                <div className={styles.title}>
                    <h2>Login Methods</h2>
                    <button type={'button'}>
                        <HiCog />
                        Modify
                    </button>
                </div>
                <div className={styles.loginMethods}>
                    {connections.map(connection => (
                        <div className={styles.connection}>
                            <p>{connection.title}</p>
                            <div>
                                {connection.icon}
                                <h5>{connection.info}</h5>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <h2>Danger Zone</h2>
                <div className={styles.deactivateAccount}>
                    <div>
                        <h4>Deactivate Account</h4>
                        <h6>This will disable your account and any teams you own until you reactivate.</h6>
                    </div>
                    <button type={'button'} onClick={() => null}>
                        <p>Deactivate Account</p>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Account;

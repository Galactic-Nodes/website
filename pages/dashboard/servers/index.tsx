import React from 'react';
import { GetServerSidePropsContext } from 'next';
import Dashboard from '../../../components/Dashboard';
import { fetchUser, User } from '../../../components/utils';

const Servers = ({ user }: { user: User }): JSX.Element => {
    return (
        <div>
            <Dashboard user={user} initialSelectedIndex={0} initialSelectedGroup={1} />
        </div>
    );
};

export const getServerSideProps = async ({ req }: GetServerSidePropsContext) => {
    const user = await fetchUser(req.headers.cookie || '');
    if (!user.data) {
        return {
            redirect: {
                destination: '/login',
                permanent: false,
            },
        };
    }
    return {
        props: {
            user: user.data,
        },
    };
};

export default Servers;

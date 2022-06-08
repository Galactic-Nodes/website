import React from 'react';
import { GetServerSidePropsContext } from 'next';
import Dashboard from '../../components/Dashboard';
import { fetchUser, User } from '../../components/utils';

const Index = ({ user }: { user: User }): JSX.Element => {
    // TODO Lazy load data on non selected tab
    // Use context where possible
    return (
        <div>
            <Dashboard user={user} initialSelectedGroup={0} initialSelectedIndex={0} />
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

export default Index;

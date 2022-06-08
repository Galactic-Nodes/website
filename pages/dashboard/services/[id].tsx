import React from 'react';
import { GetServerSidePropsContext } from 'next';
import Dashboard from '../../../components/Dashboard';

const Services = ({ id }: { id: number }): JSX.Element => {
    return (
        <div>
            <Dashboard initialSelectedIndex={id} initialSelectedGroup={2} />
        </div>
    );
};

export const getServerSideProps = ({ query }: GetServerSidePropsContext) => {
    return {
        props: {
            id: typeof query.id === 'string' ? parseInt(query.id, 10) : 0,
        },
    };
};

export default Services;

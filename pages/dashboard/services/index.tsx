import React from 'react';
import Dashboard from '../../../components/Dashboard';

const Services = (): JSX.Element => {
    return (
        <div>
            <Dashboard initialSelectedIndex={0} initialSelectedGroup={2} />
        </div>
    );
};

export default Services;

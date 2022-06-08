import React from 'react';
import Dashboard from '../../../components/Dashboard';

const Account = (): JSX.Element => {
    return (
        <div>
            <Dashboard initialSelectedIndex={0} initialSelectedGroup={3} />
        </div>
    );
};

export default Account;

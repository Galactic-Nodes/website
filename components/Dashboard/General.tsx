import React, { useContext } from 'react';
import { BsShieldExclamation } from 'react-icons/bs';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Pie, PieChart, Cell } from 'recharts';
import styles from '../../styles/Dashboard.module.scss';
import { dataContext } from '../utils';

const General = (): JSX.Element => {
    const { user } = useContext(dataContext);

    const data = [
        {
            name: 'Page A',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Page B',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Page D',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Page E',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Page F',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Page G',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];

    const data1 = [
        { name: 'Group A', value: 25 },
        { name: 'Group B', value: 75 },
    ];

    const COLORS = ['#9E7DE3', 'rgba(0, 0, 0, 0.05)'];

    return (
        <div className={styles.general}>
            <div className={styles.alert}>
                <BsShieldExclamation />
                <h5>Text based alerts for important stuff</h5>
            </div>
            <div className={styles.welcome}>
                <h3>Welcome back, {user?.name.split(' ')[0]}</h3>
                <button type={'button'}>+ Deploy</button>
            </div>
            <div className={styles.grid}>
                <div>
                    <div>
                        <ResponsiveContainer width={'100%'} height={'100%'}>
                            <PieChart width={400} height={400}>
                                <Pie
                                    data={data1}
                                    cx={'50%'}
                                    cy={'50%'}
                                    labelLine={false}
                                    innerRadius={60}
                                    outerRadius={90}
                                    fill={'#8884d8'}
                                    dataKey={'value'}
                                >
                                    {data.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                    <div>
                        <ResponsiveContainer width={'100%'} height={'100%'}>
                            <AreaChart data={data}>
                                <CartesianGrid strokeDasharray={'3 3'} />
                                <defs>
                                    <linearGradient id={'main'} x1={'0'} y1={'0'} x2={'0'} y2={'1'}>
                                        <stop offset={'25%'} stopColor={'#9471DF'} stopOpacity={1} />
                                        <stop offset={'95%'} stopColor={'rgba(158, 125, 227, 0)'} stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <XAxis dataKey={'name'} />
                                <YAxis />
                                <Tooltip />
                                <Area type={'monotone'} strokeWidth={3} dataKey={'uv'} stroke={'#8884d8'} fill={'url(#main)'} />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>
                <div>bLeft</div>
                <div>bRight</div>
            </div>
        </div>
    );
};

// background: linear-gradient(180deg, #9471DF 26.56%, rgba(158, 125, 227, 0) 100%);

export default General;

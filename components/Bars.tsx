import React from 'react';
import styles from '../styles/Components/Bars.module.scss';

interface Margins {
    marginLeft?: number;
    marginRight?: number;
}
export interface BarsLayout {
    bar1?: Margins;
    bar2?: Margins;
    bar3?: Margins;
    gap?: number;
}

const Bars = ({ bar1, bar2, bar3, gap }: BarsLayout): JSX.Element => {
    return (
        <div className={styles.bars} style={{ gap: gap ? `${gap}px` : '2px' }}>
            <div
                style={{ marginLeft: bar1 && bar1.marginLeft ? bar1.marginLeft : 0, marginRight: bar1 && bar1.marginRight ? bar1.marginRight : 0 }}
            />
            <div
                style={{ marginLeft: bar2 && bar2.marginLeft ? bar2.marginLeft : 0, marginRight: bar2 && bar2.marginRight ? bar2.marginRight : 0 }}
            />
            <div
                style={{ marginLeft: bar3 && bar3.marginLeft ? bar3.marginLeft : 0, marginRight: bar3 && bar3.marginRight ? bar3.marginRight : 0 }}
            />
        </div>
    );
};

export default Bars;

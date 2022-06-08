import React, { useState } from 'react';
import { BsCheck2 } from 'react-icons/bs';
import styles from '../styles/Components/Checkbox.module.scss';

interface CheckboxProps {
    defaultState?: boolean;
    label?: string;
    onChange?: (value: boolean) => void;
}

const Checkbox = ({ defaultState, label, onChange }: CheckboxProps): JSX.Element => {
    const [checked, setChecked] = useState(defaultState || false);
    return (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
        <div
            onClick={() => {
                setChecked(!checked);
                if (!onChange) return;
                onChange(!checked);
            }}
            className={styles.checkbox}
        >
            <div role={'checkbox'} aria-checked={checked}>
                {checked ? <BsCheck2 /> : null}
            </div>
            <span className={styles.checkLabel}>{label}</span>
        </div>
    );
};

export default Checkbox;

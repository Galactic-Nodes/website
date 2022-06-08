import React, { useState } from 'react';
import Image from 'next/image';
import styles from '../styles/Components/SideBar.module.scss';
import { Logo } from '../public';
import Bars, { BarsLayout } from './Bars';

export type Menu = Record<
    string,
    {
        route: (index: number) => string;
        options: Record<string, React.ReactNode>;
        bars?: BarsLayout;
    }
>;

interface SidebarProps {
    menus: Menu;
    selectedTab: {
        index: number;
        groupNumber: number;
    };
    onChange: (index: number, groupNumber: number) => void;
}

const Sidebar = ({ menus, selectedTab, onChange }: SidebarProps): JSX.Element => {
    const [menuSelectorPositions, setMenuSelectorPositions] = useState<Record<string, { selectorPosition: string; open: boolean }>>(() =>
        Object.keys(menus).reduce((prevObject, group) => {
            return {
                ...prevObject,
                [group]: { selectorPosition: `${(selectedTab.index + 1) * 40}px`, open: true },
            };
        }, {}),
    );

    const changeSelectedTab = async (index: number, groupIndex: number, group: string) => {
        setMenuSelectorPositions({
            ...menuSelectorPositions,
            [group]: { ...menuSelectorPositions[group], selectorPosition: `${(index + 1) * 40}px` },
        });
        onChange(index, groupIndex);
    };

    const toggleGroup = (group: string) => {
        setMenuSelectorPositions({
            ...menuSelectorPositions,
            [group]: { selectorPosition: '40px', open: !menuSelectorPositions[group].open },
        });
    };

    return (
        <div className={styles.sidebar}>
            <div className={styles.logo}>
                <Image src={Logo} />
            </div>
            <div className={styles.menus}>
                {Object.keys(menus).map((group, groupIndex) => (
                    <div key={group}>
                        <div
                            className={styles.menuSelector}
                            style={{
                                top: menuSelectorPositions[group].selectorPosition,
                                opacity: selectedTab.groupNumber === groupIndex && menuSelectorPositions[group].open ? 1 : 0,
                            }}
                        />
                        <button type={'button'} onClick={() => toggleGroup(group)}>
                            <h5>
                                {group}
                                <Bars
                                    bar1={menus[group].bars?.bar1}
                                    bar2={menus[group].bars?.bar2}
                                    bar3={menus[group].bars?.bar3}
                                    gap={menus[group].bars?.gap}
                                />
                            </h5>
                        </button>
                        <div
                            className={styles.options}
                            style={{ height: menuSelectorPositions[group].open ? `${Object.keys(menus[group].options).length * 42}px` : '0px' }}
                        >
                            {Object.keys(menus[group].options).map((option, optionIndex) => (
                                <button
                                    type={'button'}
                                    key={option}
                                    onClick={async () => {
                                        await changeSelectedTab(optionIndex, groupIndex, group);
                                        window.history.replaceState(undefined, '', menus[group].route(optionIndex));
                                    }}
                                >
                                    <p>{option}</p>
                                </button>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Sidebar;

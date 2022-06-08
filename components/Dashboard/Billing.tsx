import React, { useState } from 'react';
import { FaCcVisa } from 'react-icons/fa';
import { BsPaypal, BsChevronDown, BsChevronUp } from 'react-icons/bs';
import { HiCog, HiChevronRight } from 'react-icons/hi';
import { IoTrash, IoSave, IoExit, IoHandRightOutline } from 'react-icons/io5';
import styles from '../../styles/Dashboard.module.scss';
import Modal from '../Modal';
import { useEventListener } from '../hooks';

const Billing = (): JSX.Element => {
    const [modify, setModify] = useState(false);
    const [addPaymentMethodModal, setAddPaymentMethodModal] = useState(false);

    useEventListener('keydown', e => {
        if (e.key === 'Escape') {
            setAddPaymentMethodModal(false);
        }
    });

    const paymentMethods = [
        {
            icon: <BsPaypal color={'#1565C0'} size={20} />,
            text: 'kieran.lewin2000@gmail.com',
            primary: true,
            type: 'PayPal',
        },
        {
            icon: <FaCcVisa size={20} />,
            text: 'Card ending 5420',
            primary: false,
            type: 'Visa',
        },
    ];

    return (
        <div className={styles.billingPage}>
            <Modal
                open={addPaymentMethodModal}
                title={'Add Payment Method'}
                onClose={() => setAddPaymentMethodModal(false)}
                containerClassName={styles.paymentModal}
            >
                {paymentMethods.map(method => (
                    <button type={'button'} key={method.type}>
                        <div>
                            {method.icon}
                            {method.type}
                        </div>
                        <HiChevronRight />
                    </button>
                ))}
            </Modal>
            {modify ? (
                <>
                    <h3>Payments - Modify</h3>
                    <div className={styles.billingModifyNextPayment}>
                        <div>
                            <div>
                                <p>Next Payment</p>
                                <h3>£20.24</h3>
                                <p>
                                    <span>on 12th December</span>
                                </p>
                            </div>
                            {[paymentMethods.find(el => el.primary)].map(method => (
                                <div>
                                    {method?.icon || 'err'}
                                    {method?.text || 'err'}
                                </div>
                            ))}
                        </div>
                        <button type={'button'} onClick={() => setModify(false)}>
                            <IoExit /> Quit
                        </button>
                    </div>
                    <div className={styles.divider} />
                    <div className={styles.manageMethods}>
                        <h3>Payment Methods</h3>
                        <div>
                            <div>
                                {paymentMethods.map(method => (
                                    <div key={method.text.replace(/\s+/g, '')}>
                                        <div>
                                            {method.icon}
                                            {method.text}
                                        </div>
                                        <button type={'button'}>
                                            <IoTrash size={16} color={'#9E7DE3'} />
                                        </button>
                                    </div>
                                ))}
                            </div>
                            <button type={'button'} onClick={() => setAddPaymentMethodModal(true)}>
                                + Add
                            </button>
                        </div>
                    </div>
                    <div className={styles.actions}>
                        <button type={'button'}>
                            <IoSave />
                            Save
                        </button>
                    </div>
                </>
            ) : (
                <>
                    <h3>Payments</h3>
                    <div className={styles.methods}>
                        <div>
                            <table>
                                <thead>
                                    <tr>
                                        <td>
                                            <p>Payment Methods</p>
                                        </td>
                                        <td>
                                            <h5>Primary</h5>
                                        </td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {paymentMethods.map(method => (
                                        <tr key={method.text}>
                                            <td>
                                                <h5>
                                                    {method.icon}
                                                    {method.text}
                                                </h5>
                                            </td>
                                            <td>
                                                <div style={{ backgroundColor: method.primary ? '#9E7DE3' : '#686868' }} />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <div className={styles.nextPayment}>
                                <p>Next Payment</p>
                                <h3>£20.24</h3>
                                <p>
                                    <span>on 12th December</span>
                                </p>
                            </div>
                        </div>
                        <button type={'button'} onClick={() => setModify(true)}>
                            <HiCog />
                            Modify
                        </button>
                    </div>
                    <div className={styles.divider} />
                    <h3>Billing</h3>
                    <div className={styles.billing}>
                        <div>
                            <p>Billing History</p>
                            <div className={styles.table}>
                                {Array.from(Array(5)).map(() => (
                                    <div>
                                        <p>£20.00</p>
                                        <p>August 20th</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className={styles.page}>
                            <button type={'button'}>
                                <BsChevronUp />
                            </button>
                            <p>3</p>
                            <button type={'button'}>
                                <BsChevronDown />
                            </button>
                        </div>
                        <div>
                            <p>Invoices</p>
                            <div className={styles.table}>
                                {Array.from(Array(5)).map(() => (
                                    <div>
                                        <p>£20.00</p>
                                        <div>
                                            <p>
                                                <span>PDF</span>
                                            </p>
                                            <p>
                                                <span>CSV</span>
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className={styles.promo}>
                            <p>Promo code</p>
                            <h5 className={styles.info}>
                                Promotional codes will be applied to next month’s billing cycle. Each code can only be used once.
                            </h5>
                            <p>Used Codes</p>
                            <div className={styles.codes}>
                                {['gib-server', 'save-40', 'save-20', 'gib-server', 'save-40', 'save-20'].map(el => (
                                    <h5>{el}</h5>
                                ))}
                            </div>
                            <div className={styles.newCode}>
                                <input type={'text'} />
                                <button type={'button'}>Apply</button>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Billing;

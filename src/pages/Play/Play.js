import React, { useState } from 'react';
import styles from '../Play/play.module.css';
import cup from '../Assets/3dicons.png';
import men from '../Assets/Ellipse 16.png';
import hammer from '../Assets/3dicons (1).png';
import ellipse from '../Assets/Ellipse 16.png';
import icon2 from '../Assets/3dicons (2).png';
import icon3 from '../Assets/3dicons (3).png';
import CreateGamemodal from '../../components/Modals/CreateGamemodal';
import JoinGameModal from '../../components/Modals/JoinGameModal';
import ViewGameModal from '../../components/Modals/ViewGameModal';
import JoinGameurlnotset from '../../components/Modals/JoinGameurlnotset';

const Play = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [isJoinModalOpen, setJoinModalOpen] = useState(false);
    const [isViewModalOpen, setViewModalOpen] = useState(false);
    const [isUrlModalOpen, setUrlModalOpen] = useState(false);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);
    const openJoinModal = () => setJoinModalOpen(true);
    const closeJoinModal = () => setJoinModalOpen(false);
    const closeViewModal = () => setViewModalOpen(false);
    const openViewGameModal = () => setViewModalOpen(true);
    const openUrlModal = () => setUrlModalOpen(true);
    const closeUrlModal = () => setUrlModalOpen(false);

    // Sample data for recent winnings
    const recentWinnings = [
        { name: 'Basit Bashir', price: '$121', time: '10 min ago' },
        { name: 'Basit Bashir', price: '$121', time: '10 min ago' },
        { name: 'Basit Bashir', price: '$121', time: '10 min ago' },
        { name: 'Basit Bashir', price: '$121', time: '10 min ago' },
        { name: 'Basit Bashir', price: '$121', time: '10 min ago' },
        { name: 'Basit Bashir', price: '$121', time: '10 min ago' },
        { name: 'Basit Bashir', price: '$121', time: '10 min ago' },
        { name: 'Basit Bashir', price: '$121', time: '10 min ago' },
    ];

    // Sample data for game entries
    const gameEntries = [
        { name: 'Basit Bashir', amount: '$12.1', image: ellipse },
        { name: 'Basit Bashir', amount: '$12.1', image: ellipse },
        { name: 'Basit Bashir', amount: '$12.1', image: ellipse },
        { name: 'Basit Bashir', amount: '$12.1', image: ellipse },
        { name: 'Basit Bashir', amount: '$12.1', image: ellipse },
        { name: 'Basit Bashir', amount: '$12.1', image: ellipse },
    ];

    return (
        <>
            <CreateGamemodal isOpen={isModalOpen} onClose={closeModal} />
            <JoinGameModal isOpen={isJoinModalOpen} onClose={closeJoinModal} />
            <ViewGameModal isOpen={isViewModalOpen} onClose={closeViewModal} />
            <JoinGameurlnotset isOpen={isUrlModalOpen} onClose={closeUrlModal} />
            <div className={styles.parentdiv}>
                <div className={styles.divcontainer}>
                    <div className={styles.leftdiv}>
                        <div className={styles.Recent}>
                            Recent Winnings
                            <div className={styles.cupimage}>
                                <img src={cup} alt='img' />
                            </div>
                        </div>
                        {recentWinnings.map((item, index) => (
                            <div key={index} className={styles.insidediv}>
                                <img src={ellipse} alt='image' className={styles.image} />
                                <div className={styles.textContainer}>
                                    <p className={styles.name}>{item.name}</p>
                                    <span className={styles.price}>{item.price}</span>
                                </div>
                                <span className={styles.time}>{item.time}</span>
                            </div>
                        ))}
                    </div>
                    <div className={styles.rigghtmaindiv}>
                        <div className={styles.rightdiv}>
                            <div className={styles.totalamount}>
                                <p className={styles.label}>Total amount</p>
                                <p className={styles.amount}>$418.21</p>
                            </div>
                            <div className={styles.activegames}>
                                <p className={styles.label}>Active Games</p>
                                <p className={styles.gamescount}>21</p>
                            </div>
                            <button className={styles.buttonend} onClick={openModal}>Create a game</button>
                        </div>
                        {gameEntries.map((entry, index) => (
                            <div key={index} className={styles.rightseconddiv}>
                                <img src={entry.image} alt='' className={styles.image1} />
                                <div className={styles.basitbashir}>
                                    <p>{entry.name}</p>
                                    <span>{entry.amount}</span>
                                </div>
                                <div className={styles.H}>
                                    <p>H</p>
                                </div>
                                <div className={styles.imagesdiv}>
                                    <div className={styles.imagerow}>
                                        <div className={styles.hammer}>
                                            <img src={hammer} />
                                        </div>
                                        <div className={styles.icon2}>
                                            <img src={icon2} />
                                        </div>
                                        <div className={styles.icon2}>
                                            <img src={icon3} />
                                        </div>
                                    </div>
                                    <p>+3 items</p>
                                </div>
                                <div className={styles.Activetag} onClick={openUrlModal}>
                                    Active
                                </div>
                                <div className={styles.divbuttonjoin}>
                                    <button className={styles.buttonjoin} onClick={openJoinModal}>Join</button>
                                </div>
                                <div className={styles.divbuttonview}>
                                    <button className={styles.buttonview} onClick={openViewGameModal}>View</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Play;

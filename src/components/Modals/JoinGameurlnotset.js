import React from 'react';
import styles from './JoinGameurlnotset.module.css';
import cross from '../../pages/Assets/Close.png'
import Vector from '../../pages/Assets/Vector.png'
import Select from '../../pages/Assets/Select.png'
const JoinGameurlnotset = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className={styles.viewmodalurlnotset}>
            <div className={styles.modalcontent}>
                <div className={styles.joinmodalurlupperdiv}>
                    <p>Join a Coin Flip Game</p>
                    <img src={cross} onClick={onClose} />
                </div>
                {/* <div className={styles.joinmodalurlupperdiv}>
                <p>Join Flip</p>
                <img src={cross} onClick={onClose} />
            </div> */}
                <div className={styles.middlejoinmodaltopdiv}>
                    <input className={styles.joininput} placeholder='search for items'></input>
                    <button className={styles.joinmodalInventorybutton}>Inventory value:$4.30</button>
                    <div className={styles.joinmodaltextdiv}>
                        This Coin Flip Game requires $12.09 - $10.03 to join
                    </div>
                    <span className={styles.steamtext}>we had issue loading your steam Inventory,please set your trade URL  <span className={styles.HERE}><a href=''>HERE</a></span></span>
                </div>
                <div className={styles.bottomdiv}>
                    <button className={styles.crossbutton}>
                        close
                        <img src={cross} onClick={onClose} />
                    </button>
                    <button className={styles.snapbutton}>
                        Snap Select
                        <img src={Select} alt="Select Icon" />
                    </button>
                    <button className={styles.buttondeposit}>Deposit
                        <img src={Vector} />
                    </button>
                </div>
            </div>
        </div >
    );
};

export default JoinGameurlnotset;

import React from 'react';
import styles from '../Modals/JoinGame.module.css'
import cross from '../../pages/Assets/Close.png'
import Vector from '../../pages/Assets/Vector.png'
import Select from '../../pages/Assets/Select.png'
import icon1 from '../../pages/Assets/3dicons (1).png'


const JoinGameModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className={styles.joinmodalview}>
            <div className={styles.modalcontent}>
                <div className={styles.joinmodalupperdiv}>
                    <div className={styles.upperdivwithjoin}> <p>Join a Coin Flip game</p></div>
                </div>
                <div className={styles.joinupperimgdiv}>
                    <img src={cross} onClick={onClose} />
                </div>
                <div className={styles.middlejoinmodaltopdiv}>
                    <input className={styles.joininput} placeholder='search for items'></input>
                    <button className={styles.joinmodalInventorybutton}>Inventory value:$4.30</button>
                    <div className={styles.joinmodaltextdiv}>
                        This Coin Flip Game requires $12.09 - $10.03 to join
                    </div>
                    <div className={styles.allimages}>
                        <div className={styles.image1}>
                            <img src={icon1} />
                            <p>$4.3</p>
                        </div>

                    </div>
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
        </div>
    );
};

export default JoinGameModal;

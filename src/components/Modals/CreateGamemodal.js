import React, { useEffect, useState } from "react";
import { getSteamInventory } from "../../utils/api";
import styles from "../Modals/Creategame.module.css";
import cross from "../../pages/Assets/Close.png";
import Select from "../../pages/Assets/Select.png";
import icon1 from "../../pages/Assets/3dicons (1).png";
import icon2 from "../../pages/Assets/3dicons (2).png";
import icon3 from "../../pages/Assets/3dicons (3).png";
import Vector from "../../pages/Assets/Vector.png";
import { useSelector } from "react-redux";

const CreateGamemodal = ({ isOpen, onClose, userId }) => {
  const { user } = useSelector((state) => state.user);
  const [inventory, setInventory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (isOpen) {
      fetchInventory();
    }
  }, [isOpen, user]);

  const fetchInventory = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await getSteamInventory(user?.id);
      console.log(response);
      setInventory(response.data.outstream);
      console.log(response.data.outstream);
    } catch (error) {
      console.error("Error fetching inventory:", error);
      setError("Failed to load inventory");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modaloverlay}>
      <div className={styles.modalcontent}>
        <div className={styles.upperdiv}>
          <div>
            <p>Create a Coin Flip game</p>
          </div>
          <div className={styles.imgdiv}>
            <img src={cross} onClick={onClose} alt="Close" />
          </div>
        </div>
        <div className={styles.middlediv}>
          <div className={styles.middletopdiv}>
            <input
              className={styles.input}
              placeholder="Search for items"
            ></input>
            <button className={styles.Inventorybutton}>
              Inventory value: $
              {inventory
                .reduce(
                  (total, item) =>
                    total + parseFloat(item.price.replace("$", "")),
                  0
                )
                .toFixed(2)}
            </button>
          </div>
          <div className={styles.textdiv}>Select a Coin to Create a Game</div>
          <div className={styles.HT}>
            <div className={styles.H}>H</div>
            <div className={styles.T}>T</div>
          </div>

          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>{error}</p>
          ) : (
            <div className={styles.allimages}>
              {inventory.length > 0 ? (
                inventory.map((item, index) => (
                  <div key={index} className={styles.image1}>
                    <img src={item.image} alt={item.name} />
                    <p>{item.price}</p>
                  </div>
                ))
              ) : (
                <p>No items found</p>
              )}
            </div>
          )}
        </div>
        <div className={styles.bottomdiv}>
          <button className={styles.crossbutton} onClick={onClose}>
            Close
            <img src={cross} alt="Close" />
          </button>
          <button className={styles.snapbutton}>
            Snap Select
            <img src={Select} alt="Select Icon" />
          </button>
          <button className={styles.buttondeposit}>
            Deposit
            <img src={Vector} alt="Deposit Icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateGamemodal;

// import React from 'react'
// import styles from '../Modals/Creategame.module.css'
// import cross from '../../pages/Assets/Close.png'
// import icon1 from '../../pages/Assets/3dicons (1).png'
// import icon2 from '../../pages/Assets/3dicons (2).png'
// import icon3 from '../../pages/Assets/3dicons (3).png'
// import Select from '../../pages/Assets/Select.png'
// import Vector from '../../pages/Assets/Vector.png'

// const CreateGamemodal = ({ isOpen, onClose }) => {
//     if (!isOpen) return null
//     return (
//         <div className={styles.modaloverlay}>
//             <div className={styles.upperdiv}>
//                 <div> <p>Create a Coin Flip game</p></div>
//                 <div className={styles.imgdiv}>
//                     <img src={cross} onClick={onClose} />
//                 </div>
//             </div>
//             <div className={styles.middlediv}>
//                 <div className={styles.middletopdiv}>
//                     <input className={styles.input} placeholder='search for items'></input>
//                     <button className={styles.Inventorybutton}>Inventory value:$4.30</button>
//                 </div>
//                 <div className={styles.textdiv}>Select a Coin to Create a Game</div>
//                 <div className={styles.HT}>
//                     <div className={styles.H}>H</div>
//                     <div className={styles.T}>T</div>
//                 </div>
//                 <div className={styles.allimages}>
//                     <div className={styles.image1}>
//                         <img src={icon1} />
//                         <p>$4.3</p>
//                     </div>
//                     <div className={styles.hammerimage}>
//                         <img src={icon2} />
//                         <p>$4.3</p>
//                     </div><div className={styles.cupimage}>
//                         <img src={icon3} />
//                         <p>$4.3</p>
//                     </div>
//                 </div>

//             </div>
//             <div className={styles.bottomdiv}>
//                 <button className={styles.crossbutton}>
//                     close
//                     <img src={cross} onClick={onClose} />
//                 </button>
//                 <button className={styles.snapbutton}>
//                     Snap Select
//                     <img src={Select} alt="Select Icon" />
//                 </button>
//                 <button className={styles.buttondeposit}>Deposit
//                     <img src={Vector} />
//                 </button>

//             </div>

//         </div>
//     )
// }

// export default CreateGamemodal

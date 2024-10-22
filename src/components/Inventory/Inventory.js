import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import styles from "./Inventory.module.css";
import { getSteamInventory } from "../../utils/api";

const Inventory = ({ gameMode, joinLobby, createLobby }) => {
  const { user } = useSelector((state) => state.user);
  const [inventory, setInventory] = useState([]);
  const [visibility, setVisibility] = useState(false);
  const [loading, setLoading] = useState(true);
  const [checkedItems, setCheckedItems] = useState([]);

  useEffect(() => {
    const fetchInventory = async function () {
      setLoading(true);
      try {
        const res = await getSteamInventory(user?.id);
        setVisibility(false);
        setInventory(res.data.outstream);
        console.log(res.data.outstream)
      } catch (err) {
        setLoading(false);
        if (user && err.response && err.response.status === 404) {
          setVisibility(true);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchInventory();
  }, [user]);

  function itemsCheckHandler() {
    setCheckedItems((prevState) => {
      let prevLen = prevState.length;
      const updatedList = prevState.filter((el) => el.assetid !== this);
      if (prevLen === updatedList.length) return [...prevState, this];

      return updatedList;
    });
  }

  const gameModeHandler = () => {
    if (gameMode.mode === "create") {
      createLobby(checkedItems);
    }

    if (gameMode.mode === "join") joinLobby(gameMode.lobbyId, checkedItems);
  };

  return (
    <div>
      <ul className={styles.inventoryList}>
        {visibility && (
          <div className={styles.visibilityMessage}>
            <p>
              Your Inventory has visibility set to Private or does not have any
              rust Items. Change the visibility here.
            </p>
            <a
              href={`https://steamcommunity.com/profiles/${user.id}/edit/settings/`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.steamLink}
            >
              Steam
            </a>
          </div>
        )}
        {loading && user && <p>Loading...</p>}
        {inventory.length > 0 &&
          inventory.map((el, i) => (
            <li
              key={i}
              className={styles.listItem}
              onClick={itemsCheckHandler.bind({
                assetid: el.assetid,
                contextid: el.contextid,
                appid: el.appid,
                avatarUri: el.image,
                price: 12,
              })}
            >
              <img src={el.image} alt={el.name} className={styles.image} />
            </li>
          ))}
      </ul>

      <div className={styles.imageList}>
        <button onClick={gameModeHandler}>{gameMode.mode.toUpperCase()}</button>
      </div>
    </div>
  );
};

export default Inventory;

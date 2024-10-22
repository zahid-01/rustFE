import { useEffect, useState } from "react";
import { getSteamInventory, tradeItems } from "../../utils/api";

import styles from "./Inventory.module.css";
import { useSelector } from "react-redux";

const Inventory = () => {
  const { user } = useSelector((state) => state.user);
  const [inventory, setInventory] = useState([]);
  const [visibility, setVisibility] = useState(false);
  const [loading, setLoading] = useState(true);
  const [selectedItem, setSelectedItem] = useState(null);
  const [checkedItems, setCheckedItems] = useState([]);

  useEffect(() => {
    const fetchInventory = async () => {
      setLoading(true);

      try {
        const res = await getSteamInventory(user?.id);
        setVisibility(false);
        setInventory(res.data.outstream);
      } catch (err) {
        setLoading(false);
        if (user && err.response && err.response.status === 404) {
          setVisibility(true);
        }
      } finally {
        setLoading(false);
      }
    };

    if (user?.id) {
      fetchInventory();
    }
  }, [user?.id, user]);

  useEffect(() => {
    if (inventory.length > 0) {
      setSelectedItem(inventory[0]);
    }
  }, [inventory]);
  console.log(inventory);

  function itemsCheckHandler() {
    setCheckedItems((prevState) => {
      let prevLen = prevState.length;
      const updatedList = prevState.filter((el) => el.assetid !== this);
      if (prevLen === updatedList.length)
        return [...prevState, { assetid: this }];

      return updatedList;
    });
  }

  const tradeItemHandler = async () => {
    if (!checkedItems.length) return console.log("Select atleast 1 item");
    tradeItems(checkedItems, user.id).then(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  };

  const parseDescription = (description) => {
    const parser = new DOMParser();
    const parsedHtml = parser.parseFromString(description, "text/html");
    const textContent = parsedHtml.body.textContent || "";
    return textContent.trim();
  };

  if (!user) return <p>Login first you idiot!</p>;
  return (
    <div className={styles.container}>
      <div className={styles.imageList}>
        <ul className={styles.inventoryList}>
          {visibility && (
            <div className={styles.visibilityMessage}>
              <p>
                Your Inventory has visibility set to Private or does not have
                any rust Items. Change the visibility here.
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
                onClick={itemsCheckHandler.bind(el.assetid)}
              >
                <img src={el.image} alt={el.name} className={styles.image} />
              </li>
            ))}
        </ul>

        <button onClick={tradeItemHandler}>Trade Items</button>
      </div>
      {inventory.length > 0 && (
        <div className={styles.detailsCard}>
          {selectedItem && (
            <div className={styles.itemDetails}>
              <img
                src={selectedItem.image}
                alt={selectedItem.name}
                className={styles.selectedImage}
              />
              <p className={styles.name}>{selectedItem.name}</p>
              <div
                className={styles.description}
                dangerouslySetInnerHTML={{
                  __html: parseDescription(selectedItem.descriptions),
                }}
              ></div>
              <p className={styles.price}>{selectedItem.price}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Inventory;

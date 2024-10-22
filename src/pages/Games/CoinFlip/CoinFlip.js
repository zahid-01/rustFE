import { useEffect, useState } from "react";
import { createLobby, getAllLobies, joinLobby } from "../../../utils/api";
import Modal from "react-modal";

import styles from "./CoinFlip.module.css";
import ActiveLobbies from "../../../components/Lobbies/ActiveLobbies";
import Inventory from "../../../components/Inventory/Inventory";

const CoinFlip = () => {
  const [coin, setCoin] = useState(null);
  const [activeLobbies, setActiveLobbies] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [gameMode, setGameMode] = useState(null);

  useEffect(() => {
    getAllLobies().then(
      (res) => {
        setActiveLobbies(res.data.activeLobbies);
      },
      (err) => {
        console.log(err);
      }
    );
  }, []);

  const setCoinHandler = function () {
    setCoin(this);
  };

  const lobyCreationHandler = async function (checkedItems) {
    createLobby({ userPick: coin, items: checkedItems }).then(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  };

  const joinGameHandler = function (lobbyId, checkedItems) {
    joinLobby({ lobbyId: lobbyId, items: checkedItems }).then(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  };

  const openModal = function (gameMode) {
    setGameMode(gameMode);
    setModalIsOpen(true);
  };
  const closeModal = () => setModalIsOpen(false);

  return (
    <div className={styles.container}>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <button
          onClick={setCoinHandler.bind("blackCoin")}
          className={styles.blackcoin}
        >
          Black Coin
        </button>
        <button
          onClick={setCoinHandler.bind("redCoin")}
          className={styles.redcoin}
        >
          Red Coin
        </button>

        <Inventory
          joinLobby={joinGameHandler}
          createLobby={lobyCreationHandler}
          gameMode={gameMode}
        />
      </Modal>

      <button
        className={styles.createGameButton}
        onClick={openModal.bind({ mode: "create" })}
      >
        CREATE A GAME
      </button>
      {activeLobbies.length > 0 && (
        <ActiveLobbies lobbies={activeLobbies} openModal={openModal} />
      )}
    </div>
  );
};

export default CoinFlip;

import React from "react";
import styles from "./ActiveLobbies.module.css";

const ActiveLobbies = ({ lobbies, openModal }) => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.totalAmount}>
          <p>$105.61</p>
          <span>Total Amount</span>
        </div>
        <div className={styles.activeGames}>
          <p>{lobbies.length}</p>
          <span>Active games</span>
        </div>
        <button
          className={styles.createGameButton}
          onClick={() => openModal({ mode: "create" })}
        >
          CREATE A GAME
        </button>
      </header>
      {lobbies.map((lobby) => (
        <div key={lobby._id} className={styles.lobbyCard}>
          <div className={styles.lobbyHeader}>
            <img
              src={lobby.lobbyCreator.avatar}
              alt={lobby.lobbyCreator.userName}
              className={styles.avatar}
            />
            <div className={styles.lobbyInfo}>
              <h3>{lobby.lobbyCreator.userName}</h3>
              <p className={styles.amount}>
                ${(lobby.creatorAmountInCents / 100).toFixed(2)}
              </p>
            </div>
          </div>
          <div className={styles.lobbyItems}>
            {lobby.creatorItemsTraded.map((item) => (
              <img
                key={item._id}
                src={item.avatarUri}
                alt={`Item ${item.assetid}`}
                className={styles.itemImage}
              />
            ))}
          </div>
          <div className={styles.lobbyActions}>
            {lobby.opponentInfo ? (
              <div className={styles.opponentInfo}>
                <p>Joining</p>
                <img
                  src={lobby.opponentInfo.opponentId.avatar}
                  alt={lobby.opponentInfo.opponentId.userName}
                  className={styles.avatar}
                />
                <div className={styles.lobbyInfo}>
                  <h3>{lobby.opponentInfo.opponentId.userName}</h3>
                  <p className={styles.amount}>
                    $
                    {(lobby.opponentInfo.opponentAmountInCents / 100).toFixed(
                      2
                    )}
                  </p>
                </div>
                <div className={styles.opponentItems}>
                  {lobby.opponentInfo.opponentItemsTraded.map((item) => (
                    <img
                      key={item._id}
                      src={item.avatarUri}
                      alt={`Item ${item.assetid}`}
                      className={styles.itemImage}
                    />
                  ))}
                </div>
              </div>
            ) : (
              <p>Open</p>
            )}
            <div className={styles.lobbyFooter}>
              <p>Winning Coin: {lobby.winningCoin}</p>
              <p>Lobby Status: {lobby.lobbyActive ? "Active" : "Inactive"}</p>
            </div>
            <button
              className={styles.joinButton}
              onClick={() => openModal({ mode: "join", lobbyId: lobby._id })}
            >
              Join
            </button>
            <button className={styles.viewButton}>View</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ActiveLobbies;

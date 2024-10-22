import React from "react";
import img1 from "../../../src/pages/Assets/gambling.avif";
import styles from "./Home.module.css";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className={styles.container}>
        <p className={styles.welcomeText}>WELCOME TO RUST SKIN</p>
        <div className={styles.content}>
          <div className={styles.imageContainer}>
            <img src={img1} alt="gambling" className={styles.image}></img>
          </div>
          <div>
            <div className={styles.luckText}>TRY YOUR LUCK!!!</div>
            <NavLink to={"/inventory"} className={styles.invent}>
              Fetch My Skins
            </NavLink>
            <NavLink to={"/coin"} className={styles.invent}>
              Flip Coin
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

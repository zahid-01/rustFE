import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "../utils/api";
import { clearLogin } from "../Store/login";
import styles from "./Navbar.module.css";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    logout()
      .then((res) => {
        navigate("/");
        dispatch(clearLogin());
      })
      .catch((error) => {
        console.error("Logout error:", error);
      });
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.outer}>
        <NavLink to={"/"}>
          <h1 className={styles.title}>RUSTY SKIN</h1>
        </NavLink>
        <div className={styles.userSection}>
          {user ? (
            <>
              <img
                src={user.photos[0].value}
                alt="User Avatar"
                className={styles.avatar}
              />
              <span className={styles.userName}>{user.displayName}</span>
              <button onClick={handleLogout} className={styles.button1}>
                Logout
              </button>
            </>
          ) : (
            <>
              <img
                src="/SteamLogo.png"
                alt="Steam Logo"
                className={styles.logo}
              />
              <button onClick={login} className={styles.button1}>
                Sign In
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

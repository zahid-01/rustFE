// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { login, logout } from '../utils/api';
// import { clearLogin } from '../Store/login';
// import styles from './Navbar1.module.css';
// import { NavLink, useNavigate } from 'react-router-dom';
// import man from '../../src/pages/Assets/Ellipse 16.png';

// const Navbar1 = () => {
//     const navigate = useNavigate();
//     const dispatch = useDispatch();
//     const { user } = useSelector((state) => state.user);

//     const handleLogin = () => {
//         login()
//         .then((res) => {
//             navigate('/home');
//         })
//         .catch((error) => {
//             console.error('Login error:', error);
//         });
//     };

//     const handleLogout = () => {
//         logout()
//             .then(() => {
//                 dispatch(clearLogin());
//                 navigate('/');
//             })
//             .catch((error) => {
//                 console.error('Logout error:', error);
//             });
//     };

//     return (
//         <nav className={styles.nav}>
//             <div className={styles.coinflip}>
//                 Coin Flip
//             </div>
//             <ul>
//                 <li>
//                     <NavLink
//                         to='/home'
//                         className={({ isActive }) => (isActive ? `${styles.active} ${styles.link}` : styles.link)}
//                     >
//                         Home
//                     </NavLink>
//                 </li>
//                 <li>
//                     <NavLink
//                         to='/play'
//                         className={({ isActive }) => (isActive ? `${styles.active} ${styles.link}` : styles.link)}
//                     >
//                         Play
//                     </NavLink>
//                 </li>
//                 <li>
//                     <NavLink
//                         to='/faq'
//                         className={({ isActive }) => (isActive ? `${styles.active} ${styles.link}` : styles.link)}
//                     >
//                         FAQ
//                     </NavLink>
//                 </li>
//                 <li>
//                     <NavLink
//                         to='/sport'
//                         className={({ isActive }) => (isActive ? `${styles.active} ${styles.link}` : styles.link)}
//                     >
//                         Sport
//                     </NavLink>
//                 </li>
//             </ul>
//             <div className={styles.menimg}>
//                 <img src={man} alt="User Avatar" />
//             </div>
//             <div className={styles.name}>
//                 {user ? (
//                     <>
//                         <span>{user.displayName}</span>
//                         <button onClick={handleLogout}>Logout</button>
//                     </>
//                 ) : (
//                     <button onClick={handleLogin}>Sign In</button>
//                 )}
//             </div>
//         </nav>
//     );
// };

// export default Navbar1;

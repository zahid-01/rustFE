import React, { useRef, useState } from "react";
import "./Navbar.css";
import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from '../../utils/api';
import { clearLogin } from '../../Store/login';
import { useGSAP } from "@gsap/react";
import { Link ,useNavigate} from "react-router-dom";
import gsap from "gsap";

const Navbar = () => {
    const [activeTab, setActiveTab] = useState('navHome');
    const navContainer = useRef();
    const navigate = useNavigate()
    const spanRef = useRef();
    const { contextSafe } = useGSAP({ scope: navContainer });
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.user); // Get user from Redux store

    useGSAP(() => {
        const location = document.getElementById('navHome').getBoundingClientRect();
        const tl = gsap.timeline();
        tl.from(".nav-links", {
            opacity: 0,
            delay: 0.3,
            duration: 0.7,
            y: -60,
            stagger: 0.2,
            borderRadius: 20,
        });

        gsap.from(".nav-logo", {
            opacity: 0,
            delay: 0.5,
            duration: 0.5,
            x: -50,
            stagger: 0.1,
            ease: "elastic.out(1,0.5)",
        });

        gsap.from(".nav-signIn", {
            opacity: 0,
            delay: 0.5,
            duration: 0.5,
            x: 50,
            stagger: 0.1,
            ease: "elastic.out(1,0.5)",
        });

        gsap.to(spanRef.current, {
            opacity: 1,
            duration: 0.7,
            top: location.top - 20,
            bottom: location.bottom,
            right: location.right,
            left: location.left - 6,
            transformOrigin: "center",
        });
    });

    const handleLinkClick = contextSafe((className) => {
        setActiveTab(className);
        const location = document.getElementById(className).getBoundingClientRect();
        gsap.to(spanRef.current, {
            opacity: 1,
            duration: 0.3,
            width: location.width + 7,
            top: location.top - 20,
            bottom: location.bottom,
            right: location.right,
            left: location.left - 4,
        });
    });

    const  handleLogin =() => {
        login()
        // .then((response) => {
        //       navigate('/');
        //   }).catch((error) => console.error('Login error:', error));
          
    };
    

    const handleLogout = () => {
        logout()
            .then(() => {
                dispatch(clearLogin()); // Clear login state on logout
            })
            .catch((error) => {
                console.error('Logout error:', error);
            });
    };

    return (
        <nav className="h-14 text-white overflow-hidden relative justify-between pl-9 pr-9 items-center flex theme-white-app box-shadow-app   ">
            <div className="nav-logo cursor-pointer overflow-hidden h-[50%]">
                <h2 className="text-black-app text-xl font-bold">Coin Flip</h2>
            </div>

            <span ref={spanRef} className={`h-[180%] left-[-70%] absolute theme-grey-app w-14 rotate-6`}></span>

            <div className="flex overflow-hidden h-100 gap-9 items-center justify-evenly w-96 relative">
                <span id="navHome" className="h-100 flex items-center">
                    <Link to='/'>
                        <h5
                            className={`nav-links font-semibold ${activeTab === "navHome" ? "text-white" : "text-black-app"} cursor-pointer`}
                            onClick={() => handleLinkClick("navHome")}
                        >
                            Home
                        </h5>
                    </Link>
                </span>

                <span id="navPlay" className="h-100 flex items-center">
                    <Link to='/play'>
                        <h5
                            className={`nav-links font-semibold ${activeTab === "navPlay" ? "text-white" : "text-black-app"} cursor-pointer`}
                            onClick={() => handleLinkClick("navPlay")}
                        >
                            Play
                        </h5>
                    </Link>
                </span>

                <span id="navFAQ" className="h-100 flex items-center">
                    <h5
                        className={`nav-links font-semibold ${activeTab === "navFAQ" ? "text-white" : "text-black-app"} cursor-pointer`}
                        onClick={() => handleLinkClick("navFAQ")}
                    >
                        FAQ
                    </h5>
                </span>

                <span id="navSupport" className="h-100 flex items-center">
                    <h5
                        className={`nav-links font-semibold ${activeTab === "navSupport" ? "text-white" : "text-black-app"} cursor-pointer`}
                        onClick={() => handleLinkClick("navSupport")}
                    >
                        Support
                    </h5>
                </span>
            </div>

            {/* Separate the user's name and the button */}
            <div className="flex items-center gap-4">
                {user && <p className="text-black-app font-bold">{user.displayName}</p>}
                <div
                    ref={navContainer}
                    className="nav-signIn button-grey-gradient pl-4 pr-4 pt-2 pb-2 flex items-center justify-center cursor-pointer"
                >
                    {user ? (
                        <button onClick={handleLogout}>Logout</button>
                    ) : (
                        <button onClick={handleLogin}>Sign In</button>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;




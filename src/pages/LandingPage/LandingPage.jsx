import { useGSAP } from "@gsap/react";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import "./LandingPage.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import dottedImg from "../../pages/assets/dotted.svg";
import dottedImg from "../Assets/dotted.svg"
import fullDottedImg from "../Assets/fullDotted.svg";
import coin from "../Assets/coin.svg";
import arrowRight from "../Assets//arrowRight.svg";
import rocket from "../Assets//page2rocket.svg";
import page2coins from "../Assets//page2coins.svg";
import page3air from "../Assets//page3air.svg";
import page3dotted from "../Assets//page3dotted.svg";
import page3coding from "../Assets//page3coding.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {} from "@fortawesome/free-regular-svg-icons"
import { faArrowTrendUp } from "@fortawesome/free-solid-svg-icons";
const LandingPage = () => {
  // section vise Refs
  const page1Ref = useRef();
  const page2Ref = useRef();
  const page3Ref = useRef();
  // Animation Refs for Page 1
  const p1LeftDecorRef = useRef();
  const p1RightDecorRef = useRef();

  gsap.registerPlugin(ScrollTrigger);
  // Animation Logic for Page 1

  useGSAP(
    () => {
      var heading = document.getElementById("heading-page1");
      var headingText = heading.textContent;
      var spllitedText = headingText.split("");
      var clutter = "";
      spllitedText.forEach(function (elem) {
        if (elem === " ") {
          clutter += `<span>&nbsp;</span>`;
        } else {
          clutter += `<span>${elem}</span>`;
        }
      });
      heading.innerHTML = clutter;

      const tl = gsap.timeline();

      tl.from(p1LeftDecorRef.current, {
        opacity: 0,
        y: -100,
        x: -100,
        stagger: true,
        duration: 0.7,
        delay: 0.2,
      });
      gsap.from(p1RightDecorRef.current, {
        opacity: 0,
        y: -100,
        x: 100,
        stagger: true,
        duration: 0.7,
        delay: 0.2,
      });
      gsap.from(".p1-left-bottom-decor", {
        opacity: 0,
        y: 200,
        x: -100,
        duration: 0.7,
        delay: 0.5,
      });
      gsap.from(".p1-right-bottom-decor", {
        opacity: 0,
        y: 200,
        x: 100,
        duration: 0.7,
        delay: 0.5,
      });
      tl.from(".p1-mid-decor", {
        opacity: 0,
        duration: 0.7,
        delay: 0.5,
      });
      gsap.from(".p1-mid-coin", {
        opacity: 0,
        scale: 0,
        duration: 0.7,
        delay: 0.5,
      });
      gsap.from("#heading-page1 span", {
        duration: 0.7,
        opacity: 0,
        y: 50,
        stagger: {
          each: 0.1,
          from: "start",
        },
        delay: 0.3,
        // ease: 'elastic.out(1.75,0.4)',
      });
      gsap.from("#subHeading-page1", {
        duration: 1.5,
        opacity: 0,
      });
    },
    { scope: page1Ref }
  );

  // Animation Logic for Page 2
  useGSAP(
    () => {
      gsap.from(".page2-container", {
        scale: 0,
        borderRadius: 50,
        
        scrollTrigger: {
          trigger: ".page2-container",
          markers: false,
          scrub: 1,
          start: "top 90%",
          end: "top 70%",
        },
      });
    },
    { scope: page2Ref }
  );

  // Animation Logic for Page 3

  useGSAP(()=>{
    const tl = gsap.timeline();
    tl.from(".page3-heading",{
      x:-800,
      opacity: 0,
      duration:1,
      ease:"elastic.out(1.75,0.4)",
      scrollTrigger:{
        trigger:".page3-heading",
        markers:false,
        start: "top 80%",
        end: "top 60%",
      },
    })
    
  },{scope: page3Ref})

  return (
    // Wrapper
    <div className="w-100 overflow-hidden">
      {/* Page 1 */}
      <div
        ref={page1Ref}
        className="page1 relative gap-10 flex flex-col justify-center items-center w-100 h-[91vh]"
      >
        {/* Left Decor */}
        <div ref={p1LeftDecorRef} className="w-52 h-[91vh] absolute left-0">
          <div className="left-decor absolute bg-grey-gradient w-12 h-96 left-5 top-[-5%] rotate-[21.85deg]"></div>
          <div className="left-decor absolute bg-grey-gradient w-14 h-52 left-[-15%] top-[-5%] rotate-[21.85deg]"></div>
        </div>

        {/* Right Decor */}
        <div ref={p1RightDecorRef} className="w-52 h-[91vh] right-0 absolute">
          <div className="absolute bg-grey-gradient w-12 h-96 right-5 top-[-5%] rotate-[-21.85deg]"></div>
          <div className="absolute bg-grey-gradient w-14 h-52 right-[-15%] top-[-5%] rotate-[-21.85deg]"></div>
        </div>

        {/* Mid Decor */}
        <img
          src={fullDottedImg}
          alt=""
          className="p1-mid-decor w-24 absolute top-0  right-[59.25%] rotate-[-7deg] "
        />
        <img
          src={coin}
          alt=""
          className="p1-mid-coin w-80 z-0 absolute top-[25%] left-[35%] right-[25%] bottom-[25%]"
        />

        {/* Bottom Decor */}
        <img
          src={dottedImg}
          alt=""
          className="p1-left-bottom-decor w-14 absolute bottom-[-1.5%] left-0"
        />
        <img
          src={dottedImg}
          alt=""
          className="p1-right-bottom-decor w-14 absolute bottom-[-1.5%] right-0 transform -scale-x-100"
        />

        {/* Content */}
        <h1
          id="heading-page1"
          style={{ textShadow: "9px 6px 15px #0000004D" }}
          className="flex mt-[12%] z-10 font-bold text-[3.5rem] text-grey-app"
        >
          Flip the Coin, Win Big!
        </h1>
        <h6 id="subHeading-page1" className="text-center text-xl w-[45%] z-10">
          Test your luck in the ultimate coin flip challenge.Place your bets,
          flip the coin, and walk away with massive rewards!
        </h6>
        <div className="mt-[5%] cursor-pointer button-grey-gradient z-10 p-3 flex gap-2 items-center">
          <p className="text-white font-bold text-xl z-10">Play Now</p>
          <img className="w-5" src={arrowRight} alt="" />
        </div>
      </div>
      {/* Page 2 */}
      <div
        ref={page2Ref}
        className="relative w-100 h-[100vh] flex justify-center items-center"
      >
        <div className="flex flex-col justify-center gap-16  items-center page2-container scale-1 h-100 w-100">
          <h2 className="flex gap-2 font-bold items-center text-3xl text-white">
            Explore Games <img src={rocket} alt="" />
          </h2>
          <div className="w-96 rounded-md bg-grey-gradient flex flex-col items-center overflow-hidden">
            <img className="w-80" src={page2coins} alt="" />
            <div className="justify-between p-3 items-center w-100 bg-white flex">
              <p className="font-semibold">Coin Flip</p>
              <div className="cursor-pointer button-grey-gradient p-2 flex gap-2 items-center">
                <p className="text-white font-semibold text-xl z-10">
                  Play Now
                </p>
                <img className="w-5" src={arrowRight} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Page 3 */}
      <div ref={page3Ref} className="page3 relative w-100 h-[100vh] flex flex-col items-center gap-4 pt-4">
        <h2 className="page3-heading flex gap-2 font-bold  items-center text-3xl text-black-app">
          <img src={page3air} alt="" /> How the Odds Stack Up!{" "}
          <FontAwesomeIcon icon={faArrowTrendUp} />
        </h2>
        <div className=" relative w-100 h-[85%] flex items-center justify-center">
          <img src={page3dotted} alt="" className="z-0 absolute left-0" />
          <div className="w-[87%] rounded-md z-10 h-[90%] bg-white box-shadow-app flex">
            <div className="flex gap-3 w-[60%] h-[100%] items-center pt-4 pl-6 pr-6 flex-col ">
              <h3 className="font-bold text-xl mb-4">
                Trust the Flip? Verify the Win!
              </h3>
              <p className="text-sm text-center">
                We use <span className="font-medium">**Random.org**</span>, a
                trusted third-party service, to ensure fairness and transparency
                in determining the outcome of our games. This independent source
                allows everyone to verify the randomness of the generated seeds
                used in each game.
              </p>
              <h3 className="font-bold text-xl">Here’s how it works:</h3>
              <p className="text-sm text-center">
                When a game round starts, we generate a unique server seed (a
                random string), which is hashed using **SHA256** and publicly
                displayed. This ensures that anyone can verify it after the
                round is over. Once the round is ready to be concluded, we
                request a second seed from **Random.org** (another random
                string). Both seeds are then combined with a dash to create
                what's known as a "mod." This ensures the result is entirely
                random and verifiable.
              </p>
              <p className="text-sm mt-4 text-center font-medium">
                This "mod" is then used to generate the round ticket as shown in
                the image.
              </p>
            </div>

            <div className="w-[40%] h-[100%] flex justify-center items-center ">
              <img src={page3coding} alt="" className="w-[85%] h-[90%]"/>
            </div>
          </div>
          <img
            src={page3dotted}
            alt=""
            className="z-0 absolute right-0 transform -scale-x-100"
          />
        </div>
      </div>
      {/* Page 4 */}
      <div className="relative w-100 h-[100vh] bg-blue-500"></div>
    </div>
  );
};

export default LandingPage;

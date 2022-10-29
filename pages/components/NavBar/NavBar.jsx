import React, { useState } from "react";
import Styles from "../NavBar/NavBar.module.css";
import Link from "next/link";
import { BsList,BsX } from "react-icons/bs";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  function displayResult() {
    if (toggle === true) {
      return Styles.nav_responsive_ham_open;
    } else {
      return Styles.nav_responsive;
    }
  }
  function showResult() {
    if (toggle === true) {
      return Styles.open_ham;
    } else {
      return Styles.open_ham_none;
    }
  }
  return (
    <div className={Styles.main}>
      <div className={displayResult()}>
        <div className={Styles.hamburger}>
         {
          toggle ?   <BsX
            className={Styles.hamburger_icon_x}
            onClick={() => {
              setToggle(!toggle);
            }}/> : <BsList
            className={Styles.hamburger_icon}
            onClick={() => {
              setToggle(!toggle); 
            }}/> 
         }


        </div>
        <div className={Styles.responsive_logo}>
          <img
            src="/image/navLogo.png"
            alt="Navbar Logo"
            className={Styles.responsive_logo_img}
          />
        </div>
        <div className={showResult()}>
          <ul className={Styles.open_ham_ul}>
            <Link href="/" className={Styles.open_ham_link}>
              <li className={Styles.open_ham_li}>Skill Section </li>
            </Link>

            <Link href="/">
              <li className={Styles.open_ham_li}>About</li>
            </Link>

            <Link href="/">
              <li className={Styles.open_ham_li}>Contact Us </li>
            </Link>
            <div className={Styles.open_ham_buttons}>
              <Link href="/">
                <li className={Styles.open_ham_btn}>login </li>
              </Link>

              <Link href="/">
                <li
                  className={Styles.open_ham_btn}
                  style={{ color: "#ffff", background: "#EC8C25" }}
                >
                  Signup
                </li>
              </Link>
            </div>
          </ul>
        </div>
      </div>
      <nav className={Styles.nav}>
        <div className="left">
          <img
            src="/image/navLogo.png"
            alt="Navbar Logo"
            className={Styles.nav_logo}
          />
        </div>
        <ul className={Styles.right}>
          <Link href="/" className={Styles.link}>
            <li className={Styles.li}>Skill Section </li>
          </Link>

          <Link href="/">
            <li className={Styles.li}>About</li>
          </Link>

          <Link href="/">
            <li className={Styles.li}>Contact Us </li>
          </Link>

          <Link href="/">
            <li className={Styles.nav_btn}>login </li>
          </Link>

          <Link href="/">
            <li
              className={Styles.nav_btn}
              style={{ color: "#ffff", background: "#EC8C25" }}
            >
              Signup
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}
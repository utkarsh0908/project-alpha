import { useState } from "react";
import { BsList } from "react-icons/bs";
import Styles from "../TopContainer/TopContainer.module.css";
const TopContainer = (props) => {


  return (
    <>
      <div className={Styles.top_box}>
        <div className={Styles.responsive_mobile}>
          <span className={Styles.hamburger} onClick={()=>props.setToggle(!props.toggle)} >
            <BsList className={Styles.hamburger} />
          </span>
          <div className={Styles.responsive_heading_center}>
            <div>
              <h1 className={Styles.responsive_mobile_heading}>
                {props.responsiveTitle}
              </h1>
              <p className={Styles.responsive_mobile_title}>
                How’s your day today?{" "}
              </p>
            </div>
            <span className={Styles.Image}>
              <img
                src={props.source}
                alt="Image"
                className={Styles.top_img_tag}
              />
            </span>
          </div>
        </div>
        <div className={Styles.top_container}>
          <div className={Styles.logo}>
            <img src={`/image/logo.png`} className={Styles.main_logo}></img>
          </div>
          <div>
            <h1 className={Styles.top_heading}>{props.heading}</h1>
            <p className={Styles.top_title}> How’s your day today? </p>
          </div>
          {/* <div className={Styles.search_bar}>
                <MdSearch className={Styles.search_icon} />
                <input
                  type="text"
                  placeholder="Search"
                  className={Styles.search_input}
                />
              </div> */}
        </div>
      </div>
    </>
  );
};

export default TopContainer;

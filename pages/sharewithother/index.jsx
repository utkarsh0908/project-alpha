import Styles from "../sharewithother/share.module.css";
import Sidebar from "../components/Sidebar/Sidebar";
import TopContainer from "../components/TopContainer/index";
import { BsArrowLeftShort, BsWhatsapp, BsDiscord } from "react-icons/bs";
import Link from "next/link";
const profile = () => {
  return (
    <>
      <main className="main">
        <Sidebar />
        <div className="main_container">
          <TopContainer
            responsiveTitle="Share"
            source="/image/sharewithotherimage.png"
            heading="Share with Friends "
          />
          <div className="bottom_box">
            <div className="bottom_container">
              <h1 className={Styles.main_heading}>Share with friends</h1>
              <div className={Styles.share_image}>
                <img
                  src="/image/shareboximage.png"
                  alt="Shearing"
                  className={Styles.share_img}
                />
              </div>
              <div className={Styles.share}>
                <a href="#" className={Styles.sharing_option}>
                  <div className={Styles.sharing_option_name}>WhatApp</div>
                  <div className={Styles.sharing_option_icon}>
                    <BsWhatsapp />
                  </div>
                </a>
                <a href="#" className={Styles.sharing_option}>
                  <div className={Styles.sharing_option_name}>Discord</div>
                  <div className={Styles.sharing_option_icon}>
                    <BsDiscord />
                  </div>
                </a>
              </div>

              <div className="buttons">
                <Link href="/profile">

                  <button className="buttons_btn"> Back</button>
                </Link>
              </div>
            </div>
            <span className="main_image">
              <img
                src="/image/sharewithotherimage.png"
                alt="Project Image"
                className="main_img_tag"
              />
            </span>
            <div className="responsive_mobile">
              <div className="responsive_mobile_buttons">
                <Link href="/profile">
                  <button className="responsive_mobile_buttons_btn">
                    <span className="responsive_mobile_buttons_icon">
                      <BsArrowLeftShort />
                    </span>
                    Back
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default profile;

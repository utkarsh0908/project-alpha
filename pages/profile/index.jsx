import Styles from "../profile/profile.module.css";
import Sidebar from "../components/Sidebar/Sidebar";
import Image from "next/image";
import TopContainer from "../components/TopContainer";
import { AiOutlineRight } from "react-icons/ai";
import { BsArrowLeftShort } from "react-icons/bs";
import Link from "next/link";
const profile = () => {
  return (
    <>
      <main className="main">
        <Sidebar />
        <div className="main_container">
          <div className={Styles.responsive_mobile_image}>
            <div className={Styles.responsive_mobile_image_div}>
              <Image
                src=""
                height="95"
                width="95"
                className={Styles.responsive_mobile_image}
              ></Image>
              <span className={Styles.responsive_mobile_image_alt}>
                Profile Photo
              </span>
            </div>
          </div>
          <TopContainer
            responsiveTitle="Profile"
            source="/image/ProfileImg.png"
            heading="My Profile"
          />

          <div className="bottom_box">
            <div className="bottom_container">
              <div>
                <h1 className="main_heading main_heading_hide">Profile</h1>
                <div className={Styles.image_section}>
                  <div className={Styles.image_div}>
                    <Image
                      src=""
                      height="125"
                      width="125"
                      className={Styles.image}
                    ></Image>
                    <span className={Styles.image_alt}>Profile Photo</span>
                  </div>
                  <div>
                    <div className={Styles.profile_name}>Name</div>
                    <div className={Styles.profile_email}>Email</div>
                  </div>
                </div>
                <div className={Styles.profile_section}>
                  <Link href="/myproject">
                    <div className={Styles.profile_info}>
                      <h2 className={Styles.profile_info_title}>My project</h2>
                      <AiOutlineRight className={Styles.profile_info_btn} />
                    </div>
                  </Link>
                  <Link href="/sharewithother">
                  <div className={Styles.profile_info}>
                    <h2 className={Styles.profile_info_title}>
                      Share with friends
                    </h2>
                    <AiOutlineRight className={Styles.profile_info_btn} />
                  </div>
                  </Link>
                  <Link href="/feedback">
                  <div className={Styles.profile_info}>
                    <h2 className={Styles.profile_info_title}> Review </h2>
                    <AiOutlineRight className={Styles.profile_info_btn} />
                  </div>
                  </Link>
                </div>
              </div>
              <div className="buttons">
                <button className="buttons_btn"> Back</button>
                <button className="buttons_btn"> Save</button>
              </div>
            </div>
            <span className="main_image">
              <img
                src="/image/ProfileImg.png"
                alt="Profile Image"
                className="main_img_tag"
              />
            </span>
            <div className="responsive_mobile">
              <div className="responsive_mobile_buttons">
                <button className="responsive_mobile_buttons_btn">
                  <span className="responsive_mobile_buttons_icon">          
                    <BsArrowLeftShort />
                  </span>
                  Back
                </button>
                <button className="responsive_mobile_buttons_btn">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default profile;

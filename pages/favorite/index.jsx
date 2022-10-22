import Styles from "../favorite/favorite.module.css";
import Sidebar from "../components/Sidebar/Sidebar";
import TopContainer from "../components/TopContainer";
import { BsArrowLeftShort, BsThreeDotsVertical } from "react-icons/bs";
const favorite = () => {
  return (
    <>
      <main className="main">
        <Sidebar />
        <div className="main_container">
          <TopContainer
            responsiveTitle="Favorite"
            source="/image/favoriteImg.png"
            heading="My Favorite"
          />
          <div className="bottom_box">
            <div className="bottom_container">
              <div>
                <h1 className="main_heading main_heading_hide">Videos</h1>
                <h2 className={Styles.sub_heading}>Videos You liked</h2>

                <div className={Styles.video_like}>
                  <div className={Styles.video_like_box}>
                    <div className={Styles.bar_icon}>
                      <BsThreeDotsVertical />
                    </div>
                    <div className={Styles.video_box}>Video</div>
                    <div className={Styles.video_info}>1.1 Intro to python</div>
                  </div>
                  <div className={Styles.video_like_box}>
                    <div className={Styles.bar_icon}>
                      <BsThreeDotsVertical />
                    </div>
                    <div className={Styles.video_box}>Video</div>
                    <div className={Styles.video_info}>1.2 Video name</div>
                  </div>
                </div>
              </div>
              <div className="buttons">
                <button className="buttons_btn">Back</button>
              </div>
            </div>
            <span className="main_image">
              <img
                src="/image/favoriteImg.png"
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
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default favorite;

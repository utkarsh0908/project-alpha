import Styles from "../feedback/feedback.module.css";
import Sidebar from "../components/Sidebar/Sidebar";
import TopContainer from "../components/TopContainer/index";
import { BsArrowLeftShort ,BsList} from "react-icons/bs";
import Link from "next/link";
import { useState } from "react";
const profile = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <main className="main">
      {toggle ? <Sidebar  /> : " "}
        <div className={toggle ? "main_container main_container_toggle": "main_container"  }>
          <TopContainer
            responsiveTitle="Feedback"
            source="/image/feedbackimage.png"
            heading="Review & Feedback"
            setToggle={setToggle}
            toggle={toggle}
          />
          <div className="bottom_box">
            <div className="bottom_container">
              <h1 className="main_heading">Feedback</h1>

              <form className={Styles.form}>
                <input
                  type="text"
                  placeholder="Name"
                  className={Styles.input}
                />
                <input
                  type="text"
                  placeholder="Feedback Regrading?"
                  className={Styles.input}
                />
                <textarea
                  id=""
                  cols="30"
                  rows="5"
                  placeholder="Detailed feedback"
                  className={Styles.textarea}
                ></textarea>
                <button className={Styles.btn}>Send</button>
              </form>

              <div className="buttons">
                <Link href="/profile">  
                  <button className="buttons_btn">Back</button>
                </Link>
              </div>
            </div>
            <span className="main_image">
              <img
                src="/image/feedbackimage.png"
                alt="Project Image"
                className="main_img_tag"
              />
            </span>
            <div
              className="hamburger"
              onClick={() => {
                setToggle(!toggle);
              }}
            >
              <BsList />
            </div>
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

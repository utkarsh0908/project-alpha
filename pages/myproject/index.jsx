import Styles from "../myproject/myproject.module.css";
import Sidebar from "../components/Sidebar/Sidebar";
import { AiOutlineFileAdd } from "react-icons/ai";
import TopContainer from "../components/TopContainer/index";
import { BsArrowLeftShort } from "react-icons/bs";
import { useRef, useState } from "react";
import Link from "next/link";
const profile = () => {
  const inputRef = useRef(null);
  const [file, setFile] = useState(null);

  return (
    <>
      <main className="main">
        <Sidebar />
        <div className="main_container">
          <TopContainer
            responsiveTitle="My Project"
            source="/image/projectimage.png"
            heading="My Progress"
          />
          <div className="bottom_box">
            <div className="bottom_container">
              <h1 className="main_heading">My Project</h1>
              <div className={Styles.projects}>
                <div className={Styles.card}>
                  <div className={Styles.title}>1.1 Coding</div>
                  <div className={Styles.sub_title}>
                    Write a code in python to print your name
                  </div>
                  <div className={Styles.input}>
                    <label htmlFor="input_file" className={Styles.label}>
                      Upload assignment
                      <AiOutlineFileAdd className={Styles.input_icon} />
                    </label>
                    <input
                      type="file"
                      name="file"
                      id="input_file"
                      hidden={true}
                      className={Styles.input_file}
                      ref={inputRef}
                      onChange={(e) => setFile(e.target.files[0])}
                    />
                  </div>
                </div>
                <div className={Styles.card}>
                  <div className={Styles.title}>1.2 Coding</div>
                  <div className={Styles.sub_title}>
                  Write a code to print sum of two number
                  </div>
                  <div className={Styles.input}>
                    <label htmlFor="input_file" className={Styles.label}>
                      Upload assignment
                      <AiOutlineFileAdd className={Styles.input_icon} />
                    </label>
                    <input
                      type="file"
                      name="file"
                      id="input_file"
                      hidden={true}
                      className={Styles.input_file}
                      ref={inputRef}
                      onChange={(e) => setFile(e.target.files[0])}
                    />
                  </div>
                </div>
              </div>

              <div className="buttons">
               <Link href="/profile"><button className="buttons_btn"> Back</button></Link> 
              </div>
            </div>
            <span className="main_image">
              <img
                src="/image/projectimage.png"
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

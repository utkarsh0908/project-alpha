import Styles from "../favorite/favorite.module.css";
import Nav from "../components/Sidebar/Sidebar";
import Image from "next/image";
import { MdSearch } from "react-icons/md";
const favorite = () => {
  return (
    <>
      <main className={Styles.main}>
        <Nav />

        <div className={Styles.profile}>
          <div className={Styles.top}>
          <div className={Styles.container}>
          <div className={Styles.logo}>
              <Image src={`/image/logo.png`} width="264" height="54"></Image>
            </div>
            <div >
              <h1 className={Styles.heading}>My Progress</h1>
              <p className={Styles.title}> How’s your day today? </p>
            </div>
            <div className={Styles.search}>
              <MdSearch className={Styles.icon}/>
              <input type="text" placeholder="Search" className={Styles.input}/>
            </div>
          </div>
          </div>
          <div className={Styles.bottom}></div>
        </div>
      </main>
    </>
  );
};

export default favorite;

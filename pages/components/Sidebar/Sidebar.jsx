
import Link from "next/link";
import Style from "../Sidebar/Sidebar.module.css";
import { FaRegHeart } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { GoThreeBars } from "react-icons/go";
import { MdDashboard } from "react-icons/md";
import { useRouter } from "next/router";
const Nav = () => {
  const router = useRouter();
  const name = router.pathname;

  return (
    <>
      <nav className={Style.nav}>
        <div>
          <ul className={Style.ul}>
            <li className={Style.li}>
              <Link href="/">
                {name === "/" ? (
                  <MdDashboard className={Style.icon_active} title="Home" />
                ) : (
                  <MdDashboard className={Style.icon} title="Home" />
                )}
              </Link>
            </li>
            <li className={Style.li}>
              <Link href="/profile">
                {name === "/profile" ? (
                  <FaRegUser className={Style.icon_active} title="Profile" />
                ) : (
                  <FaRegUser className={Style.icon} title="Profile"/>
                )}
              </Link>
            </li>
            <li className={Style.li}>
              <Link href="/favorite">
                {name === "/favorite" ? (
                  <FaRegHeart className={Style.icon_active} title="Favorites"/>
                ) : (
                  <FaRegHeart className={Style.icon} title="Favorites"/>
                )}
              </Link>
            </li>
          </ul>
        </div>
        <div className={Style.hamburger}>
          <GoThreeBars className={Style.hamIcon} />
        </div>
      </nav>
    </>
  );
};

export default Nav;

// import React from "react";
// import Image from 'next/image'
// import logo from "../images/logo.png";
// import styles from "../NavBar/NavBar.module.css";
// import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";


// export default function Navbar() {
//   return (
//     <div>
//       <nav className={styles.nav}>
//         {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span class="navbar-toggler-icon"></span>
//     </button> */}
    
//         <AiOutlineClose className={styles.cross} onClick={(e)=>{
//           e.right = "-200px";
//         }}/>
//         <AiOutlineMenu className={styles.menu} onClick={(ev)=>{
//           ev.style.right = "0";
//         }}/>
//         {/* <i class="fa-solid fa-bars" onclick="openmenu()"></i> */}
//         {/* <i class="fa-solid fa-xmark" onclick="closemenu()"></i> */}
//         <Image src={logo} className={styles.logo} alt="loading..." />
//         <ul className={styles.sidemenu}>
//           <li>
//             <a href="#">Skill Section</a>
//           </li>
//           <li>
//             <a href="#">About</a>
//           </li>
//           <li>
//             <a href="#">Contact Us</a>
//           </li>
//           <li>
//             <a
//               href="#"
//               className="btn btn-outline py-1 px-4"
//               style={{ color: "orange", borderColor: "#fd7e14" }}
//             >
//               login
//             </a>
//           </li>
//           <li>
//             <a href="#" className="btn py-1 px-4" style={{ backgroundColor: "#fd7e14", color: "black"}}>
//               Signup
//             </a>
//           </li>
//         </ul>
//       </nav>
//     </div>
//   );
// }

import Styles from "../contactus/contactus.module.css";
import Link from 'next/link'

const contact = () => {
  return (
    <div className={Styles.main_container}>
        <div className={Styles.navbar}>
            {/* Navbar */}
        </div>
        <div className={Styles.center_container}>
            <div className={Styles.left_container}>
                <div className={Styles.firstDiv}>
                    <h1>Contact Us</h1>
                    <h2>Need help??</h2>
                    <p>We are available 24x7 and you will get assistance in no time.</p>
                </div>
                <div className={Styles.secondDiv}>
                    <button className={Styles.socialButton}><img src="/image/insta.png" alt="insta_image"/></button>
                    <button className={Styles.socialButton}><img src="/image/linkedin.png" alt="linked_image"/></button>
                    <button className={Styles.socialButton}><img src="/image/twitter.png" alt="twitter_image"/></button>
                    <button className={Styles.socialButton}><img src="/image/facebook.png" alt="facebook_image"/></button>
                </div>
                <div className={Styles.thirdDiv}>
                    <h2>E-mail</h2>
                    <h3>support@neatskills.tech</h3>
                    <div className={Styles.main_button}>
                        <Link href="/writetoceo"><a>Reach to CEO</a></Link>
                    </div>
                </div>
            </div>
            <div className={Styles.mid_container}>
                <div className={Styles.img}>
                    <img src="/image/contactImg.png" alt="contact_image" className={Styles.image}/>
                </div>
            </div>
            <div className={Styles.right_container}>
            <div className={Styles.firstDiv}>
                    <h1>Contact Us</h1>
                    <h2>Need help??</h2>
                    <p>We are available 24x7 and you will get assistance in no time.</p>
                </div>
                <div className={Styles.secondDiv}>
                    <button className={Styles.socialButton}><img src="/image/insta.png" alt="insta_image"/></button>
                    <button className={Styles.socialButton}><img src="/image/linkedin.png" alt="linked_image"/></button>
                    <button className={Styles.socialButton}><img src="/image/twitter.png" alt="twitter_image"/></button>
                    <button className={Styles.socialButton}><img src="/image/facebook.png" alt="facebook_image"/></button>
                </div>
                <div className={Styles.thirdDiv}>
                    <h2>E-mail</h2>
                    <h3>support@neatskills.tech</h3>
                    <button href="/writetoceo" className={Styles.main_button}>Reach to CEO</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default contact
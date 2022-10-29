import Styles from "../writetoceo/writetoceo.module.css";

const contact = () => {
  return (
    <div className={Styles.main_container}>
        <div className={Styles.navbar}>
            {/* Navbar */}
        </div>
        <div className={Styles.center_container}>
            <div className={Styles.left_container}>
                <div className={Styles.firstDiv}>
                    <h1>Write to</h1>
                    <h2>CEO and founder</h2>
                    <p>Have a special message for me. Thanks for consideration. Please drop that using any below channel. Thank you!</p>
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
                </div>
            </div>
            <div className={Styles.mid_container}>
                <div className={Styles.img}>
                    <img src="/image/storyboard.png" alt="contact_image" className={Styles.image}/>
                </div>
            </div>
            <div className={Styles.right_container}>
            <div className={Styles.firstDiv}>
            <div className={Styles.firstDiv}>
                    <h1>Write to</h1>
                    <h2>CEO and founder</h2>
                    <p>Have a special message for me. Thanks for consideration. Please drop that using any below channel. Thank you!</p>
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
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default contact
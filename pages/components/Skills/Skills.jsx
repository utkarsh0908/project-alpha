import React from 'react';
import Head from 'next/head';
import style from "../Skills/Skills.module.css";

const Skills = () => {
  return (
  <>
    {/* use head and add meta tag in head component  */}
    <Head>
        <title>Skills Page</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@100;200;300;400;500&display=swap"
          rel="stylesheet"
        />
      </Head>
    <div>
        <div>
            <p className={style.head}>Skills section</p>
            <p className={style.para}>Buy the access of any field at Rs. X and get access to all courses under that field for free. We promise all courses under every field will live as soon you request.</p>
            <p className={style.access}>Get access to every cousre at just a single monthly charge</p>
            <button className={style.btn}>Pay now</button>
            <button className={style.but}>per month</button>
            <div className={style.ser}>
            <input className={style.input} type="text" placeholder='Search'/>
            </div>
            <button className={style.beg}>Beginner</button>
            <button className={style.int}>Intermediate</button>
            <button className={style.high}>High</button>
            
                <p className={style.field}>Field</p>
            <div className={style.tech}>
                <p className={style.ten}>Technical</p>
            </div>
            <div className={style.art}>
                <p className={style.arts}>Art</p>
            </div>
            <div className={style.ui}>
                <p className={style.ux}>UI/UX Designing</p>
            </div>
            <div className={style.card}>
              <div className={style.csrhed}>
                <div>
                <p className={style.pyton}>Python</p>
                </div>
                

              </div>
              <div className={style.content}>
                <p>Python is a high-level, interpreted, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation. Python is dynamically-typed and garbage-collected</p>
              </div>
              <div className={style.bar}>
                <button className={style.bt1}>JOIN</button>
                <button className={style.bt2}>DEMO CLASS</button>
              </div>

              </div>
            <div className={style.card2}>
            <div className={style.csrhed}>
                <div>
                <p className={style.pyton}>Flutter</p>
                </div>
                

              </div>
              <div className={style.content}>
                <p>Flutter is an open-source UI software development kit created by Google. It is used to develop cross platform applications for Android, iOS, Linux, macOS, Windows, Google Fuchsia, and the web from a single codebase.</p>
              </div>
              <div className={style.bar}>
                <button className={style.bt1}>JOIN</button>
                <button className={style.bt2}>DEMO CLASS</button>
              </div>
            </div>



            
            

            


        </div>
    </div>
    </>
  )
}

export default Skills
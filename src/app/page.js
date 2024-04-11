'use client'
// import Image from 'next/image';
// import Navigation from './../components/Navigation.js';
import About from './../components/About.js';
import Skills from './../components/Skills.js';
import Links from './../components/Links.js';
import styles from './page.module.css';
import ReactPlayer from 'react-player';
import {useRef, useEffect} from 'react';

/*
<Main>
  <Navigation/>  <- 5 links
  <About me/>
  <Skills/>
  <Projects/>
  <Experience/>
  <Links/>
</Main>
*/

// Import my own styles instead of ones above?

export default function Home() {
  const home = useRef(null);
  const skills = useRef(null);
  const links = useRef(null);
  const exp = useRef(null);

  var btnCount = 1;

  function NavButton(props) {
    
    function handleClick(btn) {
        switch(btn) {
          case 1:
            // move focus to top
            home.current.scrollIntoView({
              block: "start",
              behavior: "smooth"});
            break;
          case 2:
            // move focus to skills
            skills.current.scrollIntoView({
              block: "center",
              behavior: "smooth"});
            break;
          case 3:
            // move focus to projects
            // projects.current.scrollIntoView({
            //   block: "center",
            //   behavior: "smooth"});
            break;
            break;
          case 4:
            // move focus to experience
            // exp.current.scrollIntoView({
            //   block: "center",
            //   behavior: "smooth"});
            break;
            break;
          case 5:
            // move focus to documents/links
            links.current.scrollIntoView({
              block: "start",
              behavior: "smooth"});
            break;
            break;
          default:
        }
    }

    return (
    <>
      <div className={styles.nav_button} onClick={() => handleClick(props.val)}>
        <p className={styles.nav_text}>{props.txt}</p>
      </div>
    </>
    )
  }
  
  return (
    <main className={styles.main}>
      <div className={styles.nav_container}>
        <div className={styles.nav_name}>
          <span className={styles.nav_me}>&#123;calvin.lee&#125;</span>
        </div>

        <div className={styles.nav_buttons}>
          <NavButton txt={"About Me"} val={btnCount++} />
          <NavButton txt={"Skills"} val={btnCount++}/>
          <NavButton txt={"Projects"} val={btnCount++}/>
          <NavButton txt={"Experiences"} val={btnCount++}/>
          <NavButton txt={"Links"} val={btnCount++}/>
        </div>
      </div>

      <div className={styles.content}>

        <div className={styles.video_container} ref={home}>
          {/* <video src="dance1.mp4" /> */}
          <ReactPlayer  muted={true}
                        loop={true}
                        width="640px"
                        height="640px"
                        playing={true}
                        controls={false}
                        url="video/dance2.mp4" />
        </div>

        <div>
          <About id="about" />
        </div>
        <div ref={skills}>
          <Skills id="skills" />
        </div>
        
        {/* <Projects/>
        <Experience/> */}
        <div ref={links}>
          <Links id="links" />
        </div>
        

        <br /><br /><br /><br />
        <h1 className={styles.h1}>Website is still a work in progress!<br />Mobile version coming later!</h1>
        <br />
      </div>


      
    </main>
  )
}

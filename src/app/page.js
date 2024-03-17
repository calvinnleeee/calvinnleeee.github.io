'use client'
// import Image from 'next/image';
// import Navigation from './../components/Navigation.js';
import About from './../components/About.js';
import Skills from './../components/Skills.js';
import Links from './../components/Links.js';
import styles from './page.module.css';
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

  function NavButton(props) {
    
    function handleClick(btn) {
        switch(btn) {
          case 1:
            // move focus to top
            window.scrollTo({top: 0, behavior: "smooth"});
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
            //   block: "start",
            //   behavior: "smooth"});
            break;
            break;
          case 4:
            // move focus to experience
            // experience.current.scrollIntoView({
            //   block: "start",
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
        <NavButton txt={"About Me"} val={1} />
        <NavButton txt={"Skills"} val={2}/>
        <NavButton txt={"Projects"} val={3}/>
        <NavButton txt={"Experiences"} val={4}/>
        <NavButton txt={"Links"} val={5}/>
      </div>

      <div className={styles.content} ref={home}>
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

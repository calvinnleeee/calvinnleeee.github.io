'use client'
import styles from './Navigation.module.css';
import page from './../app/page.js';
import {useRef} from 'react';

function NavButton(props) {

  function handleClick(btn) {
    switch(btn) {
      case 1:
        // move focus to top
        // {window.scrollTo({
        //   top: 0, behavior: "smooth"
        // })};
        scrollToRef.current.scrollIntoView();
        break;
      case 2:
        // move focus to skills
        // document.getElementById("skills").scrollIntoView();
        break;
      case 3:
        // move focus to projects
        break;
      case 4:
        // move focus to experience
        break;
      case 5:
        // move focus to documents/links
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

export default function Navigation() {
  const scrollToRef = useRef(null);

  return (
  <>
    <div className={styles.nav_container} ref={scrollToRef}>
      <NavButton txt={"About Me"} val={1} />
      <NavButton txt={"Skills"} val={2}/>
      <NavButton txt={"Projects"} val={3}/>
      <NavButton txt={"Experiences"} val={4}/>
      <NavButton txt={"Documents"} val={5}/>
    </div>
  </>
  )
}
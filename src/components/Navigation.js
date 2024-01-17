import styles from './Navigation.module.css'

function NavButton({txt}) {
  return (
  <>
    <div className={styles.nav_button}>
      <p className={styles.nav_text}>{txt}</p>
    </div>
  </>
  )
}

export default function Navigation() {

  function handleClick(whichButton) {
    // check which button was clicked, move the window to that section
    // use Window.scrollTo() or Window.scroll()?
    switch(whichButton) {
      case 1:
        // move focus to about me
        break;
      case 2:
        // move focus to skills
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
    <div className={styles.nav_container}>
      <NavButton txt={"About Me"} onClick={handleClick(1)}/>
      <NavButton txt={"Skills"} onClick={handleClick(2)}/>
      <NavButton txt={"Projects"} onClick={handleClick(3)}/>
      <NavButton txt={"Experience"} onClick={handleClick(4)}/>
      <NavButton txt={"Documents"} onClick={handleClick(5)}/>
    </div>
  </>
  )
}
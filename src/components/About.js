'use client'
// import ReactPlayer from 'react-player';
import styles from './About.module.css';
import data from './../data/about.json';
import React from 'react';
import parse from 'html-react-parser';

export default function About() {

  // Take data from about.json and parse into renderable stuff
  function parseData() {
    let s = [];

    // for each data member in json array
    data.forEach((e) => {
      let tmp = [];
      let t = e.title;
      let d = e.desc;
      let c = styles.text_bold;
      
      tmp.push(React.createElement('span', {className: c}, t));

      d.forEach((desc) => {
        tmp.push(React.createElement('p', null, desc));
      });
      tmp.push(React.createElement('br', {}));

      s.push(React.createElement('p', null, tmp));
      console.log(tmp);

    });

    return s;
  }

  return (
    <>
      <div className={styles.about_container}>
        
        {/* This is me, also me section. */}
        <div className={styles.me_container}>
          <div className={styles.me_text}>
            {/* point up : &#128070;
                pointing right : &#128073;
                point left : &#128072;
                point down : &#128071; */}
            <p >
              &#128070; This is me!<br />
              <br />
            </p>
          </div>
          <div className={styles.me_also_text}>
            <p>
              This is also me &#128071;<br />
              <br />
            </p>
          </div>

          {/* Generate qualities about me here */}
          <div className={styles.about_text}>
            {parseData()}
          </div>

        </div>
        
      </div>
    </>
  )
}
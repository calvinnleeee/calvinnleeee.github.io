'use client'
import styles from './Skills.module.css';
import {useRef} from 'react';

export default function Skills() {
  var skills = useRef(null);
  return (
    <>
      <div className={styles.skills_container} ref={skills}>
        <div className={styles.hard_container}>

          <p className={styles.skills_header}>Hard skills</p>
          <br />
          <ul className={styles.skills_hard}>
            <li><ul><span className={styles.ul}>Programming related:</span>
              <li>C, C++, Python, Java</li>
              <li>HTML, CSS, Javascript</li>
              <li>Object-oriented theory</li>
              <li>Testing, debugging, troubleshooting skills</li>
            </ul></li>
            <br /><br /><br />
            <li><ul><span className={styles.ul}>Project / application related:</span>
              <li>Knowledge of software development lifecycles</li>
              <li>Development methodologies (Agile, Iterative, Waterfall)</li>
              <li>Organizational tools (Slack, MS Teams, Trello)</li>
              <li>Formal and informal reports, documentation</li>
            </ul></li>
            <br /><br /><br />
            <li><ul><span className={styles.ul}>Engineering / electronics related:</span>
              <li>Single Board Computers (Arduino, Pi)</li>
              <li>Digital / logic circuits</li>
              <li>Microcontrollers and FPGAs</li>
              <li>Lab tools: oscilloscopes, DAQs</li>
            </ul></li>
          </ul>

        </div>

        <div className={styles.soft_container}>

          <p className={styles.skills_header}>Soft skills</p>
          <br />
          <ul className={styles.skills_soft}>
            <li><ul><span className={styles.ul}>General:</span>
              <li>Analytical and logical thinking</li>
              <li>Planning and organizational skills</li>
              <li>Drive for continuous learning</li>
              <li>Passion to create value for others</li>
            </ul></li>
            <br /><br /><br />
            <li><ul><span className={styles.ul}>Management related:</span>
              <li>Project, team management experience</li>
              <li>Business and technical communications, written and verbal</li>
              <li>Relationship management (within teams, with customers)</li>
              <li>Data- and information-driven decision making</li>
              <li>Task organization, prioritization</li>
            </ul></li>
            <br />
            
            
          </ul>

        </div>
        
      </div>
    </>
  )
}
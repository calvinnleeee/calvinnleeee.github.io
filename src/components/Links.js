import styles from './Links.module.css';

export default function Links() {
  return (
    <>
      <div className={styles.links_container}>
        <p className={styles.link_title}>Links</p>
        <div className={styles.links_table_div}>

          <table className={styles.table}>
            <tr>
              <th className={styles.tableHead}>Profile</th>
              <th className={styles.tableHead}>Documents</th>
            </tr>
            <tr>
              <td><a href="https://www.linkedin.com/in/calvin-lee-677440151/" target="_blank">LinkedIn </a></td>
              <td>Resume</td>
            </tr>
            <tr>
              <td><a href="https://github.com/calvinnleeee" target="_blank">Github</a></td>
              <td>Cover Letter</td>
            </tr>
          </table>

        </div>

      </div>
    </>
  )
}
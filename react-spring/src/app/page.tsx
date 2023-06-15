import styles from "./page.module.scss";

const Page = () => {
  return (
    <main className={styles["page-body"]}>
      <div className={styles["title"]}>
        <p>Case 3</p>
        <h1>react-spring</h1>
      </div>
      <div className={styles["contents"]}>
        <div className={styles["component"]}></div>
        <div className={styles["score"]}>
          <table>
            <thead>
              <tr>
                <th>Category</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Build size</td>
                <td className={styles["td-score"]}>
                  100
                  <span className={styles["unit"]}>KB</span>
                </td>
              </tr>
              <tr>
                <td>Amount implemented</td>
                <td className={styles["td-score"]}>
                  100
                  <span className={styles["unit"]}>line</span>
                  <br />
                  100
                  <span className={styles["unit"]}>code</span>
                </td>
              </tr>
              <tr>
                <td>Display FPS </td>
                <td className={styles["td-score"]}>
                  100
                  <span className={styles["unit"]}>FPS</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};

export default Page;

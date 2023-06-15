import styles from "./page.module.scss";

const Page = () => {
  return (
    <main className={styles["page-body"]}>
      <div className={styles["title"]}>
        <p>Case 1.</p>
        <h1>Cannot use animation library ( JS+CSS only )</h1>
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
                <td>Accessibility</td>
                <td>100</td>
              </tr>
              <tr>
                <td>Best Practices</td>
                <td>100</td>
              </tr>
              <tr>
                <td>Performance</td>
                <td>100</td>
              </tr>
              <tr>
                <td>SEO</td>
                <td>100</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};

export default Page;

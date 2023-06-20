import { Accordion } from "./_components/Accordion";
import styles from "./page.module.scss";

const Page = () => {
  return (
    <main className={styles["page-body"]}>
      <div className={styles["title"]}>
        <p>Case 1</p>
        <h1>Cannot use library [ JS+CSS only ]</h1>
      </div>
      <div className={styles["contents"]}>
        <div className={styles["component"]}>
          <Accordion />
        </div>
      </div>
    </main>
  );
};

export default Page;

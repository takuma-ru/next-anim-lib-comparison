import styles from "./Accordion.module.scss";

export const Accordion: React.FC = () => {
  return (
    <>
      <details className={styles["accordion-component"]}>
        <summary className={styles["summary-main"]}>
          The Constitution of the United States of America
        </summary>
        <div className={styles["details-main"]}>
          <h3>The Constitution of the United States of America (1787)</h3>
          <span>
            <p>
              We the People of the United States, in Order to form a more
              perfect Union, establish Justice, insure domestic Tranquility,
              provide for the common defence, promote the general Welfare, and
              secure the Blessings of Liberty to ourselves and our Posterity, do
              ordain and establish this Constitution for the United States of
              America.
            </p>
            <strong>Section 1.</strong>
            <br />
            <p>
              All legislative Powers herein granted shall be vested in a
              Congress of the United States, which shall consist of a Senate and
              House of Representatives.
            </p>
          </span>
        </div>
      </details>
    </>
  );
};

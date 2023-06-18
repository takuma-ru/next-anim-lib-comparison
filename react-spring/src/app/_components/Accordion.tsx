"use client";

import { useCallback, useMemo, useRef, useState } from "react";
import { animated, useSpring } from "@react-spring/web";

import styles from "./Accordion.module.scss";

export const Accordion: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleClickDetails = useCallback(
    (e: React.MouseEvent<HTMLDetailsElement>) => {
      e.preventDefault();

      setIsOpen((prev) => !prev);
    },
    [setIsOpen]
  );

  const contentRefHeight = useMemo(() => {
    return contentRef.current?.offsetHeight;
  }, [contentRef]);

  const { ...props } = useSpring({
    height: isOpen ? contentRefHeight : "0px",
    config: { duration: 300 },
  });

  return (
    <>
      {contentRefHeight}
      <details className={styles["accordion-component"]} open={isOpen}>
        <summary
          className={styles["summary-main"]}
          onClick={handleClickDetails}
        >
          The Constitution of the United States of America
        </summary>
        <animated.div className={styles["details-main"]} style={{ ...props }}>
          <div ref={contentRef} className={styles["content"]}>
            <h3>The Constitution of the United States of America (1787)</h3>
            <span>
              <p>
                We the People of the United States, in Order to form a more
                perfect Union, establish Justice, insure domestic Tranquility,
                provide for the common defence, promote the general Welfare, and
                secure the Blessings of Liberty to ourselves and our Posterity,
                do ordain and establish this Constitution for the United States
                of America.
              </p>
              <strong>Section 1.</strong>
              <br />
              <p>
                All legislative Powers herein granted shall be vested in a
                Congress of the United States, which shall consist of a Senate
                and House of Representatives.
              </p>
            </span>
          </div>
        </animated.div>
      </details>
    </>
  );
};

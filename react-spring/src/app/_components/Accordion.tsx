"use client";

import { useCallback, useRef, useState } from "react";
import { animated, useSpring } from "@react-spring/web";
import BezierEasing from "bezier-easing";

import styles from "./Accordion.module.scss";

export const Accordion: React.FC = () => {
  const [isAnimated, setIsAnimated] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const [springs, api] = useSpring(() => ({
    from: { height: 0 },
    config: {
      easing: BezierEasing(0.4, 0, 0.2, 1),
      duration: 400,
    },
    onRest(result) {
      if (result.value.height === 0) setIsOpen(false);
    },
  }));

  const openDetails = useCallback(() => {
    setIsOpen(true);

    api.start({
      height: contentRef.current?.offsetHeight,
    });
  }, [api, contentRef]);

  const closeDetails = useCallback(() => {
    api.start({
      height: 0,
    });
  }, [api]);

  const handleClickDetails = useCallback(
    (e: React.MouseEvent<HTMLDetailsElement>) => {
      e.preventDefault();

      if (isOpen) return closeDetails();
      openDetails();
    },
    [closeDetails, openDetails, isOpen]
  );

  return (
    <>
      <details className={styles["accordion-component"]} open={isOpen}>
        <summary
          className={styles["summary-main"]}
          onClick={handleClickDetails}
        >
          The Constitution of the United States of America
        </summary>
        <animated.div className={styles["details-main"]} style={{ ...springs }}>
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

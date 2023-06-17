"use client";

import { useCallback, useRef, useState } from "react";
import styles from "./Accordion.module.scss";

const animTiming = {
  duration: 400,
  easing: "cubic-bezier(0.4, 0.0, 0.2, 1)",
};

export const Accordion: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const detailsRef = useRef<HTMLDetailsElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const openDetails = useCallback(() => {
    if (!contentRef.current) return;
    console.log(contentRef.current.offsetHeight);

    setIsOpen(true);
    detailsRef.current?.setAttribute("open", "");
    /*
      アコーディオンの要素は高さ指定がない。= height: auto
      その状態では開閉アニメーションを行うことができない。
      アニメーションさせるためには、高さを取得して指定しなければいけない。
      アニメーションさせる際は useRef を使用しエレメントを取得してから高さを取得し、
      animate関数を使用してアニメーションを行う。
    */
    contentRef.current.animate(
      [
        {
          height: 0,
        },
        {
          height: contentRef.current.offsetHeight + "px",
        },
      ],
      animTiming
    );
  }, [contentRef]);

  const closeDetails = useCallback(() => {
    if (!contentRef.current) return;

    const closingAnim = contentRef.current.animate(
      [
        {
          height: contentRef.current.offsetHeight + "px",
        },
        {
          height: 0,
        },
      ],
      animTiming
    );
    closingAnim.onfinish = () => {
      detailsRef.current?.removeAttribute("open");
      setIsOpen(false);
    };
  }, [contentRef]);

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
      <details ref={detailsRef} className={styles["accordion-component"]}>
        <summary
          className={styles["summary-main"]}
          onClick={handleClickDetails}
        >
          The Constitution of the United States of America
        </summary>
        <div ref={contentRef} className={styles["details-main"]}>
          {/* アニメーションさせたい要素にpaddingをつけるとガクつきが発生するため、要素を一つ増やさないといけない */}
          <div className={styles["content"]}>
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
        </div>
      </details>
    </>
  );
};

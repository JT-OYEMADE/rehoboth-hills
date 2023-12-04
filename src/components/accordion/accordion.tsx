import React, { useState } from "react";
import styles from "./accordion.module.scss";
import { classNames } from "./classNames";
import { AccordionProps } from "./accordion.types";
import {PlusSvg} from "@/assets/svg/SvgIcons";

export interface Accordion {
  question: string;
  answer: React.ReactNode;

  index?: number;
}

const Accordion = ({ children, title }: AccordionProps) => {
  const [show, setShow] = useState(false);

  return (
    <div className={styles.accordion}>
      <PlusSvg
        onClick={() => setShow(!show)}
        className={classNames(styles.icon, !show ? styles.hidden : "")}
      />
      <div className={styles.content}>
        <p
          onClick={() => setShow(!show)}
          className={classNames(styles.title, show ? styles.active : "")}
        >
          {title}
        </p>
        {show ? <div className={styles.children}>{children}</div> : null}
      </div>
    </div>
  );
};

export default Accordion;

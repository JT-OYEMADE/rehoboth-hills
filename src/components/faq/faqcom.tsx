import React, { useState } from "react";
import styles from "./faq.module.scss";
import {MinSvg} from "@/assets/svg/SvgIcons";
import {PlusSvg} from "@/assets/svg/SvgIcons";

export interface FAQCOM {
  question: string;
  answer: React.ReactNode;

  index?: number;
}

export default function FAQCOM(props: FAQCOM) {
  const [show, setShow] = useState(false);

  return (
    <div className={styles.faq}>
      <div
        onClick={() => setShow(!show)}
        className={show ? styles.faqQuestionA : styles.faqQuestion}
        data-animate-y='+100'
        data-delay={(props.index || 0) * 0.084 + 0.333}
        data-easing='FAQ'
      >
        <h4>{props.question}</h4>
        {show ? <MinSvg className={styles.faqSvg} /> : <PlusSvg className={styles.faqSvg} />}
      </div>
      {show ? (
        <div className={styles.faqAnswer}>
          <p>{props.answer}</p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

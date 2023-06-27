import React, { useState } from 'react';
import arrowDown from '../../images/arrow.svg';
import arrowUp from '../../images/rotatedArrow.svg';
import styles from './customDetails.module.css';
import Image from 'next/image';

export default function CustomDetails({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.container}>
      <div
        className={styles.quest_container}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span className={styles.question}>{question}</span>
        <Image
          src={isOpen ? arrowUp : arrowDown}
          alt="arrow icon"
          width={32}
          height={32}
        />
      </div>
      {isOpen && <div className={styles.answer}>{answer}</div>}
    </div>
  );
}

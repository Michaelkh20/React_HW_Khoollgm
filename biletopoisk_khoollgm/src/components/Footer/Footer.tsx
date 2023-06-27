import React from 'react';
import Link from 'next/link';
import styles from './footer.module.css';

const Footer = () => (
  <footer className={styles.footer}>
    <Link href="/faq">Вопросы-ответы</Link>
    <Link href="/about">О нас</Link>
  </footer>
);

export default Footer;

'use client';

import React from 'react';
import Link from 'next/link';
import styles from './header.module.css';
import Image from 'next/image';
import basketPic from '../../images/basket.svg';
import { useDispatch, useSelector } from 'react-redux';
import { selectTotalAmount } from '@/redux/features/cart/selector';
import { cartActions } from '@/redux/features/cart';
import { AppState } from '@/redux/store';

export default function Header() {
  const ticketsAmount = useSelector((state: AppState) =>
    selectTotalAmount(state)
  );
  return (
    <header className={styles.header}>
      <Link href="/">Билетопоиск</Link>
      <div>
        <Link href="/cart">
          <div className={styles.cartContainer}>
            {!!ticketsAmount && (
              <span className={styles.badge}>{ticketsAmount}</span>
            )}
            <Image src={basketPic} alt="basket"></Image>
          </div>
        </Link>
      </div>
    </header>
  );
}

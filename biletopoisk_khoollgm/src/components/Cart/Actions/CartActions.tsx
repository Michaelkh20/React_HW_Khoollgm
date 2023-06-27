import { cartActions } from '@/redux/features/cart';
import React from 'react';
import styles from './cartActions.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '@/redux/store';
import { selectTicketAmountByFilmId } from '@/redux/features/cart/selector';
import plusPic from '../../../images/plus.svg';
import minusPic from '../../../images/minus.svg';
import Image from 'next/image';

export default function CartActions({
  movieId,
  onDelete,
}: {
  movieId: string;
  onDelete?: () => void;
}) {
  const ticketAmount = useSelector((state: AppState) =>
    selectTicketAmountByFilmId(state, movieId)
  );
  const dispatch = useDispatch();

  function handleMinusClick() {
    if (ticketAmount === 1 && onDelete) {
      onDelete();
    } else {
      dispatch(cartActions.decrement(movieId));
    }
  }

  return (
    <div className={styles.actions}>
      <button
        onClick={handleMinusClick}
        disabled={ticketAmount <= 0}
        className={styles.button}
      >
        <Image src={minusPic} alt="minus" width={12} height={12} />
      </button>
      <div className={styles.ticketAmount}>{ticketAmount}</div>
      <button
        onClick={() => dispatch(cartActions.increment(movieId))}
        disabled={ticketAmount >= 30}
        className={styles.button}
      >
        <Image src={plusPic} alt="plus" width={12} height={12} />
      </button>
    </div>
  );
}

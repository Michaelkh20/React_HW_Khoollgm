import React from 'react';
import { MovieData } from '../../../types/api/Movie';
import Image from 'next/image';
import styles from './MovieSmallCard.module.css';
import Link from 'next/link';
import { translateGenre } from '@/utils/utils';
import CartActions from '@/components/Cart/Actions/CartActions';
import RatingBadge from '@/components/Rating/RatingBadge';
import closePic from '@/images/close.svg';

export default function MovieSmallCard({
  movie,
  handleDelete,
}: {
  movie: MovieData;
  handleDelete?: () => void;
}) {
  return (
    <div className={styles.card}>
      <Image
        src={movie.posterUrl}
        alt={movie.title}
        width={100}
        height={120}
        className={styles.poster}
        style={{ objectFit: 'cover' }}
      />
      <div className={styles.details}>
        <div className={styles.title}>
          <Link href={`/film/${movie.id}`}>{movie.title}</Link>{' '}
          <RatingBadge rating={movie.rating} />
        </div>
        <div className={styles.genre}>{translateGenre(movie.genre)}</div>
      </div>
      <CartActions movieId={movie.id} onDelete={handleDelete} />
      {handleDelete && (
        <button onClick={handleDelete} className={styles.btnClose}>
          <Image src={closePic} alt="close" width={20} height={20} />
        </button>
      )}
    </div>
  );
}

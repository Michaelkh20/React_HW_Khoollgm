import React from 'react';
import { MovieData } from '../../../types/api/Movie';
import Image from 'next/image';
import styles from './MovieLargeCard.module.css';
import classnames from 'classnames';
import { translateGenre } from '@/utils/utils';
import CartActions from '@/components/Cart/Actions/CartActions';
import RatingBadge from '@/components/Rating/RatingBadge';

export default function MovieLargeCard({ movie }: { movie: MovieData }) {
  return (
    <div className={styles.card}>
      <Image
        src={movie.posterUrl}
        alt={movie.title}
        width={400}
        height={500}
        className={styles.poster}
        style={{ objectFit: 'cover' }}
      />
      <div className={styles.content}>
        <div className={styles.details_actions}>
          <div className={styles.details}>
            <div className={styles.title}>{movie.title} </div>
            <div className={styles.properties}>
              <div>
                <strong>Жанр: </strong>
                {translateGenre(movie.genre)}
              </div>
              <div>
                <strong>Год выпуска: </strong>
                {movie.releaseYear}
              </div>
              <div>
                <strong>Рейтинг: </strong>
                <RatingBadge rating={movie.rating} />
              </div>
              <div>
                <strong>Режиссёр: </strong>
                {movie.director}
              </div>
            </div>
          </div>
          <CartActions movieId={movie.id} />
        </div>
        <div className={styles.description}>
          <div className={styles.description_title}>Описание</div>
          <div className={styles.description_text}>{movie.description}</div>
        </div>
      </div>
    </div>
  );
}

import classnames from 'classnames';
import React from 'react';
import styles from './ratingBadge.module.css';

export default function RatingBadge({ rating }: { rating: number }) {
  return (
    <span
      className={classnames(
        styles.badge,
        rating >= 7
          ? styles.high_rating
          : rating >= 4
          ? styles.medium_rating
          : styles.low_rating
      )}
    >
      {rating}
    </span>
  );
}

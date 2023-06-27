import React from 'react';
import Image from 'next/image';
import styles from './review.module.css';
import stdProfilePic from '../../images/stdProfilePic.svg';
import { ReviewData } from '@/types/api/Review';

export default function Review({ review }: { review: ReviewData }) {
  return (
    <div className={styles.card}>
      {Boolean(review.userPicUrl) ? (
        <Image
          src={review.userPicUrl || ''}
          alt="Profile picture"
          width={100}
          height={100}
          className={styles.profile_pic}
          style={{ objectFit: 'cover' }}
        />
      ) : (
        <div className={styles.std_profile_pic}>
          <Image
            src={stdProfilePic}
            alt="Profile picture"
            width={32}
            height={32}
          />
        </div>
      )}
      <div className={styles.details}>
        <div className={styles.name_score}>
          <div>
            <strong>{review.name}</strong>
          </div>
          <div>
            Оценка: <strong>{review.rating}</strong>
          </div>
        </div>
        <div className={styles.comment}>{review.text}</div>
      </div>
    </div>
  );
}

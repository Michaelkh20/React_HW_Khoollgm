'use client';
import MovieLargeCard from '@/components/Movie/MovieLargeCard/MovieLargeCard';
import Review from '@/components/Review/Review';
import { MovieData } from '@/types/api/Movie';
import { ReviewData } from '@/types/api/Review';
import React, { useEffect } from 'react';
import styles from './filmPage.module.css';

export default function FilmPage({ params }: { params: { id: number } }) {
  const [movie, setMovie] = React.useState<MovieData>();
  const [reviews, setReviews] = React.useState<ReviewData[]>([]);

  useEffect(() => {
    const fetchMovie = async () => {
      const response = await fetch(
        `http://localhost:3001/api/movie?movieId=${params.id}`
      );
      const movie: MovieData = await response.json();
      setMovie(movie);
    };
    const fetchReviews = async () => {
      const response = await fetch(
        `http://localhost:3001/api/reviews?movieId=${params.id}`
      );
      const reviews: ReviewData[] = await response.json();
      setReviews(reviews);
    };
    Promise.all([fetchMovie(), fetchReviews()]);
  }, [params.id]);

  return (
    <div className={styles.content}>
      {!!movie && <MovieLargeCard movie={movie} />}
      {reviews.map((review) => (
        <Review key={review.id} review={review} />
      ))}
    </div>
  );
}

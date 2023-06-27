'use client';
import MovieSmallCard from '@/components/Movie/MovieSmallCard/MovieSmallCard';
import {
  selectAllMovies,
  selectTotalAmount,
} from '@/redux/features/cart/selector';
import { AppState } from '@/redux/store';
import { MovieData } from '@/types/api/Movie';
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './cartPage.module.css';
import { Modal } from '@/components/Cart/Modal/Modal';
import { cartActions } from '@/redux/features/cart';

export default function CartPage() {
  const moviesIds = useSelector((state: AppState) => selectAllMovies(state));
  const totalAmount = useSelector((state: AppState) =>
    selectTotalAmount(state)
  );
  const [movies, setMovies] = useState<MovieData[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMovies = async () => {
      const fetchMovie = async (movieId: string) => {
        const response = await fetch(
          `http://localhost:3001/api/movie?movieId=${movieId}`
        );
        const movie: MovieData = await response.json();
        return movie;
      };
      const movies = await Promise.all(moviesIds.map(fetchMovie));
      setMovies(movies);
    };
    fetchMovies();
  }, []);

  const handleConfirm = useCallback(
    (movieId: string) => {
      dispatch(cartActions.decrement(movieId));
      setIsModalOpen(false);
      setMovies((movies) => movies.filter((movie) => movie.id !== movieId));
    },
    [dispatch]
  );

  return (
    <div className={styles.container}>
      <div className={styles.moviesList}>
        {movies.map((movie) => (
          <>
            <MovieSmallCard
              key={movie.id}
              movie={movie}
              handleDelete={() => setIsModalOpen(true)}
            />
            <Modal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              onConfirm={() => handleConfirm(movie.id)}
            />
          </>
        ))}
      </div>
      <div className={styles.total}>
        <div>Итого билетов:</div>
        <div>{totalAmount}</div>
      </div>
    </div>
  );
}

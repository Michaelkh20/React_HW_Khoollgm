'use client';
import Filters from '@/components/Filters/Filters';
import Image from 'next/image';
import styles from './home.module.css';
import { useEffect, useState } from 'react';
import { MovieData } from '@/types/api/Movie';
import MovieSmallCard from '@/components/Movie/MovieSmallCard/MovieSmallCard';

export default function Home() {
  const [movies, setMovies] = useState<MovieData[]>([]);
  const [visibleMovies, setVisibleMovies] = useState<MovieData[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch('http://localhost:3001/api/movies');
      const data: MovieData[] = await response.json();
      setMovies(data);
      setVisibleMovies([...data]);
    };

    fetchMovies();
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.Filters}>
        <Filters />
      </div>
      <div className={styles.MoviesList}>
        {visibleMovies.map((movie) => (
          <MovieSmallCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

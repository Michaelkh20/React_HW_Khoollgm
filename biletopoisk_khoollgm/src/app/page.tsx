'use client';
import Filters from '@/components/Filters/Filters';
import Image from 'next/image';
import styles from './home.module.css';
import { useEffect, useState } from 'react';
import { MovieData } from '@/types/api/Movie';
import MovieSmallCard from '@/components/Movie/MovieSmallCard/MovieSmallCard';
import { CinemaData } from '@/types/api/Cinema';

export default function Home() {
  const [movies, setMovies] = useState<MovieData[]>([]);
  const [visibleMovies, setVisibleMovies] = useState<MovieData[]>([]);
  const [cinemas, setCinemas] = useState<CinemaData[]>([]);

  const [filterName, setFilterName] = useState<string>('');
  const [filterGenre, setFilterGenre] = useState<string>('');
  const [filterCinema, setFilterCinema] = useState<string>('');

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch('http://localhost:3001/api/movies');
      const data: MovieData[] = await response.json();
      setMovies(data);
      setVisibleMovies([...data]);
    };

    const fetchCinemas = async () => {
      const response = await fetch('http://localhost:3001/api/cinemas');
      const data: CinemaData[] = await response.json();
      setCinemas(data);
    };

    fetchMovies();
    fetchCinemas();
  }, []);

  useEffect(() => {
    async function filterMovies() {
      let filteredMovies = [...movies];

      if (filterCinema !== '') {
        const response = await fetch(
          `http://localhost:3001/api/movies?cinemaId=${filterCinema}`
        );
        filteredMovies = await response.json();
      }

      if (filterName !== '') {
        filteredMovies = filteredMovies.filter((movie) =>
          movie.title.toLowerCase().includes(filterName)
        );
      }
      if (filterGenre !== '') {
        filteredMovies = filteredMovies.filter(
          (movie) => movie.genre.toLowerCase() === filterGenre.toLowerCase()
        );
      }

      setVisibleMovies(filteredMovies);
    }

    filterMovies();
  }, [filterName, filterGenre, filterCinema, movies]);

  function nameHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setFilterName(e.target.value.trim().toLowerCase());
  }

  function genreHandler(e: React.ChangeEvent<HTMLSelectElement>) {
    const value = e.target.value;
    setFilterGenre(value);
  }

  function cinemaHandler(e: React.ChangeEvent<HTMLSelectElement>) {
    const value = e.target.value;
    setFilterCinema(value);
  }

  return (
    <div className={styles.container}>
      <div className={styles.Filters}>
        <Filters
          nameHandler={nameHandler}
          genreHandler={genreHandler}
          cinemaHandler={cinemaHandler}
          cinemas={cinemas}
        />
      </div>
      <div className={styles.MoviesList}>
        {visibleMovies.map((movie) => (
          <MovieSmallCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

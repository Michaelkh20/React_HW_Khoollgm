import React from 'react';
import styles from './Filters.module.css';
import { CinemaData } from '@/types/api/Cinema';

export default function Filters({
  nameHandler,
  genreHandler,
  cinemaHandler,
  cinemas,
}: {
  nameHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  genreHandler: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  cinemaHandler: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  cinemas: CinemaData[];
}) {
  return (
    <div className={styles.filter}>
      <h2 className={styles.title}>Фильтр поиска</h2>
      <div className={styles.inputContainer}>
        <label className={styles.label}>Название</label>
        <input
          type="text"
          placeholder="Введите название"
          className={styles.input}
          onInput={nameHandler}
        />
      </div>
      <div className={styles.inputContainer}>
        <label className={styles.label}>Жанр</label>
        <select
          className={styles.select}
          defaultValue=""
          onChange={genreHandler}
        >
          <option value="">Выберите жанр</option>
          <option value="horror">Ужасы</option>
          <option value="comedy">Комедия</option>
          <option value="fantasy">Фэнтези</option>
          <option value="action">Боевиĸ</option>
        </select>
      </div>
      <div className={styles.inputContainer}>
        <label className={styles.label}>Кинотеатр</label>
        <select
          className={styles.select}
          defaultValue=""
          onChange={cinemaHandler}
        >
          <option key="" value="">
            Выберите кинотетр
          </option>
          {cinemas.map((cinema) => (
            <option key={cinema.id} value={cinema.id}>
              {cinema.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

import React from 'react';
import styles from './Filters.module.css';

export default function Filters() {
  return (
    <div className={styles.filter}>
      <h2 className={styles.title}>Filters</h2>
      <div className={styles.inputContainer}>
        <label className={styles.label}>Movie Title</label>
        <input
          type="text"
          placeholder="Search movie title"
          className={styles.input}
        />
      </div>
      <div className={styles.inputContainer}>
        <label className={styles.label}>Genre</label>
        <select className={styles.select}>
          <option>Comedy</option>
          <option>Drama</option>
          <option>Action</option>
        </select>
      </div>
      <div className={styles.inputContainer}>
        <label className={styles.label}>Cinema</label>
        <select className={styles.select}>
          <option>Cinema 1</option>
          <option>Cinema 2</option>
          <option>Cinema 3</option>
        </select>
      </div>
    </div>
  );
}

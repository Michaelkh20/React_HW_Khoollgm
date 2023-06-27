'use client';
import React, { useMemo } from 'react';
import styles from './faq.module.css';
import CustomDetails from '@/components/CustomDetails/CustomDetails';

export default function FAQ() {
  const questsAnswers = useMemo(
    () => [
      {
        question: 'Что такое Билетопоиск?',
        answer:
          'Мы — крупнейший сервис о кино в рунете. На нем вы сможете посмотреть фильмы и сериалы, купить билеты в кино, узнать рейтинги популярных видео и интересные факты, поставить фильмам оценки, написать рецензии и дополнить описание фильмов.',
      },
      {
        question: 'Какой компании принадлежит Билетопоиск?',
        answer: 'Никакой.',
      },

      {
        question: 'Как купить билет на Билетопоиск?',
        answer:
          'Нужно просто нажать на кнопку с плюсом рядом с интересующим фильмом.',
      },
      {
        question: 'Как оставить отзыв на Билетопоиск?',
        answer: 'К сожалению, мы пока не реализовали такую возможность.',
      },
    ],
    []
  );
  return (
    <div className={styles.container}>
      <div className={styles.title}>Вопросы-ответы</div>
      <div className={styles.content}>
        {questsAnswers.map(({ question, answer }) => (
          <CustomDetails key={question} question={question} answer={answer} />
        ))}
      </div>
    </div>
  );
}

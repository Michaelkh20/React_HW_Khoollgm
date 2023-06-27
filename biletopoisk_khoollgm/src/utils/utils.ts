const translations: { [key: string]: string } = {
  horror: 'Ужасы',
  comedy: 'Комедия',
  drama: 'Драма',
  thriller: 'Триллер',
  action: 'Боевик',
  adventure: 'Приключения',
  fantasy: 'Фэнтези',
  'sci-fi': 'Фантастика',
};

export function translateGenre(genreEng: string) {
  return translations[genreEng];
}

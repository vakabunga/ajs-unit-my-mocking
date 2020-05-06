// TODO: write your code here
import fetchData from './http';

export function getLevel(userId) {
  const response = fetchData(`https://server/user/${userId}`);

  // TODO: логика обработки

  return JSON.parse(response);
}

export function showLevel(data) {
  if (data.status === 'ok') {
    return `Ваш текущий уровень: ${data.level}`;
  }
  return 'Информация об уровне временно недоступна';
}

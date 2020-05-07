// TODO: write your code here
import fetchData from './http';

export default function getLevel(userId) {
  const data = fetchData(`https://server/user/${userId}`);

  if (data.status === 'ok') {
    return `Ваш текущий уровень: ${data.level}`;
  }
  return 'Информация об уровне временно недоступна';
}

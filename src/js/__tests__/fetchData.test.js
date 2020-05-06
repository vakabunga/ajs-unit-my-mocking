import fetchData from '../http';
import { getLevel, showLevel } from '../app';

jest.mock('../http');
beforeEach(() => {
  jest.resetAllMocks();
});
test('getLevel: should call http with userid', () => {
  fetchData.mockReturnValue('{}');

  getLevel(1);
  expect(fetchData).toBeCalledWith('https://server/user/1');
});
// test('fetchData: should show Error', () => {
//   // fetchData.mockReturnValue('{}');
//   function showError() {
//     fetchData('https://server/user/1');
//   }
//   expect(showError).toThrowError(Error);
// });
test('should show user level', () => {
  const userLvl = showLevel({ level: 10, status: 'ok' });
  expect(userLvl).toBe('Ваш текущий уровень: 10');
});
test('should show error message', () => {
  const userLvl = showLevel({ level: '', status: 'error' });
  expect(userLvl).toBe('Информация об уровне временно недоступна');
});

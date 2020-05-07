import fetchData from '../http';
import getLevel from '../app';

jest.mock('../http');
beforeEach(() => {
  jest.resetAllMocks();
});
describe('getLevel', () => {
  test('getLevel: should call http with userid', () => {
    fetchData.mockReturnValue('{}');

    getLevel(1);
    expect(fetchData).toBeCalledWith('https://server/user/1');
  });
  test('should show user level', () => {
    fetchData.mockReturnValue({ level: 10, status: 'ok' });
    const response = getLevel(1);
    expect(response).toBe('Ваш текущий уровень: 10');
  });
  test('should show error message', () => {
    fetchData.mockReturnValue({ level: '', status: 'error' });
    const response = getLevel(2);
    expect(response).toBe('Информация об уровне временно недоступна');
  });
});

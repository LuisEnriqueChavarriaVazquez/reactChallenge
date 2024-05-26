import { fetchBanks } from '../src/services/bankService';  // Asegúrate de que la ruta al archivo es correcta
import fetchMock from 'jest-fetch-mock';

fetchMock.enableMocks();

describe('fetchBanks', () => {
  beforeEach(() => {
    fetchMock.resetMocks();

    // Mockear localStorage
    jest.spyOn(window.localStorage.__proto__, 'getItem');
    jest.spyOn(window.localStorage.__proto__, 'setItem');
    window.localStorage.__proto__.getItem = jest.fn();
    window.localStorage.__proto__.setItem = jest.fn();
  });

  afterEach(() => {
    jest.restoreAllMocks(); // Restaurar mocks después de cada prueba
  });

  it('uses cached data if not older than 24 hours', async () => {
    const fakeData = [{ id: 1, name: 'Bank One' }];
    const fakeDataStr = JSON.stringify(fakeData);
    localStorage.getItem.mockImplementation((key) => {
      if (key === 'banks') return fakeDataStr;
      if (key === 'lastFetch') return new Date().toISOString();  // fecha reciente para prueba
    });

    const data = await fetchBanks();
    expect(data).toEqual(fakeData);
    expect(localStorage.getItem).toHaveBeenCalledWith('banks');
    expect(localStorage.getItem).toHaveBeenCalledWith('lastFetch');
    expect(fetchMock).not.toHaveBeenCalled();  // No hace llamada a la API
  });

  it('fetches data from the API when no cached data', async () => {
    localStorage.getItem.mockImplementation(() => null);
    const apiData = [{ id: 2, name: 'Bank Two' }];
    fetchMock.mockResponseOnce(JSON.stringify(apiData));

    const data = await fetchBanks();
    expect(data).toEqual(apiData);
    expect(fetchMock).toHaveBeenCalledWith('https://dev.obtenmas.com/catom/api/challenge/banks');
    expect(localStorage.setItem).toHaveBeenCalledWith('banks', JSON.stringify(apiData));
    expect(localStorage.setItem).toHaveBeenCalledWith('lastFetch', expect.any(String));
  });

  it('throws an error when the API call fails', async () => {
    localStorage.getItem.mockImplementation(() => null);
    fetchMock.mockResponseOnce('', { status: 404 });

    await expect(fetchBanks()).rejects.toThrow('HTTP error! Status: 404');
  });
});

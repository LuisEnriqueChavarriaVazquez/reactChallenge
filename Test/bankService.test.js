import { fetchBanks } from '../src/services/bankService'; // Asegúrate de que la ruta al archivo es correcta
import fetchMock from 'jest-fetch-mock';

fetchMock.enableMocks();

describe('fetchBanks', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
    localStorage.clear(); // Limpia el almacenamiento local antes de cada prueba
  });

  afterEach(() => {
    jest.restoreAllMocks(); // Restaura los mocks después de cada prueba
  });

  it('uses cached data if not older than 24 hours', async () => {
    const fakeData = [{ id: 1, name: 'Bank One' }];
    const fakeDataStr = JSON.stringify(fakeData);
    localStorage.setItem('banks', fakeDataStr);
    localStorage.setItem('lastFetch', new Date().toISOString());

    const data = await fetchBanks();
    expect(data).toEqual(fakeData);
    expect(localStorage.getItem).toHaveBeenCalledWith('banks');
    expect(localStorage.getItem).toHaveBeenCalledWith('lastFetch');
    expect(fetchMock).not.toHaveBeenCalled(); // No hace llamada a la API
  });

  it('fetches data from the API when no cached data', async () => {
    localStorage.setItem('banks', null);
    localStorage.setItem('lastFetch', null);

    const apiData = [{ id: 2, name: 'Bank Two' }];
    fetchMock.mockResponseOnce(JSON.stringify(apiData));

    const data = await fetchBanks();
    expect(data).toEqual(apiData);
    expect(fetchMock).toHaveBeenCalledWith('https://dev.obtenmas.com/catom/api/challenge/banks');
    expect(localStorage.setItem).toHaveBeenCalledWith('banks', JSON.stringify(apiData));
    expect(localStorage.setItem).toHaveBeenCalledWith('lastFetch', expect.any(String));
  });

  it('throws an error when the API call fails', async () => {
    fetchMock.mockRejectOnce(new Error('API is down'));

    await expect(fetchBanks()).rejects.toThrow('API is down');
    expect(localStorage.getItem('banks')).toBeNull();
  });
});

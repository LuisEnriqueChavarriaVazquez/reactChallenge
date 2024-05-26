import { fetchBanks } from '../src/services/bankService'; // Asegúrate de que la ruta al archivo es correcta
import fetchMock from 'jest-fetch-mock';

// Habilita los mocks de fetch
fetchMock.enableMocks();

describe('fetchBanks', () => {
  // Configuración inicial para cada prueba
  beforeEach(() => {
    fetchMock.resetMocks(); // Reinicia los mocks de fetch antes de cada prueba
    localStorage.clear(); // Limpia el almacenamiento local antes de cada prueba
  });

  // Limpieza después de cada prueba
  afterEach(() => {
    jest.restoreAllMocks(); // Restaura todos los mocks después de cada prueba
  });

  // Prueba para verificar el uso de datos en caché si no son más antiguos que 24 horas
  it('uses cached data if not older than 24 hours', async () => {
    const fakeData = [{ id: 1, name: 'Bank One' }];
    const fakeDataStr = JSON.stringify(fakeData);
    // Guarda los datos simulados y la fecha de última obtención en el almacenamiento local
    localStorage.setItem('banks', fakeDataStr);
    localStorage.setItem('lastFetch', new Date().toISOString());

    const data = await fetchBanks(); // Llama a la función fetchBanks
    // Verifica que los datos obtenidos sean los mismos que los datos simulados
    expect(data).toEqual(fakeData);
    // Verifica que se haya accedido al almacenamiento local para obtener los datos y la fecha de última obtención
    expect(localStorage.getItem).toHaveBeenCalledWith('banks');
    expect(localStorage.getItem).toHaveBeenCalledWith('lastFetch');
    // Verifica que no se haya hecho una llamada a la API
    expect(fetchMock).not.toHaveBeenCalled();
  });

  // Prueba para verificar la obtención de datos desde la API cuando no hay datos en caché
  it('fetches data from the API when no cached data', async () => {
    // Asegúrate de que no haya datos en caché
    localStorage.setItem('banks', null);
    localStorage.setItem('lastFetch', null);

    const apiData = [{ id: 2, name: 'Bank Two' }];
    fetchMock.mockResponseOnce(JSON.stringify(apiData)); // Simula una respuesta de la API

    const data = await fetchBanks(); // Llama a la función fetchBanks
    // Verifica que los datos obtenidos sean los mismos que los datos de la API simulada
    expect(data).toEqual(apiData);
    // Verifica que se haya hecho una llamada a la API con la URL correcta
    expect(fetchMock).toHaveBeenCalledWith('https://dev.obtenmas.com/catom/api/challenge/banks');
    // Verifica que los datos obtenidos se hayan guardado en el almacenamiento local
    expect(localStorage.setItem).toHaveBeenCalledWith('banks', JSON.stringify(apiData));
    expect(localStorage.setItem).toHaveBeenCalledWith('lastFetch', expect.any(String));
  });

  // Prueba para verificar que se lanza un error cuando la llamada a la API falla
  it('throws an error when the API call fails', async () => {
    fetchMock.mockRejectOnce(new Error('API is down')); // Simula un fallo en la llamada a la API

    // Verifica que la función fetchBanks lance un error
    await expect(fetchBanks()).rejects.toThrow('API is down');
    // Verifica que no haya datos en el almacenamiento local
    expect(localStorage.getItem('banks')).toBeNull();
  });
});

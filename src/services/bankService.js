// URL del servidor desde donde se obtendrán los datos de los bancos.
const BANKS_URL = "https://react-challenge-server-theta.vercel.app/";
//const BANKS_URL = "https://dev.obtenmas.com/catom/api/challenge/banks";

/**
 * Función asincrónica para obtener los datos de los bancos.
 * Se intentará usar los datos almacenados localmente para evitar llamadas innecesarias a la API.
 * Si los datos no están disponibles o están desactualizados, se realizará una solicitud a la API.
 */
export const fetchBanks = async () => { 
    try {
      // Intenta recuperar los datos de los bancos desde el almacenamiento local.
      const storedBanks = localStorage.getItem('banks');
      const lastFetch = localStorage.getItem('lastFetch');
      const now = new Date();
  
      // Comprueba si hay datos almacenados y si la última obtención fue hace menos de 24 horas.
      if (storedBanks && lastFetch && (now - new Date(lastFetch)) < 86400000) {
        console.log("Using stored data:", storedBanks);
        // Devuelve los bancos almacenados después de parsearlos desde el formato JSON.
        return JSON.parse(storedBanks);
      }
  
      // Realiza una solicitud a la API si no hay datos almacenados o si están desactualizados.
      const response = await fetch(BANKS_URL);

      // Asegura que la respuesta sea válida.
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      // Convierte la respuesta de la API de formato JSON a un objeto JavaScript.
      const data = await response.json();
      console.log('Data from API:', data);

      // Almacena los datos obtenidos en localStorage para uso futuro.
      localStorage.setItem('banks', JSON.stringify(data));
      localStorage.setItem('lastFetch', new Date().toISOString());

      // Devuelve los datos de los bancos obtenidos.
      return data;
    } catch (error) {
      // Registra y lanza cualquier error que ocurra durante la ejecución.
      console.error("Failed to fetch banks:", error);
      throw error;  // Propaga el error para que pueda ser gestionado por la función que llama.
    }
};

  
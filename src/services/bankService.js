//const BANKS_URL = "https://react-challenge-server-theta.vercel.app/";
const BANKS_URL = "https://dev.obtenmas.com/catom/api/challenge/banks";

export const fetchBanks = async () => {
    try {
      const storedBanks = localStorage.getItem('banks');
      const lastFetch = localStorage.getItem('lastFetch');
      const now = new Date();
  
      // Verifica si los datos están en localStorage y no han pasado más de 24 horas
      if (storedBanks && lastFetch && (now - new Date(lastFetch)) < 86400000) {
        console.log("Using stored data:", storedBanks);
        return JSON.parse(storedBanks);
      }
  
      // Fetch new data if not found in localStorage or data is older than 24 hours
      const response = await fetch(BANKS_URL);
      const data = await response.json();
      console.log('Data from API:', data);
      localStorage.setItem('banks', JSON.stringify(data));
      localStorage.setItem('lastFetch', new Date().toISOString());
      return data;
    } catch (error) {
      console.error("Failed to fetch banks:", error);
      throw error;  // Re-throw the error if you want calling function to handle it
    }
  };
  
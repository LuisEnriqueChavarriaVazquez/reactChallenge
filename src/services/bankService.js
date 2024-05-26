const BANKS_URL = "https://cors-anywhere.herokuapp.com/https://dev.obtenmas.com/catom/api/challenge/banks";

export const fetchBanks = async () => {
  const storedBanks = localStorage.getItem('banks');
  if (storedBanks) return JSON.parse(storedBanks);

  const response = await fetch(BANKS_URL);
  const data = await response.json();
  console.log('data: ', data);
  localStorage.setItem('banks', JSON.stringify(data));
  return data; 
}

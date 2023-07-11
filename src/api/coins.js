const BASE_URL = "https://api.coingecko.com/api/v3";
const MARKETS =
  "coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en";
const COINS_ID = "coins";

export const getMarkets = async () => {
  const response = await fetch(`${BASE_URL}/${MARKETS}`);
  return await response.json();
};

export const getCoinDetail = async (id) => {
  const response = await fetch(`${BASE_URL}/${COINS_ID}/${id}`);
  return await response.json();
};

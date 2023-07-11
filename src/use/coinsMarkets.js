import { onMounted, ref } from "vue";
import { getMarkets } from "@/api/coins";

export default function useCoinsMarkets() {
  const coins = ref([]);

  async function getAPIData() {
    coins.value = await getMarkets();
  }

  function getNameFilters() {
    return coins.value.map((coin) => ({ text: coin.name, value: coin.name }));
  }

  onMounted(getAPIData);

  return { coins, getNameFilters };
}

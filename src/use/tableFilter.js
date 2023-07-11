import { ref } from "vue";
import { formatNumber } from "../utils";

export default function useTableFilter() {
  const search = ref("");

  function handleNameFilter(value, row) {
    return row.name === value;
  }

  return { search, formatNumber, handleNameFilter };
}

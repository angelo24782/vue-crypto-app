<template>
  <el-container v-if="coin" direction="vertical">
    <h1>{{ coin.name }} detail</h1>
    <el-descriptions :column="3" border>
      <el-descriptions-item label="Name">{{ coin.name }}</el-descriptions-item>
      <el-descriptions-item label="Symbol">{{
        coin.symbol
      }}</el-descriptions-item>
      <el-descriptions-item label="Country Origin">{{
        coin.country_origin || "Unknown"
      }}</el-descriptions-item>

      <el-descriptions-item label="Sentiment Votes Down Percentage">
        <el-tag size="medium" type="danger">{{
          coin.sentiment_votes_down_percentage
        }}</el-tag>
      </el-descriptions-item>
      <el-descriptions-item label="Sentiment Votes Up Percentage">
        <el-tag size="medium">{{ coin.sentiment_votes_up_percentage }}</el-tag>
      </el-descriptions-item>
      <el-descriptions-item label="Liquidity Score">{{
        coin.liquidity_score
      }}</el-descriptions-item>

      <el-descriptions-item label="Current Price">{{
        formatNumber(coin.market_data.current_price.eur)
      }}</el-descriptions-item>
      <el-descriptions-item label="High 24h">
        <el-tag size="medium"
          >{{ formatNumber(coin.market_data.high_24h.eur) }}
        </el-tag>
      </el-descriptions-item>
      <el-descriptions-item label="Low 24h">
        <el-tag size="medium" type="danger"
          >{{ formatNumber(coin.market_data.low_24h.eur) }}
        </el-tag>
      </el-descriptions-item>
      <el-descriptions-item label="Price Change 24h">{{
        formatNumber(coin.market_data.price_change_24h_in_currency.eur)
      }}</el-descriptions-item>
      <el-descriptions-item label="Total Volume">{{
        formatNumber(coin.market_data.total_volume.eur)
      }}</el-descriptions-item>
      <el-descriptions-item label="Market Cap">{{
        formatNumber(coin.market_data.market_cap.eur)
      }}</el-descriptions-item>
    </el-descriptions>
  </el-container>
</template>

<script>
import { onMounted, ref } from "vue";
import { getCoinDetail } from "@/api/coins";
import { useRoute } from "vue-router";
import { formatNumber } from "../utils";

export default {
  setup() {
    const coin = ref(null);
    const route = useRoute();

    async function getAPIData() {
      coin.value = await getCoinDetail(route.params.id);
    }

    onMounted(getAPIData);

    return { coin, formatNumber };
  },
};
</script>

<style lang="scss" scoped>
h1 {
  margin: 10px;
}
</style>

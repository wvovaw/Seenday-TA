<template>
  <div class="orders-list">
    <StatusCard v-for="order of orders" :key="order.id" :order="order" status="success" class="orders-list__item">
      №:{{ order.id }}
    </StatusCard>
  </div>
</template>

<script setup lang="ts">
import { StatusCard } from "~/shared/ui/status-card";

import type { Orders } from "../../types/order";

defineProps<{
  orders: Orders;
}>();
</script>

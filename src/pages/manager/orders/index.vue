<template>
  <FixedLeftColumn>
    <template #fixed>
      <Filters />
    </template>
    <Suspense>
      <template #fallback>
        <Empty>Заказов ещё нет</Empty>
      </template>
      <OrdersList :orders="data" />
    </Suspense>
  </FixedLeftColumn>
</template>

<script setup lang="ts">
import { FixedLeftColumn } from "~/shared/ui/templates";
import { Empty } from "~/shared/ui/empty";

import { Filters } from "./components/filters";
import { OrdersList } from "./components/orders-list";
import { useQueryOrders } from "./composables/useQueryOrders";

const { data, get } = useQueryOrders();

onMounted(() => {
  get();
})
</script>

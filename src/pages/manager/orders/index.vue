<template>
  <FixedLeftColumn>
    <template #fixed>
      <Filters />
    </template>
    right
  </FixedLeftColumn>
</template>

<script setup lang="ts">
import { FixedLeftColumn } from "~/shared/ui/templates";

import { Filters } from "./components/filters";
</script>

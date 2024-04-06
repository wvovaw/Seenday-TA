<template>
  <div class="year-filter">
    <Select v-model="sel" :items="items" placeholder="Выберите год" label="Год" />
    <div class="year-filter__buttons">
      <Button size="l" width="full" color="purple">Показать</Button>
      <Button size="l" width="full" color="light-purple-reverse">Сбросить</Button>
    </div>
    <Notice class="year-filter__notice" color="transparent" size="extra-small">{{ hint }}</Notice>
  </div>
</template>

<script setup lang="ts">
import { Select, type SelectItems } from '~/shared/ui/select';
import { Button } from '~/shared/ui/button';
import { Notice } from "~/shared/ui/notice";

const items: SelectItems = Array(24).fill(0).map((_, ix) => 
  ({
    value: String(2000 + ix),
    title: String(2000 + ix),
    withIndicator: true
  })
)

const sel = ref();
const hint = "Обычный вывод показывает 250 заказов, чтобы снять ограничение и показывать до 5000 заказов, нужно выбрать год."
</script>

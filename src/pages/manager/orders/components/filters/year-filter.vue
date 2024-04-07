<template>
  <div class="year-filter">
    <Select v-model="selectedYear" :items="YEARS" placeholder="Выберите год" label="Год" />
    <div class="year-filter__buttons">
      <Button
        size="l"
        width="full"
        color="purple"
        :disabled="!selectedYear"
        @click="emit('submit')"
      >Показать</Button>
      <Button
        size="l"
        width="full"
        color="light-purple-reverse"
        @click="selectedYear = undefined"
      >Сбросить</Button>
    </div>
    <Notice class="year-filter__notice" color="transparent" size="extra-small">
      Обычный вывод показывает 250 заказов, чтобы снять ограничение и показывать до 5000 заказов, нужно выбрать год.
    </Notice>
  </div>
</template>

<script setup lang="ts">
import { Select, type SelectItems } from "~/shared/ui/select";
import { Button } from "~/shared/ui/button";
import { Notice } from "~/shared/ui/notice";

const YEARS: SelectItems = [
  { value: "2023", title: "2023", withIndicator: true },
  { value: "2022", title: "2022", withIndicator: true },
  { value: "2021", title: "2021", withIndicator: true }
];

export type YearFilterModel = SelectItems[number]["value"] | null;

const yearModel = defineModel<YearFilterModel>({ required: true });
const emit = defineEmits<{
  submit: [void];
}>();

const selectedYear = ref<string | undefined>();
watch(selectedYear, (year) => {
  if (year)
    yearModel.value = year;
  else yearModel.value = null;
})
</script>

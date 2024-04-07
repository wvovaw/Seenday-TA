<template>
  <InputDate v-model="dates" :placeholder="$t('dates-filter.period')" range />
</template>

<script setup lang="ts">
import { InputDate } from "~/shared/ui/inputs/input-date";

export type DatesFilterModel = {
  date_start: Date | null;
  date_finish: Date | null;
};
const datesModel = defineModel<DatesFilterModel>({ required: true });

const dates = ref<Date[]>();
watch(dates, newDates => {
  if (newDates && newDates.length === 2) {
    datesModel.value.date_start = newDates[0];
    datesModel.value.date_finish = newDates[1];
  }
});
</script>

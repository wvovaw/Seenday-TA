<template>
  <div class="year-filter">
    <Select
      v-model="selectedYear"
      :items="YEARS"
      :placeholder="$t('year-filter.select-a-year')"
      :label="$t('year-filter.year')"
    />
    <div class="year-filter__buttons">
      <Button size="l" width="full" color="purple" @click="handleShow">{{ $t("year-filter.show") }}</Button>
      <Button size="l" width="full" color="light-purple-reverse" @click="handleReset">{{
        $t("year-filter.reset")
      }}</Button>
    </div>
    <Notice class="year-filter__notice" color="transparent" size="extra-small">
      {{ $t("year-filter.notice") }}
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

const selectedYear = ref<string | undefined>();

function handleShow() {
  if (selectedYear.value) yearModel.value = selectedYear.value;
  else yearModel.value = null;
}
function handleReset() {
  selectedYear.value = undefined;
  yearModel.value = null;
}
</script>

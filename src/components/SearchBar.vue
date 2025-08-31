<template>
  <div class="">
    <input type="text" placeholder="Search..." v-model.lazy="query" class=" w-64 lg:w-96 border-b-2 outline-0 border-amber-600 " />
  </div>
</template>

<script setup>
import { inject, watch } from "vue";
import axios from "axios";

const query = inject("query");
const meals = inject("meals");

watch(query, async () => {
  const response = await axios.get(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${query.value}`
  );
  meals.value = response.data.meals;
});

</script>

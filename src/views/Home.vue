<template>
  <div class="flex flex-col items-center justify-center min-h-screen pt-5 w-full">
    <div class="w-full flex flex-col md:flex-row justify-center items-center gap-4">
      <SearchBar />
      <CategoryFilter />
    </div>
    <div class="flex flex-wrap justify-center items-center gap-6 mt-6 w-full px-6">
      <Card v-for="meal in meals" :key="meal.idMeal" :meal="meal" />
    </div>
  </div>
</template>

<script setup>
import SearchBar from "../components/SearchBar.vue";
import Card from "../components/Card.vue";
import CategoryFilter from "../components/CategoryFilter.vue";
import { onMounted, provide, ref } from "vue";

const meals = ref([]);
const query = ref('');
onMounted(async () => {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?s="
  );
  const data = await response.json();
    meals.value = data.meals;
  
});


provide("meals", meals);
provide("query", query);
</script>

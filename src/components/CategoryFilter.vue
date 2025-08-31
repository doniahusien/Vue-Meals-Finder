<template>
  <select class="border border-gray-300 rounded p-2 m-2" v-model="selectedCategory">
    <option value="">Select category</option>
    <option
      v-for="category in categories"
      :key="category.idCategory"
      :value="category.strCategory"
    >
      {{ category.strCategory }}
    </option>
  </select>
</template>

<script setup>
import { onMounted, ref, watch, inject } from "vue";
import axios from "axios";
const meals = inject("meals");
const categories = ref([]);
const selectedCategory = ref("");

onMounted(async () => {
  const response = await axios.get(
    "https://www.themealdb.com/api/json/v1/1/categories.php"
  );
  categories.value = response.data.categories;
});

watch(selectedCategory, async () => {
  const response = await axios.get(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory.value}`
  );
  meals.value = response.data.meals;
  
});
</script>

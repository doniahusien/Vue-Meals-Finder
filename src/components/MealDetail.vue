<template>
  <div v-if="meal" class="p-2 pt-10 max-w-4xl mx-auto ">
    <div class="flex flex-col lg:flex-row items-center">
      <img :src="meal.strMealThumb" :alt="meal.strMeal" class="w-64 rounded mb-4" />
      <div class="flex flex-col ml-0 lg:ml-6">
        <h1 class="text-2xl font-bold mb-2">{{ meal.strMeal }}</h1>
        <p><strong>Category:</strong> {{ meal.strCategory }}</p>
        <p><strong>Area:</strong> {{ meal.strArea }}</p>
      </div>
    </div>

    <p class="mt-2 p-2">{{ meal.strInstructions }}</p>
    <a :href="meal.strYoutube" class="font-bold mt-10">See in Youtube</a>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { ref, onMounted } from "vue";
import axios from "axios";

const route = useRoute();
const id = route.params.id;
const meal = ref(null);

onMounted(async () => {
  const response = await axios.get(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  );
    meal.value = response.data.meals[0];
  
});
</script>

<template>
    <div class="card w-full md:w-1/3 lg:w-1/4  flex flex-col p-5 gap-2 shadow-lg ">
      <img :src="meal.strMealThumb" class="card-img-top" :alt="meal.strMeal" />
      <div class="card-body flex flex-col gap-2 items-center">
        <h5 class="card-title">{{ meal.strMeal }}</h5>
        <RouterLink :to="`/meal/${meal.idMeal}`" class="btn btn-primary font-medium bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded hover:scale-96 transition-transform duration-300 cursor-pointer">
          View Recipe
        </RouterLink>
      </div>
    </div>

</template>

<script setup>
defineProps({
  meal: Object,
});
</script>

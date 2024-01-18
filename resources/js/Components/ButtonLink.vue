<template>
    <a :href="link" class="bg-yellow-500 text-white px-4 py-2 rounded mr-10">
      {{ buttonText }}
    </a>
  </template>
  
  <script setup>
  const props = defineProps(['link', 'buttonText']);
  </script>
  

  
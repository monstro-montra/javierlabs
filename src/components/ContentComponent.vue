<template>
  <div class="content">
    <h2>{{ String(number).padStart(2, '0') }}</h2>
    <p>{{ content }}</p>
  </div>
</template>
  
<script>
  export default {
    props: {
      number: {
        type: Number,
        required: true,
      },
      content: {
        type: String,
        required: true,
      },
    },
  };
</script>

<style>
  /* Style your content here */
</style>

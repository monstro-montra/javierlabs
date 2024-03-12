<template>
    <div class="content">
      <h2>{{ number }}</h2>
      <p>{{ content }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: ['number', 'content'],
  };
  </script>
  
  <style>
  /* Style your content here */
  </style>
  
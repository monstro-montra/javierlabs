<template>
  <div>
    <img src="@/assets/1.jpg" alt="Description" class="responsive-image">
  </div>
  <div>
    <img src="@/assets/2.jpg" alt="Description" class="responsive-image">
  </div>
  <div>
    <img src="@/assets/3.jpg" alt="Description" class="responsive-image">
  </div>
  <div>
    <img src="@/assets/4.jpg" alt="Description" class="responsive-image">
  </div>
  <div>
    <img src="@/assets/5.jpg" alt="Description" class="responsive-image">
  </div>
  <div>
    <img src="@/assets/6.jpg" alt="Description" class="responsive-image">
  </div>
</template>

<script>
export default {
  name: 'HomeComponent',
  // If you have props, define them here
};
</script>

<style>
.image-container {
  max-width: 100% 
}

.responsive-image {
  max-width: 70%;
  height:auto;
  border-radius: 10px;
}
</style>
<template>
  <div>
    <img src="@/assets/1.jpg" alt="Description" class="responsive-image" :class="{'is-visible': isImageVisible}">
  </div>
  <div>
    <img src="@/assets/2.jpg" alt="Description" class="responsive-image" :class="{'is-visible': isImageVisible}">
  </div>
  <div>
    <img src="@/assets/3.jpg" alt="Description" class="responsive-image" :class="{'is-visible': isImageVisible}">
  </div>
  <div>
    <img src="@/assets/4.jpg" alt="Description" class="responsive-image" :class="{'is-visible': isImageVisible}">
  </div>
  <div>
    <img src="@/assets/5.jpg" alt="Description" class="responsive-image" :class="{'is-visible': isImageVisible}">
  </div>
  <div>
    <img src="@/assets/6.jpg" alt="Description" class="responsive-image" :class="{'is-visible': isImageVisible}">
  </div>
</template>

<script>
export default {
  name: 'HomeComponent',
  data() {
    return {
      isImageVisible: false,
    };
  },
  mounted() {
    // Wait for the next tick to ensure the DOM is updated,
    // then set isImageVisible to true to remove the blur effect
    this.$nextTick(() => {
      this.isImageVisible = true;
    });
  },
};
</script>

<style>
.image-container {
  max-width: 100%;
  margin: auto
}

.responsive-image {
  max-width: 70%;
  height: auto;
  border-radius: 10px;
  filter: blur(5px);
  opacity: 0;
  transition: filter 1s ease-in-out, opacity 1s ease-in-out;
}
/* When the image becomes visible, remove the blur and make it fully opaque */
.is-visible {
  filter: none;
  opacity: 1;
}

</style>
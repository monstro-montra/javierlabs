<template>
  <div class="scroll-container" ref="imageContainer" @wheel.prevent="handleWheel" style="overflow-x: auto; white-space: nowrap;">
    <div v-for="(image, index) in images" :key="index" class="image-wrapper">
      <img :src="image.src" :alt="'Image ' + (index + 1)" class="image">
      <div class="image-number">{{ index + 1 }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeComponent",
  data() {
    return {
      images: [ // array to hold images.
        { src: require('@/assets/1.jpg'), dark: true },
        { src: require('@/assets/2.jpg'), dark: true },
        { src: require('@/assets/3.jpg'), dark: true },
        { src: require('@/assets/4.jpg'), dark: true },
        { src: require('@/assets/5.jpg'), dark: true },
        { src: require('@/assets/6.jpg'), dark: true },
      ],
      translateValues: [], // array to hold translateX values.
      activeImage: 0,
    };
  },

  methods: {
    handleWheel(event) {
      event.preventDefault();
      const container = this.$refs.imageContainer;
      container.scrollLeft += event.deltaY; // Test with direct deltaY application
    },
  },

  mounted() {
      this.$nextTick(() => {
        console.log('Images loaded:', this.images);
        const container = this.$refs.imageContainer;
        container.addEventListener('wheel', this.handleWheel);
      });
    },

  beforeUnmount() {
      const container = this.$refs.imageContainer;
      if (container) {
        container.removeEventListener('wheel', this.handleWheel)
      }
  }

};
</script>

<style>
body, html {
  margin: 0;
  overflow-y: hidden; /* Hide vertical scrollbar */
  height: 100vh;
}

.scroll-container {
  width: 100vw;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap; /* Keep inline or inline-block elements in a single line */
  display: flex;
  align-items: center;
}

.image-wrapper {
  display: inline-block;
  position: relative;
  margin-right: 80px;
}

.image-number {
  position: absolute;
  top: 50%;
  right: -60px;
  transform: translateY(-50%);
  background-color: #332E3C;
  color: white;
  padding: 5px 10px;
  z-index: 2;
}

.image {
  max-height: 100vh;
  max-width: calc(100vw - 60px);
  height: auto;
  width: auto;
}

.logo {
  position: fixed;
  top: 10px;
  left: 10px;
  transition: color 0.5s;
}

.dark-logo {
  color: #000;
}

</style>
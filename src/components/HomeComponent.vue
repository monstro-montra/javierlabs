<template>
  <div class="image-container" ref="imageContainer" @wheel="handleWheel">
    <div v-for="(image, index) in images" :key="index" class="image-wrapper-outer">
      <div class="image-wrapper">
        <img :src="image.src" :alt="'Image ' + (index + 1)" class="responsive-image">
      </div>
      <div class="image-number-outer">
        <div class="image-number">{{ index + 1 }}</div>
      </div>
    </div>
  </div>
  <!-- ... rest of template -->
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
    handleScroll(event) {
      const container = event.target;
      // Calculate the scroll ratio of the container's scrollLeft relative to its total width minus the viewport width
      const scrollPercentage = container.scrollLeft / (container.scrollWidth - container.offsetWidth);
      // Apply a parallax effect to each image by adjusting its translateX based on the scroll percentage
      this.translateValues = this.images.map((image, index) => {
        const parallaxFactor = (index + 1) * 50; // Adjust this factor as needed
        return parallaxFactor * scrollPercentage;
      });

      // Update the active image based on scroll position
      let newActiveImage = Math.floor(scrollPercentage * this.images.length);
      if (newActiveImage !== this.activeImage) {
        this.activeImage = newActiveImage;
      }
    },

    handleWheel(event) {
      try {
        event.preventDefault();
        const container = this.$refs.imageContainer;
        const toScroll = container.scrollLeft + event.deltaY * 1.5;
        container.scrollTo({ left: toScroll, behavior: 'smooth' });
      } catch (error) {
        console.error("Error handling wheel event:", error);
      }
    }
  },

  mounted() {
      this.$nextTick(() => {
        console.log('Images loaded:', this.images);
        const container = this.$refs.imageContainer;
        container.addEventListener('scroll', this.handleScroll);
        container.addEventListener('wheel', this.handleWheel);
      });
    },

  beforeUnmount() {
      const container = this.$refs.imageContainer;
      if (container) {
        container.removeEventListener('scroll', this.handleScroll);
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

.image-container {
  display: flex;
  flex-direction: row; /* arrange images in a row */
  width: calc(70vw * 6);
  overflow-x: auto; /* enable horizonatal scrolling */
  overflow-y: hidden; /* Disable vertical scrolling */
  height: 100vh; /* container will take up full height */
}

.image-wrapper-outer {
  display: flex; /* Use flex to position number and image */
  width: 100vw; /* Each image wrapper takes full viewport width */
  height: 100vh; /* Full height */
}

.image-wrapper {
  flex: 1;
  position: relative; /* For positioning the image */
}

.responsive-image {
  width: 100%; /* Fill width of parent */
  height: 100%; /* Viewport height */
  object-fit: cover; /* Cover the area without stretching */
}

.image-number-outer {
  width: 100px; /* Width of the number container */
  display: flex; /* Use flexbox to center the content */
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  background-color: #332E3C; /* A background for readability, adjust as needed */
}

.image-number {
  margin: 0; /* No margin needed as it's in its own space */
  font-size: 2em;
  color: white;
  z-index: 2;
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
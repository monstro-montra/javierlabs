<template>
  <div class="parallax" :style="backgroundStyle" ref="parallax"></div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from 'vue';

export default defineComponent({
  props: {
    imageUrl: {
      type: String as PropType<string>,
      required: true
    }
  },
  setup(props) {
    const backgroundStyle = computed(() => ({
      backgroundImage: `url(${(props.imageUrl)})`
    }));

    return { backgroundStyle };
  },
  mounted() {
    this.addScrollEventListener();
  },
  beforeUnmount() {
    this.removeScrollEventListener();
  },

    methods: {
        handleScroll() {
            // Assert this.$refs.parallax as an HTMLElement to access DOM properties like offsetTop
            const parallaxElement = this.$refs.parallax as HTMLElement;
            
            const { offsetTop } = parallaxElement;
            const scrollPosition = window.scrollY || window.pageYOffset;
            
            // Adjust this to change the speed of the parallax effect
            const parallaxSpeed = 1;
            const offset = scrollPosition * parallaxSpeed - offsetTop;
            
            // Apply the effect
            parallaxElement.style.backgroundPositionY = `${offset}px`;
        },
        addScrollEventListener() {
          window.addEventListener('scroll', this.handleScroll);
        },
        removeScrollEventListener() {
          window.removeEventListener('scroll', this.handleScroll);
        }
    }
  });
</script>

<style>
    .parallax {
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        height: 100vh;
        width: 100%;
    }
</style>

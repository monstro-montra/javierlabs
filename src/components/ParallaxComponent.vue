<template>
  <div class="parallax" :style="backgroundStyle" ref="parallax"></div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onBeforeUnmount, computed } from 'vue';

export default defineComponent({
  props: {
    imageUrl: {
      type: String, // image url for the background image
      required: true 
    },
  },

  setup(props) {
    // reactive reference to div element for direct DOM manipulation
    const parallaxRef = ref<HTMLElement | null>(null);

    // flag to make sure requestAnimationFrame isn't called more times than necessary
    const ticking = ref(false);

    // Computed property to dynamically update the background image based on props
    const backgroundStyle = computed(() => ({
      backgroundImage: `url(${props.imageUrl})`,
    }));

    // method to handle scroll events and apply the parallax effect
    const handleScroll = () => {
        const lastScrollPosition = window.scrollY // updates the lastScrollPosition with the current vertical scroll position
        if (!ticking.value) {
          window.requestAnimationFrame(() => {
            if (parallaxRef.value){
              const { offsetTop } = parallaxRef.value; // gets the element's top offset
              // Adjust this to change the speed of the parallax effect
              const parallaxSpeed = 1;
              const offset = lastScrollPosition * parallaxSpeed - offsetTop;
              
              // Apply the effect
              parallaxRef.value.style.backgroundPositionY = `${offset}px`;

              ticking.value = false; // reset flag
            }
          });
          ticking.value = true; // sets the flag to true to prevent multiple invocations
        } 
    };

    // Adds the scroll event listener when the component is mounted
    onMounted(() => {
      window.addEventListener('scroll', handleScroll);
    });

     // Removes the scroll event listener before the component is unmounted
    onBeforeUnmount(() => {
      window.removeEventListener('scroll', handleScroll);
    });

    return { backgroundStyle, parallaxRef }
  },

});
</script>

<style>
    .parallax {
        background-attachment: fixed;
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover; /* cover the entire element */
        height: 100vh;
        width: 100%;
    }


    /* For portrait orientation */
@media (max-width: 600px) {
  .parallax {
    /* Adjust background size and position for smaller screens */
    background-size: contain; /* adjust size to maintain aspect ratio. */
    background-attachment: scroll; /* set to scroll since fixed can have performance issues on mobile */
    background-position: center center
  }
}

@media (max-height: 600px) {
  .parallax {
    background-size: cover;
    background-attachment: scroll;
    background-position: center center;
  }
}

</style> 

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
              const parallaxSpeed = 0.5;
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
      background-position: center; /* first arg is horizontal alignment, second arg is vertical alignment*/
      background-repeat: no-repeat;
      background-size: cover; /* cover the entire element */
      height: 100vh;
      width: 100%;
  }
  /* For mobile devices */
  @media only screen and (max-width: 767px) {
    .parallax {
      background-size: contain;
      background-attachment: scroll;
      background-position: center center;
    }
  }

  /* For tablets in portrait mode */
  @media only screen and (min-width: 768px) and (max-width: 991px) and (orientation: portrait) {
    .parallax {
      background-size: contain;
      background-attachment: scroll;
      background-position: center center;
    }
  }

  /* For tablets in landscape mode and small laptops */
  @media only screen and (min-width: 992px) and (max-width: 1199px) {
    .parallax {
      background-size: cover;
      background-attachment: fixed;
      background-position: center center;
    }
  }

  /* For larger screens */
  @media only screen and (min-width: 1200px) {
    .parallax {
      background-size: cover;
      background-attachment: fixed;
      background-position: center center;
    }
  }

</style> 

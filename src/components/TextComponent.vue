<template>
  <div class="content-container">
    <component :is="tag" :class="customClass"> <!-- Dynamic class binding and tag binding-->
        <slot></slot> <!-- Dynamic content inside the paragraph -->
    </component>
  </div>
    
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name:'CustomText',
  props: { 
    customClass: { // prop for custom class
      type: String,
      default: ''
    },

    tag: { // prop 
      type: String,
      default: 'p',
    },  
  },
});
</script>

<style scoped>
p, h1, h2, h3, h4, h5, h6 {
  font-family: 'Monaco', monospace;
}

p {
  font-size:16px;
}

h1 {
  font: size 32px;
  font-weight: bold;
}

h2 {
  font-size:24px;
  font-weight: bold;
}

h3 {
  font-size:19px;
}

h4 {
  font-size:13px;
}

h5 {
  font-size:13px;
}

h6 {
  font-size:11px;
}

/* Mobile */
@media (max-width: 768px) {
  .content-container {
    padding: 0 20px;
  }
  h1 {
    font-size: 24px; /* Smaller size for mobile */
  }

  h2 {
    font-size: 20px;
  }

  h3 {
    font-size: 17px;
  }

  h4 {
    font-size: 13px;
  }

  h5 {
    font-size: 11px;
  }

  h6 {
    font-size: 8px;
  }

  /* Adjust sizes for h4, h5, h6 as well if needed */
  
  /* General paragraph styles for mobile */
  p {
    font-size: 14px;
  }
}
</style>

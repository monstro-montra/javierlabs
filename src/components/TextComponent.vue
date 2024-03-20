<template>
    <component :is="tag" :class="customClass"> <!-- Dynamic class binding and tag binding-->
        <slot></slot> <!-- Dynamic content inside the paragraph -->
    </component>
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
p {
  font-family: 'Monaco', monospace;
  font-size:16px;
}

h1 {
  font-family: 'Monaco', monospace;
  font: size 32px;
  font-weight: bold;
}

h2 {
  font-family: 'Monaco', monospace;
  font-size:24px;
  font-weight: bold;
}

h3 {
  font-family: 'Monaco', monospace;
  font-size:19px;
}

h4 {
  font-family: 'Monaco', monospace;
  font-size:13px;
}

h5 {
  font-family: 'Monaco', monospace;
  font-size:13px;
}

h6 {
  font-family: 'Monaco', monospace;
  font-size:11px;
}

</style>

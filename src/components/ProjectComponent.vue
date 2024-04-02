<template>
    <div class="project-component">
      <CustomText tag="h3">
        {{ name }}
      </CustomText>

      <div class="project-image">
        <router-link :to="route">
          <img :src="imagePath" :alt="name" />
      </router-link>
      </div>
      

      <CustomText tag="p">
        {{ description }}
      </CustomText>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CustomText from '@/components/TextComponent.vue';

export default defineComponent ({
  components: {
    CustomText
  },
  props: {
    name: {
      type: String,
      require: true,
    },
    route: {
      type: String,
      require: true,
    },
    image: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
  },

  computed: {
    imagePath(): string {
      return require('@/assets/' + this.image);
    }
  },
});
</script>

<style>
.project-image img {
  height: auto;
  width: 30%;
  max-width: 300px;
  display: block;
  margin:0 auto;
}

</style>
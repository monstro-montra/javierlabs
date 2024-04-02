<template>
    <div class="projects">
      <CustomText tag="h1">
        Projects
      </CustomText>

      <ProjectComponent 
        v-for="project in projectList"
        :key="project.name"
        :name="project.name"
        :route="project.route"
        :image="project.image"
        :description="project.description"
      />
      
    </div>
  </template>

<script lang="ts">
import { defineComponent } from 'vue';
import CustomText from '@/components/TextComponent.vue';
import ProjectComponent from '@/components/ProjectComponent.vue';

export default defineComponent({
  components : {
    CustomText,
    ProjectComponent,
  },

  data() {
    return {
      projectList: [
        {
          name: "Stock Predictor",
          route: "/projects/stock-predictor",
          image: "tradingbot.jpg",
          description: "A stock price movement predictor that utilizes machine learning to capture patterns in stock data."
        },
        {
          name: "Sierpinski Gasket",
          route: "/projects/sierpinski-gasket",
          image: "tradingbot.jpg",
          description: "A WebGL + JS repository that illustrates Sierpinski Gasket Fractals."
        }
        // more projects here
      ],
    };
  },
});
</script>
  
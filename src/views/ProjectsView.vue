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
          name: "Interactive Viewer",
          route: "/projects/interactive-viewer",
          image: "interactive-viewer.png",
          description: "A three.js repository that displays a 3D model of an island."
        }
        // more projects here
      ],
    };
  },
});
</script>
  
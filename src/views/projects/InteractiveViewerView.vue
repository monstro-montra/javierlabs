<template>
    <div class="interactive-viewer">
      <CustomText tag="h1">
        Interactive Viewer
      </CustomText>
      <!-- Add iframe to embed dockerized three.js project-->
      <div class = 'iframe-container'>
        <iframe src="https://interactive-viewer-5204c4f72d1d.herokuapp.com/" frameborder="0"></iframe>
      </div>

      <CustomText tag="h2" class="custom-text-h2">
        This project is one of my first three.js projects. I utilized blender to design the 3D model and added ThreeJS's built in orbit controls to allow for control/interactivity.
      </CustomText>

    </div>
  </template>

<script lang="ts">
import CustomText from '@/components/TextComponent.vue';

export default {
  components : {
    CustomText,
  },
};
</script>

<style>
.interactive-viewer {
  display: flex; /* This enables Flexbox for the container */
  justify-content: center; /* This centers the child elements horizontally */
  align-items: center; /* This centers the child elements vertically */
  height: 100vh; /* This sets the height of the container to fill the viewport */
  flex-direction: column; /* This stacks children vertically */
}

.custom-text-h2 {
  max-width: 1000px; /* Sets the maximum width of the text block */
  margin-left: auto; /* Centers the text block horizontally by pushing it from the left */
  margin-right: auto; /* Also centers the text block horizontally by pushing it from the right */
  white-space: pre-wrap; /* Allows for natural text wrapping and respects new lines */
}


.iframe-container {
  position: relative;
  width: 80%;
  padding-top: 45%; /* 16:9 aspect ratio*/ 
}

.iframe-container iframe {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 80%;
  height: 80%;
  transform: translate(-50%, -50%); /* This centers the iframe */
}
</style>
<template>
  <div class = "Title">
    <CustomText tag="h1">
      Javier Labs
    </CustomText>
  </div>
  <div class = "Logo">
    <img src="@/assets/javierlabs logo transparent.png" alt="Logo" />
  </div>
  <div>
    <CustomText tag="h2">
      Software Developer, ML Engineer, and Photographer
    </CustomText>
    <CustomText tag="p">
      I develop software using a myriad of different technologies and shoot photography.
    </CustomText>
  </div>
  <div class = ""></div>
</template>

<script lang="ts">
import CustomText from '@/components/TextComponent.vue';

export default {
  components: {
    CustomText
  }
};
</script>

<style>

  .Title {
    text-align:left;
    margin: 0;
    margin-left: 2%
  }

  @media (max-width: 768px) {
    .Title{
      text-align: center;
      margin-left:0;
    }
  }

  .Logo img {
    height: auto;
    max-width: 100px;
    margin-top: 5%;
  }

  .Description {
    margin-top:5%
  }

</style>
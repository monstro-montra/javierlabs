<template>
  <div class="home">
    <ContentComponent :number="1" :content="content1" />
    <ParallaxComponent :imageUrl="imageUrl1" />

    <ContentComponent :number="2" :content="content2" />
    <ParallaxComponent :imageUrl="imageUrl2" />

    <ContentComponent :number="3" :content="content3" />
    <ParallaxComponent :imageUrl="imageUrl3" />

    <ContentComponent :number="4" :content="content4" />
    <ParallaxComponent :imageUrl="imageUrl4" />

    <ContentComponent :number="5" :content="content5" />
    <ParallaxComponent :imageUrl="imageUrl5" />

    <ContentComponent :number="6" :content="content6" />
    <ParallaxComponent :imageUrl="imageUrl6" />
    <!-- and so on for the rest of your images and content -->
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import ParallaxComponent from '@/components/ParallaxComponent.vue';
import ContentComponent from '@/components/ContentComponent.vue';


@Options({
  components: {
    ParallaxComponent,
    ContentComponent,
  },
})
export default class HomeView extends Vue {
  imageUrl1 = require('@/assets/1.jpg')
  content1 = '';

  imageUrl2 = require('@/assets/2.jpg');
  content2 = 'Your second content';

  imageUrl3 = require('@/assets/3.jpg');
  content3 = 'Your third content';

  imageUrl4 = require('@/assets/4.jpg');
  content4 = 'Your fourth content';

  imageUrl5 = require('@/assets/5.jpg');
  content5 = 'Your fifth content';
  
  imageUrl6 = require('@/assets/6.jpg');
  content6 = 'Your sixth content';
  // You would add additional image URLs and content variables for each section
}
</script>

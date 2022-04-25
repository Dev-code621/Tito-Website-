<script setup>
  import VideoStream from '../components/VideoStream.vue'
  import LiveGames from '../components/LiveGames.vue'
  import SidebarBookies from '../components/SidebarBookies.vue'
  import SuggestedVideos from '../components/SuggestedVideos.vue'
</script>

<template>
  <main>
      <!-- <VideoStream /> -->
      <img src="/src/assets/placeholder-cover.jpg" />
      <LiveGames />
      <div id="home-ad-bilboard">
        <a href="#">
          <img src="/src/assets/ad2.png" />
        </a>
      </div>
  </main>
  <aside>
    <SuggestedVideos />
    <div class="skyscraper-ad">
      <a href="#">
        <img src="/src/assets/ad1.png" />
      </a>
    </div>
    <SidebarBookies />
  </aside>
</template>

<style>
  .skyscraper-ad {
      margin-left: 10px;
  }

  .skyscraper-ad a {
      text-decoration: none;
  }
</style>
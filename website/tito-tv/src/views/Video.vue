<style>
  @media (min-width: 1024px) {
    /*.page-video {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }*/
  }

  section#video-theatre {
      grid-column: 1 / 3;
      background: #0d0f17;
  }


  #video-theatre h1 {
      color: #fff;
      font-size: 24px;
      font-weight: 400;
      border-left: 3px solid #9e2a2c;
      padding: 5px 0px;
      padding-left: 10px;
  }

  div#video-title {
      margin: 30px 15px;
  }
</style>

<template>
  <section id="video-theatre" >
    <div id="video-title">
      <h1>{{ game.title }}</h1>
    </div>
    <VideoStream :video="$route.params.id"/>
  </section>

  <main class="page-video">
     <!-- <LiveGames /> -->
    
    <div id="home-ad-bilboard">
      <a href="#">
        <img src="/src/assets/ad2.png" />
      </a>
    </div>
        <h2 style="color:white;font-size: 1.1em;    margin: 2em;">Link trực tiếp Suwon FMC W - Changnyeong W có bình luận tiếng Việt trên K+, VTV6 mới nhất. Link sopcast Suwon FMC W VS Changnyeong W , link acestream Suwon FMC W VS Changnyeong W ngày 25/04 được cập nhật liên tục tại mitom1.tv.

mitom1.tv phát trực tiếp Suwon FMC W hàng tuần và link xem Đội B nhanh nhất luôn được cập nhật. Xem bóng đá trực tuyến WK-League nhanh nhất, không die, không giật.

Link xem bóng đá trực tuyến Suwon FMC W - Changnyeong W ngon nhất đêm nay chỉ có tại mitom1.tv. Với mitom1.tv bạn đừng bao giờ tự hỏi link xem Suwon FMC W VS Changnyeong W ở đâu? Xem Suwon FMC W VS Changnyeong W trên kênh nào hay xem trực Suwon FMC W VS Changnyeong W ở đâu? Tất cả đều có trên mitom1.tv.

Link xem trực tiếp bóng đá WK-League tối nay được mitom1.tv cung cấp đầy đủ. Ngoài link xem Suwon FMC W VS Changnyeong W thì bạn cũng có thể xem nhận định Suwon FMC W VS Changnyeong W ngay tại mitom1.tv

Link xem trực tiếp Suwon FMC W VS Changnyeong W sẽ có 45’ trước khi trận đấu Suwon FMC W VS Changnyeong W bắt đầu. mitom1.tv sẽ cập nhật đầy đủ.</h2>

  </main>
  <aside>
    <SidebarBookies />
  </aside>
  
</template>

<script>  
  import axios from 'axios'
  import { defineAsyncComponent } from 'vue'

  export default {
    components: {
      VideoStream: defineAsyncComponent(() => import('../components/VideoStream.vue')),
      SuggestedVideos: defineAsyncComponent(() => import('../components/SuggestedVideos.vue')),
      SidebarBookies: defineAsyncComponent(() => import('../components/SidebarBookies.vue')),
      LiveGames : defineAsyncComponent(() => import('../components/LiveGames.vue')),

    },
    data() {
      return {
        game: {},
      }
    },
    beforeCreate() {
      let video_id = this.$route.params.id;

      //axios.get(`http://127.0.0.1:8342/video/${video_id}/data`)
      axios.get(`http://localhost:8342/video/${video_id}/data`)
        .then(res => {
          console.log('the video data onload', res.data )
          this.game = res.data
        })
        .catch(err => console.error)
    },

  // watch:{
  //   $route (to, from){
  //           let video_id = to.params.id
  //           console.log('the gamafafafe', video_id)

  //           //axios.get(`http://127.0.0.1:8342/video/${video_id}/data`)
  //           axios.get(`http://127.0.0.1:8342/video/${video_id}/data`)
  //             .then(res => {
  //               console.log('the video data onload', res.data )
  //               this.game = res.data
  //             })
  //             .catch(err => console.error)
  //       }
  //   } 

    
    
  }
</script>
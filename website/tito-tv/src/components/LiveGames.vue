<style>
  div#home-live-games h2 {
      color: rgba(255,255,255,0.75);
      font-weight: 400;
      display: inline-block;
      border-bottom: 3px solid #9f2b2c;
      padding-bottom: 10px;
      margin: 40px 20px;
  }

  div#live-games-tiles {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      column-gap: 20px;
      row-gap: 20px;
  }

  .live-game-tile {
      background: #a02b2c;
  }

  .live-game-info {
      display: flex;
      align-items: center;
  }

  .live-game-team_logo {
      flex: 1;
      text-align: center;
  }

  .live-game-team_logo img {
      max-height: 85px;
  }

 .live-game-detail {
      flex: 1;
      text-align: center;
      padding: 10px 0;
  }

  .live-game-detail-title {
      color: orange;
      font-weight: bold;
      font-size: 16px;
  }

  .live-game-detail-round {
      margin: 10px 0;
      color: #fff;
  }

  .live-game-detail-round span {
      display: inline-block;
      background: green;
      font-weight: bold;
      font-size: 14px;
      padding: 5px 10px;
      border-radius: 10px;
  }

  .live-game-detail-schedule {
      color: rgba(255,255,255,0.75);
      font-size: 12px;
  }

  .live-game-detail-score {
      background: #005afe;
      color: #fff;
      display: inline-block;
      padding: 5px 15px;
      border-radius: 10px;
      font-weight: 900;
      margin: 10px 0;
  }
  .live-game-actions {
      background: #303030;
      display: flex;
  }

  .league_name {
      color: rgba(255,255,255,0.75);
      flex: 1;
      display: flex;
      align-items: center;
  }

  .league_name span {
      margin-left: 10px;
  }

 .live-game-action-buttons a {
      text-decoration: none;
      font-weight: bold;
      font-size: 14px;
      padding: 10px;
      position: relative;
      /* height: 100%; */
      display: inline-block;
  }

  .live-game-action-buttons {
      position: relative;
      height: 40px;
      overflow: hidden;
      top: 2px;
  }

  a.live-game-action-button.action-button-place_bet {
      background: orange;
      color: #303030;
      transform: skew(-20deg) !important;
      display: inline-block;
      margin-left: 10px;
  }

  a.live-game-action-button.action-button-watch_now {
      background: #007eff;
      color: #fff;
      transform: skew(-20deg, 0deg);
      margin-left: 3px;
      border-right: 20px solid transparent;
      margin-right: -20px;
  }

  a.live-game-action-button.action-button-place_bet span {
      transform: skew(20deg) !important;
      display: block;
  }

  a.live-game-action-button.action-button-watch_now span {
      transform: skew(20deg);
      display: block;
  }
</style>

<template>
  <div id="home-live-games">
    <h2>LIVE GAME</h2>
    <div id="live-games-tiles">
      <div v-for="game in games" class="live-game-tile" :key="game._id" @click="viewGame(game._id)">
        <div class="live-game-info">
          <div class="live-game-team_logo team_logo-left">
            <img :src="game.home_team_image" />
          </div>

          <div class="live-game-detail">
            <div class="live-game-detail-title">
                <span>{{ game.home_team_name }} vs {{ game.away_team_name }}</span>
            </div>
            <div style="display: none;" class="live-game-detail-round">
              <span></span>
            </div>
            <div class="live-game-detail-schedule">
              <span>{{ }}</span>
            </div>
            <div class="live-game-detail-score">
               {{format_date(game.start_time)}}
            </div>
          </div>

          <div class="live-game-team_logo team_logo-right">
                <img :src="game.away_team_image" />

          </div>
        </div>
        <div class="live-game-actions">
          <div class="league_name">
            <span>{{ game.league }}</span>
          </div>
          <div class="live-game-action-buttons">
            <a href="#" class="live-game-action-button action-button-place_bet">
              <span>PLACE A BET</span>
            </a>
            <a href="#" class="live-game-action-button action-button-watch_now">
              <span>WATCH NOW</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import router from '../router'
  import moment from 'moment';

  export default {
    data() {
      return {
        games: []
      }
    },
    
    methods: {
      viewGame(game_id) {
        router.replace({path:`/video/${game_id}`,replace:true,  props:true})
      },
       format_date(value){
         if (value) {
           return moment(value*1000).format('MM/DD/YYYY hh:mm')
          }
      },
    },
    mounted() {
   let type = this.$route.params.id;
      axios.post('http://localhost:8342/videos/list' ,{type:type})
        .then(res => {
          console.log('home page games', res.data)
          this.games = res.data
        })    
    } ,

    watch:{
    $route (to, from){
            let type = this.$route.params.id;
            console.log(type)
             axios.post('http://localhost:8342/videos/list' ,{type:type})
            .then(res => {
              console.log('home page games', res.data)
              this.games = res.data
            })    
        }
    } 

  }
</script>


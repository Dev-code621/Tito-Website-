<script>
  import { RouterLink, RouterView } from 'vue-router'
  
   import axios from 'axios'
  import router from '../src/router'
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
      axios.get('http://localhost:8342/category/list?view=home')
        .then(res => {
          this.games = res.data
        })    
    } 
  }
</script>

<template>
  <header>
    <div class="wrapper">
      <div id="nav-logo">
        <RouterLink to="/">
          <img src="/src/assets/logo.jpg" />
        </RouterLink>
      </div>
      <nav id="top-categories">
        <ul>
          <li  v-for="game in games" :key="game._id">
            <RouterLink :to="`/category/${game.type}`">{{game.name}}</RouterLink>
          </li>
          <li><RouterLink to="/bookies">Bookies</RouterLink></li>
        </ul>
      </nav>
      <div id="nav-spacer"></div>
    </div>
  </header>

  <RouterView />

  <footer>
    <nav id="footer-links">
      <ul>
        <li>
          <a href="#">Advertise</a>
        </li>
        <li>
          <a href="#">Cookie Settings</a>
        </li>
        <li>
          <a href="#">Privacy Settings</a>
        </li>
        <li>
          <a href="#">Media</a>
        </li>
        <li>
          <a href="#">Sponsorships</a>
        </li>
        <li>
          <a href="#">Protect my data</a>
        </li>
      </ul>
    </nav>
    <div id="footer-copyright">
      <p>
        Copyright &copy;2022 Tito.tv. All rights reserved. 
      </p>
    </div>
  </footer>

</template>


<style>
  header {
    grid-column: 1 / 3;
  }

  header .wrapper {
    display: flex;
    align-items: center;
  }

  main {
      grid-column: 1;
      background: #0c0f17;
  }

  aside {
      grid-column: 2 / 3;
  }

  div#nav-logo {
      flex: 1;
      text-align: left;
  }

  nav#top-categories {
      flex: 5;
  }

  nav#top-categories a {
      color: rgba(255,255,255,0.75);
  }

  nav#top-categories ul {
      list-style: none;
      background: rgba(255,255,255,0.1);
      padding: 5px 10px;
      border: 1px solid rgba(255,255,255,0.25);
      width: fit-content;
      border-radius: 50px;
      margin: 0 auto;
  }

  nav#top-categories ul li {
      display: inline-block;
      padding: 5px 10px;
  }

  nav#top-categories ul li a {
      text-decoration: none;
      font-size: 14px;
  }

  div#nav-spacer {
      flex: 1;
  }

  footer {
      background: #0b2241;
      grid-column: 1 / 3;
  }

  nav#footer-links ul {
      list-style: none;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      width: 50%;
  }

  nav#footer-links {
      margin: 20px auto;
      max-width: 1400px;
  }

  nav#footer-links ul li a {
      color: #fff;
      text-decoration: none;
  }

  nav#footer-links ul li {
      margin: 10px 0;
  }

  #footer-copyright {
      text-align: center;
      color: rgba(255,255,255,0.75);
      font-size: 12px;
      margin-bottom: 20px;
  }

  div#home-ad-bilboard {
      margin-top: 50px;
  }
</style>

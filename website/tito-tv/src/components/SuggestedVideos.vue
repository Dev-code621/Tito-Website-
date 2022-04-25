<script setup>

</script>

<template>
    <div class="s-video-list">
      <ul>
        <li class="s-video-li">
          <RouterLink to="/video/62297ea93dbe87179acf9126" class="s-video-item">
            <div class="s-video-thumb">
              <img src="/src/assets/thumbs/1.png" />
            </div>
            <div class="s-video-detail">
              <div class="s-video-detail-title">
                <b>Passage</b>
              </div>
              <div class="s-video-detail-descriptioin">
                <span>For Tatum Malod, skiiing is in her ...</span>
              </div>
              <div class="s-video-detail-duration">
                <span>02:00 PM - 03:15 PM</span>
              </div>
            </div>
          </RouterLink>
        </li>
        <li class="s-video-li">
          <div class="s-video-item">
            <div class="s-video-thumb">
              <img src="/src/assets/thumbs/2.png" />
            </div>
            <div class="s-video-detail">
              <div class="s-video-detail-title">
                <b>Long Days</b>
              </div>
              <div class="s-video-detail-descriptioin">
                <span>For Tatum Malod, skiiing is in her ...</span>
              </div>
              <div class="s-video-detail-duration">
                <span>02:00 PM - 03:15 PM</span>
              </div>
            </div>
          </div>
        </li>
        <li class="s-video-li">
          <div class="s-video-item">
            <div class="s-video-thumb">
              <img src="/src/assets/thumbs/3.png" />
            </div>
            <div class="s-video-detail">
              <div class="s-video-detail-title">
                <b>Underdogs and Overdogs</b>
              </div>
              <div class="s-video-detail-descriptioin">
                <span>For Tatum Malod, skiiing is in her ...</span>
              </div>
              <div class="s-video-detail-duration">
                <span>02:00 PM - 03:15 PM</span>
              </div>
            </div>
          </div>
        </li>
        <li class="s-video-li">
          <div class="s-video-item">
            <div class="s-video-thumb">
              <img src="/src/assets/thumbs/4.png" />
            </div>
            <div class="s-video-detail">
              <div class="s-video-detail-title">
                <b>Instinct vs Science</b>
              </div>
              <div class="s-video-detail-descriptioin">
                <span>For Tatum Malod, skiiing is in her ...</span>
              </div>
              <div class="s-video-detail-duration">
                <span>02:00 PM - 03:15 PM</span>
              </div>
            </div>
          </div>
        </li>
        <li class="s-video-li">
          <div class="s-video-item">
            <div class="s-video-thumb">
              <img src="/src/assets/thumbs/5.png" />
            </div>
            <div class="s-video-detail">
              <div class="s-video-detail-title">
                <b>Skill vs Luck</b>
              </div>
              <div class="s-video-detail-descriptioin">
                <span>For Tatum Malod, skiiing is in her ...</span>
              </div>
              <div class="s-video-detail-duration">
                <span>02:00 PM - 03:15 PM</span>
              </div>
            </div>
          </div>
        </li>
        <li class="s-video-li">
          <div class="s-video-item">
            <div class="s-video-thumb">
              <img src="/src/assets/thumbs/6.png" />
            </div>
            <div class="s-video-detail">
              <div class="s-video-detail-title">
                <b>French Advantage</b>
              </div>
              <div class="s-video-detail-descriptioin">
                <span>For Tatum Malod, skiiing is in her ...</span>
              </div>
              <div class="s-video-detail-duration">
                <span>02:00 PM - 03:15 PM</span>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
</template>

<style>
  .s-video-list {
      padding: 10px;
      background: #0b2341;
      color: #fff;
      margin-left: 10px;
  }

  .s-video-list ul {
      list-style: none;
      border-top: 1px solid rgba(255,255,255,0.1);
  }

  li.s-video-li {
      border-bottom: 1px solid rgba(255,255,255,0.1);
  }

  .s-video-item {
      display: flex;
      padding: 10px 0;
      align-items: center;
      text-decoration: none;
  }

  .s-video-thumb {
      padding: 0 10px;
      position: relative;
  }

  .s-video-thumb img {
      border-radius: 5px;
  }

  .s-video-detail-title b {
      font-size: 16px;
      color: #fff;
      font-weight: 500;
  }

  .s-video-detail-descriptioin {
      font-size: 12px;
      color: rgba(255,255,255,0.5);
      margin: 5px 0px;
  }

  .s-video-detail-duration {
      font-size: 12px;
      color: rgba(255,255,255,0.5);
  }

  li.s-video-li:hover {
      background: #ffffff1f;
      color: #303030;
      cursor: pointer;
  }
</style>
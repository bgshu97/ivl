<script setup>
</script>

<template>
  <main>
    <section class="slider">
      <div class="fullscreen-slide">
        <div class="overlay">
          <figure class="figure-caption">
            <h1>Apply Your Team</h1>
            <p>Join the Bay Area's most popular volleyball league</p>
            <a href="/ivl/sign-up/">Sign Up Today</a>
          </figure>
        </div>
      </div>
    </section>
    <section class="cards">
      <div class="container-base container-max-width--1650">
        <div class="row">
          <div class="col-12">
            <h2 class="has-border">Most Popular Leagues</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <div class="card">
              <figure class="m-card-image">
                <img src="/src/assets/pic1.jpg" width="600" height="400">
              </figure>
              <div class="card-content">
                <h4>Reverse Coed League - Mondays 7:15pm</h4>
                <p>3 Women and 3 Men play on this team, compete against friends with only women allowed to attack the ball.</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card">
              <figure class="m-card-image">
                <img src="/src/assets/pic3.jpg" width="600" height="400">
              </figure>
              <div class="card-content">
                <h4>Men's League - Tuesdays 7:15pm</h4>
                <p>6 Men play on this team, play the standard indoor rules.</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card">
              <figure class="m-card-image">
                <img src="/src/assets/pic2.jpg" width="600" height="400">
              </figure>
              <div class="card-content">
                <h4>Quads Reverse Coed League - Wednesdays 7:15pm</h4>
                <p>2 Men and 2 Women play on this team, compete with no open-hand serve receive, men can attack behind the 10 foot line.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
  .slider {
    height: 1279px;
    margin-bottom: 0;
    visibility: hidden;
    display: flex;
  }

  .fullscreen-slide {
    background-image: url(/src/assets/banner.jpg);
    visibility: visible;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    display: flex;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
  }

  .overlay {
    width: 40%;
    height: 100%;
    background: rgba(20, 50, 95, 0.7);
  }

  .figure-caption {
    width: 100%;
    height: 100%;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: white;
    text-align: center;
  }

  .has-border {
    border-bottom: 1px solid black;
  }

  .col-12 {
    flex: 0 0 100%;
    max-width: 100%;
    position: relative;
    width: 100%;
    padding-left: 15px;
    padding-right: 15px;
  }

  .cards {
    padding: 2rem;
  }

  .card {
    background: black;
    min-height: 550px;
    margin: 1rem 0;
  }

  .card-content {
    padding: 1rem 2rem;
    color: white;
  }
</style>
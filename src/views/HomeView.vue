<script setup>
</script>

<template>
  <main>
    <section class="slider">
      <div class="fullscreen-slide">
        <div class="overlay">
          <figure class="figure-caption">
            <h1>Industrial Volleyball League, Inc.</h1>
            <p>Apply to join the Bay Area's most popular volleyball league</p>
            <a href="/ivl/#/sign-up/" class="white">Sign Up Today ></a>
          </figure>
        </div>
      </div>
    </section>
    <section class="cards">
      <div class="container-base container-max-width--1650">
        <div class="row">
          <div class="col-12">
            <h1 class="has-border">Announcements:</h1>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <div class="card">
              <figure class="m-card-image">
                <img src="/src/assets/pic1.jpg" width="600" height="400">
              </figure>
              <div class="card-content">
                <h2>Fall Season is now over!</h2>
                <p>Winter Season 2025 will begin the week of January 6. We will send an email reminder to all the captains the day registration begins the first week in December. To be added to the captains' mailing list, send an e-mail, including a U.S. postal address, to IVLINC@AOL.COM.</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card">
              <figure class="m-card-image">
                <img src="/src/assets/pic3.jpg" width="600" height="400">
              </figure>
              <div class="card-content">
                <h2>New Players and Referees!</h2>
                <p>If you're a new player looking for a team, or a team looking for a player, check out the Free Agent Registry at the website. The Free Agent Registry replenishes itself approximately every 30 days. New referees can take our online referee test. You can take the test and have it corrected online, then bring the printed results to your league supervisor for certification. See the Referee's Page for details.</p>
                </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card">
              <figure class="m-card-image">
                <img src="/src/assets/pic2.jpg" width="600" height="400">
              </figure>
              <div class="card-content">
                <h2>The IVL sponsors Friday night drop-in at Wilcox HS 7:30-10:00pm, $14/person</h2>
                <p>Recommended for intermediate and above levels. For this week's schedule and info on how to sign up, use the online Reclub App.</p>
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
    height: 700px;
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
    height: 700px;
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
    background: #282828;
    min-height: 550px;
    margin: 1rem 0;
  }

  .m-card-image {
    border: 1px solid #282828;
  }

  .card-content {
    padding: 1rem 2rem;
    color: white;
  }

  h1 {
    font-size: 2.188rem;
    line-height: 2.5rem;
    font-weight: bold;
  }

  .white {
    color: hsla(0, 0%, 100%, 1);
  }
</style>
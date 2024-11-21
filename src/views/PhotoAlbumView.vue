<template>
    <main>
        <div class="landing-row social-aotw-row no-pad">
            <div class="clearfix">
                <div class="landing-row-offset">
                    <div class="landing-col span6">
                        <section class="section-videos">
                            <h2 class="section-header">Videos</h2>
                            <div class="youtube-wrapper clearfix">
                                <div class="player yt-player-holder">
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/Ehow0bC0ems?si=pE0Mmb58CxoqEEW8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                </div>
                                <div class="playlist">
                                    <div class="overflow">
                                        <ul>
                                            <li class="clearfix">
                                                <img src="https://i.ytimg.com/vi/ayKM_fjNfJI/hqdefault.jpg" alt="WVC Women's Volleyball vs. Gavilan College - Video Thumbnail">
                                                <div>
                                                    <a href="https://www.youtube.com/embed/ayKM_fjNfJI?si=9aCSzIOh6AtFokZy" class="title" target="_self">IVL Top Cafe vs Onyanko Club Set 1</a>
                                                </div>
                                            </li>
                                            <li class="clearfix">
                                                <img src="https://i.ytimg.com/vi/5Q3FDRap4Yo/mqdefault.jpg" alt="WVC Women's Volleyball vs. Gavilan College - Video Thumbnail">
                                                <div>
                                                    <a href="https://youtube.com/watch?v=5Q3FDRap4Yo" class="title" target="_self">IVL Top Cafe vs Onyanko Club Set 2</a>
                                                </div>
                                            </li>
                                            <li class="clearfix">
                                                <img src="https://i.ytimg.com/vi/5Q3FDRap4Yo/mqdefault.jpg" alt="WVC Women's Volleyball vs. Gavilan College - Video Thumbnail">
                                                <div>
                                                    <a href="https://youtube.com/watch?v=5Q3FDRap4Yo" class="title" target="_self">IVL Top Cafe vs One Bump Chumps Set 1</a>
                                                </div>
                                            </li>
                                            <li class="clearfix">
                                                <img src="https://i.ytimg.com/vi/5Q3FDRap4Yo/mqdefault.jpg" alt="WVC Women's Volleyball vs. Gavilan College - Video Thumbnail">
                                                <div>
                                                    <a href="https://youtube.com/watch?v=5Q3FDRap4Yo" class="title" target="_self">IVL Top Cafe vs Onne Bump Chumps Set 2</a>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div class="landing-col span6">
                        <section class="section-aotw">
                            <h2 class="section-header">Featured Team</h2>
                            <div class="aotw clearfix">
                                <img src="/src/assets/teampic.jpg" class="aotw-img" />
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<style>
    .landing-row.social-aotw-row {
        padding: 30px 0;
        background: url(/src/assets/banner.jpg) no-repeat 50% 100% #6f6f6f;
    }
    .landing-row {
        margin-top: 20px;
    }

    .landing-row.no-pad > div {
        padding: 0;
    }

    .landing-row > div {
        max-width: 1200px;
        margin: 0 auto;
        box-sizing: border-box;
    }

    .landing-row-offset {
        margin: 0 -10px;
    }

    .landing-col.span6 {
        width: 50%;
    }

    .landing-col {
        float: left;
        padding: 0 10px;
        box-sizing: border-box;
    }

    .section-header {
        position: static;
        padding: 20px 0;
        text-align: center;
        font-size: 28px;
        line-height: 30px;
        text-transform: uppercase;
        color: #fff;
        background: #14325f;
    }

    .youtube-wrapper {
        min-height: 580px;
        background: #fff;
        box-shadow: 0 0 50px rgba(0, 0, 0, 0.6);
        width: 500px;
    }

    .youtube-wrapper .player {
        width: 100%;
        height: 315px;
    }

    .yt-player-holder {
        position: relative;
        overflow: hidden;
    }

    .yt-player-holder iframe {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
    }

    iframe {
        border: 0;
    }

    .playlist {
        background: #fff;
    }

    .youtube-wrapper .playlist .overflow {
        height: 250px;
        overflow: auto;
    }

    .youtube-wrapper .playlist ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .youtube-wrapper .playlist li {
        padding: 10px 19px;
        color: #fff;
        cursor: pointer;
    }

    .youtube-wrapper .playlist img {
        float: left;
        width: 65px;
        height: 62px;
        margin-right: 10px;
    }

    img {
        border: none;
        max-width: 100%;
    }

    .youtube-wrapper .playlist li a {
        display: block;
        font-size: 13px;
        font-weight: 700;
        text-transform: uppercase;
        color: #0054a0;
    }

    .clearfix {
        display: table;
    }

    .section-videos, .section-aotw {
        width: 500px;
    }

    .aotw {
        position: relative;
        min-height: 546px;
        padding: 17px;
        margin: 0 auto;
        text-align: center;
        background: #282828;
        box-shadow: 0 0 50px rgba(0, 0, 0, 0.6);
        width: 100%;
    }

    .aotw-img {
        height: 546px;
    }
</style>
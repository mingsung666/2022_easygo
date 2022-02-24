<template>
    <div class="main">
        <div class="journey">
            <div class="cover">
                <img src="../../assets/img/journey-cover.png" alt="">
            </div>
            <div class="tab-wrapper">
                <div class="tab-item">
                    <span class="on">行程</span>
                </div>
                <div class="tab-item">
                    <span>想去景點</span>
                </div>
                <div class="line"></div>
            </div>
            <div class="journey-plan">
                <div class="date-wrapper">
                    <div class="date-item on">
                        <span class="date">12月16日</span>
                        <span class="day">第一天</span>
                    </div>
                    <div class="date-item">
                        <span class="date">12月17日</span>
                        <span class="day">第二天</span>
                    </div>
                    <div class="date-item">
                        <span class="date">12月18日</span>
                        <span class="day">第三天</span>
                    </div>
                    <div class="date-item">
                        <span class="date">12月19日</span>
                        <span class="day">第四天</span>
                    </div>
                </div>
                <div class="first-day-wrapper">
                    <div class="title-wrapper">
                        <i class="ri-arrow-down-s-fill"></i>
                        <span class="title">第一天,星期四</span>
                        <span class="data">開始時間10:00‧2個地點‧遊玩時間1小時</span>
                    </div>
                    <div class="first-day">
                        <div class="attraction-wrapper">
                            <div class="attraction">
                                <div class="number">
                                    <span>1</span>
                                </div>
                                <img src="../../assets/img/attraction-1.png" alt="">
                                <div class="information">
                                    <div class="attraction-name info-item">
                                        <i class="ri-map-pin-line"></i>
                                        <span>松本神社</span>
                                    </div>
                                    <div class="activity-data">
                                        <div class="time info-item">
                                            <i class="ri-timer-line"></i>
                                            <span>10:00-10:40</span>
                                        </div>
                                        <div class="target info-item">
                                            <i class="ri-flag-2-line"></i>
                                            <span>遊覽景點</span>
                                        </div>
                                    </div>
                                    <div class="about">
                                        <input type="text" placeholder="在此添加景點描述或筆記等...">
                                    </div>
                                </div>
                            </div>
                            <div class="opinion-wrapper">
                                <div class="opinion">
                                    <div class="like">
                                        <i class="ri-heart-3-line"></i>
                                        <span>2</span>
                                    </div>
                                    <div class="dislike">
                                        <i class="ri-dislike-line"></i>
                                        <span>2</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="traffic">
                            <i class="ri-walk-line"></i>
                            <div class="line"></div>
                            <span>5分鐘, 350公尺</span>
                        </div>
                        <div class="add">
                            <i class="ri-map-pin-line"></i>
                            <span>+ 新增景點</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="attraction-list">

            </div>
            <!-- <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div> -->
        </div>
        <div class="map" style="z-index: 0">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14560.781038609779!2d120.69027934602609!3d24.164883973226406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346917e4d6bc7193%3A0xce241baa60f7b29e!2z5aSq5Y6f6LuK56uZ!5e0!3m2!1szh-TW!2stw!4v1644247406778!5m2!1szh-TW!2stw" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@500;700&display=swap');
    @import "../../assets/css/reset.css";
    @import "../../assets/css/bootstrap-5.1.1/dist/css/bootstrap.min.css";
    @import "../../assets/css/journey.css";
</style>
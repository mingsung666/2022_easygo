<template>
    <div class="main">
        <div class="list">
            <div class="item">
                <div class="header">
                    <div class="title">
                        <i class="ri-arrow-down-s-fill"></i>
                        <span>我的任務</span>
                        <i class="ri-lock-line"></i>
                    </div>
                    <div class="separate"></div>
                    <div class="sub-title">
                        <span>進度</span>
                        <span>負責人</span>
                        <span>截止日期</span>
                    </div>
                </div>
                <div class="content">
                    <div class="title">
                        <span>所有人確認出遊日沒問題</span>
                        <div class="preview">
                            <span>5</span>
                            <i class="ri-chat-3-line"></i>
                        </div>
                    </div>
                    <div class="separate"></div>
                    <div class="sub-title">
                        <div class="prog">
                            <i class="ri-chat-poll-line"></i>
                            <span>2/6</span>
                        </div>
                        <div class="principal">
                            <div class="target">
                                <i class="ri-team-line"></i>
                            </div>
                            <span>全體</span>
                        </div>
                        <div class="deadline">
                            <i class="ri-calendar-2-line"></i>
                            <span>11月18日</span>
                        </div>
                    </div>
                </div>
                <div class="add">
                    <input type="text" placeholder="新增事項...">
                </div>
            </div>
            <button class="build">
                <i class="ri-add-line"></i>
                <span>新增項目</span>
            </button>
        </div>
        <div class="detail">
            <div class="header-wrapper">
                <div class="header">
                    <div class="my-mark">
                        <i class="ri-checkbox-circle-line"></i>
                        <span>標記為完成</span>
                    </div>
                    <div class="header-right">
                        <div class="tool">
                            <i class="ri-bar-chart-box-line"></i>
                            <i class="ri-checkbox-line"></i>
                            <i class="ri-attachment-line"></i>
                            <i class="ri-notification-4-line"></i>
                            <i class="ri-price-tag-line"></i>
                        </div>
                        <div class="leave">
                            <i class="ri-arrow-right-line"></i>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-wrapper">
                <div class="content">
                    <div class="title">
                        <span>所有人確認出遊日期沒問題</span>
                    </div>
                    <div class="builder-wrapper">
                        <span>建立者</span>
                        <div class="builder">
                            <img src="../../assets/img/30_1_noBorder.png" alt="">
                            <span>Jacky</span>
                        </div>
                    </div>
                    <div class="target-wrapper">
                        <span>負責對象</span>
                        <div class="target">
                            <i class="ri-account-circle-line"></i>
                            <span>全體成員</span>
                        </div>
                    </div>
                    <div class="deadline-wrapper">
                        <span>截止日期</span>
                        <div class="deadline">
                            <i class="ri-calendar-2-line"></i>
                            <span>11月18日</span>
                        </div>
                    </div>
                    <div class="description">
                        <span>描述</span>
                        <form>
                            <textarea>在11月18號以前都要確認喔，因為要訂機票。</textarea>
                        </form>
                        <!-- <input type="text" placeholder="在11月18號以前都要確認喔，因為要訂機票。"> -->
                    </div>
                    <div class="activity">
                        <div class="option-one">
                            <div class="option">
                                <i class="ri-checkbox-circle-fill"></i>
                                <div class="item-wrapper">
                                    <div class="item">
                                        <span>確認沒問題</span>
                                        <span>3</span>
                                    </div>
                                    <div class="line">
                                        <div class="amount">
                                            <div class="total"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="voter">
                                <img src="../../assets/img/30_1_noBorder.png" alt="">
                                <img src="../../assets/img/30_1_noBorder.png" alt="">
                                <img src="../../assets/img/30_1_noBorder.png" alt="">
                            </div>
                        </div>
                        <div class="option-one">
                            <div class="option">
                                <i class="ri-checkbox-circle-fill"></i>
                                <div class="item-wrapper">
                                    <div class="item">
                                        <span>確認沒問題</span>
                                        <span>3</span>
                                    </div>
                                    <div class="line">
                                        <div class="amount">
                                            <div class="total"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="voter">
                                <img src="../../assets/img/30_1_noBorder.png" alt="">
                                <img src="../../assets/img/30_1_noBorder.png" alt="">
                                <img src="../../assets/img/30_1_noBorder.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="message">
                    <div class="comment">
                        <div class="user">
                            <img src="../../assets/img/30_1_noBorder.png" alt="">
                            <div class="comment-content">
                                <span>Amanda</span>
                                <span class="time">10分鐘前</span>
                                <div class="message-content">
                                    <span>我要17號的時候才能完全確定</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="action">
                        <div class="user">
                            <img src="../../assets/img/30_1_noBorder.png" alt="">
                            <span>Amanda</span>
                            <span>選擇了同意</span>
                            <span class="time">10分鐘前</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="input-wrapper">
                <div class="input">
                    <img src="../../assets/img/30_1_noBorder.png" alt="">
                    <input type="text" placeholder="諮詢問題或留下想法...">
                </div>
            </div>
            
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
    @import "../../assets/css/comm.css";
</style>
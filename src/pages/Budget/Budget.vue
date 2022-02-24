<template>
    <div class="main">
        <div class="budget">
            <div class="result-wrapper">
                <div class="per-person">
                    <span>預算: 一人$12,000</span>
                </div>
                <div class="result">
                    <div class="result-text">
                        <span>支付<span>$10,000</span>公費後您將收回</span>
                        <span>平均分攤</span>
                    </div>
                    <div class="cost">
                        <span>NT$6,000</span>
                    </div>
                </div>
            </div>
            <div class="tab-wrapper">
                <router-link class="tab-item" to="/budget/budgetList">
                    <span :class="{on: tabOn}" @click="tabOn = !tabOn">花費項目</span>
                </router-link>
                <router-link class="tab-item" to="/budget/budgetMember">
                    <span :class="{on: !tabOn}" @click="tabOn = !tabOn">成員費用</span>
                </router-link>
                <div class="line" :style="{left: tabLineLeft}"></div>
            </div>
            <div class="total-wrapper">
                <div class="total">
                    <div class="cost">
                        <span>NT$24,000</span>
                        <i class="ri-arrow-down-s-line"></i>
                    </div>
                    <div class="public-expense">
                        <span>公費: NT$60,000</span>
                    </div>
                </div>
            </div>
            <router-view></router-view>
        </div>
        <div class="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14560.781038609779!2d120.69027934602609!3d24.164883973226406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346917e4d6bc7193%3A0xce241baa60f7b29e!2z5aSq5Y6f6LuK56uZ!5e0!3m2!1szh-TW!2stw!4v1644247406778!5m2!1szh-TW!2stw" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                tabOn: true,
            }
        },
        methods: {
        },
        computed: {
            tabLineLeft() {
                if(this.tabOn) {
                    return "0px"
                }else {
                    return "110px"
                }
            }
        }
    }
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@500;700&display=swap');
    @import "../../assets/css/reset.css";
    @import "../../assets/css/bootstrap-5.1.1/dist/css/bootstrap.min.css";
    @import "../../assets/css/budget.css";
</style>
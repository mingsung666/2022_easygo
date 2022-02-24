<template>
    <nav @click="yoyooyo">
        <div class="nav-wrapper" :style="{height: navWrapperH}">
            <div class="nav-left">
                <router-link to="/home">
                    <div class="logo" :style="{'margin-top': navLogoMT}">
                        <svg id="logo" class="logo-img" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
                            <circle id="椭圆_519" data-name="椭圆 519" cx="4.72" cy="4.72" r="4.72" transform="translate(2.92 2.92)" fill="#61d2bb"/>
                            <circle id="椭圆_520" data-name="椭圆 520" cx="4.72" cy="4.72" r="4.72" transform="translate(27.64 27.64)" fill="#61d2bb"/>
                            <path id="路径_422" data-name="路径 422" d="M50.56,24.72A12.36,12.36,0,1,0,38.2,12.36V24.72Z" transform="translate(-22.92)" fill="#61d2bb"/>
                            <path id="路径_423" data-name="路径 423" d="M24.72,50.56V38.2H12.36A12.36,12.36,0,1,0,24.72,50.56Z" transform="translate(0 -22.92)" fill="#61d2bb"/>
                            <path id="路径_424" data-name="路径 424" d="M38.2,38.2h7.2a2.228,2.228,0,0,1,2.228,2.228v7.2h-7.2A2.228,2.228,0,0,1,38.2,45.4Z" transform="translate(-22.92 -22.92)" fill="#fff"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="29" viewBox="0 0 80 29">
                            <text id="知易簡行" transform="translate(0 23)" fill="#61d2bb" font-size="20" font-family="NotoSansTC-Bold, Noto Sans TC" font-weight="700"><tspan x="0" y="0">知易簡行</tspan></text>
                        </svg>
                    </div>
                </router-link>
                <div id="page" class="page" v-show="this.$route.path !== '/home'" @click="toggleShowPage">
                    <button type="button">
                        <i class="ri-menu-line"></i>
                        <span>{{cangePageTitle}}</span>
                    </button>
                    <ul v-show="showPage">
                        <li><router-link to="/journey">行程計畫</router-link></li>
                        <li><router-link to="/budget">帳目表單</router-link></li>
                        <li><router-link to="/comm">團隊交流</router-link></li>
                    </ul>
                </div>
            </div>
            
            <div id="travel-build-wrapper" class="travel-build-wrapper" :style="{height: navBuildWrapperH}">
                <div class="travel-build">
                    <div class="journey item" :class="{itemOn: showForm === 1}">
                        <div class="title-wrapper"  @click="toggleShowForm(1)">
                            <div class="sub-title-wrapper">
                                <i class="ri-file-mark-line"></i>
                                <span class="title">{{journeyName ? journeyName : "行程名稱"}}</span>
                            </div>
                            <span class="item-description" v-if="$route.path === '/home'">創建一個行程</span>
                        </div>
                        <div class="journey-form item-form">
                            <span class="title">建立行程名稱與描述</span>
                            <div class="name">
                                <span>名稱</span>
                                <input type="text" placeholder="輸入你的行程名稱" v-model="journeyNameInput">
                            </div>
                            <div class="description">
                                <span>描述</span>
                                <form>
                                    <textarea placeholder="針對這趟旅程的描述"></textarea>
                                </form>
                            </div>
                            <div class="buttons">
                                <button class="cancel" @click="showForm = 0">取消</button>
                                <button class="confirm" @click="confirmJourneyName">確認</button>
                            </div>
                        </div>
                    </div>
                    <div class="lineOn" :class="{lineOff: showForm === 1 || showForm === 2}"
                    :style="{height: navLineH}"></div>
                    <div class="date item" :class="{itemOn: showForm === 2}" @click="toggleShowForm(2)">
                        <div class="title-wrapper">
                            <div class="sub-title-wrapper">
                                <i class="ri-calendar-2-line"></i>
                                <span class="title">{{traveDepartlDate}}{{travelBackDate}}</span>
                            </div>
                            <span class="item-description" v-if="$route.path === '/home'">選擇日期</span>
                        </div>
                        <div class="date-form item-form">
                            <i class="ri-arrow-left-s-line"></i>
                            <i class="ri-arrow-right-s-line"></i>
                            <div class="tab-wrapper">
                                <div class="tab-item">
                                    <span class="on">遊玩日期</span>
                                </div>
                                <div class="tab-item">
                                    <span>日期範圍</span>
                                </div>
                                <div class="tab-line"></div>
                            </div>
                            <div class="title">已確定時間，直接選擇遊玩日期</div>
                            <div class="month-wrapper">
                                <div class="month">
                                    <span class="my-month">{{year}}年{{month}}月</span>
                                    <ul class="my-week">
                                        <li>日</li>
                                        <li>一</li>
                                        <li>二</li>
                                        <li>三</li>
                                        <li>四</li>
                                        <li>五</li>
                                        <li>六</li>
                                    </ul>
                                    <div class="my-date">
                                        <ul class="week">
                                            <li v-for="(day, index) in startDayOfWeek" :key="index"></li>
                                            <li :id="index" class="day noSelect" 
                                            v-for="(day, index) in days" 
                                            :key="'days' + index" @click="selectDate">{{day}}</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="month">
                                    <span class="my-month">{{year}}年{{nextMonth}}月</span>
                                    <ul class="my-week">
                                        <li>日</li>
                                        <li>一</li>
                                        <li>二</li>
                                        <li>三</li>
                                        <li>四</li>
                                        <li>五</li>
                                        <li>六</li>
                                    </ul>
                                    <div class="my-date">
                                        <ul class="week">
                                            <li v-for="(day, nIndex) in startDayOfWeek" :key="nIndex"></li>
                                            <li :id="(days + nIndex)" class="day noSelect" 
                                            v-for="(day, nIndex) in nextDays" 
                                            :key="'days' + nIndex" @click="selectDate">{{day}}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="buttons">
                                <button class="cancel" @click="cancelDate">重選</button>
                                <!-- <button class="confirm">確認</button> -->
                            </div>
                        </div>
                    </div>
                    <div class="lineOn" :class="{lineOff: showForm === 2 || showForm === 3}"
                    :style="{height: navLineH}"></div>
                    <div class="member item" :class="{itemOn: showForm === 3}" @click="toggleShowForm(3)">
                        <div class="title-wrapper">
                            <div class="sub-title-wrapper">
                                <i class="ri-group-line"></i>
                                <span class="title">成員</span>
                            </div>
                            <span class="item-description" v-if="$route.path === '/home'">新增成員</span>
                        </div>
                        <div class="member-form item-form">
                            <div class="title">
                                <span>成員</span>
                                <button>
                                    <i class="ri-user-add-line"></i>
                                    <!-- <span>邀請</span> -->
                                </button>
                            </div>
                            <div class="member-wrapper">
                                <div class="member">
                                    <img src="../../assets/img/30_1_noBorder.png" alt="">
                                    <span>Emma</span>
                                </div>
                                <div class="member">
                                    <img src="../../assets/img/30_1_noBorder.png" alt="">
                                    <span>Emma</span>
                                </div>
                                <div class="member">
                                    <img src="../../assets/img/30_1_noBorder.png" alt="">
                                    <span>Emma</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="lineOn" :class="{lineOff: showForm === 3 || showForm === 4}"
                    :style="{height: navLineH}"></div>
                    <div class="budget item" :class="{itemOn: showForm === 4}" @click="toggleShowForm(4)">
                        <div class="title-wrapper">
                            <div class="sub-title-wrapper">
                                <i class="ri-money-dollar-circle-line"></i>
                                <span class="title">{{budgetName}}</span>
                                <!-- {{journeyName ? journeyName : "期望預算"}} -->
                            </div>
                            <span class="item-description" v-if="$route.path === '/home'">該趟旅程的預算</span>
                        </div>
                        <div class="budget-form item-form">
                            <div class="title">
                                <span>該趟旅程您希望花費多少?</span>
                                <button>
                                    <i class="ri-pencil-line"></i>
                                </button>
                            </div>
                            <div class="options">
                                <div class="option" :class="{optionOn: budgetOption === 1}" @click="budgetSelected(1)">
                                    <span>經濟消費</span>
                                    <span>5,000元以內</span>
                                    <span>{{budgetCheap.length}}人選擇</span>
                                </div>
                                <div class="option" :class="{optionOn: budgetOption === 2}" @click="budgetSelected(2)">
                                    <span>普通消費</span>
                                    <span>5,000 ~15,000元</span>
                                    <span>{{budgetOrdinary.length}}人選擇</span>
                                </div>
                                <div class="option" :class="{optionOn: budgetOption === 3}" @click="budgetSelected(3)">
                                    <span>奢侈消費</span>
                                    <span>15,000~25,000元</span>
                                    <span>{{budgetcExpensive.length}}人選擇</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="lineOn" :class="{lineOff: showForm === 4 || showForm === 5}"
                    :style="{height: navLineH}"></div>
                    <div class="degree item" :class="{itemOn: showForm === 5}" @click="toggleShowForm(5)">
                        <div class="title-wrapper">
                            <div class="sub-title-wrapper">
                                <i class="ri-walk-line"></i>
                                <span class="title">{{degreeName}}</span>
                            </div>
                            <span class="item-description" v-if="$route.path === '/home'">一天要遊玩多久</span>
                        </div>
                        <div class="degree-form item-form">
                            <div class="title">
                                <span>您平均一天想要遊玩多久呢?</span>
                                <button>
                                    <i class="ri-pencil-line"></i>
                                </button>
                            </div>
                            <div class="options">
                                <div class="option" :class="{drgreeOn: degreeOption === 1}" @click="degreeSelected(1)">
                                    <span>輕鬆安排</span>
                                    <span>每天遊玩3~6小時</span>
                                    <span>{{degreeEasy.length}}人選擇</span>
                                </div>
                                <div class="option" :class="{drgreeOn: degreeOption === 2}" @click="degreeSelected(2)" >
                                    <span>適中安排</span>
                                    <span>每天遊玩6~9小時</span>
                                    <span>{{degreeOrdinary.length}}人選擇</span>
                                </div>
                                <div class="option" :class="{drgreeOn: degreeOption === 3}" @click="degreeSelected(3)" >
                                    <span>緊湊安排</span>
                                    <span>每天遊玩9~12小時</span>
                                    <span>{{degreeCompact.length}}人選擇</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <router-link :to="journeyName ? '/journey' : '/home'" class="travel-build-button-wrapper" 
                                    v-if="$route.path === '/home'">
                        <button class="travel-build-button" @click="showTip">
                                <i class="ri-add-fill"></i>
                                <span>創建</span>
                        </button>
                    </router-link>
                </div>
            </div>

            <div class="message-wrapper">
                <div class="message">
                    <div class="i-wrapper">
                        <i class="ri-chat-smile-2-line"></i>
                    </div>
                    <ul>
                        <li>
                            <a href="#">
                                <i class="ri-chat-3-line"></i>
                                傳送訊息
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="ri-chat-voice-line"></i>
                                語音討論
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="ri-video-chat-line"></i>
                                分享畫面
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="notice">
                    <div class="i-wrapper">
                        <i class="ri-notification-2-line"></i>
                    </div>
                    <ul>
                        <li>
                            <span>通知</span>
                            <!-- <a href="#">
                                傳送訊息
                            </a> -->
                        </li>
                    </ul>
                </div>
                <div class="user-wrapper">
                    <div class="user">
                        <img src="../../assets/img/user.png" alt="">
                        <i class="ri-arrow-down-s-fill"></i>
                    </div>
                    <ul>
                        <li><a href="#">我的行程</a></li>
                        <li><a href="#">我的收藏</a></li>
                        <li><a href="#">登出</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
    import {mapState} from 'vuex'
    let moment = require("moment")
    export default {
        name: "NavigationBar",
        data() {
            return {
                showForm : 0,
                showPage: false,
                journeyName: '',
                journeyNameInput: '',
                pageTitle: '',

                today:'',
                days: '',
                month: '',
                year: '',
                startDayOfWeek: '',

                nextDays:'',
                nextMonth:'',
                nextStartDayOfWeek:'',

                // departure: 0,
                departDate: '',
                backDate: '',
                
                // 預算
                myBudget: 'myBudget',
                budgetHad: false,
                budgetOption: 0,
                budgetCheap: [],
                budgetOrdinary: [],
                budgetcExpensive: [],
                
                // 程度
                myDegree: 'myDegree',
                degreeHad: false,
                degreeOption: 0,
                degreeEasy: [],
                degreeOrdinary: [],
                degreeCompact: [],
            }
        },
        computed: {
            ...mapState(['travelBuildData',"sum"]),

            navLogoMT() {
                if(this.$route.path === '/home'){
                    return "10px"
                }else {
                    return "0px"
                }
            },

            navWrapperH() {
                if(this.$route.path === '/home'){
                    return "120px"
                }else {
                    return "100px"
                }
            },
            navLineH() {
                if(this.$route.path === '/home'){
                    return "50px"
                }else {
                    return "20px"
                }
            },
            navBuildWrapperH() {
                if(this.$route.path === '/home'){
                    return "80px"
                }else {
                    return "60px"
                }
            },

            cangePageTitle() {
                if(this.$route.path === "/journey") {
                    return "行程計畫"
                }else if(this.$route.path === "/comm") {
                    return "團隊交流"
                }else if(/\/budget/.test(this.$route.path)) {
                    return "帳目表單"
                }else {
                    return ""
                }
            },

            traveDepartlDate() {
                if(!this.departDate && !this.backDate) {
                    return '遊玩日期'
                }else{
                    if((Number(this.departDate)+1) <= this.days) {
                        return this.month + '/' + (Number(this.departDate)+1)
                    }else {
                        return this.nextMonth + '/' + (Number(this.departDate)-this.days+1)
                    }
                }
            },
            travelBackDate() {
                if(this.backDate) {
                    if((Number(this.backDate)+1) <= this.days) {
                        return ' - ' + this.month + '/' + (Number(this.backDate)+1)
                    }else {
                        return ' - ' + this.nextMonth + '/' + (Number(this.backDate)+1 - this.days)
                    }
                }else {
                    return ''
                }
            },

            budgetName() {
                if(this.budgetCheap.length ===  0 
                && this.budgetOrdinary.length ===  0 
                && this.budgetcExpensive.length ===  0 ) {
                    return '期望預算'
                }else {
                    if(this.budgetCheap.length > this.budgetOrdinary.length) {
                        if(this.budgetCheap.length > this.budgetcExpensive.length) {
                            return '5000元以內'
                        }else {
                            return '期望預算'
                        }
                    }else {
                        if(this.budgetOrdinary.length > this.budgetcExpensive.length) {
                            return '5000~15000元'
                        }else {
                            return '15000~25000元'
                        }
                    }
                }
            },

            degreeName() {
                if(this.degreeEasy.length ===  0 
                && this.degreeOrdinary.length ===  0 
                && this.degreeCompact.length ===  0 ) {
                    return '旅遊步調'
                }else {
                    if(this.degreeEasy.length > this.degreeOrdinary.length) {
                        if(this.degreeEasy.length > this.degreeCompact.length) {
                            return '每天遊玩3~6小時'
                        }else {
                            return '旅遊步調'
                        }
                    }else {
                        if(this.degreeOrdinary.length > this.degreeCompact.length) {
                            return '每天遊玩6~9小時'
                        }else {
                            return '每天遊玩9~12小時'
                        }
                    }
                }
            }
        },
        methods: {
            toggleShowForm(index) {
                this.showForm = index;
            },
            showTip() {
                if(!this.journeyName) {
                    alert("請輸入行程名稱")
                }
            },
            toggleShowPage(){
                this.showPage = !this.showPage
            },
            toggleShowPageSp(event) {
                let sp = document.getElementById("page")

                if(sp) {
                    if(!sp.contains(event.target)){
                        this.showPage = false
                    }
                }
            },
            confirmJourneyName() {
                this.journeyName = this.journeyNameInput ;
                this.showForm = 0;
            },

            // 出遊日
            yoyooyo(){
                this.today = moment().format('D');
                this.month = moment().format('M');
                this.year = moment().format('YYYY');
                this.days = moment().daysInMonth();
                this.startDayOfWeek = moment().startOf('month').weekday();

                this.nextDays = moment().startOf('month').subtract(-1, 'month').daysInMonth();
                this.nextMonth = moment().startOf('month').subtract(-1, 'month').format('M');
                this.nextStartDayOfWeek = moment().startOf('month').subtract(-1, 'month').weekday();
                // let date = moment().format('l');
                // console.log(moment().endOf('month').format('DD'))
                // console.log(moment().format('M'))
                // console.log(moment().daysInMonth())
                // console.log(moment().startOf('month').subtract(-1, 'month').format('l'))
                // console.log(moment().startOf('month').subtract(-1, 'month').daysInMonth())
                // console.log(moment().isoWeekday())
                // console.log(moment().startOf('month').weekday())
            },
            selectDate(event) {
                if(!this.departDate) {
                    this.departDate = event.target.id
                    event.target.classList.add('Selected')
                    event.target.classList.remove('noSelect')
                }else if(Number(this.departDate) > Number(event.target.id)) {
                    if(!this.backDate) {
                        document.getElementById(this.departDate).classList.add('noSelect')
                        document.getElementById(this.departDate).classList.remove('Selected')

                        this.departDate = event.target.id
                        event.target.classList.add('Selected')
                        event.target.classList.remove('noSelect')
                    }else {
                        document.getElementById(this.departDate).classList.add('noSelect')
                        document.getElementById(this.departDate).classList.remove('Selected')

                        document.getElementById(this.backDate).classList.add('noSelect')
                        document.getElementById(this.backDate).classList.remove('Selected')

                        this.departDate = event.target.id
                        event.target.classList.add('Selected')
                        event.target.classList.remove('noSelect')

                        this.backDate = ''

                        let days = document.getElementsByClassName('day')

                        for (let i = 0; i < days.length; i++) {
                            if(i > Number(this.backDate)) {
                                days[i].classList.remove('middle')
                            }
                        }
                    }
                }else if(!this.backDate) {
                    this.backDate = event.target.id
                    event.target.classList.add('Selected')
                    event.target.classList.remove('noSelect')
                }else if(this.backDate) {
                    document.getElementById(this.backDate).classList.add('noSelect')
                    document.getElementById(this.backDate).classList.remove('Selected')

                    this.backDate = event.target.id
                    event.target.classList.add('Selected')
                    event.target.classList.remove('noSelect')
                }

                if(this.departDate && this.backDate) {
                    let days = document.getElementsByClassName('day')

                    for (let i = 0; i < days.length; i++) {
                        if(i > Number(this.departDate) && i < Number(this.backDate)) {
                            days[i].classList.add('middle')
                        }
                        if(i > Number(this.backDate)) {
                            days[i].classList.remove('middle')
                        }
                    }
                }
                
            },
            cancelDate() {
                this.showPage = 0
                
                document.getElementById(this.departDate).classList.add('noSelect')
                document.getElementById(this.departDate).classList.remove('Selected')

                document.getElementById(this.backDate).classList.add('noSelect')
                document.getElementById(this.backDate).classList.remove('Selected')

                this.departDate = ''
                this.backDate = ''

                let days = document.getElementsByClassName('day')

                for (let i = 0; i < days.length; i++) {
                    if(i > Number(this.backDate)) {
                        days[i].classList.remove('middle')
                    }
                }
            },

            // 預算
            budgetSelected(index) {
                if(!this.budgetHad) {
                    this.budgetHad = true
                }else {
                    if(this.budgetCheap.find(option => option === this.myBudget)) { 
                        this.budgetCheap.splice(-1,1)
                    }else if(this.budgetOrdinary.find(option => option === this.myBudget)) {
                        this.budgetOrdinary.splice(-1,1)
                    }else if(this.budgetcExpensive.find(option => option === this.myBudget)) {
                        this.budgetcExpensive.splice(-1,1)
                    }
                }
                
                
                if(index === 1) {
                    this.budgetOption = 1;
                    this.budgetCheap.push(this.myBudget);
                }else if(index === 2) {
                    this.budgetOption = 2
                    this.budgetOrdinary.push(this.myBudget);
                }else if(index === 3) {
                    this.budgetOption = 3
                    this.budgetcExpensive.push(this.myBudget);
                }


            },
            
            // 程度
            degreeSelected(index) {
                if(!this.degreeHad) {
                    this.degreeHad = true
                }else {
                    if(this.degreeEasy.find(option => option === this.myDegree)) { 
                        this.degreeEasy.splice(-1,1)
                    }else if(this.degreeOrdinary.find(option => option === this.myDegree)) {
                        this.degreeOrdinary.splice(-1,1)
                    }else if(this.degreeCompact.find(option => option === this.myDegree)) {
                        this.degreeCompact.splice(-1,1)
                    }
                }
                
                
                if(index === 1) {
                    this.degreeOption = 1;
                    this.degreeEasy.push(this.myDegree);
                }else if(index === 2) {
                    this.degreeOption = 2
                    this.degreeOrdinary.push(this.myDegree);
                }else if(index === 3) {
                    this.degreeOption = 3
                    this.degreeCompact.push(this.myDegree);
                }


            }
        },
        watch: {
            showForm(val){
                if(val === 0) {
                    this.journeyNameInput = this.journeyName;
                }
                
            }
        }
    }
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@500;700&display=swap');
    @import "../../assets/css/reset.css";
    @import "../../assets/css/bootstrap-5.1.1/dist/css/bootstrap.min.css";
    @import "../../assets/css/navigationBar.css";
</style>
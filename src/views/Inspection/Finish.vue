<template>
    <div class="login-page">
        <div class="login-nav">
            <div class="back-btn">
                <a @click="$router.go(-1)"><img src="../../assets/images/back-btn.svg"></a>
            </div>
            <div class="login-nav-title">
                <p>Finish Inspection</p>
            </div>
            <div style="width: 26px;"></div>
        </div>
        <div class="login-page-body">
            <div class="container">
                <div class="history-details">
                    <h5>4Runner</h5>
                    <h4>2019 Toyota 4Runner</h4>
                    <div class="name-date">
                        <p>Clement Oluseyi - Lagos State</p>
                    </div>
                </div>
                <div class="chart-box">
                    <div class="charts">
                        <div class="good-chart"><p>12</p>
                            <div class="good-chart-bg"></div>
                        </div>
                        <div class="fair-chart"><p>7</p>
                            <div class="fair-chart-bg"></div>
                        </div>
                        <div class="bad-chart"><p>4</p>
                            <div class="bad-chart-bg"></div>
                        </div>
                    </div>
                </div>

                <div class="history-details">
                    <h5>Inspection Summary</h5>
                    <div class="vehicle-status">
                        <div class="good-4">
                            <div class="good_2"><div class="dot1"></div> G - Good</div>
                            <p>12</p>
                        </div>
                        <div class="divider"></div>
                        <div class="good-4">
                            <div class="fair_2"><div class="dot2"></div> F - Fair</div>
                            <p>7</p>
                        </div>
                        <div class="divider"></div>
                        <div class="good-4">
                            <div class="bad_2"><div class="dot3"></div> B - Bad</div>
                            <p>4</p>
                        </div>
                    </div>
                    <div class="note-warning">
                        <div class="noted_icon">i</div>
                        <p>15 inspection point not selected</p>
                    </div>
                </div>

                <div class="login">
                    <router-link to="SelectPlan">
                        <div class="start-inspection3">
                            <div></div>
                            <button class="inspect-btn2">Submit Inspection</button>
                            <div class="inspect-icons2">
                                <img src="../../assets/images/next.svg" class="bounce-1">
                            </div>
                        </div>
                    </router-link>
                </div>
                <div class="finish_footer">
                    <p>Your points and inspections will be upload and converted to pdf, then mailed to you.</p>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "Finish.vue"
    }
</script>

<style scoped>
    a{
        text-decoration: none;
    }
    a:hover, a:focus, a:active{
        text-decoration: none;
    }
    .chart-box{
        background: #E5E5E5;
        border: 1px solid #D8D8D8;
        border-radius: 5px;
        padding: 1rem 1rem 0 1rem;
        width: 100%;
        height: 260px;
    }
    .charts{
        display: flex;
        align-items: flex-end;
        text-align: center;
    }
    .charts p{
        font-family: Avenir-Heavy;
        font-size: 16px;
        color: #000000;
        margin-bottom: 0;
    }
    .good-chart-bg{
        background: #218C74;
        width: 60px;
        height: 220px;
        margin-right: 15px;
    }
    .fair-chart-bg{
        background: #E67E22;
        width: 60px;
        height: 130px;
        margin-right: 15px;
    }
    .bad-chart-bg{
        background: #FF1744;
        width: 60px;
        height: 85px;
    }
    .good-4{
        text-align: center;
    }
    .good-4 p{
        font-family: Avenir-Heavy;
        font-size: 16px;
        color: #000000;
        margin-bottom: 0;
    }
    .divider{
        border-right: 1px solid #979797;
    }
    .note-warning{
        display: flex;
        border-bottom: 1px solid #E3E3E3;
        padding: 2rem 0 1rem;
    }
    .noted_icon{
        height: 25px;
        width: 25px;
        border-radius: 50%;
        color: #ffffff;
        background: #000000;
        text-align: center;
        margin-right: 10px;
    }
    .note-warning p{
        font-family: Avenir-Medium;
        font-size: 19px;
        color: #4A4A4A;
        margin-bottom: 0;
    }
    .history-details{
        padding: 1.5rem 0 0;
    }
    .history-details h5{
        font-family: Avenir-Book;
        font-size: 16px;
        color: #147663;
        margin-bottom: 0;
    }
    .history-details h4{
        font-family: Avenir-Medium;
        font-size: 19px;
        color: #4A4A4A;
        margin-bottom: 0;
        padding-bottom: 5px;
    }
    .name-date{
        display: flex;
        justify-content: space-between;
    }
    .name-date p{
        font-family: Avenir-Book;
        font-size: 14px;
        color: #9B9B9B;
        margin-bottom: 0;
        padding-bottom: 8px;
    }
    .finish_footer p{
        font-family: Avenir-Book;
        font-size: 15px;
        color: #A0A0A0;
        text-align: center;
    }

</style>
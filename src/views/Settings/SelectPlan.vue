<template>
    <div class="login-page">
        <div class="login-nav">
            <div class="back-btn">
                <a @click="$router.go(-1)"><img src="../../assets/images/back-btn.svg"></a>
            </div>
            <div class="login-nav-title">
                <p>Select Plan</p>
            </div>
            <div style="width: 26px;"></div>
        </div>
        <div class="login-page-body">
            <div class="container">
                <form action="" class="form-inspect-section">
                    <div class="select_plan_text">
                        <h5>Basic</h5>
                        <p>	• 	With the <b>Basic</b> plan you can Inspect 1 to 20 Cars a month.</p>
                    </div>
                    <div class="select_plan_text">
                        <h5>Pro</h5>
                        <p> • 	With the <b>Pro</b> plan you can Inspect 20 to 50 Cars a month.</p>
                    </div>
                    <div class="select_plan_text">
                        <h5>Premium</h5>
                        <p> • 	With the <b>Premium</b> plan you’ll get unlimited Cars Inspection every month. </p>
                    </div>

                    <div class="select_plan_box">
                        <router-link to="AddCardBasic">
                        <div class="select_plan_box1">
                            <h5>$28</h5>
                            <h4>Basic</h4>
                            <p>10 Cars<br>Inspection a Month</p>
                        </div></router-link>
                        <router-link to="AddCardPro">
                        <div class="select_plan_box2">
                            <h5>$55</h5>
                            <h4><img src="../../assets/images/pro-img.svg"></h4>
                            <p>50 Cars<br>Inspection a Month</p>
                        </div></router-link>
                        <router-link to="AddCard">
                        <div class="select_premium">
                            <!--<div class="select_premium_badge">-->
                                <!--<div></div>-->
                                <!--<div class="promo-badge">-->
                                    <!--<p>12%</p>-->
                                    <!--<small>off</small>-->
                                <!--</div>-->
                            <!--</div>-->
                            <div class="promo-badge">
                                <p>12%</p>
                                <small>off</small>
                            </div>
                            <div class="select_plan_box3">
                                <h5>$278</h5>
                                <h4><img src="../../assets/images/premium-img.svg"></h4>
                                <p>Unlimited Cars<br>Inspection a Month</p>
                            </div>
                        </div></router-link>

                    </div>

                    <div class="login">
                        <router-link to="AddCard">
                            <div class="start-inspection2">
                                <div></div>
                                <button class="inspect-btn2">Select this Package</button>
                                <div class="inspect-icons2">
                                    <img src="../../assets/images/next.svg" class="bounce-1">
                                </div>
                            </div>
                        </router-link>
                    </div>
                </form>

            </div>
            <div class="logo_footer">
                <p>As you select your plan, your transactions <br>are safe and secure</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SelectPlan.vue"
    }
</script>

<style scoped>
    a{
        text-decoration: none;
    }
    a:hover, a:focus, a:active{
        text-decoration: none;
    }

</style>
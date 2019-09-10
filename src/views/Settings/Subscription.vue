<template>
    <div class="login-page">
        <div class="login-nav">
            <div class="back-btn">
                <a @click="$router.go(-1)"><img src="../../assets/images/back-btn.svg"></a>
            </div>
            <div class="login-nav-title">
                <p>Subscription</p>
            </div>
            <div style="width: 26px;"></div>
        </div>
        <div class="login-page-body">
            <div class="container">
                <div class="login-text-info">
                    <p>Your account is on the <b>Premium Plan</b>, you can as well restore plan or select a new plan.</p>
                </div>

                <div class="premium_box">
                    <h4>$278</h4>
                    <div class=""><img src="../../assets/images/premium.svg" ></div>
                    <p>Unlimited Cars Inspection a Month</p>
                </div>
            </div>
            <div class="login container">
                <router-link to="SelectPlan">
                    <div class="start-inspection3">
                        <div></div>
                        <button class="inspect-btn2">Select New Plan</button>
                        <div class="inspect-icons2">
                            <img src="../../assets/images/next.svg" class="bounce-1">
                        </div>
                    </div>
                </router-link>
            </div>
            <router-link to="RestorePlan"><div class="restore-plan">
                <p>Restore Plan</p>
            </div></router-link>
            <div class="logo_footer">
                <img src="../../assets/images/inspect-my-ride-grey.svg" alt="logo">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Subscription.vue"
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
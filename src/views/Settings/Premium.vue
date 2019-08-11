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
            <div></div>
            <div class="container">
                <div class="text-center pb-2"><img src="../../assets/images/premium.svg" ></div>
                <div class="login-text-info">
                    <p>Your Premium Plan was successful and your card was successfully saved</p>
                </div>

            </div>
            <div class="text-center pb-2">
                <img src="../../assets/images/inspect-my-ride-logo-green.svg" >
            </div>
            <div class="login container">
                <p class="premium-text-info">Now you will save time by Inspecting Cars automatically without distractions</p>
                <router-link to="Landing"><button class="login-btn">Return Home</button></router-link>
            </div>
            <div class="logo_footer">
                <img src="../../assets/images/inspect-my-ride-grey.svg" alt="logo">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Premium.vue"
    }
</script>

<style scoped>
    .login-text-info{
        text-align: center;
    }
    .premium-text-info{
        font-family: Avenir-Medium;
        font-size: 13px;
        color: #9B9B9B;
        letter-spacing: 0;
        text-align: center;
        margin-bottom: 0;
        padding: 2rem 0;
    }

</style>
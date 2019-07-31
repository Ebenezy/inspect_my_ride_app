<template>
    <div class="splash-screen2">
        <div></div>
        <div class="inspect_logo2">
            <router-link to="Splash3"><img src="../../assets/images/inspect-my-ride-full-logo.svg"></router-link>
        </div>
        <div class="simplified-text">
            <h2>A <b>Simplified</b> and <b>Comprehensive</b><br>
                way to <b>Inspect</b> a <b>Vehicle</b> before you <b>Buy</b> or <b>Sell</b></h2>
        </div>
        <div class="login-to-existing">
            <router-link to="Splash3"><button class="login-btn"><img src="../../assets/images/key-lock.svg"> Login to Existing Account</button></router-link>
            <div class="signup">
                <router-link to="Splash3"><p>Sign Up Now</p></router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Splash2.vue"
    }
</script>

<style scoped>
    .signup a{
        color: #ffffff;
    }
    .signup{
        padding-bottom: 20px;
    }
    .signup p{
        margin-bottom: 0;
    }

</style>
<template>
    <div class="splash-screen2">
        <div></div>
        <div class="inspect_logo2">
            <router-link to=""><img src="../../assets/images/inspect-my-ride-full-logo.svg"></router-link>
        </div>
        <div class="simplified-text">
            <h2>A <b>Simplified</b> and <b>Comprehensive</b><br>
                way to <b>Inspect</b> a <b>Vehicle</b><br> before you <b>Buy</b> or <b>Sell</b></h2>
        </div>
        <div class="login-to-existing">
            <router-link to="Login">
                <div class="start-inspection container">
                    <div class="inspect-icons2">
                        <img src="../../assets/images/key-lock.svg">
                    </div>
                    <button class="inspect-btn">Login to Existing Account</button>
                </div>
            </router-link>
            <div class="signup ">
                <router-link to="Signup"><p>Sign Up Now</p></router-link>
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
    a{
        text-decoration: none;
        color: #ffffff;
    }
    a:hover, a:focus, a:active{
        text-decoration: none;
        color: #ffffff;
    }


</style>
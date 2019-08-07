<template>
    <div class="login-page">
        <div class="login-nav">
            <div class="back-btn">
                <a @click="$router.go(-1)"><img src="../../assets/images/back-btn.svg"></a>
            </div>
            <div class="login-nav-title">
                <p>Login to existing account</p>
            </div>
            <div style="width: 26px;"></div>
        </div>
        <div class="login-page-body">
            <div class="container">
                <div class="login-text-info">
                    <p>Kindly provide your Email to get access your vehicle history and update.</p>
                </div>
                <form action="" class="form-input-section">
                    <div class="enter-email">
                        <input type="email" name="email" class="input-email" placeholder="Email">
                    </div>
                    <div class="enter-email">
                        <input type="text" name="text" class="input-email" placeholder="PIN">
                    </div>
                    <div class="login">
                        <router-link to="Landing"><button class="login-btn">Login</button></router-link>
                    </div>
                </form>
                <div class="forgot-pin-section">
                    <router-link to="ForgotPin" class="forgot-pin">Forgot My PIN</router-link>
                    <router-link to="AgentLogin" class="forgot-pin">Agent Login</router-link>
                </div>
            </div>
            <div class="logo_footer">
                <img src="../../assets/images/inspect-my-ride-grey.svg" alt="logo">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Login.vue"
    }
</script>

<style scoped>


</style>
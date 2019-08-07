<template>
    <div class="login-page">
        <div class="login-nav">
            <div class="back-btn">
                <a @click="$router.go(-1)"><img src="../../assets/images/back-btn.svg"></a>
            </div>
            <div class="login-nav-title">
                <p>Forgot PIN</p>
            </div>
            <div style="width: 26px;"></div>
        </div>
        <div class="login-page-body">
            <div class="container">
                <div class="login-text-info">
                    <p>A link will be sent yout email to rest your PIN</p>
                </div>
                <form action="" class="form-input-section">
                    <div class="enter-email">
                        <input type="email" name="email" class="input-email" placeholder="Email">
                    </div>
                    <div class="login">
                        <router-link to="ResetPin"><button class="login-btn">Forgot PIN</button></router-link>
                    </div>
                </form>
            </div>
            <div class="logo_footer">
                <img src="../../assets/images/inspect-my-ride-grey.svg" alt="logo">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ForgotPin.vue"
    }
</script>

<style scoped>

</style>
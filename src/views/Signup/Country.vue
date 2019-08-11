<template>
    <div class="login-page">
        <div class="login-nav">
            <div class="back-btn">
                <a @click="$router.go(-1)"><img src="../../assets/images/back-btn.svg"></a>
            </div>
            <div class="login-nav-title">
                <p>Choose Country</p>
            </div>
            <div style="width: 26px;"></div>
        </div>
        <div class="login-page-body">
            <div class="container">
                <div class="login-text-info">
                    <p>By selecting your country, you will get updates and features in your country.</p>
                </div>
                <form action="" class="form-input-section">
                    <div class="country">
                        <div class="country-flag">
                            <img src="../../assets/images/flag.svg" alt="Flag">
                        </div>
                        <div class="country-ng" >Nigeria</div>
                    </div>
                    <div class="enter-email">
                        <input type="text" name="text" class="input-email" placeholder="City">
                    </div>
                    <div class="login">
                        <router-link to="AddPhoto"><button class="login-btn">Finish</button></router-link>
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
        name: "Country.vue"
    }
</script>

<style scoped>

</style>
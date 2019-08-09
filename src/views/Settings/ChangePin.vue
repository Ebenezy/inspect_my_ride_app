<template>
    <div class="login-page">
        <div class="login-nav">
            <div class="back-btn">
                <a @click="$router.go(-1)"><img src="../../assets/images/back-btn.svg"></a>
            </div>
            <div class="login-nav-title">
                <p>Change PIN</p>
            </div>
            <div style="width: 26px;"></div>
        </div>
        <div class="login-page-body">
            <div class="container">
                <div class="login-text-info">
                    <p>We secure your inspections and make it easier for you get access to your files</p>
                </div>
                <form action="" class="form-input-section">
                    <div class="enter-email">
                        <input type="email" name="email" class="input-email" placeholder="Current PIN">
                    </div>
                    <div class="enter-email">
                        <input type="email" name="email" class="input-email" placeholder="New PIN">
                    </div>
                    <div class="enter-email">
                        <input type="text" name="text" class="input-email" placeholder="Repeat PIN">
                    </div>
                    <div class="login">
                        <button class="login-btn">Change PIN</button>
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
        name: "ChangePin.vue"
    }
</script>

<style scoped>

</style>
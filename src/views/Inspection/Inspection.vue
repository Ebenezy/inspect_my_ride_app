<template>
    <div class="login-page">
        <div class="login-nav">
            <div class="back-btn">
                <a @click="$router.go(-1)"><img src="../../assets/images/back-btn.svg"></a>
            </div>
            <div class="login-nav-title">
                <p>Vehicle Inspection</p>
            </div>
            <div style="width: 26px;"></div>
        </div>
        <div class="login-page-body">
            <div class="container">
                <form action="" class="form-inspect-section">
                    <div class="enter-email">
                        <input type="email" name="email" class="input-email" placeholder="Client's Name">
                    </div>
                    <div class="btop">
                        <div class="inspection-dropdown">
                            <div class="dropdown">
                                <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">Exterior</button>
                                <div class="dropdown-menu">
                                    <a class="dropdown-item">Login</a>
                                    <a class="dropdown-item" href="#">Link</a>
                                    <a class="dropdown-item" href="#">Link</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="login">
                        <router-link to="">
                            <div class="start-inspection2">
                                <button class="inspect-btn">Complete Inspection</button>
                                <div class="inspect-icons2">
                                    <img src="../../assets/images/next-btn.svg">
                                </div>
                            </div>
                        </router-link>
                    </div>
                </form>

            </div>
            <div class="logo_footer">

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Inspection.vue"
    }
</script>

<style scoped>

</style>
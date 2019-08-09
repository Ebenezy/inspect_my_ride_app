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
                    <div class="enter-email">
                        <input type="email" name="email" class="input-email" placeholder="Client's Name">
                    </div>
                    <div class="btop">
                        <p class="inspection_sub_topic">Place of Inspection *</p>
                        <div class="enter-email">
                            <input type="email" name="email" class="input-email" placeholder="Address">
                        </div>

                    </div>

                    <div class="login">
                        <router-link to="">
                            <div class="start-inspection2">
                                <div></div>
                                <button class="inspect-btn2">Book Inspection</button>
                                <div class="inspect-icons2">
                                    <img src="../../assets/images/next.svg" class="bounce-1">
                                </div>
                            </div>
                        </router-link>
                    </div>
                </form>

            </div>
            <div class="logo_footer">
                <p>With Information Provided, our Agents <br>will come and inspect your vehicle</p>
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

</style>
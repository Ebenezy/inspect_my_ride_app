<template>
    <div class="landing-page">
        <div class="landing-page-inner">
            <div class="menu-btn">
                <router-link to="Settings"><img src="../../assets/images/menu-btn.svg"></router-link>
            </div>
            <div class="inspect_logo2">
                <router-link to="Splash3"><img src="../../assets/images/inspect-my-ride-full-logo.svg"></router-link>
            </div>
            <div class="simplified-text">
                <h2>Hi <b>David</b>,<br>
                    what would you like to do today?</h2>
            </div>
            <div class="login-to-existing ">
                <router-link to="StartInspection">
                    <div class="start-inspection">
                        <div class="inspect-icons">
                            <img src="../../assets/images/car-icon.svg">
                        </div>
                        <button class="inspect-btn">Start New Inspection</button>
                    </div>
                </router-link>
                <router-link to="History">
                    <div class="start-inspection">
                        <div class="inspect-icons">
                            <img src="../../assets/images/book-icon.svg">
                        </div>
                        <button class="inspect-btn">Inspection History</button>
                    </div>
                </router-link>
                <router-link to="Booking">
                    <div class="start-inspection">
                        <div class="inspect-icons">
                            <img src="../../assets/images/date-icon.svg">
                        </div>
                        <button class="inspect-btn">Book an Inspection</button>
                    </div>
                </router-link>

            </div>
            <div class="inspect_logo">
                <img src="../../assets/images/inspect2.svg">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Landing.vue"
    }
</script>

<style scoped>

</style>
<template>
    <div class="landing-page">
        <div class="landing-page-inner">
            <div class="menu-btn">
                <!--<router-link to="Settings"><img src="../../assets/images/menu-btn.svg"></router-link>-->
                <div>
                    <b-button v-b-modal.modal-center class="menu-button"><img src="../../assets/images/menu-btn.svg"></b-button>

                    <b-modal id="modal-center" hide-footer hide-header centered >
                        <div class="my-profile">
                            <div><img src="../../assets/images/myprofile.svg"></div>
                            <div>
                                <h5>My Profile</h5>
                                <p>Clement Oluwaseyi</p>
                            </div>
                        </div>
                        <div class="my-profile">
                            <div><img src="../../assets/images/country.svg"></div>
                            <div>
                                <h5>Country</h5>
                                <p>Lagos, Nigeria</p>
                            </div>
                        </div>
                        <router-link to="Settings"><div class="my-profile">
                            <div><img src="../../assets/images/settings.svg"></div>
                            <div>
                                <h5>Settings</h5>
                                <p>Subscription, Push Notification, About,…</p>
                            </div>
                        </div></router-link>
                    </b-modal>
                </div>
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
    a{
        text-decoration: none;
    }
    a:hover, a:focus, a:active{
        text-decoration: none;
    }
    .menu-button{
        border: none;
        background: none;
    }
    .modal.show .modal-dialog {
        -webkit-transform: none;
        transform: none;
        align-items: flex-end !important;
    }
    .my-profile{
        display: flex;
        background: #d8d8d8;
        box-shadow: 0 2px 4px 0 rgba(0,0,0,0.16);
        border-radius: 15px;
        padding: 10px;
        margin-bottom: 1rem;
    }
    .my-profile img{
        padding-right: 1rem;
    }
    .my-profile h5{
        font-family: Avenir-Heavy;
        font-size: 16px;
        color: #000000;
        letter-spacing: 0;
        margin-bottom: 0;
        padding-top: 10px;
    }
    .my-profile p{
        font-family: Avenir-Roman;
        font-size: 13px;
        color: #4A4A4A;
        letter-spacing: 0;
        margin-bottom: 0;
    }

</style>
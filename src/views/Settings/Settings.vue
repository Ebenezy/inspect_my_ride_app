<template>
    <div class="login-page">
        <div class="login-nav">
            <div class="back-btn">
                <a @click="$router.go(-1)"><img src="../../assets/images/back-btn.svg"></a>
            </div>
            <div class="login-nav-title">
                <p>Settings</p>
            </div>
            <div style="width: 26px;"></div>
        </div>
        <div class="login-page-body">
            <div class="container">
                <router-link to="ChangePin"><div class="menu-info">
                    <p>Change PIN</p>
                </div></router-link>
                <router-link to="Subscription"><div class="menu-info">
                    <p>Subscription</p>
                </div></router-link>
                <router-link to=""><div class="menu-info">
                    <p>App Version Info</p>
                </div></router-link>
                <router-link to=""><div class="menu-info">
                    <p>Send Feedback</p>
                </div></router-link>
                <div class="menu-info2">
                    <p>Push Notification</p>
                    <switches v-model="enabled" color="green" type-bold="true" class="switch_doggle"></switches>
                </div>
                <div class="menu-info">
                    <p>Signout from this device</p>
                </div>

            </div>
            <div class="logo_footer">
                <img src="../../assets/images/inspect-my-ride-grey.svg" alt="logo">
            </div>
        </div>
    </div>
</template>

<script>
    import Switches from 'vue-switches';

    export default {
        name: "Settings.vue",
        components: {
            Switches
        },
        data() {
            return {
                switches: true,
                enabled: false,

            }
        },
        methods: {

        }

    }
</script>

<style lang="scss">
    .vue-switcher-theme--custom {
        &.vue-switcher-color--blue {
            div {
                background-color: lighten(blue, 10%);

                &:after {
                    // for the circle on the switch
                    background-color: darken(blue, 5%);
                }
            }

            &.vue-switcher--unchecked {
                div {
                    background-color: lighten(blue, 30%);

                    &:after {
                        background-color: lighten(blue, 10%);
                    }
                }
            }
        }
    }

</style>
<style scoped>
    a{
        text-decoration: none;
    }
    a:hover, a:focus, a:active{
        text-decoration: none;
    }
    .vue-switcher{
        padding-top: 10px;
    }
</style>
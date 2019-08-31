<template>
    <div class="login-page">
        <div class="login-nav">
            <div class="back-btn">
                <a @click="$router.go(-1)"><img src="../../assets/images/back-btn.svg"></a>
            </div>
            <div class="login-nav-title">
                <p>New Inspection</p>
                <small class="vehicle-details">Vehicle Details</small>
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
                        <div class="row">
                            <div class="col-2">
                                <div class="inspect-icons2">
                                    <img src="../../assets/images/car-icon2.svg">
                                </div>
                            </div>
                            <div class="col-10">
                                <div class="enter-car-details">
                                    <div class="manufacturer-model">
                                        <div class="manufacturer">
                                            <p class="">Body Type</p>
                                            <input class="input-manufacturer" type="text" name="Manufacturer" placeholder="SUV">
                                        </div>
                                        <div class="manufacturer">
                                            <p class="">Transmission</p>
                                            <input class="input-manufacturer" type="text" name="Manufacturer" placeholder="Automatic">
                                        </div>
                                    </div>
                                    <div class="manufacturer-model">
                                        <div class="manufacturer">
                                            <p class="">Drive Type</p>
                                            <input class="input-manufacturer" type="text" name="Manufacturer" placeholder="4WD">
                                        </div>
                                        <div class="manufacturer">
                                            <p class="">Engine Type</p>
                                            <input class="input-manufacturer" type="text" name="Manufacturer" placeholder="6 Cylinder">
                                        </div>
                                    </div>
                                    <div class="manufacturer-model">
                                        <div class="manufacturer">
                                            <p class="">Interior Color</p>
                                            <input class="input-manufacturer" type="text" name="Manufacturer" placeholder="Black">
                                        </div>
                                        <div class="manufacturer">
                                            <p class="">Exterior Color</p>
                                            <input class="input-manufacturer" type="text" name="Manufacturer" placeholder="Grey">
                                        </div>
                                    </div>
                                    <div class="manufacturer">
                                        <p class="">Door Count</p>
                                        <input class="input-manufacturer" type="text" name="Manufacturer" placeholder="4">
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="fixed-bottom container">
                        <div class="login">
                            <router-link to="Inspection">
                                <div class="start-inspection">
                                    <div class="inspect-icons">
                                        <img src="../../assets/images/save-icon.svg">
                                    </div>
                                    <button class="inspect-btn">Save to Start Inspection</button>
                                </div>
                            </router-link>
                        </div>
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
        name: "ContinueInspection.vue"
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
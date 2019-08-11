<template>
    <div class="login-page">
        <div class="login-nav">
            <div class="back-btn">
                <a @click="$router.go(-1)"><img src="../../assets/images/back-btn.svg"></a>
            </div>
            <div class="login-nav-title">
                <p>Book Inspection</p>
                <small class="vehicle-details">Inspection Details</small>
            </div>
            <div style="width: 26px;"></div>
        </div>
        <div class="login-page-body">
            <div class="container">
                <form action="" class="form-inspect-section" method="post">
                    <div class="enter-email">
                        <input type="email" name="email" class="input-email" placeholder="Client's Name">
                    </div>
                    <div class="btop">
                        <div class="row">
                            <div class="col-2">
                                <div class="inspect-icons2">

                                </div>
                            </div>
                            <div class="col-10">
                                <div class="enter-car-details">
                                    <div class="manufacturer">
                                        <p class="">Vehicle Build Date</p>
                                        <datetime v-model="date" placeholder="July 2019" class="input-manufacturer"></datetime>
                                    </div>
                                    <div class="manufacturer">
                                        <p class="">Country/State</p>
                                        <country-select v-model="country" :country="country" topCountry="NG" class="country-state"/>
                                        <region-select v-model="region" :country="country" :region="region" class="country-state"/>
                                    </div>
                                    <div class="manufacturer">
                                        <p class="">Door Count</p>
                                        <input class="input-manufacturer" type="text" name="Manufacturer" placeholder="4">
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="btop">
                        <p class="inspection_sub_topic">Place of Inspection *</p>
                        <div class="enter-email">
                            <input type="email" name="email" class="input-email" placeholder="Address">
                        </div>
                        <div class="enter-email">
                            <input type="email" name="email" class="input-email" placeholder="Local Government">
                        </div>
                        <p class="inspection_sub_topic">Summary (Optional)</p>
                        <textarea class="summary-input" placeholder="Write here"></textarea>
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
    import { Datetime } from 'vue-datetime';

    export default {
        name: "Booking.vue",
        components: {
            datetime: Datetime,
        },
        data() {
            return {
                date: null,
                country: null,
                region: null
            }
        }
    }
</script>

<style scoped>
    .inspection_sub_topic{
        font-family: Avenir-Heavy;
        font-size: 18px;
        color: #000000;
        letter-spacing: 0;
        padding-top: 1.5rem;
    }
    .summary-input{
        resize: none;
        background: #DEDEDE;
        border-radius: 8px;
        font-family: Avenir-Roman;
        font-size: 18px;
        color: #4A4A4A;
        letter-spacing: 0;
        width: 100%;
        height: 165px;
        border: none;
        padding: 15px;
    }

</style>
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
                        <input type="email" name="email" class="input-email" placeholder="Title of Inspection">
                    </div>
                    <div class="enter-email">
                        <datetime v-model="date" placeholder="Date of Inspection" class="input-email"></datetime>
                        <!--<input type="text" name="text" class="input-email" placeholder="Date of Inspection">-->
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
                                            <p class="">Manufacturer</p>
                                            <!--<model-select :options="options"-->
                                                          <!--v-model="item"-->
                                                          <!--class="input-manufacturer"-->
                                                          <!--placeholder="Hyundai">-->
                                            <!--</model-select>-->
                                            <input class="input-manufacturer" type="text" name="Manufacturer" placeholder="Hyundai">
                                        </div>
                                        <div class="manufacturer">
                                            <p class="">Model</p>
                                            <input class="input-manufacturer" type="text" name="Manufacturer" placeholder="i30">
                                        </div>
                                    </div>
                                    <div class="manufacturer">
                                        <p class="">Mileage</p>
                                        <input class="input-manufacturer" type="text" name="Manufacturer" placeholder="65,013">
                                    </div>
                                    <div class="manufacturer">
                                        <p class="">VIN</p>
                                        <input class="input-manufacturer" type="text" name="Manufacturer" placeholder="JUY342174826193613">
                                    </div>
                                    <div class="manufacturer-model2">
                                        <img src="../../assets/images/barcode.jpg" style="width: 65%;">
                                        <div class="or">OR</div>
                                        <img src="../../assets/images/qrcode.jpg">
                                    </div>
                                    <div class="manufacturer">
                                        <p class="">Vehicle Build Date</p>
                                        <datetime v-model="date" placeholder="July 2019" class="input-manufacturer"></datetime>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="btop">
                        <div class="row">
                            <div class="col-2">
                                <div class="inspect-icons2">
                                    <img src="../../assets/images/checked.svg">
                                </div>
                            </div>
                            <div class="col-10">
                                <div class="enter-car-details">
                                    <div class="manufacturer">
                                        <p class="">Vehicle Registration</p>
                                        <input class="input-manufacturer" type="text" name="Manufacturer" placeholder="EKY 124 LE">
                                    </div>
                                    <div class="manufacturer">
                                        <p class="">Country/State</p>
                                        <country-select v-model="country" :country="country" topCountry="NG" class="country-state"/>
                                        <region-select v-model="region" :country="country" :region="region" class="country-state"/>
                                    </div>
                                    <div class="manufacturer2">
                                        <p>Leave here blank if Registration isn’t available</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="login">
                        <router-link to="ContinueInspection">
                            <div class="start-inspection3">
                                <div></div>
                                <button class="inspect-btn2">Continue</button>
                                <div class="inspect-icons2">
                                    <img src="../../assets/images/next.svg" class="bounce-1">
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
    import { Datetime } from 'vue-datetime';
    // import { ModelSelect } from 'vue-search-select'

    export default {
        name: "StartInspection.vue",
        components: {
            datetime: Datetime,
            // ModelSelect
        },
        data() {
            return {
                date: null,
                country: null,
                region: null,
                options: [
                    { value: '1', text: 'Hyundai' },
                    { value: '2', text: 'Toyota' },
                    { value: '3', text: 'Mercedes' },
                    { value: '4', text: 'Honda' },
                    { value: '5', text: 'Range' }
                ],
                item: {
                    value: '',
                    text: ''
                },
            }
        },
        methods: {
            reset () {
                this.item = {}
            },
            selectFromParentComponent1 () {
                // select option from parent component
                this.item = this.options[0]
            }
        },
    }
</script>

<style scoped>
    .or{
        padding-top: 10px;
        font-family: Avenir-Medium;
        font-size: 19px;
        color: #4A4A4A;
    }
    a{
        text-decoration: none;
        color: #ffffff;
    }
    a:hover, a:focus, a:active{
        text-decoration: none;
        color: #ffffff;
    }
    .manufacturer2{
        padding-bottom: 2rem;
    }

</style>
<template>
    <div class="login-page">
        <div class="login-nav">
            <div class="back-btn">
                <a @click="$router.go(-1)"><img src="../../assets/images/back-btn.svg"></a>
            </div>
            <div class="login-nav-title">
                <p>Add Card</p>
            </div>
            <div style="width: 26px;"></div>
        </div>
        <div class="login-page-body">
            <div class="container">
                <div class="premium_box">
                    <h4>$55</h4>
                    <div class=""><img src="../../assets/images/pro-img.svg" style="width: 63px;"></div>
                    <p>Unlimited Cars Inspection a Month</p>
                </div>
                <div class="premium_box">
                    <h5>Add your details</h5>
                    <div class="lock_green">
                        <div><img src="../../assets/images/lock_green.svg" ></div>
                        <p>Your card is being Protected and Processed by Paystack, everything is secure and sealed. </p>
                    </div>
                    <div class="card-entry">
                        <div class="card_number">
                            <label >Card Number</label><br>
                            <the-mask :mask="['####', '#### #### ', '#### #### ####', '#### #### #### ####']" type="tel" name="card-number" class="input-atm-card" placeholder="5126  7619  8372  3221" >
                            </the-mask>
                        </div>
                        <div><img src="../../assets/images/mastercard.svg" ></div>
                    </div>
                    <div class="card-entry">
                        <div class="card_number">
                            <label >Card Holder’s Name</label><br>
                            <input type="text" name="card-number" class="input-atm-card" placeholder="Clement Oluwaseyi">
                        </div>
                    </div>
                    <div class="expiry-date-card">
                        <div class="card-entry mr-1">
                            <div class="card_number">
                                <label >Expiry Date</label><br>
                                <the-mask :mask="['##', '##/#', '##/##']" type="tel" name="card-number" class="input-atm-card" placeholder="04 / 21" >
                                </the-mask>
                            </div>
                        </div>

                        <div class="card-entry ml-1">
                            <div class="card_number">
                                <label >Card Number</label><br>
                                <the-mask :mask="['###', '###', '###']" type="tel" name="card-number" class="input-atm-card" placeholder="251" >
                                </the-mask>
                            </div>
                        </div>
                    </div>
                    <div class="login ">
                        <router-link to="Premium"><button class="login-btn">Choose Plan</button></router-link>
                    </div>
                </div>

            </div>

            <div class="logo_footer">
                <img src="../../assets/images/key_lock.svg" alt="logo" class="key_lock">
                <p>100% secure, payment is being encrypted and processed by</p>
                <img src="../../assets/images/paystack.png" alt="logo" class="paystack_logo">
            </div>
        </div>
    </div>
</template>

<script>
    import {TheMask} from 'vue-the-mask'
    export default {
        components: {TheMask},
        name: "AddCardPro.vue"
    }
</script>

<style scoped>
    a{
        text-decoration: none;
    }
    a:hover, a:focus, a:active{
        text-decoration: none;
    }
    .lock_green{
        display: flex;
        padding: 10px 0 1.5rem 0;
    }
    .lock_green img{
        padding: 5px 10px 0 0;
    }
    .lock_green p{
        font-family: Avenir-Medium;
        font-size: 13px;
        color: #9B9B9B;
        letter-spacing: 0;
        margin-bottom: 0;
    }
    .card-entry{
        border: 1px solid #BCBCBC;
        border-radius: 5px;
        display: flex;
        justify-content: space-between;
        padding: 2px 5px 2px 10px;
        margin-bottom: 10px;
    }
    .card-entry img{
        padding-top: 10px;
    }
    .card_number label{
        font-family: Avenir-Medium;
        font-size: 14px;
        color: #8E8E8E;
        letter-spacing: 0;
        margin-bottom: 0;
    }
    .input-atm-card{
        background: none;
        border: none;
        padding: 1px;
        width: 100%;
        font-family: Avenir-Heavy;
        font-size: 17px;
        color: #4A4A4A;
        letter-spacing: 0;
    }
    .input-atm-card::placeholder {
        color: #ccc;
    }
    .expiry-date-card{
        display: flex;
        justify-content: space-between;
    }
    .premium_box{
        margin-top: 1.5rem;
    }
    .premium_box h5{
        font-family: Avenir-Heavy;
        font-size: 18px;
        color: #9B9B9B;
    }
    .promo-badge{
        margin: 1.5rem 0 0 80%;
    }
    .logo_footer{
        padding: 1.5rem 0;
    }
    .logo_footer p{
        font-family: Avenir-Roman;
        font-size: 12px;
        color: #4A4A4A;
        letter-spacing: 0;
        text-align: center;
        margin-bottom: 0;
        padding: 10px 0;
    }
    .paystack_logo{
        width: 95px;
    }

</style>
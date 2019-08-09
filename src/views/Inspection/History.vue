<template>
    <div class="login-page">
        <div class="login-nav">
            <div class="back-btn">
                <a @click="$router.go(-1)"><img src="../../assets/images/back-btn.svg"></a>
            </div>
            <div class="login-nav-title">
                <p>Inspection History</p>
                <small class="vehicle-details">Here are history of your inspections</small>
            </div>
            <div style="width: 26px;"></div>
        </div>
        <div class="login-page-body">
            <div class="container">
                <div class="history-details">
                    <p>4Runner</p>
                    <h4>2019 Toyota 4Runner</h4>
                    <div class="name-date">
                        <p>Clement Oluseyi - Lagos State</p>
                        <p>12/07/2019</p>
                    </div>
                </div>
                <div class="history-details">
                    <p>4Runner</p>
                    <h4>2019 Toyota 4Runner</h4>
                    <div class="name-date">
                        <p>Clement Oluseyi - Lagos State</p>
                        <p>12/07/2019</p>
                    </div>
                </div>
                <div class="history-details">
                    <p>4Runner</p>
                    <h4>2019 Toyota 4Runner</h4>
                    <div class="name-date">
                        <p>Clement Oluseyi - Lagos State</p>
                        <p>12/07/2019</p>
                    </div>
                </div>
                <div class="history-details">
                    <p>4Runner</p>
                    <h4>2019 Toyota 4Runner</h4>
                    <div class="name-date">
                        <p>Clement Oluseyi - Lagos State</p>
                        <p>12/07/2019</p>
                    </div>
                </div>

            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "History.vue"
    }
</script>

<style scoped>
    .history-details{
        padding: 1.5rem 0 0;
        border-bottom: 1px solid #E3E3E3;
    }
    .history-details p{
        font-family: Avenir-Book;
        font-size: 16px;
        color: #147663;
        margin-bottom: 0;
    }
    .history-details h4{
        font-family: Avenir-Medium;
        font-size: 19px;
        color: #4A4A4A;
        margin-bottom: 0;
        padding-bottom: 5px;
    }
    .name-date{
        display: flex;
        justify-content: space-between;
    }
    .name-date p{
        font-family: Avenir-Book;
        font-size: 14px;
        color: #9B9B9B;
        margin-bottom: 0;
        padding-bottom: 8px;
    }

</style>
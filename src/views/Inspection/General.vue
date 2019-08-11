<template>
    <div class="login-page">
        <div class="login-nav">
            <div class="back-btn">
                <a @click="$router.go(-1)"><img src="../../assets/images/back-btn.svg"></a>
            </div>
            <div class="login-nav-title">
                <p>General Observation</p>
            </div>
            <div style="width: 26px;"></div>
        </div>
        <div class="login-page-body">
            <div class="container">
                <form action="" class="form-inspect-section" method="post">
                    <p class="general_info">What’s your general observation on the <b>Interior?</b> </p>
                    <div class="notes-section">

                        <p class="inspection_sub_topic">Leave a Note</p>
                        <textarea class="summary-input" placeholder="Write here"></textarea>
                    </div>

                    <div class="save_note">
                        <div class="login">
                            <router-link to="Finish"><button class="add-photo-btn">Save Note</button></router-link>
                        </div>
                    </div>

                </form>

            </div>
            <div class="container">
                <div class="notes_footer">
                    <p>Car isn’t starting, the key starter is weak and doesn’t turn in the right direction</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "General.vue"
    }
</script>

<style scoped>
    .general_info{
        font-family: Avenir-Roman;
        font-size: 14px;
        color: #4A4A4A;
        letter-spacing: 0;
    }

</style>
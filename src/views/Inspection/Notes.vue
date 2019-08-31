<template>
    <div class="login-page">
        <div class="login-nav">
            <div class="back-btn">
                <a @click="$router.go(-1)"><img src="../../assets/images/back-btn.svg"></a>
            </div>
            <div class="login-nav-title">
                <p>Notes</p>
            </div>
            <div style="width: 26px;"></div>
        </div>
        <div class="login-page-body">
            <div class="container">
                <form action="" class="form-inspect-section" method="post">
                    <div class="notes-section">
                        <div class="bad_3"><div class="dot3"></div> B - Bad</div>
                        <div class="row">
                            <div class="col-4">
                                <div class="select_img">
                                    <div>
                                        <font-awesome-icon icon="camera" class="camera-icon"/>
                                    </div>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="select_img">
                                    <div>
                                        <font-awesome-icon icon="photo-video" class="camera-icon"/>
                                    </div>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="close-icon">x</div>
                                <div class="select_img">
                                    <img src="../../assets/images/accident-car.jpg">
                                </div>
                            </div>
                        </div>
                        <p class="inspection_sub_topic">Leave a Note</p>
                        <textarea class="summary-input" placeholder="Write here" ></textarea>
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
                    <p >Car isn’t starting, the key starter is weak and doesn’t turn in the right direction</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Notes.vue",

    }
</script>

<style scoped>


</style>
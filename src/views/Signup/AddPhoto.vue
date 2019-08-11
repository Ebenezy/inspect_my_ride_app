<template>
    <div class="add-photo-page">
        <div class="add-photo">
            <div></div>
            <div></div>
            <h5>Hi <b>Clement Oluwaseyi</b></h5>
            <div class="upload-image">
                <div class="upload_image">
                    <img src="../../assets/images/add-image.svg">
                </div>
            </div>
            <h4>Now, add a photo</h4>
            <p>You can either add your picture or company’s <br>logo, this would be used on your completed <br>inspection exports</p>
            <router-link to="Landing"><button class="add-photo-btn">Add Photo</button></router-link>
            <div></div>
            <div></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AddPhoto.vue"
    }
</script>

<style scoped>
    .add-photo-page{
        background-color: #218C74;
        color: #ffffff;
        display: flex;
        justify-content: center;
        flex-direction: column;
        text-align: center;
        height: 100vh;
        width: 100%;
    }
    .add-photo{
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        height: 100vh;
    }
    .add-photo h5{
        font-family: Avenir-Roman;
        font-size: 19px;
        color: #FFFFFF;
        letter-spacing: 0;
    }
    .add-photo h4{
        font-family: Avenir-Roman;
        font-size: 26px;
        color: #FFFFFF;
        letter-spacing: 0;
    }
    .add-photo p{
        font-family: Avenir-Roman;
        font-size: 14px;
        color: #FFFFFF;
        letter-spacing: 0;
        text-align: center;
    }
    .upload-image{
        display: flex;
        justify-content: center;
    }
    .upload_image{
        width: 146px;
        height: 146px;
        color: #ffffff;
        border: 3px solid #FFFFFF;
        border-radius: 50%;
        text-align: center;
        display: flex;
        justify-content: center;
        flex-direction: column;
    }
    .add-photo-btn{
        background: #FFFFFF;
        border-radius: 8px;
        font-family: Avenir-Black;
        font-size: 20px;
        color: #218C74;
        letter-spacing: 0;
        text-align: center;
        padding: 15px 5.5rem;
    }

</style>
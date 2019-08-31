<template>
    <div class="splash-screen">
        <div></div>
        <div class="inspect-logo">
            <router-link to="Splash2"><img src="../../assets/images/inspect-my-ride-logo.svg"></router-link>
        </div>
        <div class="inspect_logo">
            <img src="../../assets/images/inspect.svg">
        </div>
    </div>
</template>

<script>
    export default {
        name: "Splash.vue",
        created(){
            setTimeout( () => this.$router.push({ path: '/Splash2'}), 3000);

        }
    }
</script>

<style scoped>

</style>
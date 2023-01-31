<script>
import Navbar from './utilities/Navbar.vue'
export default {
    name: 'AppMain',
    data() {
        return { informations: [{ text: 'Home' }, { text: 'Order Online' }, { text: 'About' }, { text: 'News' }, { text: 'News' }, { text: 'Contact Us' }, { object: '<font-awesome-icon icon="fa-solid fa-cart-shopping />' }] }
    },
    components: { Navbar }
}
</script>
<template>
    <section>
        <div class="container">
            <navbar :info="informations"></navbar>
            <div class="text-area">
                <h2>Hungry?</h2>
                <h1>Great Food</h1>
                <h1>Delivered</h1>

            </div>
        </div>
    </section>
</template>
<style lang="scss" scoped>
section {
    background-image: url('../assets/img/home-background-hero-scaled.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 600px;
}

.text-area {
    padding-top: 10rem;
}
</style>
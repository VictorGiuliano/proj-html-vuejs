<script>
import Navbar from './utilities/Navbar.vue'
import GenericButton from './utilities/GenericButton.vue';
export default {
    name: 'AppMain',
    data() {
        return { informations: [{ text: 'Home' }, { text: 'Order Online' }, { text: 'About' }, { text: 'News' }, { text: 'News' }, { text: 'Contact Us' }, { object: '<font-awesome-icon icon="fa-solid fa-cart-shopping />' }] }
    },
    components: { Navbar, GenericButton },
    methods: {
        CreateMessage() {
            console.log('Hai cliccato un tasto')
        }
    }
}
</script>
<template>
    <section>
        <div class="container">
            <navbar :info="informations"></navbar>
            <div class="text-area">
                <p>Hungry?</p>
                <h1>Great Food</h1>
                <h1><span>Delivered</span></h1>
            </div>
            <div>
                <generic-button @press-button="CreateMessage"></generic-button>
            </div>

        </div>
    </section>
</template>
<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

section {
    background-image: url('../assets/img/home-background-hero-scaled.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    height: 600px;

    .text-area {
        padding-top: 8rem;
    }

    h1 {
        color: $yellow;
        font-size: 4rem;
    }

    h2,
    p {
        color: $white;
        font-size: 2.5rem;
    }

    div {
        margin-top: 2rem;
    }
}
</style>
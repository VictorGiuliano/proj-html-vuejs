<script>
export default {
    name: 'Navbar',
    props: {
        info: Array
    }
}
</script>
<template>
    <div class="flex-bar">
        <figure>
            <img src="../../assets/img/takeout-logo.png">
        </figure>
        <nav>
            <ul>
                <li v-for="inf in info"><a href="#">{{ inf.text }}</a></li>
                <li><a href="#"><font-awesome-icon icon="fa-solid fa-cart-shopping" /></a></li>
            </ul>
        </nav>
    </div>
</template>
<style lang="scss" scoped>
@use '../../assets/scss/partials/mixins' as *;
@use '../../assets/scss/partials/variables' as *;

.flex-bar {
    padding-top: 3rem;
    @include flexbar;

    img {
        width: auto;
        height: 2.3rem;
    }

    li {
        display: inline;

        a {
            padding: 0 0.6rem;
            color: $white;
            text-decoration: none;
        }
    }
}
</style>
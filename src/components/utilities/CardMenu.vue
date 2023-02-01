<script>
export default {
    name: 'Menu',
    props: {
        menus: Array,
    }
}
</script>
<template>
    <div class="row">
        <figure v-for="menu in menus">
            <div class="container-img">
                <img :src="menu.image">
                <div class="section-title">
                    <h4>{{ menu.title }}</h4>
                </div>
            </div>
        </figure>
        <div class="contain-icon">
            <font-awesome-icon icon="fa-solid fa-leaf" />
            <h4>Vegetarian</h4>
        </div>
        <div class="contain-icon">
            <font-awesome-icon icon="fa-brands fa-pagelines" />
            <h4>Gluten Free</h4>
        </div>
        <div class="contain-icon">
            <font-awesome-icon icon="fa-solid fa-bottle-droplet" />
            <h4>Dairy Free</h4>
        </div>
        <div class="contain-icon">
            <font-awesome-icon icon="fa-solid fa-drumstick-bite" />
            <h4>Keto Friendly</h4>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@use '../../assets/scss/partials/mixins' as *;
@use '../../assets/scss/partials/variables' as *;



.row {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 10px;
    flex-basis: calc(100% / 4);

    figure {
        .container-img {
            position: relative;
        }

        img {
            height: auto;
            max-width: 12rem;
        }

        .section-title {
            width: 100%;
            @include flexcenter;
            position: absolute;
            @include overlay;

            h4 {
                color: $white;
            }
        }
    }

    .contain-icon {
        display: flex;
        flex-direction: column;
        padding-top: 2rem;

        .svg-inline--fa {
            font-size: 3rem;
            padding: 1rem;

        }
    }
}
</style>
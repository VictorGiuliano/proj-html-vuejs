<script>

export default {
    name: "Price",
    props: {
        foods: Array
    },
}
</script>
<template>
    <div class="row">
        <figure v-for="food in foods">
            <img :src="food.image">
            <h4>{{ food.title }}</h4>
            <p>{{ food.price }} {{ food.secondprice }}</p>
        </figure>
    </div>
</template>
<style lang="scss" scoped>
@use '../../assets/scss/partials/variables' as *;

.row {
    display: flex;
    justify-content: center;
    gap: 20px;

    figure {
        img {
            height: auto;
            max-width: 15.6rem;
        }

        text-align: center;

        h4 {
            margin: 1rem;
        }

        p {
            padding-bottom: 1rem;
            color: $red;
        }
    }
}
</style>
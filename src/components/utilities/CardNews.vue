<script>
export default {
    name: 'News',
    props: {
        news: Array
    }
}
</script>
<template>
    <div class="row">
        <figure v-for=" article in news">
            <img :src="article.image" :alt="article.title">
            <h1>{{ article.name }}</h1>
            <p>{{ article.description }}</p>
        </figure>
    </div>
</template>
<style lang="scss" scoped>
@use '../../assets/scss/partials/variables' as *;

.row {
    display: flex;
    gap: 2rem;

    figure {
        text-align: center;
        line-height: 1.5rem;
    }

    img {
        height: auto;
        max-width: 100%;
    }

    h1 {
        padding: 1.6rem;
        font-size: 1.5rem;
    }

    p {
        color: grey;
        font-size: 0.93rem;
    }
}
</style>
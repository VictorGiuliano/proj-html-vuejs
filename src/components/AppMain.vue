<script>
export default {
    name: 'AppMain'
}
</script>
<template>
    <section id="Dishes">
        <div class="container">
            <div class="container-cardOne">
                <div id="#cartOne">
                    <ul>
                        <li><font-awesome-icon icon="fa-solid fa-clock" />24/7 DELIVERY</li>
                        <li><font-awesome-icon icon="fa-solid fa-burger" />OVER 100 DISHES</li>
                        <li><font-awesome-icon icon="fa-solid fa-mobile-screen-button" />IN APP ORDERING</li>
                        <li><font-awesome-icon icon="fa-solid fa-car" />FAST DELIVERY</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>
<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

#Dishes {
    min-height: 900px;
}

.container {
    position: relative;
}

.container-cardOne {
    position: absolute;
    top: -20px;
    left: 0;
    background-color: $white;
    width: 100%;
    padding: 2rem 1rem;

    li {
        display: inline;
        padding: 2rem;
    }
}
</style>
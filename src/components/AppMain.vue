<script>
import CardPrice from './utilities/CardPrice.vue'
import GenericButton from './utilities/GenericButton.vue';
import CardMenu from './utilities/CardMenu.vue';
import CardNews from './utilities/CardNews.vue';
export default {
    name: 'AppMain',
    data() {
        return {
            foods: [{ image: 'src/assets/img/skin-on-fries.jpg', title: 'Skin On Fries', price: '$3.00', secondprice: '- $6.00' }, { image: '/src/assets/img/choco-cookie-frappe.jpg', title: 'Choco Cookie Frappe', price: '$4.99' }, { image: '/src/assets/img/donut-burger.jpg', title: 'The Donut Burger', price: '$6.99' }],
            menu: [{ image: 'src/assets/img/appetizers.jpg', title: 'APPETIZERS' }, { image: 'src/assets/img/burgers.jpg', title: 'BURGERS' }, { image: 'src/assets/img/pizza.jpg', title: 'PIZZA' }, { image: 'src/assets/img/fries.jpg', title: 'FRIES' }, { image: 'src/assets/img/sides.jpg', title: 'SIDES' }, { image: 'src/assets/img/desserts.jpg', title: 'DESSERTS' }, { image: 'src/assets/img/beverages.jpg', title: 'BEVERAGES' }, { image: 'src/assets/img/specials.jpg', title: 'SPECIALS' }],
            newfood: [{ image: 'src/assets/img/pancake-burger.jpg', title: 'Pancake-burger', name: 'NEW: The Pancake Burger', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores quam possimus voluptatum sunt commodi temporibus, numquam reiciendis repellendus ea qui?.' }, { image: 'src/assets/img/new-milkshake-menu.jpg', title: 'Milkshake-menu', name: 'New Milkshake Menu', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores quam possimus voluptatum sunt commodi temporibus, numquam reiciendis repellendus ea qui?.' }]
        }
    },
    components: { CardPrice, GenericButton, CardMenu, CardNews }
}
</script>
<template>
    <section>
        <div id="Dishes">
            <div class="container">
                <div class="container-cardOne">
                    <div id="#cartOne">
                        <header>
                            <ul>
                                <li><font-awesome-icon icon="fa-solid fa-clock" />24/7 DELIVERY</li>
                                <li><font-awesome-icon icon="fa-solid fa-burger" />OVER 100 DISHES</li>
                                <li><font-awesome-icon icon="fa-solid fa-mobile-screen-button" />IN APP ORDERING</li>
                                <li><font-awesome-icon icon="fa-solid fa-car" />FAST DELIVERY</li>
                            </ul>
                        </header>
                        <div id="body-cartOne">
                            <h3>Our Most Popular Dishes</h3>
                        </div>
                        <div class="container-card">
                            <card-price :foods="foods"></card-price>
                        </div>
                        <div class="container-button">
                            <GenericButton />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="images">
        <div class="con-wave">
            <img class="wave" src="../assets/img/wave.svg">
        </div>
        <img class="bkg" src="../assets/img/first-order-background-scaled.jpg">
    </section>
    <section class="Menu">
        <div class="container">
            <div class="title">
                <h2>Menu Categories</h2>
                <GenericButton />
            </div>
            <div class="Cards-menu">
                <card-menu :menus="menu"></card-menu>
            </div>
        </div>
    </section>
    <section class="banner">
        <div class="container">
            <p>Download Our</p>
            <h1>Ordering App</h1>
            <div class="social">
                <img src="../assets/img/app-store-badge-200x67.png">
                <img src="../assets/img/play-store-badge-200x67.png">
            </div>
        </div>
    </section>
    <section class="Latest News">
        <div class="container">
            <div class="title">
                <h2>Latest News</h2>
                <GenericButton />
            </div>
            <div class="News">
                <card-news :news="newfood"></card-news>
            </div>
        </div>
    </section>

</template>
<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;
@use '../assets/scss/partials/mixins' as *;



.svg-inline--fa {
    padding: 0 1rem;
}



.container-cardOne {
    position: absolute;
    top: -20px;
    left: 0;
    background-color: $white;
    padding: 2rem 1rem 0 1rem;

    header {
        height: 2rem;
        margin-bottom: 2rem;

        li {
            display: inline;
            padding: 0.7rem;
        }
    }

    #body-cartOne {
        text-align: center;

        h3 {
            font-size: 1.7rem;
        }
    }

    .container-card {
        margin-top: 3rem;
    }

    .container-button {
        display: flex;
        justify-content: center;
    }

}

.images {
    margin-top: 45rem;
}

.con-wave {
    position: relative;
    width: 100%;
    height: 200px;

    .wave {
        @include graphic;
        position: absolute;
        top: 12rem;
        left: 0;
        width: 60%;
        height: 71%;
    }
}

.bkg {
    max-height: auto;
    width: 100%;
}

// MENU
.container {
    position: relative;
}

.title {
    @include flexbar;
    padding: 5rem 0;

    h2 {
        padding-top: 2.8rem;
        font-size: 1.7rem;

    }
}

// BANNER
.banner {
    padding-top: 4.5rem;
    background-image: url('../assets/img/app-ordering-scaled.jpg');
    background-repeat: no-repeat;
    background-size: contain;
    height: 28rem;

    .container {
        display: flex;
        flex-direction: column;
    }

    p {
        color: $white;
        font-size: 2rem;
    }

    h1 {
        font-size: 3.5rem;
        color: $yellow;
    }

    .social {
        padding-top: 2rem;
        display: flex;
        gap: 1rem;

        img {
            height: auto;
            max-width: 15%;
        }
    }
}

//LATEST NEWS
</style>
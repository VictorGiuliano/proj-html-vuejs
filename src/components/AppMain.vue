<script>
import CardPrice from './utilities/CardPrice.vue'
export default {
    name: 'AppMain',
    data() {
        return {
            food: [{ image: '/src/assets/img/skin-on-fries.jpg', title: 'Skin On Fries', price: '$3.00', secondprice: '$6.00' },
            { image: '/src/assets/img/choco-cookie-frappe.jpg', title: 'Choco Cookie Frappe', price: '$4.99' },
            { image: '/src/assets/img/donut-burger.jpg', title: 'The Donut Burger', price: '$6.99' }
            ]
        }
    },
    components: { CardPrice }
}
</script>
<template>
    <section id="Dishes">
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
                    <div>
                        <card-price :food="food"></card-price>
                    </div>
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

.svg-inline--fa {
    padding: 0 1rem;
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

        h3: {
            margin: 4rem 0;
        }

    }


}
</style>
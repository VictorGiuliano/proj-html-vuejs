<script>
import MyList from './utilities/MyList.vue';
import GenericButton from './utilities/GenericButton.vue';
export default {
    name: 'Main Footer',
    components: { MyList, GenericButton },
    data() {
        return {
            list1: [{ Title: 'ORDER ONLINE', text: 'Appetizers', text2: 'Burgers', text3: 'Pizza', text4: 'Fries', text5: 'Sides', text6: 'Desserts', text7: 'Beverages', text8: 'Specials' }],
            list2: [{ Title: 'NAVIGATE', text: 'Home', text1: 'Alternate Home', text2: 'Menu', text3: 'About', text4: 'News', text5: 'Contact Us', text6: 'Cart' }],
            list3: [{ Title: 'INFORMATION', text: 'My Account', text2: 'Terms Of Service', text3: 'Privacy Policy', image: 'src/assets/img/app-store-badge-200x67.png', image2: 'src/assets/img/play-store-badge-200x67.png' }],
            list4: [{ Title: 'OPENING HOURS', text: 'Mon', sign: '-', time: '10AM to 11PM', time2: '10AM to 1AM', time3: '11AM to 10PM', text2: 'Tue', text3: 'Wed', text4: 'Thur', text5: 'Fri', text6: 'Sat', text7: 'Sun' }],
            list5: [{ Title: 'VOUCHER', sale: 'src/assets/img/footer-coupon.png', text2: 'Just Use The Code', text4: 'FIRSTORDER', text5: 'At Checkout' }],
            name: 'SUBSCRIBE'
        }
    },
    methods: {
        CreateMessage() {
            console.log('Hai cliccato un tasto')
        }
    }

}
</script>
<template>
    <section class="Footer">
        <div class="container-footer">
            <div class="list">
                <my-list :list="list1"></my-list>
                <my-list :list="list2"></my-list>
                <my-list :list="list3"></my-list>
                <my-list :list="list4"></my-list>
                <my-list :list="list5"></my-list>
            </div>
            <img src="../assets/img/takeout-logo.png">
            <div class="text-area">
                <h1>Stay In The Loop</h1>
                <p>Sign Up to receive up to date news and offers directly in your inbox:</p>
            </div>

        </div>
        <div class="container-form">
            <div class="compilation">
                <form>
                    <input type="text" placeholder="you@email.com">
                    <generic-button :name="name" @press-button="CreateMessage"></generic-button>
                </form>
            </div>
        </div>
        <ul>
            <li><font-awesome-icon icon="fa-brands fa-facebook" /></li>
            <li><font-awesome-icon icon="fa-brands fa-twitter" /></li>
            <li><font-awesome-icon icon="fa-brands fa-instagram" /></li>
            <li><font-awesome-icon icon="fa-brands fa-linkedin" /></li>
            <li><font-awesome-icon icon="fa-solid fa-rss" /></li>
            <li><font-awesome-icon icon="fa-brands fa-youtube" /></li>
            <li><font-awesome-icon icon="fa-solid fa-envelope" /></li>
        </ul>

    </section>


</template>
<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

.Footer {
    color: white;
    background-image: url('../assets/img/footer-background-scaled.jpg');
    background-size: cover;
    min-height: 50rem;

    .container-footer {
        padding: 6rem 6rem 0 6rem;
        display: flex;
        flex-direction: column;
        align-items: center;

        img {
            height: auto;
            width: 14%;
        }

        .text-area {
            padding: 3rem 3rem 0 3rem;

            h1 {
                text-align: center;
                color: $yellow;
                font-size: 3rem;
            }

            p {
                padding: 1rem;
            }

        }
    }

    .list {
        display: flex;
        gap: 7rem;
        padding-bottom: 4rem;
    }

    .container-form {
        margin: 0 6rem;

        .compilation {

            display: flex;
            flex-direction: column;
            justify-content: center;
            margin-left: 5rem;
        }

        input {
            width: 100%;
            height: 2rem;
            border-radius: 15px;
            margin-bottom: 1rem;
        }


    }

    ul {
        text-align: center;
    }

    li {
        display: inline;
        padding: 0 0.6rem;
    }




}
</style>
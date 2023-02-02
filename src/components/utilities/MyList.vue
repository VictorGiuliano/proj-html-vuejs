<script>
export default {
    name: 'List',
    props: {
        list: Array,
    }
}
</script>
<template>
    <div v-for="lista in list">
        <p>{{ lista.Title }}</p>
        <div class="lista">
            <ul>
                <li v-if="lista.text"><a href="#">{{ lista.text }}{{ lista.sign }}</a><span>{{ lista.time }}</span></li>
                <li v-else="sale"><img :src="lista.sale"></li>
                <li><a href="#">{{ lista.text2 }}{{ lista.sign }}</a><span>{{ lista.time }}</span></li>
                <li>{{ lista.text3 }}{{ lista.sign }}<span>{{ lista.time }}</span></li>
                <li v-if="lista.text4"><a href="#">{{ lista.text4 }}{{ lista.sign }}</a><span>{{ lista.time }}</span>
                </li>
                <li v-else="image"><img class="logo" :src="lista.image"></li>
                <li v-if="lista.text5"><a href="#">{{ lista.text5 }}{{ lista.sign }}</a><span>{{ lista.time }}</span>
                </li>
                <li v-else="image2"><img class="logo" :src="lista.image2"></li>
                <li><a href="#">{{ lista.text6 }}{{ lista.sign }}</a><span>{{ lista.time2 }}</span></li>
                <li><a href="#">{{ lista.text7 }}{{ lista.sign }}</a><span>{{ lista.time3 }}</span></li>
                <li><a href="#">{{ lista.text8 }}</a></li>
            </ul>
        </div>

    </div>


</template>
<style lang="scss" scoped>
@use '../../assets/scss/partials/variables' as *;

.lista {
    display: flex;
}

ul {
    list-style-type: none;
    padding: 30px 0;
}

li {
    padding: 4px 0;
}

a {
    color: $white;
    text-decoration: none;

}

span {
    color: $yellow;
}

.logo {
    height: 3rem;
    width: auto;
    border: 2px solid $white;
    border-radius: 10px;
}

img {
    height: 6rem;
    width: auto;
}
</style>
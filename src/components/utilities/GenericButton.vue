<script>
export default {
    name: 'Button',
    emits: ['press-button'],
    props: {
        name: String
    },
    methods: {
        pressButton() {
            this.$emit('press-button')
        }
    }
}
</script>
<template>
    <form @submit.prevent=pressButton>
        <button>{{ name }}</button>
    </form>

</template>
<style lang="scss" scoped>
@use '../../assets/scss/partials/variables' as *;
</style>
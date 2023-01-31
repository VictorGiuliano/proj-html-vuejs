<script>
export default {
    name: 'Button',
    emits: ['press-button'],
    methods: {
        pressButton() {
            this.$emit('press-button')
        }
    }
}
</script>
<template>
    <form @submit.prevent=pressButton>
        <button>WIEW OUR MENU</button>
    </form>

</template>
<style lang="scss" scoped>
@use '../../assets/scss/partials/variables' as *;
</style>
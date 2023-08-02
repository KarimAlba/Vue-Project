<template>
    <div>
        <h3>Worker Component</h3>
    </div>
</template>

<script>
    export default{
        name: 'WorkerComponent',
        mounted() {
            console.log(this.$route.params.name)
        }
    }
</script>

<style lang="scss">
</style>
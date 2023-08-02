<template>
    <div class="sorting-modal" v-if="openStatus">
        <h3 @click="setSorting">SortingModal</h3>
    </div>
</template>

<script>
    export default{
        props: ['isOpen'],
        data() {
            return {
                openStatus: isOpen
            }
        },
        methods: {
            setSorting: function() {
                this.openStatus = !this.openStatus;
            }
        }
    }
</script>

<style lang="scss">
    .sorting-modal{
        position: absolute;
        top: 0;
        left: 0;
        width: 200px;
        height: 120px;
        border: 1px solid black;
        border-radius: 8px;
    }
</style>
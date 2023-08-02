<template>
    <div class="main">
        <HeaderComponentVue 
            @setPhrase="getSubstring" 
            :substr="substr"
        />
        <NavBarComponentVue @getFilterParam="setFilterParam"/>
        <WorkersComponent :substr="substr" :filterParam="filterParam"/>
    </div>
</template>
  
<script>
    import HeaderComponentVue from './HeaderComponent.vue';
    import NavBarComponentVue from './NavBarComponent.vue';
    import WorkersComponent from './WorkersComponent.vue';

    export default {
        data() {
            return {
                substr: '',
                filterParam: ''
            }
        },
        components: {
            HeaderComponentVue,
            NavBarComponentVue,
            WorkersComponent
        },
        methods: {
            getSubstring(data) {
                this.$data.substr = data.phrase;
            },
            setFilterParam(data) {
                this.$data.substr = data.phrase;
                this.$data.filterParam = data.filterParam;
            }
        }
    }
</script>

<style>
    .main{
        width: 100%;
        height: 100%;
    }
</style>
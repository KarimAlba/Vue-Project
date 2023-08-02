<template>
    <nav>
        <a 
            href="" 
            @click="getFilterParam"
            v-bind:class="{ active: activeObj.isActiveAll }"
        >
            Все
        </a>
        <a 
            href="" 
            @click="getFilterParam"
            v-bind:class="{ active: activeObj.isActiveDesigners }"
        >
            Designers
        </a>
        <a 
            href="" 
            @click="getFilterParam"
            v-bind:class="{ active: activeObj.isActiveAnalysts }"
        >
            Analysts
        </a>
        <a 
            href="" 
            @click="getFilterParam"
            v-bind:class="{ active: activeObj.isActiveManagers }"
        >
            Managers
        </a>
        <a 
            href="" 
            @click="getFilterParam"
            v-bind:class="{ active: activeObj.isActiveIOS }"
        >
            IOS
        </a>
        <a 
            href="" 
            @click="getFilterParam"
            v-bind:class="{ active: activeObj.isActiveAndroid }"
        >
            Android
        </a>
    </nav>
</template>

<script>
    export default{
        data() {
            return {
                isOpen: false,
                phrase: '',
                activeObj: {
                    isActiveAll: true,
                    isActiveDesigners: false,
                    isActiveAnalysts: false,
                    isActiveManagers: false,
                    isActiveIOS: false,
                    isActiveAndroid: false
                }
            }
        },
        methods: {
            getFilterParam(event) {
                event.preventDefault();

                for (var key in this.$data.activeObj) {
                    this.$data.activeObj[key] = false;
                }

                if (event.target.textContent.includes('Все')) {
                    this.$data.activeObj.isActiveAll = true
                }

                if (event.target.textContent.includes('Designers')) {
                    this.$data.activeObj.isActiveDesigners = true
                }

                if (event.target.textContent.includes('Analysts')) {
                    this.$data.activeObj.isActiveAnalysts = true
                }

                if (event.target.textContent.includes('Managers')) {
                    this.$data.activeObj.isActiveManagers = true
                }

                if (event.target.textContent.includes('IOS')) {
                    this.$data.activeObj.isActiveIOS = true
                }

                if (event.target.textContent.includes('Android')) {
                    this.$data.activeObj.isActiveAndroid = true
                }

                this.$emit('getFilterParam', {
                    phrase: this.$data.phrase,
                    filterParam: event.target.textContent
                })
            }
        }
    }
</script>

<style lang="scss">
    nav{
        margin-top: 10px;
        width: 100%;
        height: 30px;
        padding-left: 3%;
        box-sizing: border-box;
        display: flex;
        justify-content: start;
        border-bottom: 1px solid rgba(195, 195, 198, 1);

        a{
            margin-right: 10px;
            width: 100px;
            color: rgba(151, 151, 155, 1);
            text-align: center;
        }
    }

    .active{
            color: rgba(5, 5, 16, 1);
            border-bottom:1px solid rgba(101, 52, 255, 1);
        }
</style>
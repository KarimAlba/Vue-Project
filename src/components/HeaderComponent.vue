<template>
    <header>
        <h3>Поиск</h3>
        <input 
            type="text"
            placeholder="Введите имя, тег, почту..."
            @input="setPhrase"
            v-model="phrase"
        >
        <button @click="isOpen=!isOpen">
            <img src="../assets/sorting.svg" alt="">
        </button>

        <SortingModalComponentVue :isOpen="isOpen"/>
    </header>
</template>

<script>
    import SortingModalComponentVue from './SortingModalComponent.vue';

    export default{
        props: ['substr'],
        data() {
            return {
                isOpen: false,
                phrase: ''
            }
        },
        methods: {
            setPhrase() {
                this.$emit('setPhrase', {
                    phrase: this.$data.phrase
                })
            }
        },
        watch: {
            resetInput() {
                if (this.substr === '') {
                    this.$data.phrase === ''
                } else return
            }
        }

    }
</script>

<style lang="scss">
    header{
        width: 100%;
        height: 80px;
        position: relative;
        text-align: left;

        h3{
            margin: 20px 0 0px 5%;   
        }

        input{
            margin: 20px 0 20px 5%;
            width: 90%;
            height: 30px;
            padding: 4px 35px;
            box-sizing: border-box;
            border-radius: 10px;
            background: none;
            border: 1px solid rgba(195, 195, 198, 1);
            background: url(../assets/search.svg), rgb(253, 253, 255);
            background-repeat: no-repeat;
            background-position: 5px;
            outline: none;
        }

        input:focus{
            background: none;
        }

        button{
            position: absolute;
            top: 45px;
            left: 90%;
            background: none;
            border: none;
        }
    }
</style>
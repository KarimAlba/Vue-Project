<template>
    <nav>
        <a href="" class="active">Все</a>
        <a href="">Designers</a>
        <a href="">Analysts</a>
        <a href="">Managers</a>
        <a href="">IOS</a>
        <a href="">Android</a>
    </nav>
</template>

<style lang="scss">
    nav{
        margin-top: 10px;
        width: 100%;
        height: 30px;
        padding-left: 5%;
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

        .active{
            color: rgba(5, 5, 16, 1);
            border-bottom:1px solid rgba(101, 52, 255, 1);
        }
    }
</style>
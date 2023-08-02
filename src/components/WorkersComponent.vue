<template>
    <div class="workers" v-if="filtredWorkers.length === 0">
        <div 
            class="worker"
            v-for="worker in workers" 
            :key="worker.id" 
        >
            <router-link 
                to="/worker"
            >
                <img src="../assets/Screenshot_1.png" alt="">
                <div class="worker_info">
                    <div class="worker_info_title">
                        <h5>{{worker.firstName}}</h5>
                        <span class="worker_tag">{{worker.userTag}}</span>
                    </div>
                    <span>{{worker.position}}</span>
                </div>
            </router-link>
        </div>
    </div>
    <div class="workers" v-else>
        <div 
            class="worker"
            v-for="worker in filtredWorkers" 
            :key="worker.id" 
        >
            <router-link 
                to="/worker"
            >
                <img src="../assets/Screenshot_1.png" alt="">
                <div class="worker_info">
                    <div class="worker_info_title">
                        <h5>{{worker.firstName}}</h5>
                        <span class="worker_tag">{{worker.userTag}}</span>
                    </div>
                    <span>{{worker.position}}</span>
                </div>
            </router-link>
        </div>
    </div>
</template>
  
<script>
    import axios from 'axios';

    export default {
        name: 'WorkersComponent',
        props: ['substr', 'filterParam'],
        data(){
            return {
                workers: [],
                filtredWorkers: []
            }
        },
        component: {
            
        },
        watch:{
            substr(){
                this.$data.filtredWorkers = this.$data.workers.filter(worker => 
                    worker.firstName.includes(this.substr)
                    || worker.userTag.includes(this.substr)
                )
            },
            filterParam() {
                const filterSubstring = (this.filterParam).toLowerCase().slice(0, 4)
                if (this.filterParam === 'Все') {
                    this.$data.filtredWorkers.splice(0, this.$data.filtredWorkers.length) 
                } else {
                    this.$data.filtredWorkers = this.$data.workers.filter(worker => 
                        worker.department.includes(filterSubstring)
                        || worker.position.includes(filterSubstring)
                    )
                }
            }
        },
        mounted() {
            axios.get('https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464/users?__example=all')
                .then(response => {
                    console.log(response.data.items);
                    this.$data.workers = [...response.data.items];
                })
                .catch(error => console.log(error))
        }
    }
</script>

<style lang="scss">
    .workers{
        margin:0 0 0 4%;
        width: 95%;
        height: 80vh;
        box-sizing: border-box;
        cursor: pointer;

        .worker{
            margin: 10px 0;
            position: relative;
            width: 100%;
            height: 80px;
            display: flex;
            justify-content: start;

            a{
                position: relative;
                width: 100%;
                height: 80px;
                display: flex;
                justify-content: start;
            }

            img{
                margin: 5px 10px;
                width: 70px;
                height: 70px;
                border-radius: 35px;
            }

            .worker_info{
                height: 80px;
                display: flex;
                flex-flow: column;
                justify-content: center;

                .worker_info_title{
                    display: flex;

                    h5{
                        margin: 5px 0;
                        font-style: normal;
                        font-size: 16px;
                        font-weight: 500;
                        line-height: 20px;
                    }

                    .worker_tag{
                        margin: 6px 5px;
                        color: var(--light-text-tetriary, #97979B);
                        font-size: 14px;
                        font-style: normal;
                        font-weight: 500;
                        line-height: 18px;
                    }
                }

                span{
                    margin: 0;
                    color: var(--light-text-secondary, #55555C);
                    font-size: 13px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 16px;
                }
            }
        }
    }
</style>
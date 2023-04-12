<script>
import { store } from '../../store.js'

export default {
    data() {
        return {
            store
        }
    },
}
</script>

<template lang="">
    <div class="works pt-5" id="works">
        <div class="title text-center">
            WORKS.
        </div>
        <div class="d-flex flex-wrap justify-content-around text-center py-5">
            <div class="work my-4 mx-5 pb-2" v-for="item in this.store.works">
                <img src="../../assets/netflix.jpeg" alt="">
                <div class="name">
                    {{ item.name }}
                </div>
                <div class="hover pt-3 px-3">
                    {{ item.description }}
                    <ul class="d-flex justify-content-center flex-wrap">
                        <li v-for="technology in item.technologies" class="mx-2 mt-1">
                            {{ technology }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .works{
        background-image: linear-gradient(rgb(20, 20, 20), rgb(25, 25, 25));
        color: white;
        .title{
            color: rgb(43, 72, 219);
            font-size: 50px;
            font-weight: 700;
        }
        .work{
            width: 300px;
            position: relative;
            border-radius: 25px;
            border: 5px solid rgb(236, 59, 236);
            box-shadow: 0px 0px 10px 5px rgb(236, 59, 236);
            transition: all 0.25s;
            &:hover {
                border: 5px solid rgb(61, 24, 170);
                box-shadow: 0px 0px 15px 10px rgb(61, 24, 170);
            }
        }
        img{
            width: 100%;
            height: 150px;
            border-radius: 20px 20px 0px 0px;
        }
        .hover{
            position: absolute;
            top: 0px;
            left: 0px;
            font-size: 12px;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.825);
            font-weight: bold;
            border-radius: 20px;
            opacity: 0;
            transition: all 0.25s;

            ul{
                list-style-type: none;
                li{
                    border: 2px solid white;
                    border-radius: 5px;
                    padding: 5px 5px;
                }
            }
            &:hover {
                opacity:1
            }

        }
    }
</style>
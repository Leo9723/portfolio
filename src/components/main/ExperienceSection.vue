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
    <div class="d-flex cont" id="experience">
        <div class="circle-zone col-1">
            <div :class="(this.store.load % 2 == 0) ? 'violet-circle left-circle' : 'blue-circle left-circle'"></div>
        </div>
        <div class="experiences py-5 col-10">
            <div class="text-center  mb-5 int">
                EXPERIENCE.
            </div>
            <ul class="d-flex justify-content-center">
                <li v-for="item in this.store.experiences">
                    <div class="experience mx-md-5">
                        <div class="text-center">
                            <img :src="item.image" alt="">
                            <div class="title mt-3">
                                {{ item.title }}
                            </div>
                            <div  class="name mt-2">
                                {{ item.name }}
                            </div>
                        </div>
                        <div  class="date mt-3">
                            {{ item.startDate }} <i class="fa-solid fa-angles-right"></i> {{ item.endDate }}
                        </div>
                        <div  class="description my-2">
                            {{ item.description }}
                        </div>
                        <ul>
                            <li v-for="technology in item.technologies">
                                <i class="fa-solid fa-caret-right word-sh"></i> {{ technology }}
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
        <div class="circle-zone col-1">
            <div :class="(this.store.load % 2 == 0) ? 'blue-circle right-circle' : 'violet-circle right-circle'"></div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.word-sh{
    color: violet;
}
.left-circle{
    height: 95%;
    border-radius: 100%;
    position: relative;
    top: 15px;
    right: 55%;
    transition: all 0.5s;
}
.violet-circle{
    border: 10px solid rgb(61, 24, 170);
    box-shadow: 0px 0px 15px 10px rgb(61, 24, 170), inset 0px 0px 15px 10px rgb(61, 24, 170);
}
.right-circle{
    height: 95%;
    border-radius: 100%;
    position: relative;
    top: 15px;
    left: 55%;
    transition: all 0.5s;
}
.blue-circle{
    border: 10px solid blue;
    box-shadow: 0px 0px 15px 10px blue, inset 0px 0px 15px 10px blue;
}
.cont{
    background-image: linear-gradient(rgb(15, 15, 15), rgb(20, 20, 20));

}
    .experiences{
        .int{
            color: rgb(148, 81, 169);
            font-size: 50px;
            font-weight: 700;
        }
        .experience{
            width: 300px;
            color: white;
        }
        ul{
            list-style-type: none;
        }
        img{
            width: 100px;
        }
        .title{
            font-size: x-large;
            font-weight: bold;
        }
    }
</style>
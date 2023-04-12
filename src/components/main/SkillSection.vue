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
    <div class="skills py-5" id="skills">
        <div class="text-center py-5 title">
            SKILLS.
        </div>
        <ul class="d-flex flex-wrap justify-content-center">
            <li v-for="item in this.store.skills" class="d-flex justify-content-center align-items-center">
                <img :src="item.image" alt="" class="mx-4">
                {{ item.name }}
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
    .skills{
        .title{
            color: rgb(61, 24, 170);
            font-size: 50px;
            font-weight: 700;
        }
        background-image: linear-gradient(rgb(25, 25, 25), rgb(30, 30, 30));
        color: white;
        font-weight: bold;
        li{
            height: 100px;
            width: calc(100% / 5);
        }
        img{
            width: 60px;
        }
    }
</style>
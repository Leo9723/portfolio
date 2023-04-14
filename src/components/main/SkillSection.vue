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
        <ul class="d-flex flex-wrap justify-content-center px-0">
            <li v-for="item in this.store.skills" class="d-flex justify-content-center align-items-center flex-column flex-md-row mx-5 mx-md-0">
                <div :style="{ 'background-image': 'url(' + item.image + ')' }" class="bkg-image"></div>
                {{ item.name }}
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
.bkg-image{
    height: 50px;
    width: 50px;
    background-size: contain;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    margin-right: 20px;
}
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
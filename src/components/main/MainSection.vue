<script>
import { store } from '../../store.js'

export default {
    data() {
        return {
            store,
        }
    },
    methods: {
        loadPage() {
            setInterval(() => {
            this.store.load++;
        }, 1000);
    }

    },
    mounted() {
        this.loadPage();
    },
}
</script>

<template lang="">
    <div class="d-flex flex-column align-items-center justify-content-around h-100" id="home">
        <div :class="(this.store.load >= 3) ? 'initial-desc-load initial-desc' : 'initial-desc'">
           <span>Ciao.</span> <br> Mi chiamo Leonardo
        </div>
        <div :class="(this.store.load >= 5) ? 'final-desc-load final-desc px-5 px-md-0' : 'final-desc'">
            Sono un <br> <span>Jr. Full Stack Web Developer</span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .initial-desc{
        opacity: 0;
        font-weight: 900;
        font-size: 40px;
    }
    .initial-desc-load.initial-desc{
        opacity: 1;
        transition: all 2s;
        position: relative;
        bottom: 7%;
        color: white;
        span{
            color: rgb(30, 168, 243);
            font-size: 50px;
        }
    }
    .final-desc{
        opacity: 0;
        font-weight: 900;
        font-size: 40px;
    }
    .final-desc-load.final-desc{
        opacity: 1;
        color: white;
        text-align: right;
        transition: all 2s;
        span{
            color: rgb(228, 129, 209);
            font-size: 50px;
        }
    }
    .initial-desc-load, .final-desc-load{
        font-weight: 900;
        font-size: 40px;
    }
    
</style>
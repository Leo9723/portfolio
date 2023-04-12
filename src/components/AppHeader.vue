<script>
import { store } from '../store.js'
import MainSection from './main/MainSection.vue'

export default {
    data() {
        return {
            store,
        }
    }, 
    components: {
        MainSection,
    }   
}
</script>

<template lang="">
    <div class="header-container">
        <div class="mobile-navbar d-block d-md-none">
            <nav class="navbar">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i class="fa-solid fa-microchip load"></i>
                </button>
            </div>
            </nav>
            <div class="collapse" id="navbarToggleExternalContent">
            <div class="p-4">
                <li v-for="item in this.store.HeaderList" class="mx-3">
                        <a :href="item.link" :class="(this.store.load >= 2) ? 'b load-list' : 'b'">{{ item.name }}</a>
                </li>
            </div>
            </div>
        </div>
        <div class="d-flex justify-content-between header desktop-header d-none d-md-flex">
            <div class="logo mt-3 mx-3">
                <a :class="(this.store.load >= 1) ? 'a load' : 'a'" href="#home"><i class="fa-solid fa-microchip load"></i></a>
            </div>
            <div class="right-header mt-3 mx-5">
                <ul class="d-flex list-unstyled">
                    <li v-for="item in this.store.HeaderList" class="mx-3 py-2">
                        <a :href="item.link" :class="(this.store.load >= 2) ? 'b load-list' : 'b'">{{ item.name }}</a>
                    </li>
                </ul>
            </div>
        </div>
        <MainSection></MainSection>
    </div>
</template>

<style lang="scss" scoped>
.mobile-navbar{
    color: white;
    font-family: 'Oswald', sans-serif;
    position: fixed;
    width: 100%;
    z-index: 2;
    background-image: linear-gradient(rgb(104, 72, 235), transparent);
    min-height: 100px;
    button{
        border: none;
    }
    i{
        font-size: 50px;
        color: white;
    }
    a{
        text-decoration: none;
        color: white;
        font-weight: bold;
        font-size: x-large;
        transition: all 0.5s;
        &:hover{
            color: rgb(51, 0, 96);
        }
    }
}
.header-container{
    background: linear-gradient(rgb(104, 72, 235), transparent, black), url(../../public/back-tech.gif);
    background-size: cover;
    height: 100vh;
}
.header{
    color: white;
    font-family: 'Oswald', sans-serif;
    position: fixed;
    width: 100%;
    z-index: 2;
    background-image: linear-gradient(rgb(104, 72, 235), transparent);
    height: 150px;
    i{
        font-size: 50px;
    }
    .a{
        position: relative;
        right: 100px;
    }
    .load{
        right: 0px;
    }
    .b{
        position: relative;
        left: 700px;
    }
    .load-list{
        left: 0px;
    }
    ul{
        transition: all 4s;
    }
    a {
        text-decoration: none;
        color: white;
        font-weight: bold;
        font-size: x-large;
        transition: all 0.5s;
        &:hover{
            color: rgb(51, 0, 96);
        }
    }
    .right-header{
        a:hover{
        border-bottom: 3px solid rgb(230, 111, 248);
    }
}
}

</style>
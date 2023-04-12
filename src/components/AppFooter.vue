<script>
import ContactSection from './footer/ContactSection.vue'
export default {
  components: {
    ContactSection,
  }
}
</script>

<template>
    <div>
      <ContactSection></ContactSection>
      <div class="copyright d-flex justify-content-around py-5">
        <span>Hendcrafted with <i class="fa-regular fa-heart"></i></span>
        <span>copyright <i class="fa-regular fa-copyright"></i> Leonardo Palazzetti 2023</span>
      </div>
    </div>
</template>

<style lang="scss" scoped>
  .copyright{
    background-image: linear-gradient(rgb(33, 33, 33), rgb(35, 35, 35));
    color: white;
  }
</style>
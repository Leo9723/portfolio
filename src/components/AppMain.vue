<script>
import AboutSection from './main/AboutSection.vue'
import ExperienceSection from './main/ExperienceSection.vue'
import WorkSection from './main/WorkSection.vue'
import SkillSection from './main/SkillSection.vue'

export default {
  components: {
    AboutSection,
    ExperienceSection,
    WorkSection,
    SkillSection,
    
  }
}
</script>

<template>
  <div>
    <AboutSection></AboutSection>
    <ExperienceSection></ExperienceSection>
    <WorkSection></WorkSection>
    <SkillSection></SkillSection>
  </div>
</template>

<style lang="scss" scoped>

</style>
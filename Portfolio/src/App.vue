<template>
  <InfoComp myName="Amin Yassin" />
  <ExpComponent></ExpComponent>
</template>

<script>
import ExpComponent from './components/ExpComponent.vue';
import HelloWorld from './components/HelloWorld.vue'
import InfoComp from './components/InfoComponent.vue'

export default {
  name: 'App',
  components: {
    InfoComp,
    ExpComponent
  }
}
</script>

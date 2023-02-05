<template>
  <InfoComp myName="Amin Yassin" />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import InfoComp from './components/InfoComponent.vue'

export default {
  name: 'App',
  components: {
    InfoComp
  }
}
</script>

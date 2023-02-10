<template>
  <InfoComp myName="Amin Yassin" />
  <ExpComponent></ExpComponent>
  <br />
  <VoluntaryWorkComponent></VoluntaryWorkComponent>
</template>

<script>
import ExpComponent from './components/ExpComponent.vue';
import HelloWorld from './components/HelloWorld.vue'
import InfoComp from './components/InfoComponent.vue'
import VoluntaryWorkComponent from './components/VoluntaryWorkComponent.vue';

export default {
  name: 'App',
  components: {
    InfoComp,
    ExpComponent,
    VoluntaryWorkComponent
  }
}
</script>

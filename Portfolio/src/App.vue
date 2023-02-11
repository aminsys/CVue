<template>
  <InfoComp myName="Amin Yassin" />
  <ExpComponent></ExpComponent>
  <br />
  <VoluntaryWorkComponent></VoluntaryWorkComponent>
  <br />
  <CertComponent></CertComponent>
</template>

<script>
import CertComponent from './components/CertComponent.vue';
import ExpComponent from './components/ExpComponent.vue';
import InfoComp from './components/InfoComponent.vue'
import VoluntaryWorkComponent from './components/VoluntaryWorkComponent.vue';

export default {
  name: 'App',
  components: {
    InfoComp,
    ExpComponent,
    VoluntaryWorkComponent,
    CertComponent
  }
}
</script>

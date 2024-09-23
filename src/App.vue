<script setup>
import CertComponent from './components/CertComponent.vue';
import CertComponentEng from './components/CertComponentEng.vue';
import ExpComponent from './components/ExpComponent.vue';
import ExpComponentEng from './components/ExpComponentEng.vue';
import InfoComp from './components/InfoComponent.vue';
import VoluntaryWorkComponent from './components/VoluntaryWorkComponent.vue';
import VoluntaryWorkComponentEng from './components/VoluntaryWorkComponentEng.vue';
import { useColorMode, useDark, useToggle } from '@vueuse/core';
import { ref } from 'vue';

const isDark = useDark();
const toggleDark = useToggle(isDark);
const colorMode = useColorMode();

const sweLang = ref(true);
function toggleLanguage() {
  sweLang.value = !sweLang.value;
};
</script>
<template>
  <div class="darkButton">
    <button @click="toggleLanguage" class="button">
      <span v-if="sweLang">Swe</span>
      <span v-else>Eng</span>
    </button>
    <button @click="toggleDark()" class="button">
      <span v-if="isDark">Light mode</span>
      <span v-else>Dark mode</span>
    </button>

  </div>
  <InfoComp myName="Amin Yassin" />
  <div v-if="sweLang">
    
    <ExpComponent></ExpComponent>
    <br />
    <VoluntaryWorkComponent></VoluntaryWorkComponent>
    <br />
    <CertComponent></CertComponent>
  </div>
  <div v-else>
    <ExpComponentEng></ExpComponentEng>
    <br />
    <VoluntaryWorkComponentEng></VoluntaryWorkComponentEng>
    <br />
    <CertComponentEng></CertComponentEng>

  </div>

</template>

<style>
.dark {
  color-scheme: dark;
}

.button {
  float: right;
  margin: 15px;
  border: 1px dashed papayawhip;
}
</style>

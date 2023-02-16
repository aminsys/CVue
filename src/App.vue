<script setup>
import CertComponent from './components/CertComponent.vue';
import ExpComponent from './components/ExpComponent.vue';
import InfoComp from './components/InfoComponent.vue';
import VoluntaryWorkComponent from './components/VoluntaryWorkComponent.vue';
import { useColorMode, useDark, useToggle } from '@vueuse/core';

const isDark = useDark();
const toggleDark = useToggle(isDark);
const colorMode = useColorMode();
</script>

<template>
  <button @click="toggleDark()" class="button">
    <span v-if="isDark">Dark</span>
    <span v-else>Light</span>
  </button>
  <InfoComp myName="Amin Yassin" />
  <ExpComponent></ExpComponent>
  <br />
  <VoluntaryWorkComponent></VoluntaryWorkComponent>
  <br />
<CertComponent></CertComponent>
</template>

<style>
.dark {
  color-scheme: dark;
}

.button {
  box-align: center;
}
</style>

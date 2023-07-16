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
  <div class="darkButton">
    <button @click="toggleDark()" class="button">
      <span v-if="isDark">Light mode</span>
      <span v-else>Dark mode</span>
    </button>
  </div>
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
  float: right;
  margin: 15px;
  border: 1px dashed papayawhip;
}
</style>

<script setup lang="ts">
import { ref } from 'vue'
const isDark = ref(false)
let darkStatus = localStorage.getItem('vitepress-theme-appearance')
const validateDark = () => {
    if (darkStatus === 'light') {
      isDark.value = false
    } else {
      isDark.value = true
    }
}
validateDark()

const mutationObserver = new MutationObserver(function (mutations) {
  mutations.forEach(function (mutation) {
    darkStatus = localStorage.getItem('vitepress-theme-appearance')
    validateDark()
  })
})
/** Watch Element Node**/
mutationObserver.observe(window.document.documentElement<HtmlElement>, {
  attributes: true
})
</script>

<template>
  <img v-if="!isDark" class="end" src="/the-end-light.svg" />
  <img v-if="isDark" class="end" src="/the-end-dark.svg" />
</template>

<style scoped>
.end {
  margin-top: 20px;
  width: 200px;
}
</style>

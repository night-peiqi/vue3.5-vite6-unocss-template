<script setup>
import { useHead } from '@unhead/vue'
import { computed } from 'vue'
import { APP_DESC, APP_NAME } from './constants'
import { useRouteStore } from './stores'

useHead({
  title: APP_NAME,
  meta: [
    {
      name: APP_NAME,
      content: APP_DESC,
    },
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: '/favicon.svg',
    },
  ],
})

const keepAliveRouteNames = computed(() => {
  return useRouteStore().keepAliveRoutes
})
</script>

<template>
  <div class="w-100%">
    <router-view v-slot="{ Component, route }">
      <section class="app-wrapper">
        <transition name="fade">
          <keep-alive :include="keepAliveRouteNames">
            <component :is="Component" :key="route.name" />
          </keep-alive>
        </transition>
      </section>
    </router-view>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

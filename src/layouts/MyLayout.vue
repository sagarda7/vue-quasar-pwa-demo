<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar
        color="dark"
      >
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
          icon="menu"
        >
          <!-- <q-icon name="menu" /> -->
        </q-btn>

        <q-toolbar-title>
          PWA&MINE
          <!-- <div slot="subtitle">Andmine PWA Demos</div> -->
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-header>

    <q-layout-drawer
      v-model="leftDrawerOpen"
      :content-class="$q.theme === 'mat' ? 'bg-grey-2' : null"
    >
      <q-list
        no-border
        link
        inset-delimiter
      >
        <q-list-header>Here we start</q-list-header>
        <q-item to="/home">
          <q-item-side icon="home" />
          <q-item-main label="Home"/>
        </q-item>
       <q-item to="/blog">
          <q-item-side icon="list_alt" />
          <q-item-main label="Blog"/>
        </q-item>
        <q-item to="/about">
          <q-item-side icon="supervisor_account" />
          <q-item-main label="About"/>
        </q-item>
      </q-list>
    </q-layout-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'MyLayout',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  },
  methods: {
    openURL
  }
}
</script>

<style>
</style>

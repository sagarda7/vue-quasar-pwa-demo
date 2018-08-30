<template>
  <q-page>
    <div class="q-pa-sm">
       <q-toolbar
        color="light"
      >
        <q-btn
          flat
          dense
          round
          @click="$router.push('/')"
          aria-label="Menu"
          icon="keyboard_backspace"
        >
          <!-- <q-icon name="menu" /> -->
        </q-btn>

        <q-toolbar-title v-html="post.title">
        </q-toolbar-title>
      </q-toolbar>
      <img :src="post.img" style="width:100%">
      <p v-html="post.content"></p>
    </div>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
  data () {
    return {
      post: null
    }
  },
  created () {
    this.post = this.$store.state.blog.currentPost
  }
}
</script>

<style>
</style>

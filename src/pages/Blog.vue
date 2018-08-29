<template>
  <q-page padding>
    <!-- content -->
    <div class="row">
       <div  @click="setCurrentPost(itm)" class="col-xs-12 col-sm-6 col-md-4 q-pa-md" v-for="(itm, index) in posts" :key="index">
          <q-card inline class="q-ma-sm">
            <q-card-media>
              <!-- <div style="height:200px; display:block; overflow:hidden">
                <img :src="itm.img">
              </div> -->
              <img :src="itm.img" height="200">
            </q-card-media>
            <q-card-title>
              {{itm.title}}
              <span slot="subtitle">Subtitle</span>
            </q-card-title>
            <q-card-main v-html="itm.excerpt">
              {{itm.excerpt}}
            </q-card-main>
          </q-card>

        </div>
    </div>

  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
  data () {
    return {
      posts: []
    }
  },
  mounted () {
    console.log(this.$store)
    this.loadData()
  },
  methods: {
    loadData () {
      this.$store.dispatch('fetchPosts', {}).then((res) => {
        this.posts = res.data.posts
      }).catch((error) => {
        this.$q.notify('Server Error Occured' + error)
      })
    },
    setCurrentPost (itm) {
      console.log('hi')
      this.$store.commit('setCurrentPost', itm)
    }
  }
}
</script>

<style>
</style>

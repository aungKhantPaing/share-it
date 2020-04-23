<template>
  <v-layout column justify-center align-center>
    <v-flex class="text-center" xs12 sm8 md6>
      <img src="/v.png" alt="Vuetify.js" class="mb-5" />
      <blockquote class="blockquote">
        &#8220;First, solve the problem. Then, write the code.&#8221;
        <footer>
          <small>
            <em>&mdash;John Johnson</em>
          </small>
        </footer>
      </blockquote>
      <v-chip v-if="!isLoading">{{ questions.length }}</v-chip>
      <v-btn @click="fetchQuestions()">Fetch Items</v-btn>
      <Adsense
        style="height: 450px;"
        root-class="wrapper VueAdsense"
        ins-class="ins-custom"
        data-ad-client="ca-pub-5442972248172818"
        data-ad-slot="1487770485"
      />
    </v-flex>
  </v-layout>
</template>

<script>
/* eslint-disable no-console */
import { mapActions, mapState, mapGetters } from 'vuex'

export default {
  data() {
    return {}
  },
  computed: {
    ...mapState({ questions: (state) => state.test.questions }),
    ...mapGetters({ isLoading: 'test/appIsLoading' })
  },
  beforeCreate() {
    this.$store.dispatch('test/fetchQuestions')
  },
  methods: {
    // async getItems() {
    //   console.log('Getting Items')
    //   const response = await questionRef.get()
    //   console.log(response)
    //   this.itemList = response.docs
    // },
    ...mapActions({ fetchQuestions: 'test/fetchQuestions' })
  }
}
</script>

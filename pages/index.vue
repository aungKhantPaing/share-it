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
      <script2
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
      ></script2>
      <!-- display-ads -->
      <ins
        class="adsbygoogle"
        style="display:block"
        data-ad-client="ca-pub-8777632307115771"
        data-ad-slot="5846669267"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
      <script2>
        ;(adsbygoogle = window.adsbygoogle || []).push({})
      </script2>
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

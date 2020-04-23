/* eslint-disable no-console */
import { db } from '../plugins/firebase'
const questionRef = db
  .collection('tests')
  .doc('iq-test')
  .collection('questions')

export const APP_STATE = { loading: 0, loaded: 1 }

export const state = () => ({
  questions: [],
  appState: APP_STATE.loading
})

export const getters = {
  appIsLoading(state) {
    return state.appState === APP_STATE.loading
  }
}

export const mutations = {
  SET_QUESTIONS(state, data) {
    console.log(data)
    state.questions = data
  },
  SET_APP_STATE(state, value) {
    state.appState = value
  }
}

export const actions = {
  async fetchQuestions({ commit }) {
    console.log('Getting Data')
    const snapshot = await questionRef.get()
    const questions = snapshot.docs.map((doc) => doc.data())
    console.log(snapshot.docs, questions)
    commit('SET_QUESTIONS', questions)
    commit('SET_APP_STATE', APP_STATE.loaded)
  }
}

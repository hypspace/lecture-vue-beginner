import { fetchNewsList, fetchAskList, fetchJobsList } from '@/api'

export default {
  FETCH_NEWS(context) {
    fetchNewsList()
      .then(response => context.commit('SET_NEWS', response.data))
      .catch(error => new Error(error))
  },
  FETCH_ASK({ commit }) {
    fetchAskList()
      .then(response => commit('SET_ASK', response.data))
      .catch(error => new Error(error))
  },
  FETCH_JOBS(context) {
    fetchJobsList()
      .then(response => context.commit('SET_JOBS', response.data))
      .catch(error => new Error(error))
  },
}

import {
  fetchNewsList,
  fetchAskList,
  fetchJobsList,
  fetchUserInfo,
  fetchItemInfo,
} from '@/api'

export default {
  FETCH_NEWS(context) {
    fetchNewsList()
      .then(response => context.commit('SET_NEWS', response.data))
      .catch(error => new Error(error))
  },
  FETCH_ASK(context) {
    fetchAskList()
      .then(response => context.commit('SET_ASK', response.data))
      .catch(error => new Error(error))
  },
  FETCH_JOBS(context) {
    fetchJobsList()
      .then(response => context.commit('SET_JOBS', response.data))
      .catch(error => new Error(error))
  },
  FETCH_USERS(context, id) {
    fetchUserInfo(id)
      .then(response => context.commit('SET_USERS', response.data))
      .catch(error => new Error(error))
  },
  FETCH_ITEMS(context, id) {
    fetchItemInfo(id)
      .then(response => context.commit('SET_ITEMS', response.data))
      .catch(error => new Error(error))
  },
}

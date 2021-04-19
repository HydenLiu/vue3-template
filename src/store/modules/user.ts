import { getData } from '@/api/user'

export interface IHotData {
  hotValue: string,
  icon: string,
  index: number,
  link: string,
  text: string
}

const state = {
  hotList: []
}

const mutations = {
  GET_HOST_LIST: (state: { hotList: [] }, data: []) => {
    state.hotList = data
  }
}

const actions = {
  getHotData: async ({commit} : any) => {
    await getData().then(res => {
      commit('GET_HOST_LIST', res.data)
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

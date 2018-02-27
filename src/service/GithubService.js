import Api from '@/service/Api'

export default {
  searchUser (params) {
    return Api().get('users/' + params.username)
  },
}

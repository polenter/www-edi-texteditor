import api from '~/api/api'

export default (context, inject) => {
    // Inject $hello(msg) in Vue, context and store.
    inject('api', new api(context))
  }
  
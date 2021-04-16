import { app } from './utils/app'
import store from './store'
import router from './router'
import './utils/lazy_ui'

app.use(store).use(router).mount('#app')

/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'
import Emitter from 'tiny-emitter'
// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'
import Katex from 'vue-katex-auto-render'

const app = createApp(App)
const emitter = new Emitter()

registerPlugins(app)
app.directive('katex', Katex);
app.config.globalProperties.emitter = emitter

app.mount('#app')

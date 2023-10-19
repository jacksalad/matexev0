/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'
import Katex from 'vue-katex-auto-render'

const app = createApp(App)

registerPlugins(app)
app.directive('katex', Katex);

app.mount('#app')

import { createApp } from 'vue'
import App from './App.vue'

// Import Vuetify
import { createVuetify } from 'vuetify'
import 'vuetify/styles'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

// Import material design icons
import '@mdi/font/css/materialdesignicons.css'

// Create Vuetify instance
const vuetify = createVuetify({
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
})

// Create Vue app
const app = createApp(App)

// Use Vuetify
app.use(vuetify)

// Mount the app
app.mount('#app')

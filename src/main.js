import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles.css'  // adjust path to your CSS file
import PostHogPlugin from './plugins/posthog'

const app = createApp(App)

// Use the PostHog plugin
app.use(PostHogPlugin)

app.mount('#app') 
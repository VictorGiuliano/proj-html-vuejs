import { createApp } from 'vue'
import "@fontsource/roboto-condensed"
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBottleDroplet, faBurger, faCar, faCartShopping, faClock, faDrumstickBite, faEnvelope, faLeaf, faMobileScreenButton, faRss, } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFacebook, faInstagram, faLinkedin, faPagelines, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'

library.add(faBurger, faClock, faMobileScreenButton, faCar, faLeaf, faPagelines, faBottleDroplet, faDrumstickBite, faFacebook, faTwitter, faInstagram, faLinkedin, faRss, faYoutube, faEnvelope, faCartShopping);

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')

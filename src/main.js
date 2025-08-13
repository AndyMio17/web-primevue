import { createApp } from 'vue'

import App from './App.vue'

// PrimeVue 
import PrimeVue from 'primevue/config'
import Button from 'primevue/button'
import Menubar from 'primevue/menubar'
import Avatar from 'primevue/avatar'
import InputText from 'primevue/inputtext'
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import { Toolbar } from 'primevue'
import Image from 'primevue/image'

// Estilos de PrimeVue
import 'primeicons/primeicons.css'  // Iconos
import Aura from '@primeuix/themes/aura' // Tema Aura oficial de PrimeVue


createApp(App)
    .use(PrimeVue,{
        theme: {
            preset: Aura // Cambia el tema aquí
        }
    })
    .component('pv-Button', Button)
    .component('pv-Menubar', Menubar)
    .component('pv-Avatar', Avatar)
    .component('pv-InputText', InputText)
    .component('pv-IconField', IconField)
    .component('pv-InputIcon', InputIcon)
    .component('pv-Toolbar', Toolbar)
    .component('pv-Image', Image)
    .mount('#app')

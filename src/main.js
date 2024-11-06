import { createApp } from 'vue';
import App from './App.vue';
import { createVuetify } from 'vuetify'; 
import 'vuetify/dist/vuetify.min.css';
import router from './router/index.ts';
import { VContainer, VBtn, VListImg, VDivider, VLigatureIcon, VLayout, VCard, VNavigationDrawer, VList, VAppBar, VSpacer, VToolbar, VAppBarNavIcon, VToolbarTitle } from 'vuetify/components';

const vuetify = createVuetify({
  components: {
    VContainer,  
    VBtn,
    VListImg,
    VDivider,
    VLigatureIcon,
    VLayout,
    VCard,
    VNavigationDrawer ,
    VList,
    VAppBar,
    VSpacer,
    VToolbar,
    VAppBarNavIcon,
    VToolbarTitle,
    
  }
});

const app = createApp(App);
app.use(vuetify);
app.use(router);
app.mount('#app');

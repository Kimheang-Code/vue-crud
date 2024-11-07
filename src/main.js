import { createApp } from 'vue';
import App from './App.vue';
import { createVuetify } from 'vuetify'; 
import 'vuetify/dist/vuetify.min.css';
import '@mdi/font/css/materialdesignicons.css';
import router from './router/index.ts';
import { VContainer, VBtn, VListImg, VDivider, VLigatureIcon, VLayout, VCard, VNavigationDrawer, VList, VAppBar, VSpacer, VToolbar, VAppBarNavIcon, VToolbarTitle, VTextField, VListItem, VFooter, VCol, VRow } from 'vuetify/components';

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
    VListItem,
    VAppBar,
    VSpacer,
    VToolbar,
    VAppBarNavIcon,
    VToolbarTitle,
    VTextField,
    VCol,
    VRow,
    VFooter,
  }
});

const app = createApp(App);
app.use(vuetify);
app.use(router);
app.mount('#app');

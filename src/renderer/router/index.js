import Vue from 'vue';
import Router from 'vue-router';
import vGallery from 'v-gallery';

//paginas de la navegacion
import Resena from '@/components/pages/Resena';
import Ponencias from '@/components/pages/Ponencias';
import Organizadores from '@/components/pages/Organizadores';
import Convocatorias from '@/components/pages/Convocatorias';
import ProgramaCientifico from '@/components/pages/ProgramaCientifico';
import DatosGenerales from '@/components/pages/DatosGenerales';

Vue.use(Router);
Vue.use(vGallery);
require("@/assets/css/app.css");
require('@/config/config');

//tomados y personalizados
import VueScrollbar from "@/components/vue-scrollbar/vue-scrollbar";

Vue.component('vue-scrollbar', VueScrollbar);

export default new Router({
    routes: [{
            path: '/',
            name: 'resena',
            component: Resena
        },{
            path: '/ponencias',
            name: 'ponencias',
            component: Ponencias
        },{
            path: '/organizadores',
            name: 'organizadores',
            component: Organizadores
        },{
            path: '/convocatorias',
            name: 'convocatorias',
            component: Convocatorias
        },{
            path: '/programa-cientifico',
            name: 'programa-cientifico',
            component: ProgramaCientifico
        },{
            path: '/datos-generales',
            name: 'datos-generales',
            component: DatosGenerales
        },
        {
            path: '*',
            redirect: '/'
        }
    ]
})
import Vue from 'vue';
import Router from 'vue-router';

//paginas de la navegacion
import Resena from '@/components/pages/Resena';
import Ponencias from '@/components/pages/Ponencias/Ponencias';
import ComiteDeHonor from '@/components/pages/ComiteDeHonor';
import ComiteOrganizador from '@/components/pages/ComiteOrganizador';
import Convocatorias from '@/components/pages/Convocatorias/Convocatorias';
import DatosGenerales from '@/components/pages/DatosGenerales';

Vue.use(Router);
require("@/assets/css/app.css")
require('@/config/config')

//tomados y personalizados
import VueScrollbar from "@/components/vue-scrollbar/vue-scrollbar"

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
            path: '/comite-honor',
            name: 'comite-honor',
            component: ComiteDeHonor
        },{
            path: '/comite-organizador',
            name: 'comite-organizador',
            component: ComiteOrganizador
        },{
            path: '/convocatorias',
            name: 'convocatorias',
            component: Convocatorias
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
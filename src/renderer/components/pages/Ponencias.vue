<template>
    <div class="content">
        <vue-scrollbar classes="my-scrollbar" ref="Scrollbar">
            <div class="inner-page">
                <!--<a href="static/pdf/nue.pdf">descargar</a>-->
                <div v-for="(item, index) in items" :key="index" class="ponencia-container">
                    <h3 class="text-red">{{item.title}}</h3>
                    <ul v-for="(autor, idx) in item.autors" :key="idx">
                        <li><h4>{{autor.name}}</h4></li>
                    </ul>
                    <a class="download-link" :href="item.fileUrl + '.pdf'">
                        <img class="pdf-export" src="~@/assets/images/icon-pdf.png">
                    </a>
                    <hr>
                </div>
            </div>
        </vue-scrollbar>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                items: [
                    // {title: '!Cuba Libre!',
                    //     autors: [{name: 'Valentina Lotfe'}],
                    //     fileUrl: 'static/pdf/cuba_libre_valentina_lotfe'
                    // },
                    {title: 'Análisis crítico-literario',
                        autors: [{name: 'Aida Rosa Fonseca'}],
                        fileUrl: 'static/pdf/analisis_critico_literario_aida_rosa_fonseca'
                    },
                    {title: 'Antonia Riva',
                        autors: [{name: 'Mailen Julia Pérez González'}],
                        fileUrl: 'static/pdf/antonia_riva_mailen_julia_perez_gonzalez'
                    },
                    {title: 'Aproximación al pensamiento de Carlos Rafael Rodríguez',
                        autors: [{name: 'José Aurelio Mho González'}],
                        fileUrl: 'static/pdf/aproximacion_al_pensamiento_de_carlos_rafael_rodriguez_jose_aurelio_mho_gonzalez'
                    },
                    {title: 'Aproximación teórica al estudio',
                        autors: [{name: 'Yadira Matamoro'}],
                        fileUrl: 'static/pdf/aproximacion_teorica_al_estudio_yadira_matamoro'
                    },
                    {title: 'Apuntes para la historia de la práctica',
                        autors: [{name: 'Aida Sera'}],
                        fileUrl: 'static/pdf/apuntes_para_la_historia_de_la_practica_aida_sera'
                    },
                    {title: 'Apuntes sobre la visión de la prensa',
                        autors: [{name: 'Yenicey Tamayo'}],
                        fileUrl: 'static/pdf/apuntes_sobre_la_vision_de_la_prensa_yenicey_tamayo'
                    },
                    {title: 'De la amistad entre Manuel Mercado',
                        autors: [{name: 'Yaité Martínez Ramírez'}],
                        fileUrl: 'static/pdf/de_la_amistad_entre_manuel_mercado_yaite_martinez_ramirez'
                    },
                    {title: 'De mambises y poetas',
                        autors: [{name: 'Yamila Vilorio'}],
                        fileUrl: 'static/pdf/de_mambises_y_poetas_yamila_vilorio'
                    },
                    {title: 'Desafíos de la identidad nacional',
                        autors: [{name: 'Aleida Castellá'}],
                        fileUrl: 'static/pdf/desafios_de_la_identidad_nacional_aleida_castella'
                    },
                    {title: 'Diagnóstico de las tradiciones',
                        autors: [{name: 'Yoennys Sánchez Martínez'}],
                        fileUrl: 'static/pdf/diagnostico_de_las_tradiciones_yoennys_sanchez_martinez'
                    },
                    {title: 'Discursando desde el asfalto',
                        autors: [{name: 'Yuricel Moreno Zaldívar'}],
                        fileUrl: 'static/pdf/discursando_desde_el_asfalto_yuricel_moreno_zaldivar'
                    },
                    {title: 'El Coronel Juan Delgado',
                        autors: [{name: 'María Victoria Rodríguez Delgado'}],
                        fileUrl: 'static/pdf/el_coronel_juan_delgado_maria_victoria_rodriguez_delgado'
                    },{title: 'El cuento de humor',
                        autors: [{name: 'Lohema Céspedes Ginarte'}],
                        fileUrl: 'static/pdf/el_cuento_de_humor_lohema_cespedes_ginarte'
                    },
                    {title: 'El discurso comunicacional',
                        autors: [{name: 'Amarilis Terga Oliva'}],
                        fileUrl: 'static/pdf/el_discurso_comunicacional_amarilis_terga_oliva'
                    },
                    {title: 'El impacto socio económico',
                        autors: [{name: 'María Quiñones'}],
                        fileUrl: 'static/pdf/el_impacto_socio_economico_maria_quinones'
                    },
                    {title: 'El mar en la identidad',
                        autors: [{name: 'Migdalia Sánchez León'}],
                        fileUrl: 'static/pdf/el_mar_en_la_identidad_migdalia_sanchez_leon'
                    },
                    {title: 'El nacionalismo en la formación de maestros',
                        autors: [{name: 'Gilma Torres Pérez'}],
                        fileUrl: 'static/pdf/el_nacionalismo_en_la_formacion_de_maestros_gilma_torres_perez'
                    },
                    {title: 'El patrimonio histórico natural',
                        autors: [{name: 'Carlos Manuel Alemán'}],
                        fileUrl: 'static/pdf/el_patrimonio_historico_natural_carlos_manuel_aleman'
                    },
                    {title: 'El pensamiento crítico electivo',
                        autors: [{name: 'Kenia Abreu'}],
                        fileUrl: 'static/pdf/el_pensamiento_critico_electivo_kenia_abreu'
                    },
                    {title: 'El pensamiento unitario de Bolívar y Martí',
                        autors: [{name: 'Noemy La Rosa'}],
                        fileUrl: 'static/pdf/el_pensamiento_unitario_de_bolivar_ y_marti_noemy_la_rosa'
                    },
                    {title: 'Estudio biográfico',
                        autors: [{name: 'Yaniuski Trinchet'}],
                        fileUrl: 'static/pdf/estudio_biografico_yaniuski_trinchet'
                    },
                    {title: 'Estudio sobre las aldabas',
                        autors: [{name: 'Rubén Lénar Guerra Batista'}],
                        fileUrl: 'static/pdf/estudio_sobre_las_aldabas_ruben_lenar_guerra_batista'
                    },
                    {title: 'Evocaciones del espacio',
                        autors: [{name: 'Maylin Yero Perea'}],
                        fileUrl: 'static/pdf/evocaciones_del_espacio_maylin_yero_perea'
                    },
                    {title: 'Festival de órganos',
                        autors: [{name: 'Alberto Debs Cardella'}],
                        fileUrl: 'static/pdf/festival_de_organos_alberto_debs_cardella'
                    },
                    {title: 'Francisco Vicente Aguilera',
                        autors: [{name: 'Iveth Yaima Rubán Rodríguez'}],
                        fileUrl: 'static/pdf/francisco_vicente_aguilera_iveth_yaima_ruban_rodriguez'
                    },
                    {title: 'Guillermo M. E',
                        autors: [{name: 'Alegna Jacomino'}],
                        fileUrl: 'static/pdf/guillermo_m_e_alegna_jacomino'
                    },
                    {title: 'Historia de Cuba',
                        autors: [{name: 'Gloria María Pérez Montero'}],
                        fileUrl: 'static/pdf/historia_de_cuba_gloria_maria_perez_montero'
                    },
                    {title: 'La colección de piezas de porcelana',
                        autors: [{name: 'Rayco Vera'}],
                        fileUrl: 'static/pdf/la_coleccion_de_piezas_de_porcelana_rayco_vera'
                    },
                    // {title: 'La constitución de la nación',
                    //     autors: [{name: 'Carlos Escalona González'}],
                    //     fileUrl: 'static/pdf/la_constitucion_de_la_nacion_carlos_escalona_gonzalez'
                    // },
                    {title: 'La formación nacional',
                        autors: [{name: 'José Novoa'}],
                        fileUrl: 'static/pdf/la_formacion_nacional_jose_novoa'
                    },
                    {title: 'La música de órgano',
                        autors: [{name: 'Ilcia Reyes Crisol Granma'}],
                        fileUrl: 'static/pdf/la_musica_de_organo_ilcia_reyes_crisol_granma'
                    },
                    {title: 'La vida cultura en Santiago de Cuba',
                        autors: [{name: 'Danays Ramos Riverí'}],
                        fileUrl: 'static/pdf/la_vida_cultura_en_santiago_de_cuba_danays_ramos_riveri'
                    },
                    {title: 'Lo microhistórico en el arte joven cubano',
                        autors: [{name: 'Anabel Caraballo'}],
                        fileUrl: 'static/pdf/lo_microhistorico_en_el_arte_joven_cubano_anabel_caraballo'
                    },
                    {title: 'Los hombres de las guerras de independencia',
                        autors: [{name: 'María Luisa Pérez'}],
                        fileUrl: 'static/pdf/los_hombres_de_las_guerras_de_independencia_maria_luisa_perez'
                    },
                    {title: 'Los institutos preuniversitarios',
                        autors: [{name: 'Rubier Corría Iglesias'}],
                        fileUrl: 'static/pdf/los_institutos_preuniversitarios_rubier_corria_iglesias'
                    },
                    {title: 'Manifestaciones del pensamiento antimperialista',
                        autors: [{name: 'Viviana Caballero Vidal'}],
                        fileUrl: 'static/pdf/manifestaciones_del_pensamiento_antimperialista_viviana_caballero_vidal'
                    },
                    {title: 'Masonería y sociedad',
                        autors: [{name: 'Suray Olivares'}],
                        fileUrl: 'static/pdf/masoneria_y_sociedad_suray_olivares'
                    },
                    {title: 'Pensamiento iberoamericano',
                        autors: [{name: 'Paul Sarmiento'}],
                        fileUrl: 'static/pdf/pensamiento_iberoamericano_paul_sarmiento'
                    },
                    {title: 'Prácticas culturales',
                        autors: [{name: 'Ana E. Gorgoso et al'}],
                        fileUrl: 'static/pdf/practicas_culturales_ana_e_gorgoso_et_al'
                    },
                    {title: 'Prácticas culturales',
                        autors: [{name: 'Yanelys Taset et al'}],
                        fileUrl: 'static/pdf/practicas_culturales_yanelys_taset_et_al'
                    },
                    // {title: 'Proyecto sociocultural Conuco',
                    //     autors: [{name: 'Ivania García Viamonte'}],
                    //     fileUrl: 'static/pdf/proyecto_sociocultural_conuco_ivania_garcia_viamonte'
                    // },
                    {title: 'Recuerdos de la Guerra de los Diez Años',
                        autors: [{name: 'Liliana Alarcón'}],
                        fileUrl: 'static/pdf/recuerdos_de_la_guerra_de_los_diez_anos_liliana_alarcon'
                    },
                    {title: 'Resultados de la articulación',
                        autors: [{name: 'Rafael Reyes Fernández'}],
                        fileUrl: 'static/pdf/resultados_de_la_articulacion_rafael_reyes_fernandez'
                    },
                    {title: 'Transculturación y sincretismo',
                        autors: [{name: 'Carlos Antonio Córdova Martínez'}],
                        fileUrl: 'static/pdf/transculturacion_y_sincretismo_carlos_antonio_cordova_martinez'
                    },
                    {title: 'Tutela del patrimonio cultural',
                        autors: [{name: 'Nilda Rizo Perez'}],
                        fileUrl: 'static/pdf/tutela_del_patrimonio_cultural_nilda_rizo_perez'
                    },
                    {title: 'Una visión diferente',
                        autors: [{name: 'Virgen Mustelier Maceo'}],
                        fileUrl: 'static/pdf/una_vision_diferente_virgen_mustelier_maceo'
                    },
                    {title: 'Utopía de América',
                        autors: [{name: 'Yanet Venero'}],
                        fileUrl: 'static/pdf/utopia_de_america_yanet_venero'
                    },
                    {title: 'Visión martiana del federalismo',
                        autors: [{name: 'Armando Cuba'}],
                        fileUrl: 'static/pdf/vision_martiana_del_federalismo_armando_cuba'
                    },

                ]
            }
        },
        methods:{
        }
    }
</script>
<style lang="scss">
    .ponencia-container {
        margin-bottom: 20px;
        position: relative;
        .download-link{
            img.pdf-export {
                position: absolute;
                right: 0;
                height: 47px;
                top: 0;
            }
        }
    }
</style>
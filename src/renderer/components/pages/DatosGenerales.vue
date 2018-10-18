<template>
    <div class="content">
        <vue-scrollbar classes="my-scrollbar" ref="Scrollbar">
            <div class="inner-page">
                <ul class="content-switcher">
                    <li @click="c_menu=0">
                        <a href="#" :class="{'is-active' : c_menu==0 }">Casa de la Nacionalidad</a>
                    </li><li @click="c_menu=1">
                    <a href="#" :class="{'is-active' : c_menu==1 }">Colaboradores</a>
                </li><li @click="c_menu=2">
                    <a href="#" :class="{'is-active' : c_menu==2 }">Galería de Imagenes</a>
                </li>
                </ul>
                <div :class="{'hidden' : c_menu!=0 }">
                    <img  src="~@/assets/images/pages/casa_nac_cub.png" alt="cubania" style="margin: 0 auto; display: block;">
                    <h2 class="text-red">Misión</h2>
                    <p>La Casa de la Nacionalidad Cubana, tiene como misión la investigación, promoción y divulgación de las raíces históricas, los procesos sociales y culturales que intervienen en la conformación del proceso de formación y desarrollo de la nacionalidad y nación cubanas. </p>
                    <h2 class="text-red">Visión</h2>
                    <p>La Casa de la Nacionalidad Cubana y sus departamentos han fortalecido su papel rector y el nivel de integración con organismos, organizaciones y otros grupos de la sociedad cubana, implementado una política de investigación y difusión de la historia regional, así como la preservación de su patrimonio documental, alcanzando que la población obtenga un mayor grado de aprobación de los valores identitarios e historiográficos y ser parte en la esfera de la defensa de la identidad regional. </p>

                    <h2 class="text-red">Datos de contacto</h2>
                    <ul>
                        <li>E-mail: cnc@crisol.cult.cu</li>
                        <li>Sitio web: www.crisol.cult.cu</li>
                        <li>Teléfono: 23 42 4833</li>
                    </ul>


                    <div class="logos-container">
                        <div class="left">
                            <h4 class="text-red">ISSN</h4>
                            <img src="~@/assets/images/issn.jpg" alt="editorial" style="margin: 0 auto;">
                        </div>
                        <div class="right">
                            <h4 class="text-red">Ediciones Bayamo</h4>
                            <img src="~@/assets/images/logo_editorial.jpg" alt="editorial" style="margin: 0 auto;">
                        </div>
                    </div>

                </div>
                <div :class="{'hidden' : c_menu!=1 }">
                    <h2 class="text-red">Instituciones colaboradoras</h2>
                    <ul>
                        <li class="mb-10">Universidad de Granma.</li>
                        <li class="mb-10">Instituto de Investigación para la Cultura Cubana Juan Marinello.</li>
                        <li class="mb-10">Consejo Provincial de las Ciencias Sociales y Humanísticas en Granma.</li>
                        <li class="mb-10">Instituto Cubano de Antropología (ICAM).</li>
                        <li class="mb-10">Instituto de Historia de Cuba (IHC).</li>
                        <li class="mb-10">Academia de Historia de Cuba.</li>
                        <li class="mb-10">Oficina del Historiador de la Ciudad de Bayamo.</li>
                        <li class="mb-10">Universidad de Granma.</li>
                        <li class="mb-10">CESCA Universidad de Oriente.</li>
                        <li class="mb-10">Centro de Estudio sobre cultura e identidad. Universidad de Holguín.</li>
                        <li class="mb-10">Biblioteca Provincial 1868.</li>
                        <li class="mb-10">Centro de Superación para la Cultura en Granma.</li>
                        <li class="mb-10">Consejo Provincial de las Artes Escénicas.</li>
                        <li class="mb-10">Unión de Historiadores de Cuba, filial Granma.</li>
                        <li class="mb-10">Sociedad Cultural José Martí, filial Granma
                        <li class="mb-10">Escuela Profesional de Arte  Manuel Muñoz Cedeño.</li>
                        <li class="mb-10">Centro Provincial del Libro y la Literatura Granma.</li>
                        <li class="mb-10">Dirección Provincial de Educación en Granma.</li>
                        <li class="mb-10">Dirección Provincial de Cultura en Granma.</li>
                        <li class="mb-10">Asociación Hermanos Saiz (AHS) Granma.</li>
                        <li class="mb-10">Centro de Comunicación Cultural Ventana Sur.</li>
                        <li class="mb-10">AsociaciónCubana de Comunicadores Sociales, filial Granma.</li>
                        <li class="mb-10">Hotel Sierra Maestra.</li>
                        <li class="mb-10">Dirección Territorial Havana Club Santiago de Cuba.</li>
                        <li class="mb-10">Agencia de Turismo Cultural Paradiso.</li>
                    </ul>
                </div>
                <div :class="{'hidden' : c_menu!=2 }">
                    <v-gallery :images="list" :caption="false" ></v-gallery>
                </div>
            </div>
        </vue-scrollbar>
    </div>
</template>
<script>
    export default {
        name: "DatosGenerales",
        data(){
            return {
                c_menu: 0,
                list: [
                    {title:'Acto inaugural Fiesta de la Cubanía Edición 24',url:'static/images/pages/datos-generales/acto_inaugural_fiesta_de_la_cubanía_edición_24_(2).jpg'},
                    {title:'Acto inaugural Fiesta de la Cubanía Edición 24',url:'static/images/pages/datos-generales/acto_inaugural_fiesta_de_la_cubanía_edición_24_(3).jpg'},
                    {title:'Acto inaugural Fiesta de la Cubanía Edición 24',url:'static/images/pages/datos-generales/acto_inaugural_fiesta_de_la_cubanía_edición_24_(4).jpg'},
                    {title:'Acto inaugural Fiesta de la Cubanía Edición 24',url:'static/images/pages/datos-generales/acto_inaugural_fiesta_de_la_cubanía_edición_24_(5).jpg'},
                    {title:'Acto inaugural Fiesta de la Cubanía Edición 24',url:'static/images/pages/datos-generales/acto_inaugural_fiesta_de_la_cubanía_edición_24_(6).jpg'},
                    {title:'Acto inaugural Fiesta de la Cubanía Edición 24',url:'static/images/pages/datos-generales/acto_inaugural_fiesta_de_la_cubanía_edición_24_(8).jpg'},
                    {title:'Casa de la Nacionalidad Cubana (frente)',url:'static/images/pages/datos-generales/casa_de_la_nacionalidad_cubana_(frente).jpg'},
                    {title:'Casa de la Nacionalidad Cubana (frente)',url:'static/images/pages/datos-generales/casa_de_la_nacionalidad_cubana_(frente)_(2).jpg'},
                    {title:'Casa de la Nacionalidad Cubana (interior)',url:'static/images/pages/datos-generales/casa_de_la_nacionalidad_cubana_(interior).jpg'},
                    {title:'Casa de la Nacionalidad Cubana (patio interior)',url:'static/images/pages/datos-generales/casa_de_la_nacionalidad_cubana_(patio_interior).jpg'},
                    {title:'Casa de la Nacionalidad Cubana (patio interior)',url:'static/images/pages/datos-generales/casa_de_la_nacionalidad_cubana_(patio_interior)_(2).jpg'},
                    {title:'Casa de la Nacionalidad Cubana (sala)',url:'static/images/pages/datos-generales/casa_de_la_nacionalidad_cubana_(sala).jpg'},
                    {title:'Casa de la Nacionalidad Cubana (vista a la iglesia)',url:'static/images/pages/datos-generales/casa_de_la_nacionalidad_cubana_(vista_a_la_iglesia).jpg'},
                    {title:'Ceremonia de la Espada Fiesta de la Cubanía Edición 24',url:'static/images/pages/datos-generales/ceremonia_de_las_banderas_(5)_(medium).jpg'},
                    {title:'Ceremonia de la Espada Fiesta de la Cubanía Edición 24',url:'static/images/pages/datos-generales/ceremonia_de_las_banderas_fiesta_de_la_cubanía_edición_24.jpg'},
                    {title:'Ceremonia de las Banderas Fiesta de la Cubanía Edición 24',url:'static/images/pages/datos-generales/ceremonia_de_las_banderas_fiesta_de_la_cubanía_edición_24_(2).jpg'},
                    {title:'Ceremonia de las Banderas Fiesta de la Cubanía Edición 24',url:'static/images/pages/datos-generales/ceremonia_de_la_espada_fiesta_de_la_cubanía_edición_24.jpg'},
                    {title:'Ceremonia de las Banderas Fiesta de la Cubanía Edición 24',url:'static/images/pages/datos-generales/ceremonia_de_la_espada_fiesta_de_la_cubanía_edición__24.jpg'},
                    {title:'Conferencia el Punto Cubano Baluarte Crisol de la Nacionalidad Cubana Edición 24',url:'static/images/pages/datos-generales/conferencia_el_punto_cubano_baluarte_crisol_de_la_nacionalidad_cubana_edición_24.jpg'},
                    {title:'Conferencia el Punto Cubano Baluarte Crisol de la Nacionalidad Cubana Edición 26',url:'static/images/pages/datos-generales/conferencia_el_punto_cubano_baluarte_crisol_de_la_nacionalidad_cubana_edición_26.jpg'},
                    {title:'Inauguración Crisol de la Nacionalidad Cubana Edición 26',url:'static/images/pages/datos-generales/inauguración_crisol_de_la_nacionalidad_cubana_edición_26.jpg'},
                    {title:'Inauguración Crisol de la Nacionalidad Cubana Edición 26',url:'static/images/pages/datos-generales/inauguración_crisol_de_la_nacionalidad_cubana_edición_26_(2).jpg'},
                    {title:'Inauguración Crisol de la Nacionalidad Cubana Edición 26',url:'static/images/pages/datos-generales/inauguración__crisol_de_la_nacionalidad_cubana_edición_26.jpg'},
                ]
            }
        }
    }
</script>

<style lang="scss">
    .logos-container{
        margin-top: 20px;
        .left,
        .right{
            display: inline-block;
            width: 45%;
            text-align: center;
            img{
                height: 80px;
                width: auto;
            }
        }
    }
</style>
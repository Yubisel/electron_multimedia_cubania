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
                    <img  src="~@/assets/images/pages/casa_nac_cub.png" alt="cubania">
                    <h2 class="text-red">Misión</h2>
                    <p>La Casa de la Nacionalidad Cubana, tiene como misión la investigación, promoción y divulgación de las raíces históricas, los procesos sociales y culturales que intervienen en la conformación del proceso formativo de la nacionalidad y nación cubanas. </p>
                    <p>Genera y transfiere conocimientos, productos y servicios históricos culturales para preservar y promover el patrimonio histórico cultural. Así como formula, gerencia y ejecuta proyectos de investigación. </p>
                    <h2 class="text-red">Visión</h2>
                    <p>La Casa de la Nacionalidad Cubana en su estructura fortalece su papel rector y el nivel de integración con los organismos, organizaciones y otros grupos de las sociales de la provincia. Con la implementación de una política de investigación y difusión histórico, social y cultural, la preservación del patrimonio histórico que atesora, logra que los investigadores y la población del territorio obtengan un mayor grado de apropiación y defensa de los valores identitarios de la región y el país. </p>

                    <h2 class="text-red">Datos de contacto</h2>
                        <ul>
                            <li>E-mail: cnc@crisol.cult.cu</li>
                            <li>Sitio web: www.crisol.cult.cu</li>
                            <li>Teléfono: 23 42 4833</li>
                        </ul>

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
                    <h2 class="text-red">Fotos del Crisol</h2>
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
            }
        }
    }
</script>

<style scoped>

</style>
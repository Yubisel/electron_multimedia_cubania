<template>
    <div class="content">
        <vue-scrollbar classes="my-scrollbar" ref="Scrollbar">
            <div class="inner-page">
                <ul class="content-switcher">
                    <li @click="c_menu=0">
                        <a href="#" :class="{'is-active' : c_menu==0 }">Comité de honor</a>
                    </li><li @click="c_menu=1">
                    <a href="#" :class="{'is-active' : c_menu==1 }">Comité Organizador</a>
                </li><li @click="c_menu=2">
                    <a href="#" :class="{'is-active' : c_menu==2 }">Notas de los Organizadores</a>
                </li>
                </ul>
                <div :class="{'hidden' : c_menu!=0 }">
                    <h2 class="text-red">Comité de Honor</h2>
                    <ul class="comite">
                        <li>
                            <h3 class="text-red">Federico Hernández Hernández</h3>
                            <em>Primer Secretario del Comité Provincial del Partido Comunista de Cuba en Granma.</em>
                            <hr>
                        </li>
                        <li>
                            <h3 class="text-red">Manuel Santiago Sobrino Martínez</h3>
                            <em>Presidente de la Asamblea Provincial del Poder Popular en Granma.</em>
                            <hr>
                        </li>
                        <li>
                            <h3 class="text-red">Yanaisy Capó Nápoles </h3>
                            <em>Primera Secretaria del Partido Comunista de Cuba en el municipio Bayamo.</em>
                            <hr>
                        </li>
                        <li>
                            <h3 class="text-red">Samuel Calzada Deyundé</h3>
                            <em>Presidente de la Asamblea Municipal del Poder Popular en el municipio Bayamo.</em>
                            <hr>
                        </li>
                        <li>
                            <h3 class="text-red">M. Sc. Ludín Fonseca García</h3>
                            <em>Historiador de la ciudad de Bayamo.</em>
                            <hr>
                        </li>
                        <li>
                            <h3 class="text-red">Dra. C. Iris Betancourt Téllez</h3>
                            <em>Delegada del CITMA en Granma.</em>
                            <hr>
                        </li>
                        <li>
                            <h3 class="text-red">M. Sc. Narcis Bueno Figueras</h3>
                            <em>Rectora de la Universidad de Granma.</em>
                            <hr>
                        </li>
                        <li>
                            <h3 class="text-red">Dr.C. Guillermo González Labrada</h3>
                            <em>Presidente del Consejo Provincial de las Ciencias Sociales en Granma.</em>
                            <hr>
                        </li>
                        <li>
                            <h3 class="text-red">Teófila Acea Antúnez</h3>
                            <em>Presidenta de la Sociedad Cultural José Martí, filial Granma.</em>
                            <hr>
                        </li>
                        <li>
                            <h3 class="text-red">Aldo Daniel Naranjo Tamayo</h3>
                            <em>Presidente de la Unión de Historiadores de Cuba, filial Granma.</em>
                            <hr>
                        </li>
                    </ul>
                    <h2 class="text-red">Invitado de Honor</h2>
                    <h3 class="text-red">Dr.C Eduardo Torres Cuevas</h3>
                    <em>Presidente de la Academiade Historia de Cuba.Académico, historiador y pedagogo. Miembro de Número de la Academia Cubana de la Lengua. Profesor Titular y Doctor en Ciencias Históricas. Premio Nacional de Historia, Premio Félix Varela. Presidente de la Casa de Altos Estudios Don Fernando Ortiz. Director de la revista Debates Americanos y de la editorial Imagen Contemporánea. Miembro de la Unión Nacional de Historiadores de Cuba, de la Asociación de Historiadores del Caribe, de la Unión Nacional de Escritores y Artistas de Cuba y de la Academia de Ciencias de Nueva York. Director de la Biblioteca Nacional José Martí. </em>
                    <hr>
                </div>
                <div :class="{'hidden' : c_menu!=1 }">
                    <h2 class="text-red">Comité Organizador</h2>
                    <ul class="comite">
                        <li>
                            <h3>Presidenta: <span class="text-red">M. Sc. DamianaNiurka Pérez Figueredo</span></h3>
                            <em>Directora de la Casa de la Nacionalidad Cubana.</em>
                            <hr>
                        </li>
                        <li>
                            <h3>Vicepresidente: <span class="text-red">M. Sc.Reynier Espinosa García</span></h3>
                            <em>Jefe del departamento de Investigación de la Casa de la Nacionalidad Cubana.</em>
                            <hr>
                        </li>
                        <li>
                            <h3>Secretaria Ejecutiva: <span class="text-red">M. Sc. Idelmis Mary Aguilera</span></h3>
                            <em>Investigadora de la Casa de la Nacionalidad Cubana.</em>
                            <hr>
                        </li>
                    </ul>
                    <h2 class="text-red">Miembros: </h2>
                    <ul>
                        <li class="text-red mb-10 text-bold">M. Sc. José Manuel Yero Masdeu. </li>
                        <li class="text-red mb-10 text-bold">M. Sc. Liliana Alarcón Vázquez. </li>
                        <li class="text-red mb-10 text-bold">M. Sc. Sonia Niurka Tornés Mendoza. </li>
                        <li class="text-red mb-10 text-bold">Lic. Elizabeth Guerra Roblejo. </li>
                        <li class="text-red mb-10 text-bold">Lic.Yadira Matamoro Verdecia. </li>
                        <li class="text-red mb-10 text-bold">Lic.Yaité MartínezRamírez. </li>
                        <li class="text-red mb-10 text-bold">Esp. MaitéCarrazana Fonseca. </li>
                        <li class="text-red mb-10 text-bold"> Lic.Andria Rodríguez San. </li>
                        <li class="text-red mb-10 text-bold">Lic. Aliuska  Gómez Cantillo. </li>
                        <li class="text-red mb-10 text-bold">Lic. Dayami Ramirez Suárez. </li>
                        <li class="text-red mb-10 text-bold">Lic. Martha Castillo Martín. </li>
                        <li class="text-red mb-10 text-bold">Esp. Sonia Rondón Fonseca. </li>
                        <li class="text-red mb-10 text-bold">Lic. Ligia Diéguez González. </li>
                        <li class="text-red mb-10 text-bold">Téc. Ángel Aguilera Almeira. </li>
                    </ul>
                </div>
                <div :class="{'hidden' : c_menu!=2 }">
                    <h2 class="text-red">Notas de los Organizadores</h2>
                    <p>
                        El Comité Organizador del XXVII Evento Crisol de la Nacionalidad Cubana 2018 declara que los autores de las ponencias presentadas en cada uno de los paneles, son responsables de los textos científicos entregados. Las correcciones realizadas a los textos expuestos en este soporte, no contemplaron las ponencias presentadas.
                    </p>

                </div>
            </div>
        </vue-scrollbar>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                c_menu: 0,
            }
        }
    }
</script>
<style lang="scss">
    ul.comite{
        li{
            list-style: none;
            margin-bottom: 10px;
            h3{
                margin: 10px 0;
            }
            hr{
                margin-top: 15px;
            }
        }
    }
</style>
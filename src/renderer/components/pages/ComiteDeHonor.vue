<template>
    <div class="content">
        <vue-scrollbar classes="my-scrollbar" ref="Scrollbar">
            <div class="inner-page">
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
        </vue-scrollbar>
    </div>
</template>
<script>
    export default {

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
<template>
    <div class="content">
        <vue-scrollbar classes="my-scrollbar" ref="Scrollbar">
            <div class="inner-page">
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
<template>
    <div class="menu-container">
        <nav class="main-menu">
                <img id="logo" src="~@/assets/images/header/logo.png" alt="cubania">
            <router-link :to="{ name: 'resena' }">
                Breve reseña
            </router-link>
            <router-link :to="{ name: 'ponencias' }">
                Ponencias
            </router-link>
            <router-link :to="{ name: 'comite-honor' }">
                Comité de honor
            </router-link>
            <router-link :to="{ name: 'comite-organizador' }">
                Comité organizador
            </router-link>
            <router-link :to="{ name: 'convocatorias' }">
                Convocatorias
            </router-link>
            <router-link :to="{ name: 'datos-generales' }" class="general-data">
                <img class="item-active" src="~@/assets/images/header/menu_extra_activo.png">
                <img class="item-inactive" src="~@/assets/images/header/menu_extra_inactivo.png">
            </router-link>
        </nav>
    </div>
</template>
<script>
    export default {};
</script>
<style lang="scss">
    .menu-container{
        text-align: center;
        height: 100%;
    }
    nav.main-menu{
        padding-top: 30px;
        margin: 0 auto;
        height: 100%;
        display: inline-block;
        font-weight: bold;
        font-family: "Times New Roman";
        text-transform: uppercase;
            a{
                padding: 8px 10px;
                color: #362383;
                text-decoration: none;
            }
        *{
            vertical-align: middle;
        }
    }
</style>

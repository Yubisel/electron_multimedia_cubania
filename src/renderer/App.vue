<template>
    <div id="app">
        <img id="logo" src="~@/assets/images/logo.png" alt="cubania">
        <header>
            <system-menu></system-menu>
        </header>
        <main>
            <router-view></router-view>
        </main>
        <footer>
            <system-footer></system-footer>
        </footer>
    </div>
</template>

<script>
    import SystemMenu from "./components/templates/SystemMenu";
    import SystemFooter from "./components/templates/SystemFooter";
    export default {
        name: "cubania",
        components: { SystemMenu, SystemFooter }
    };
</script>

<style lang="scss">
    *{
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }
    body {
        height: 100vh;
        background: #000000 url("./assets/images/background.jpg") no-repeat;
        background-size: 100% 100%;
        font-family: 'Source Sans Pro', sans-serif;
        font-size: 14px;
    }
    #app{
        height: 100%;
        #logo{
            position: absolute;
            left: -110px;
            top: 20px;
        }
    }
    header{
        height: 100px;
        a.router-link-exact-active{
            background: url("./assets/images/header/menu_background.png") no-repeat;
            background-size: 100% 100%;
            color: #ffffff;
        }

        a.general-data{
            width: 49px;
            height: 42px;
            display: inline-block;
        }

        a.general-data.router-link-exact-active{
            background: url("./assets/images/header/menu_extra_activo_background.png") no-repeat;
        }

        a .item-active,
        a.router-link-exact-active .item-inactive{
            display: none;
        }

        a.router-link-exact-active .item-active{
            display: unset;
        }
    }
    main{
        height: calc(100% - 130px);
    }
    footer{
        height: 30px;
        background: red;
        color: #ffffff;
        text-align: center;
        padding-top: 10px;
        position: relative;
        font-size: .82em;
    }

    .vue-scrollbar__scrollbar-vertical .scrollbar{
        background: url("assets/images/icon_scroll.png") no-repeat;
    }
</style>

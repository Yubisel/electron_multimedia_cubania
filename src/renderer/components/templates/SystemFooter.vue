<template>
    <div>
        <img class="footer-left" src="~@/assets/images/footer/footer_left.png">
        {{this.$appFooter}}
        <img class="footer-right" src="~@/assets/images/footer/footer_right.png">
    </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
    .footer-left, .footer-right{
        position: absolute;
        bottom: 0;
    }
    .footer-left{
        left: 0;
    }
    .footer-right{
        right: 0;
    }
</style>

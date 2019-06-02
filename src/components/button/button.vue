<template>
     <button class="lc-button"> 确定 </button>
</template>

<script>
export default {
    name: '',
}
</script>

<style lang="less" scoped>
.lc-button{
    font-size: var(--button-size);
    height: var(--button-height);
    padding: 0 1em;
    border-radius: var(--border-radius);
    border: 1px solid var(--border-color);
    background: var(--button-bg);
    &:hover{
    border-color: var(--border-color-hover);
    }
    &:active{
        background-color: var(--button-active-bg);
    }
    &:focus{
        outline: none;
    }
}
</style>




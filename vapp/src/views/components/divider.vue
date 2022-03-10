<template>
    <div class="divider-title">
        <div class="divider" :style="`background-color: ${dividerColor || '#33BCE9'};`"/>
        <span class="title" :style="`color: ${titleColor || '#33BCE9'};`">{{title}}</span>
        <div class="divider" :style="`background-color: ${dividerColor || '#33BCE9'};`"/>
    </div>
</template>

<script>

export default {
    name: 'divider',
    props: ['title', 'dividerColor', 'titleColor']

}

</script>

<style lang="scss" scoped>
.divider-title {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
}

.divider {
    flex: 1;
    height: 1px;
    background-color:#33BCE9;
}

.title {
    margin-left: 1rem;
    margin-right: 1rem;
    color: #33BCE9;
    font-size: 28px;
    font-weight: 600;
    line-height: 40px;
}

</style>

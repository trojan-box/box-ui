<template>
    <div>
        <frameHeader/>

        <div class="boxed sm ui-text-page px-3">

            <div v-if="$store.state.app.lang === 'zh'">
                <jfiLangZh/>
            </div>

            <div v-else-if="$store.state.app.lang === 'zh_t'">
                <jfiLangZhT/>
            </div>

            <div v-else-if="$store.state.app.lang === 'ko'">
                <jfiLangKo/>
            </div>

            <div v-else-if="$store.state.app.lang === 'id'">
                <jfiLangId/>
            </div>

            <div v-else>
                <jfiLangEn/>
            </div>
        </div>


        <frameFooter/>
    </div>
</template>

<script>
    import frameHeader from '@/views/_comp_frame/header.vue'
    import frameFooter from '@/views/_comp_frame/footer.vue'

    import jfiLangZh from './jfi_lang_zh.vue'
    import jfiLangZhT from './jfi_lang_zh_t.vue'
    import jfiLangKo from './jfi_lang_ko.vue'
    import jfiLangEn from './jfi_lang_en.vue'
    import jfiLangId from './jfi_lang_id.vue'

    export default {
        name: 'jif',
        components: {
            frameHeader,
            frameFooter,

            jfiLangZh,
            jfiLangZhT,
            jfiLangKo,
            jfiLangEn,
            jfiLangId,
        },
        props: [],
        data() {
            return {

            }
        },
        computed: {},
        watch: {},
        methods: {

        },
        created() {

        },
        //mounted() {},
        //beforeDestroy() {},
        //update() {},
        //activited() {},
        //beforeRouteUpdate() {},
        //filters: {},
    };
</script>

<style lang="scss" scoped>

</style>

<template>
    <div class="mt-5">
        <div class="row list-report tac">
            <div v-for="(item,index) of list" :key="index" class="col-md-4">
                <a class="item mb-3" :href="item.url" target="_blank">
                    <div class="media">
            <span class="mr-2 t-gray">
              <i class="far fa-file-pdf"></i>
            </span>
                        <span>
              {{lg('',item.name)}}
            </span>
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'blockReports',
        components: {},
        props: [],
        data() {
            return {
                list: [
                    {
                        url: '/static/file/doc/jfi_security_report_main.pdf',
                        name: {
                            zh: 'JFI 审计报告',
                            en: 'Audit Report JFI',
                            id: 'Laporan Audit JFI',
                            ko: 'JFI 오딧 보고서',
                        },
                    },
                    {
                        url: '/static/file/doc/jfi_security_report_p1.pdf',
                        name: {
                            zh: '池子1 审计报告',
                            en: 'Audit Report Pool 1',
                            id: 'Laporan Audit Pool 1',
                            ko: '풀1 오딧 보고서',
                        },
                    },
                    {
                        url: '/static/file/doc/jfi_security_report_p2.pdf',
                        name: {
                            zh: '池子2 审计报告',
                            en: 'Audit Report Pool 2',
                            id: 'Laporan Audit Pool 2',
                            ko: ' 풀2 오딧 보고서',
                        },
                    },
                ],
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
    .list-report{
        .item{
            display: block;
            padding: 5px;
            padding-left: 10px;
            background-color: rgba(255,255,255,0.4);
            border-radius: 20px;
            box-shadow:  0 3px 10px rgba(0,0,0,0.1);
        }
    }
</style>

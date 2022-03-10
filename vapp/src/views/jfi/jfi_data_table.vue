<template>
    <div class="my-4">
        <table class="table table-sm border bg-white small text-right">
            <tr class="text-muted">
                <td class="text-left">
                    {{lg('label_1',cp_lang)}}
                </td>
                <td>
                    {{lg('label_2',cp_lang)}}
                </td>
                <td>
                    {{lg('label_3',cp_lang)}}
                </td>
                <td>
                    {{lg('label_4',cp_lang)}}
                </td>
                <td>
                    {{lg('label_5',cp_lang)}}
                </td>
            </tr>
            <tr v-for="item of arr" :key="item.week_num">
                <td class="text-left">{{item.week_num}}</td>
                <td>{{item.time_start}}</td>
                <td>{{item.time_end}}</td>
                <td>{{item.num}}</td>
                <td>{{item.num_end}}</td>
            </tr>
        </table>
    </div>
</template>

<script>

    export default {
        name: 'jfiTable',
        components: {},
        props: [],
        data() {
            return {

                cfg: {
                    // 初始时间
                    start_time: '2020-08-25 00:00',
                    // 时间增长
                    time_step: 7*24*60*60*1000,
                    // 初始数额
                    start_num: 3500,
                    // 数额变化率
                    num_rate: 0.5,
                    // 条目数
                    count_to: 10,
                },

                cp_lang: {
                    label_1: {
                        en: 'Week',
                        zh: '周次',
                        id: 'Minggu',
                        ko: '주',
                    },
                    label_2: {
                        en: 'Start Time',
                        zh: '开始时间',
                        id: 'Waktu mulai',
                        ko: '시작 시간',
                    },
                    label_3: {
                        en: 'End Time',
                        zh: '结束时间',
                        id: 'Akhir waktu',
                        ko: '종료 시간',
                    },
                    label_4: {
                        en: 'JFI mined',
                        zh: 'JFI挖矿量',
                        id: 'Volume penambangan JFI',
                        ko: 'JFI 채굴 수량',
                    },
                    label_5: {
                        en: 'Total mined',
                        zh: '总挖矿量',
                        id: 'Total volume penambangan',
                        ko: '총 채굴 수량',
                    },
                },

                // UI数据
                arr: [],
            }
        },
        computed: {},
        watch: {},
        methods: {
            run(){
                let v = this
                let t = (new Date(v.cfg.start_time)).valueOf()
                console.log(t)
                // 第一组数据
                let arr = [{
                    week_num: 1,
                    time_start: t,
                    time_end: t + v.cfg.time_step,
                    num: v.cfg.start_num,
                    num_end: v.cfg.start_num,
                }]

                // 后续数据循环
                let count_to = v.cfg.count_to
                for(let i = 2; i <= count_to; i++ ){
                    let pre = arr[i-2]
                    let json = {}

                    json.week_num = i
                    json.time_start = pre.time_end
                    json.time_end = json.time_start + v.cfg.time_step
                    json.num = pre.num * ( i === count_to ? 1 : v.cfg.num_rate)
                    json.num_end = pre.num_end + json.num

                    arr.push(json)
                }

                // 时间转换
                arr = arr.map( item => {
                    item.time_start = (new Date(item.time_start)).toLocaleString('en-GB')
                    item.time_end = (new Date(item.time_end)).toLocaleString('en-GB')
                    return item
                })

                v.arr = arr
            },
        },
        created() {
            this.run()
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

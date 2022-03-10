<template>
    <div class="text-page">

        <h3 class="tac">JFI 一鍵defi挖礦聚合協議 for JustSwap</h3>

        <p>
            我們是程序員和產品經理組成的團隊，
            我們被YFI設計師Andre Conje的defi收益最大化的設計理念深深影響，
            並被YFI曾經2000%的年化收益震撼，並至今保持100%以上的APR，
            YFI也朝著1YFI = 1BTC的目標前進；我們站在巨人的肩膀上，
            用YFI的設計思路，借鑒並重新設計了JFI，
            一鍵defi挖礦聚合協議 for JustSwap，
            讓您一鍵最大化您的挖礦收益，
            並在交易速度更快、gas費用更低的Tron網絡上部署，
            希望給Tron的用戶提供defi收益挖礦最大化的工具，
            於是我們有了JFI。
        </p>

        <p>
            加入 JackPool.finance(JFI)，我們將幫您最大化流動性挖礦收益：
        </p>

        <ul>
            <li>您在JustSwap上提供流動性，從JustSwap獲得交易手續費分成；</li>
            <li>在第1點的基礎上，您可以把在JustSwap上提供流動性的收益憑證（LP Token）放到JackPool.finance上進行流動性挖礦，獲得JackPool.finance的代幣$JFI；</li>
            <li>同樣您也可以將$JFI放到JustSwap上提供流動性獲得交易手續費，並將收益憑證放到JackPool.finance上進行流動性挖礦，獲得$JFI；</li>
            <li>擁有$JFI，您可以獲得JackPool.finance的治理和投票的權利，並參與其他defi挖礦，獲得更多挖礦收益；</li>
        </ul>

        <p>
            $JFI總量有限，總量2.1萬枚，永不增發。越早加入JackPool.finance，越有機會獲得更多收益。
        </p>

        <h4>經濟模型</h4>

        <p>
            $JFI屬於社區，沒有預挖，沒有ICO，所有$JFI通過挖礦獲得。
        </p>

        <p>
            JackPool.finance 一共有3個流動性挖礦池子：
            <br>
            第一個池子：JustSwap上USDT/TRX交易對流動性收益憑證
            <br>
            第二個池子：JustSwap上USDJ/TRX交易對流動性收益憑證
            <br>
            第三個池子：JustSwap上JFI/TRX交易對流動性收益憑證
        </p>

        <p>
            $JFI總量一共2.1萬枚
        </p>

        <p>
            每個池子可挖總量為7000枚。
            每個池子第一周可挖總量為3500枚，第二周可挖總量為1750枚，第三周可挖總量為875枚，每週減半，10週挖完。
        </p>

        <jfiDataTable/>

        <p>
            每個礦工獲得的$JFI數量由該礦工提供的流動性收益憑證占同一池子總流動性收益憑證的比例計算得到。
        </p>

        <p>
            $JFI擁有社區治理功能，並集成各類defi平台挖礦收益。作為後續項目收益分配、參與社區治理使用，
            擁有JackPool.finance DAO的投票權，參與其他defi挖礦，獲得更多挖礦收益；
        </p>

        <p>
            JFI的Token合約地址：TN7zQd2oCCguSQykZ437tZzLEaGJ7EGyha
            <br>
            池子1合約地址：TBQMTZ3pnechzBv5yD5eMLCnP5tWNWfFpo
            <br>
            池子2合約地址：TKQFjoSCa7tadMdJMpdTjW5ViHZi19Lrms
            <br>
            池子3合約地址：TS3tSC76h2wSitY9scSuobVUeTbk4TAt8P
            <br>
            池子1，池子2啟動時間：08/25/2020 @ 0:00am (UTC+8)
            <br>
            池子3啟動時間：09/02/2020 @ 20:00pm (UTC+8)
        </p>
    </div>
</template>

<script>
    import jfiDataTable from './jfi_data_table.vue'

    export default {
        name: 'jfiZh',
        components: {
            jfiDataTable
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

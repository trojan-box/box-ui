<template>
    <div class="text-page">

        <h3 class="tac">JFI  一键defi挖矿聚合协议 for JustSwap</h3>

        <p>
            我们是程序员和产品经理组成的团队，
            我们被YFI设计师Andre Conje的defi收益最大化的设计理念深深影响，
            并被YFI曾经2000%的年化收益震撼，并至今保持100%以上的APR，
            YFI也朝着1YFI = 1BTC的目标前进；我们站在巨人的肩膀上，
            用YFI的设计思路，借鉴并重新设计了JFI，
            一键defi挖矿聚合协议 for JustSwap，
            让您一键最大化您的挖矿收益，
            并在交易速度更快、gas费用更低的Tron网络上部署，
            希望给Tron的用户提供defi收益挖矿最大化的工具，
            于是我们有了JFI。
        </p>

        <p>
            加入 JackPool.finance(JFI)，我们将帮您最大化流动性挖矿收益：
        </p>

        <ul>
            <li>您在JustSwap上提供流动性，从JustSwap获得交易手续费分成；</li>
            <li>在第1点的基础上，您可以把在JustSwap上提供流动性的收益凭证（LP Token）放到JackPool.finance上进行流动性挖矿，获得JackPool.finance的代币$JFI；</li>
            <li>同样您也可以将$JFI放到JustSwap上提供流动性获得交易手续费，并将收益凭证放到JackPool.finance上进行流动性挖矿，获得$JFI；</li>
            <li>拥有$JFI，您可以获得JackPool.finance的治理和投票的权利，并参与其他defi挖矿，获得更多挖矿收益；</li>
        </ul>

        <p>
            $JFI总量有限，总量2.1万枚，永不增发。越早加入JackPool.finance，越有机会获得更多收益。
        </p>

        <h4>经济模型</h4>

        <p>
            $JFI属于社区，没有预挖，没有ICO，所有$JFI通过挖矿获得。
        </p>

        <p>
            JackPool.finance 一共有3个流动性挖矿池子：
            <br>
            第一个池子：JustSwap上USDT/TRX交易对流动性收益凭证
            <br>
            第二个池子：JustSwap上USDJ/TRX交易对流动性收益凭证
            <br>
            第三个池子：JustSwap上JFI/TRX交易对流动性收益凭证
        </p>

        <p>
            $JFI总量一共2.1万枚
        </p>

        <p>
            每个池子可挖总量为7000枚。
            每个池子第一周可挖总量为3500枚，第二周可挖总量为1750枚，第三周可挖总量为875枚，每周减半，10周挖完。
        </p>

        <jfiDataTable/>

        <p>
            每个矿工获得的$JFI数量由该矿工提供的流动性收益凭证占同一池子总流动性收益凭证的比例计算得到。
        </p>

        <p>
            $JFI拥有社区治理功能，并集成各类defi平台挖矿收益。作为后续项目收益分配、参与社区治理使用，
            拥有JackPool.finance DAO的投票权，参与其他defi挖矿，获得更多挖矿收益；
        </p>

        <p>
            JFI的Token合约地址：TN7zQd2oCCguSQykZ437tZzLEaGJ7EGyha
            <br>
            池子1合约地址：TBQMTZ3pnechzBv5yD5eMLCnP5tWNWfFpo
            <br>
            池子2合约地址：TKQFjoSCa7tadMdJMpdTjW5ViHZi19Lrms
            <br>
            池子3合约地址：TS3tSC76h2wSitY9scSuobVUeTbk4TAt8P
            <br>
            池子1，池子2启动时间：08/25/2020 @ 0:00am (UTC+8)
            <br>
            池子3启动时间：09/02/2020 @ 20:00pm (UTC+8)
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

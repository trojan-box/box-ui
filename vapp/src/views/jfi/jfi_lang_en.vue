<template>
    <div class="text-page">

        <h3 class="tac">Your Yield Farming Optimizer For JustSwap</h3>

        <p>
            We are a team of coders and product managers.
            We are influenced by the design philosophy of Andre Conje,
            the creator behind YFI.
            YFI once achieved as high as 2000% APR and still remains 100+% APR for some time.
            We think YFI is a really cool idea, and we borrowed it and redesigned JFI,
            a yield farming profit maximiser protocol on Justswap.
            JFI is deployed on the Tron network,
            starting with several pools on JustSwap.
            You will enjoy not just a faster Tron network with lower gas fees,
            but more importantly,
            more profits as you participate in providing liquidity for JustSwap.
        </p>

        <p>
            Thank you for joining JackPool.finance(JFI).
            We aim to maximize your benefits from your participation in providing liquidity on JustSwap. By joining JFI,
            you are going to earn:
        </p>

        <ul>
            <li>Trading fees from JustSwap from every trade of the pair which you provide liquidity in.</li>
            <li>Stake your JustSwap liquidity LP token on JackPool.finance to earn $JFI.</li>
            <li>Provide liquidity for JFI/TRX on JustSwap. And then stake your JFI/TRX LP token on JackPool.finance.  Farm more $JFI.</li>
            <li>With $JFI, you can obtain the governance and voting rights of JackPool.finance, and participate in other Defi yield farming to obtain more yield farming revenue.</li>
        </ul>

        <p>
            $JFI is limited to 21,000 tokens in total. The earlier you join JackPool.finance and the more value you will harvest.
        </p>

        <h4>Toke economics:</h4>

        <p>
            $JFI will be governed by the community, no pre-mine, no ICO.
            Token will be rewarded through mining.
        </p>

        <p>
            There will be 3 yield farming pools:
            <br>
            Pool 1: Stake JustSwap USDT/TRX LP token, yield farming $JFI
            <br>
            Pool 2: Stake JustSwap USDJ/TRX LP token, yield farming $JFI
            <br>
            Pool 3: Stake JustSwap JFI/TRX LP token, yield farming $JFI
        </p>

        <p>
            There will be 21,000 $JFI total, with 7,000 in each pool.
            In each pool, 3,500 $JFI will be mined in the first week, with 1,750 $JFI in the second week, 875 $JFI for the following week and so on, until all 21,000 $JFI are mined in a total of 10 weeks.
        </p>

        <jfiDataTable/>

        <p>
            Each miner will be rewarded with the $JFI pro rata the share of liquidity stakes the miner provides in that pool.
        </p>

        <p>
            $JFI can be used in participating in the governance of JackPool.finance,
            collecting optimized yield farming profits across defi platforms on Tron. You will be able to vote on JackPool.finance DAO and participate in other Defi yield farming to obtain more yield farming revenue.
        </p>

        <p>
            JFI Contract Address：TN7zQd2oCCguSQykZ437tZzLEaGJ7EGyha
            <br>
            Pool 1 Contract Address：TBQMTZ3pnechzBv5yD5eMLCnP5tWNWfFpo
            <br>
            Pool 2 Contract Address：TKQFjoSCa7tadMdJMpdTjW5ViHZi19Lrms
            <br>
            Pool 3 Contract Address：TS3tSC76h2wSitY9scSuobVUeTbk4TAt8P
            <br>
            Pool 1,2will be initiated at: 08/24/2020 @ 4:00pm (UTC)
            <br>
            Pool 3 will be initiated at:  09/02/2020 @ 12:00pm (UTC)

        </p>
    </div>
</template>

<script>
    import jfiDataTable from './jfi_data_table_en.vue'

    export default {
        name: 'jfiEn',
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

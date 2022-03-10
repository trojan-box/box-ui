<template>
    <div class="text-page">

        <h3 class="tac">JFI 저스트 스왑의 원클릭 Defi 채굴 프로토콜</h3>

        <p>
            우리는 프로그래머와 제품 관리자로 구성된 팀입니다. 우리는 YFI의 창립자 Andre Conje의 디자인 철학에 영향을 받습니다. YFI는 한때 2000% APR까지 달성했으며, 현재까지 100%이상의 APR을 유지합니다. 우리는 YFI가 정말 멋진 아이디어라고 생각합니다. 우리는 이것을 차용해 Justswap의 일드 파밍 수익 극대화 프로토콜인 JFI를 재설계했습니다. JFI는 JustSwap의 여러 풀에서 시작하여 Tron 네트워크에 배포됩니다. 더 낮은 가스 수수료로 더 빠른 Tron 네트워크를 즐길 수 있을 뿐만 아니라 JustSwap에 대한 유동성 제공에 참여할 때 더 많은 이익을 얻을 수 있습니다.
        </p>

        <p>
            JackPool.finance (JFI)에 참여해 유동성 채굴 수익을 극대화할 수 있습니다.
        </p>

        <ul>
            <li>유저는 저스트 스왑에 유동성을 제공하고, 거래 수수료를 분배 받습니다.</li>
            <li>1번을 기초로 저스트 스왑에 유동성을 제공하는 LP 토큰을 JackPool.finance에서 유동성 채굴을 진행하면, JackPool.finance의 토큰인 $JFI를 획득할 수 있습니다.</li>
            <li>또한 $JFI를 저스트 스왑에 넣고 유동성을 제공할 경우 거래 수수료를 얻을 수 있습니다. 수익 토큰을 JackPool.finance에 넣어 유동성 채굴을 통해 $JFI를 얻을 수 있습니다.</li>
            <li>$JFI를 보유해 JackPool.finance의 거버넌스와 의결권을 얻을 수 있으며, 다른 Defi 채굴에 참여해 더 많은 채굴 수익을 얻을 수 있습니다.</li>
        </ul>

        <p>
            $JFI의 총발행량은 제한되어 있으며, 총 2.1만개가 발행됩니다. 추가 발행은 없으며, 초기에 참여할 수록 더 많은 혜택을 받을 수 있습니다.
        </p>

        <h4>이코노미 모델</h4>

        <p>
            $JFI는 커뮤니티에 속하며, 사전 채굴, ICO가 없습니다. 모든 $JFI는 채굴을 통해 얻습니다.
        </p>

        <p>
            JackPool.finance에는 총 3개의 유동성 풀이 있습니다:
            <br>
            1번 풀: 저스트 스왑 USDT/TRX 페어의 대한 유동성 수익 토큰
            <br>
            2번 풀: 저스트 스왑 USDJ/TRX 페어의 대한 유동성 수익 토큰
            <br>
            3번 풀: 저스트 스왑 JFI/TRX 페어의 대한 유동성 수익 토큰
        </p>

        <p>
            $JFI의 총수량은 2.1만개입니다.
        </p>

        <p>
            각 풀에서 최대 채굴 가능한 수량은 7,000개입니다. 각 풀은 첫 번째 주에 3,500개를 채굴 가능하며, 두 번째 주에 1,750개를 채굴 할 수 있습니다. 세 번째 주는 875개로, 매주 절반씩 감소하며 10주에 채굴이 완료됩니다.
        </p>

        <jfiDataTable/>

        <p>
            채굴자가 얻은 $JFI의 수량은 채굴자가 제공한 유동성 수익에 대한 해당 풀의 총 유동성 수익 비율로 계산됩니다.
        </p>

        <p>
            $JFI는 커뮤니티 거버넌스 기능을 갖고 있으며 다양한 Defi 플랫폼 채굴 수익을 통합합니다. 후속 프로젝트의 수익 분배, 거버넌스 참여 사용, JackPool.finance DAO의 의결권 보유, 기타 Defi 채굴 참여 등 여러 채굴 수익을 얻을 수 있습니다.
        </p>

        <p>
            JFI 토큰 스마트 컨트랙트 주소 : TN7zQd2oCCguSQykZ437tZzLEaGJ7EGyha
            <br>
            풀 1 스마트 컨트랙트 주소 : TBQMTZ3pnechzBv5yD5eMLCnP5tWNWfFpo
            <br>
            풀 2 스마트 컨트랙트 주소 : TKQFjoSCa7tadMdJMpdTjW5ViHZi19Lrms
            <br>
            풀 3 스마트 컨트랙트 주소 : TS3tSC76h2wSitY9scSuobVUeTbk4TAt8P
            <br>
            풀 1 및 풀 2 시작 시간 : 2020 년 8 월 25 일 @ 0:00 am (UTC + 8)
            <br>
            풀 3 시작 시간 : 2020 년 9 월 2 일 오후 20:00 (UTC + 8)
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

import bus from '../bus.js'
import Vue from "vue";

export default {

    // 读取MetaMask，更新账号等
    async scanMetaMaskAccount() {
        //以太坊web3
        const Web3 = require('web3');
        if (window.web3 && window.ethereum) {
            if (window.ethereum.chainId == '0x3' || window.ethereum.chainId == '3') {
                Vue.prototype.myWeb3 = new Web3(window.web3.currentProvider);
            } else {
                try {
                    await window.ethereum.request({
                        method: 'wallet_switchEthereumChain',
                        params: [{ chainId: "0x3" }]
                    });
                } catch (switchError) {
                    if (switchError.code === 4902) {
                        try {
                            await window.ethereum.request({
                                method: 'wallet_addEthereumChain',
                                params: [{
                                    chainId: "0x3",
                                    rpcUrl: 'https://ropsten.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
                                    chainName: "Ropsten Test Network",
                                    nativeCurrency: {
                                        name: "ETH",
                                        symbol: "ETH",
                                        decimals: 18
                                    },
                                    blockExplorerUrls: "https://ropsten.etherscan.io",
                                }],
                            });
                        } catch (addError) {
                            console.error(addError)
                        }
                    }
                }

                window.location.reload();
            }
        }
        let ether
        if (window.ethereum) {
            ether = window.ethereum
        }

        if (ether) {
            // 检测是否安装
            bus.appvue.$store.commit("setAppKey", {
                'is_metamask_installed': true,
            });
            let address
            // 收集账号状态
            if (window.ethereum) {
                address = await window.ethereum.request({
                    method: "eth_requestAccounts",
                });
            }
            let account_json = {
                default_address: address[0] || '',
                // node_host: tw.fullNode.host || '',
            };
            if (account_json.default_address) {
                bus.appvue.$modal.hide("modalPopConnect")
            }
            // 提交账号状态给全局
            bus.appvue.$store.commit("setAccountKey", account_json)
        }
    },

    listenMetaMask() {
        let me = this
        window.addEventListener("message", function (e) {
            let d = e.data
            if (d.isMetaMask) {
                // 重新读取账号
                me.scanMetaMaskAccount()

                // UI：交易成功的提示
                if (e.data.message && e.data.message.action == "tabReply") {

                    console.log("tabReply event", e.data.message);

                    let tx = e.data.message.data.data.txID;
                    if (tx) {
                        let html = `<a href="${bus.appvue.$store.state.sitecfg.url_transaction_view}${tx}" target="_blank">${tx}</a>`;
                        bus.appvue.$toasted.show(html);
                    }

                    // 刷新钱包余额
                    setTimeout(function () {
                        // 页面存在时请求
                        if (bus.stakeinfovue) {
                            bus.stakeinfovue.getAllData()
                        }
                    }, 6000)

                }
            }
        });
    },

    async getAddress() {
        if (window.ethereum) {
            let addresses = await window.ethereum.request({
                method: "eth_requestAccounts",
            });
            return addresses[0];
        }
    }
}

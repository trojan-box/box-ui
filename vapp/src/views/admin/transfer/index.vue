<template>
  <div class="transferWrapper">
    <div class="content">
      <h2 style="text-align: center; padding-bottom: 20px;">Trojan空投批量转账</h2>
      <div class="step">
        <a-steps :current="stepIndex" size="small">
          <a-step title="准备" />
          <a-step title="确认" />
          <a-step title="发送" />
        </a-steps>


        <div v-if="stepIndex === 1">
          <div class="selectCoin">
            代币
          </div>
          <a-select default-value="ARES" style="width: 100%" @change="handleCoinChange">
            <a-select-option value="ARES">
              ARES
            </a-select-option>
            <a-select-option value="BNB">
              BNB
            </a-select-option>
            <a-select-option value="BTC">
              BTC
            </a-select-option>
            <a-select-option value="ETH">
              ETH
            </a-select-option>
          </a-select>

          <div class="uploadTitle">
            <div>收币地址和数量</div>
            <a-button @click="changeInputType('input')">手动输入</a-button>
            <a-button @click="changeInputType('upload')">上传文件</a-button>
          </div>
          <div v-if="inputType === 'upload'">
            <a-upload-dragger
                name="file"
                accept=".xlsx,.csv,.txt"
                :file-list="fileList"
                :before-upload="handleUploadDrag"
            >
              <p class="ant-upload-drag-icon">
                <a-icon type="inbox" />
              </p>
              <p class="ant-upload-text">
                点击或将文件拖到此处上传
              </p>
            </a-upload-dragger>
            <div style="text-align: center;" v-if="fileList.length === 0">
              <a-button type="primary" class="next-button" @click="toSummary">
                下一步
              </a-button>
            </div>
          </div>
        </div>


        <div class="summary" v-if="(stepIndex === 1 && inputType === 'input') || (stepIndex === 1 && fileList.length > 0) ">
          <a-form-model :form="form" @submit="handleSubmit" :model="dynamicValidateForm"  ref="dynForm">
            <div class="formItem"
                               v-for="(domain, index) in dynamicValidateForm.domains"
                               :key="domain.key"
                               :label="index === 0 ? '' : ''"
            >
              <a-input-group size="large" style="width: 90%">
                <a-row :gutter="8">
                  <a-col :span="18">
                    <a-form-model-item prop="address">
                      <a-input placeholder="请输入地址"
                               v-model="domain.address" />
                    </a-form-model-item>
                  </a-col>
                  <a-col :span="5">
                    <a-form-model-item prop="count">
                      <a-input placeholder="请输入数量" type="number"
                               v-model="domain.count" />
                    </a-form-model-item>
                  </a-col>
                </a-row>
              </a-input-group>
              <a-icon
                  class="dynamic-delete-button"
                  type="minus-circle-o"
                  @click="removeItem(domain)"
              />
            </div>

            <a-form-model-item>
              <a-button type="dashed" style="width: 60%" @click="addItem">
                <a-icon type="plus" /> Add field
              </a-button>
            </a-form-model-item>
            <!--<a-form-model-item>-->
            <!--  <a-button type="primary" html-type="submit">-->
            <!--    Submit-->
            <!--  </a-button>-->
            <!--</a-form-model-item>-->
            <div v-if="(errorAddress.length > 0) " style="color: red">
              第
              <span v-for="(num) in errorAddress"
                    :key="num" >
                {{num}},
              </span>
              条地址错误
            </div>
          </a-form-model>
          <div style="text-align: center;">
            <a-button type="primary" class="next-button" @click="toSummary">
              下一步
            </a-button>
          </div>
        </div>

        <div class="summary" v-if="stepIndex === 2">
          <div>
            预估费用 {{txFee | tofixed4 | parsefloat}} ETH
          </div>
          <div>
            摘要
          </div>
          <div class="summary-items">
            <div class="summary-item">
                <span>
                  {{addressCount}}
                </span>
              <span>
                  地址总数
                </span>
            </div>
            <div class="summary-item">
              <span>{{transferTotalToken}}ARES</span>
              <span>代币发放总数</span>
            </div>
          </div>

          <div class="summary-items">
            <div class="summary-item">
              <span>{{dealNum}}</span>
              <span>交易总数</span>
            </div>
            <div class="summary-item">
              <span>{{balance | tofixed0 | parsefloat}} ARES</span>
              <span>代币余额</span>
            </div>
          </div>

          <div  class="summary-item summary-footer">
            <span>{{ethBalance | tofixed2 | parsefloat}} ETH</span>
            <span>您的ETH余额</span>
          </div>

          <div style="text-align: center;">
            <a-button type="primary" class="next-button" @click="nextStepToTransfer">
              下一步
            </a-button>
          </div>
        </div>

        <div class="summary" v-if="stepIndex === 3">
          <div class="result-item" v-for="(domain) in dynamicValidateForm.domains"
               :key="domain.key">
            <span>{{domain.address}}</span>
            <a-icon type="check-circle" theme="filled" style="color: green"/>
          </div>

          <div style="text-align: center;">
            <a-button type="primary" class="next-button" @click="complete">
              完成
            </a-button>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>


<script>
import XLSX from "xlsx";
import data_main_list from "@/data/main_list.js";
import Decimal from "decimal.js";
const tokenAbi = require("@/data/token_abi.json");
let id = 0;
export default {
  name: "Transfer",
  data() {
    return {
      stepIndex: 1,
      fileList: [],
      inputType: "upload", // upload input
      dynamicValidateForm: {
        domains: [],
      },
      addressCount: 0,
      dealNum: 0,
      transferTotalToken: 0,
      balance: 0,
      txFee: 0,
      ethBalance: 0,
      errorAddress: []
    }
  },
  beforeRouteEnter (to, from, next) {
    const token = sessionStorage.getItem("admin_token");
    if("TrojanAdmin" === atob(token)) {
      next();
    } else {
      next( vm => {
        vm.$router.push("/admin");
      })
    }
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'dynamic_form_item' });
    this.form.getFieldDecorator('keys', { initialValue: [], preserve: true });
  },
  computed: {
    token_data() {
      let v = this;
      let temp = null;
      for (let item of data_main_list) {
          temp = item;
      }
      return JSON.parse(JSON.stringify(temp));
    },
  },
  methods: {
    changeInputType(type) {
      this.inputType = type;
    },
    handleCoinChange() {

    },
    handleUploadDrag(file, filelist) {
      let dynamicValidateForm = this.dynamicValidateForm;
      let transferResult = [];
      this.fileList = [file];
      const reader = new FileReader();
      const decimals = this.token_data.token_decimals;

      if (/.csv$/.test(file.name) || /.txt$/.test(file.name)) {
        reader.readAsText(file);
        reader.onload = function (e) {
          const result = reader.result;
          const arr = result.split('\n');
          const content = arr.slice(1);
          console.log(content);
          content.map((item, index) =>
          {
            let temp = {};
            const row = item.split(',');
            temp["address"] = row[0];
            temp["count"] = row[1].replace("\r", "");
            temp["key"] = id++;
            transferResult.push(temp);
          });
        }
      }
      else if (/.xlsx$/.test(file.name))
      {
        reader.readAsBinaryString(file);
        reader.onload = (e) => {
          try
          {
            let data = e.target.result
            let workBook = XLSX.read(data, {type: 'binary'});
            const wsname = workBook.SheetNames[0];
            const ws = XLSX.utils.sheet_to_json(workBook.Sheets[wsname]);
            ws.map(item => {
              let temp = {};
              temp["address"] = item.address;
              temp["count"] = item.count;
              temp["key"] = id++;
              transferResult.push(temp);
            })
          } catch (e)
          {
            console.log(e);
          }

        }
      }
      dynamicValidateForm.domains = transferResult;
      return false;
    },
    async updateAddressCount() {
      this.addressCount = 0;
      this.dealNum = 0;
      this.transferTotalToken = 0;

      let v = this;
      const token_address = v.token_data.token_address;
      //调用合约执行
      let token_contract = new v.myWeb3.eth.Contract(
          tokenAbi,
          token_address
      );
      const local_address = await v.action.getAddress();
      const decimals = v.token_data.token_decimals;

      // Eth balance
      this.ethBalance = new Decimal(
          await v.myWeb3.eth.getBalance(local_address)
      ).div(Math.pow(10, decimals));

      // Ares balance
      token_contract.methods.balanceOf(local_address).call(function (error, result) {
        let balance = new Decimal(result).div(Math.pow(10, decimals)).toFixed();
        v.balance = balance;
      });

      // tx fee
      let addresses = [];
      let ammounts = [];
      this.dynamicValidateForm.domains.map( item =>
      {
        addresses.push(item.address);
        ammounts.push(new Decimal(item.count).mul(Math.pow(10, decimals)).toFixed());
      });
      let estimateGas = await v.myWeb3.eth.estimateGas({
        from: local_address,
        to: token_address,
        value: 0,
        data: token_contract.methods
            .batchTransfer(addresses, ammounts).encodeABI()
      });
      let getGasPrice = await v.myWeb3.eth.getGasPrice();
      this.txFee = new Decimal(
          getGasPrice
      ).mul(estimateGas).div(Math.pow(10, decimals));

      const address = new Set();
      this.dynamicValidateForm.domains.map(item => {
        if (item.count > 0) {
          this.addressCount ++;
          this.transferTotalToken += Number(item.count);
          address.add(item.address);
        }
      });
      this.dealNum = address.size;
      console.log(this.addressCount);
      console.log(this.dealNum);
      console.log(this.transferTotalToken);
    },
    addItem() {
      this.dynamicValidateForm.domains.push({
        address: "",
        count: '',
        key: id++,
      });
    },
    removeItem(item) {
      let index = this.dynamicValidateForm.domains.indexOf(item);
      if (index !== -1) {
        this.dynamicValidateForm.domains.splice(index, 1);
      }
    },
    handleSubmit(e) {
      e.preventDefault();
      this.dynamicValidateForm.domains.map(v => {
        console.log(v.address, v.count);
      })
    },

    nextStep() {
      this.stepIndex++;
    },
    toSummary() {
      console.log(this.dynamicValidateForm.domains);
      if (this.dynamicValidateForm.domains.length === 0)
      {
        this.$message.error('please input transfer info');
        return;
      }
      // check address is error
      this.errorAddress = [];
      let v = this;
      this.dynamicValidateForm.domains.map((item, index) => {
        const isRight = v.myWeb3.utils.isAddress(item.address);
        if (!isRight)
        {
          this.errorAddress.push(index + 1);
        }
      })
      if (this.errorAddress.length === 0)
      {
        this.updateAddressCount();
        this.stepIndex++;
      }
    },
    complete() {
      this.stepIndex = 1;
      this.fileList = [];
      this.dynamicValidateForm.domains = [];
    },
    async nextStepToTransfer() {
      if (this.dynamicValidateForm.domains.length === 0)
      {
        return;
      }
      let v = this;
      const token_address = v.token_data.token_address;
      const local_address = await v.action.getAddress();

      if (v.token_data.id === "Ares") {
        //调用合约执行
        let token_contract = new v.myWeb3.eth.Contract(
            tokenAbi,
            token_address
        );
        let address = [];
        let ammounts = [];
        let decimals = this.token_data.token_decimals;
        this.dynamicValidateForm.domains.map( item =>
        {
          if (item.count > 0)
          {
            address.push(item.address);
            let value = new Decimal(item.count).mul(Math.pow(10, decimals)).toFixed()
            ammounts.push(value);
            console.log("address ",item.address," value ",value," count ",item.count);
          }
        });

        const batchTransferData = token_contract.methods
            .batchTransfer(address, ammounts)
            .encodeABI();

        await v.myWeb3.eth.sendTransaction({
          from: local_address,
          to: token_address,
          value: 0,
          data: batchTransferData
        }, (error, result) => {
          if (
              error &&
              error.message.includes("User denied transaction signature")
          ) {
            console.log("User Rejections: ", error);
            this.$message.error('User Rejections');
          } else {
            this.nextStep();
          }
        });
      }
    }
  }
}
</script>


<style lang="scss">
.transferWrapper {
  width: 100%;
  height: 100vh;
  background: #fdfdfd;
}

.content {
  padding: 30px;
  width: 50%;
  margin: 0 auto;
}

.uploadTitle {
  margin: 40px 0 10px 0;
  display: flex;
  justify-content: space-between;
}

.selectCoin {
  margin-top: 50px;
}

.dynamic-delete-button {
  cursor: pointer;
  font-size: 24px;
  color: #999;
  transition: all 0.3s;
}
.dynamic-delete-button:hover {
  color: #777;
}
.formItem {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.ant-form-item {
  margin-bottom: 10px !important;
}
.summary {
  margin-top: 20px;
  border: 1px solid #eeeeee;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 5px 5px 10px #cecece;
}
.summary-items {
  width: 100%;
  display: flex;
}
.summary-item {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 0;
  border: 1px solid #f1f1f1;
}
.summary-footer {
  width: 100%;
}
.result-item {
  display: flex;
  align-items: center;
  column-gap: 10px;
}
.next-button {
  margin-top: 15px;
}
</style>

<template>
  <div class="adminWrapper">
    <div class="formWrapper">
      <a-form
          id="components-form-demo-normal-login"
          :form="form"
          class="login-form"
          @submit="handleSubmit"
      >
        <a-form-item>
          <a-input placeholder="Username" v-decorator="[
          'username',
          { rules: [{ required: true, message: 'Please input your username!' }] },
        ]">
            <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-input type="password"  placeholder="Password" v-decorator="[
          'password',
          { rules: [{ required: true, message: 'Please input your Password!' }, {validator: validatePassword}] },
        ]">
            <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
          </a-input>
        </a-form-item>
        <a-form-item class="submit-button">
          <a-button type="primary" html-type="submit" class="login-form-button">
            Log in
          </a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>



<script>
export default {
  name: "Admin",
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'normal_login' });
  },
  methods: {
    validatePassword(rule, value, callback) {
      const form = this.form;
      if (value === "") {
        callback('password error');
      } else {
        callback();
      }
    },
    handleSubmit(e) {
      e.preventDefault();
      const v = this.form.getFieldsValue();
      if (v.username === "admin" && v.password === "TrojanAdmin")
      {
        sessionStorage.setItem('admin_token', btoa('TrojanAdmin'));
        this.$router.push("admin/tran");
      }
    }
  }
}
</script>


<style>
.adminWrapper {
  width: 100%;
  height: 100vw;
  background: #FFF
}

.formWrapper {
  width: 400px;
  height: 300px;
  background: #f1f1f1;
  padding: 40px;
  margin: 100px auto;
}
.submit-button {
  text-align: center;
}
</style>

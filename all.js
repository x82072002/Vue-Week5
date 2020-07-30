
import zh_TW from './zh_TW.js';

Vue.component('loading',VueLoading);

Vue.component('ValidationObserver',VeeValidate.ValidationObserver);
Vue.component('ValidationProvider',VeeValidate.ValidationProvider);

// Class 設定檔案
VeeValidate.configure({
  classes: {
    valid: 'is-valid',
    invalid: 'is-invalid',
  }
});

VeeValidate.localize('tw', zh_TW);


new Vue({
  el: '#app',
  data: {
    isLoading: false,
    email: '',
    person: '',
    tel: '',
    location: '',
    payMethod: '',
    message: '',
  },
  methods: {
    clickBtn() {
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
        $('#orderModal').modal('show');
      },1000);
    },
  },
});

webpackJsonp([81],{"2iPg":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o={name:"payQRcode",data:function(){return{qRcode:"",orderSn:"",orderId:"",orderAmount:0,timer:null,payType:"",is_special:""}},created:function(){this.orderSn=this.$route.query.orderSn,this.orderId=this.$route.query.orderId,this.payType=this.$route.query.pay_type},beforeMount:function(){},mounted:function(){this.payWxQrCode(),this.getOrderInfo()},destroyed:function(){clearInterval(this.timer)},methods:{payWxQrCode:function(){var e=this;clearInterval(this.timer),this.$axios({method:"post",url:this.$store.state.api.wx.wxinpay,params:{order_sn:this.orderSn}}).then(function(t){e.orderSn=t.data.data.order_info.order_sn,e.qRcode=t.data.data.url,e.orderAmount=t.data.data.order_info.order_amount,e.timer=setInterval(function(){e.getOrderInfo()},1500),"商品明细"==sessionStorage.getItem("invoiceInfo")&&e.sendInvoice()})},sendInvoice:function(){var e="",t="";"个人"==sessionStorage.getItem("is_enterprice")&&(t=1,e=sessionStorage.getItem("nameValue")),"单位"==sessionStorage.getItem("is_enterprice")&&(t=4,e=sessionStorage.getItem("firmName")),this.$axios({method:"get",url:this.$store.state.api.invoice.apply_title,params:{user_id:localStorage.user_id,order_id:this.orderId,title:e,is_enterprice:t,tax_num:sessionStorage.getItem("number")}}).then(function(e){e.data})},getOrderInfo:function(){var e=this;this.$axios.get(this.$store.state.api.order.get_order_info,{params:{order_sn:e.orderSn}}).then(function(t){var r=t.data;console.log(r),0===r.error&&(e.is_special=r.data.is_special,0!=r.data.order_status&&(clearInterval(e.timer),e.$router.push({path:"/paystatus",query:{order_sn:e.orderSn}})))})}}},n={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"payQRcode"},[r("div",{staticClass:"payQRcode-coutent"},[r("p",[r("i",[e._v(e._s("订单编号："+e.orderSn))]),e._v(" "),r("em",[e._v(e._s("￥"+e.orderAmount))]),e._v(" "),r("img",{attrs:{src:e.qRcode,alt:""}}),e._v(" "),r("span",[e._v("请使用微信扫描上方二维码完成支付")])])])])},staticRenderFns:[]};var a=r("VU/8")(o,n,!1,function(e){r("nOlF")},"data-v-43332646",null);t.default=a.exports},nOlF:function(e,t){}});
webpackJsonp([40],{Qcim:function(e,s){},uuIU:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var o={name:"paystatus",data:function(){return{iconClass:"iconfont icon-xuanze",info1:"支付成功",paysuccess:{payTitle:"",payWay:"",payTime:"",payOrderNum:"",payPrice:"",couponcontent:""},orderSn:"",orderId:"",userName:"",dialogImg:sessionStorage.getItem("defal"),popupVisible:!1}},created:function(){document.title=this.$route.meta.title,this.orderSn=this.$route.query.order_sn,this.status=this.$route.query.status},mounted:function(){this.getOrderInfo(),this.userInfo()},methods:{getOrderInfo:function(){var e=this;e.$axios.get(e.$store.state.api.order.payok,{params:{order_sn:e.orderSn}}).then(function(s){var t=s.data;0==t.error&&(e.orderId=t.data.order_id,e.paysuccess.couponcontent=t.data.coupon_content,e.paysuccess.payWay=t.data.pay_name,e.paysuccess.payOrderNum=t.data.order_sn,e.paysuccess.payPrice="￥"+t.data.order_amount,e.paysuccess.payTime=(new Date).toLocaleString(),sessionStorage.getItem("funongGoodsId")==t.data.goods_list[0].goods_id&&(e.popupVisible=!0))})},userInfo:function(){var e=this;e.$axios({url:e.$store.state.api.getUserInfo,method:"get",params:{}}).then(function(s){var t=s.data;0==t.error&&(e.userName=t.data.store.nickname)})},toOrderDetail:function(){this.$router.push({path:"/orderdetail",query:{order_sn:this.orderSn}}),sessionStorage.removeItem("is_enterprice"),sessionStorage.removeItem("invoiceInfo"),sessionStorage.removeItem("nameValue"),sessionStorage.removeItem("firmName"),sessionStorage.removeItem("number")},toIndex:function(){this.$router.push("/"),sessionStorage.removeItem("is_enterprice"),sessionStorage.removeItem("invoiceInfo"),sessionStorage.removeItem("nameValue"),sessionStorage.removeItem("firmName"),sessionStorage.removeItem("number")},gocoupon:function(){this.$router.push({path:"/minecoupon"})}},destroyed:function(){sessionStorage.removeItem("is_enterprice"),sessionStorage.removeItem("invoiceInfo"),sessionStorage.removeItem("nameValue"),sessionStorage.removeItem("firmName"),sessionStorage.removeItem("number")}},a={render:function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"paystatus",staticStyle:{position:"relative"}},[t("div",{staticClass:"background_div"},[t("mt-popup",{staticClass:"dialog",model:{value:e.popupVisible,callback:function(s){e.popupVisible=s},expression:"popupVisible"}},[t("img",{attrs:{src:e.dialogImg}}),e._v(" "),t("p",[e._v("长按上图保存您的助力勋章")])]),e._v(" "),t("div",{staticClass:"paystatus-img"},[t("i",{class:e.iconClass}),e._v(" "),t("p",{domProps:{textContent:e._s(e.info1)}})]),e._v(" "),t("div",{staticClass:"paysuccess-wrap"},[t("div",{staticClass:"paysuccess-world borderf8f8f8"},[t("i",[e._v("支付方式：")]),e._v(" "),t("span",{domProps:{textContent:e._s(e.paysuccess.payWay)}})]),e._v(" "),t("div",{staticClass:"paysuccess-world"},[t("i",[e._v("支付时间：")]),e._v(" "),t("span",{domProps:{textContent:e._s(e.paysuccess.payTime)}})]),e._v(" "),t("div",{staticClass:"paysuccess-world",staticStyle:{"padding-bottom":"0.15rem"}},[t("i",[e._v("订单编号：")]),e._v(" "),t("span",{domProps:{textContent:e._s(e.paysuccess.payOrderNum)}})]),e._v(" "),t("div",{staticClass:"paysuccess-world paysuccess-world2 borderf8f8f8"},[t("i",[e._v("支付金额："),t("span",{staticStyle:{color:"#3C3C3C7"}},[e._v(e._s(e.paysuccess.payPrice))])])]),e._v(" "),t("div",{staticClass:"paysuccess-world paysuccess-world3"})])],1),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:e.paysuccess.couponcontent,expression:"paysuccess.couponcontent"}],staticClass:"coupon",on:{click:function(s){e.gocoupon()}}},[t("div",[e._v("\n\t\t\t"+e._s(e.paysuccess.couponcontent)+"\n\t\t")])]),e._v(" "),t("button",{staticClass:"paystatus-btn1",on:{click:function(s){e.toOrderDetail()}}},[e._v("查看订单")]),e._v(" "),t("button",{staticClass:"paystatus-btn",on:{click:function(s){e.toIndex()}}},[e._v("回到首页")])])},staticRenderFns:[]};var r=t("VU/8")(o,a,!1,function(e){t("Qcim")},"data-v-cb6fb3d6",null);s.default=r.exports}});
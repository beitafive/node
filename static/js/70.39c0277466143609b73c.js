webpackJsonp([70],{ArbZ:function(o,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t=r("Au9i"),s={name:"orderdetail",data:function(){return{storeName:"",order_sn:"",orderInfo:"",returnState:"退货",package_num:"",privilege:"",orderStatus:"",canReturn:"",couponInfo:"",showCoupon:!1,showActive:!1,spanDialog:!1,errorPopup1:!1,errorPopup2:!1,goodsList:"",payTime:"",shippingInfo:"",herfs:"",promType:"",promPrice:"",arrLast:"",haveInvoice:"",noInvoice:"",detail:"",isTake:!1}},created:function(){this.order_sn=this.$route.query.order_sn},mounted:function(){this.getOrderInfo()},methods:{toGoodsDetail:function(o){240!=o.goods_id&&this.$router.push({path:"/goodsdetail",query:{id:o.goods_id}})},toStore:function(){this.$router.push("/keeperselecte/api.php?s=user/api/set_store&_store_id="+_this.$store.state.storeinfo.id)},callMe:function(){window.location.href=ysf.url()},closePopup1:function(){this.spanDialog=!1,this.errorPopup1=!1},closePopup2:function(){this.spanDialog=!1,this.errorPopup2=!1},lastPay:function(){var o=this;o.$axios({method:"get",url:o.$store.state.api.order.buyAgain,params:{order_id:o.orderInfo.order_id,type:"continue"}}).then(function(e){var r=e.data;console.log(r,"r"),0==r.error&&o.$router.push("/shopcart")}).catch(function(o){})},payAgain:function(){var o=this;o.$axios({method:"get",url:o.$store.state.api.order.buyAgain,params:{order_id:o.orderInfo.order_id}}).then(function(e){var r=e.data;console.log(r,"r"),0==r.error&&o.$router.push("/shopcart"),1==r.error&&"PART_SALE_OUT"==r.error_code&&(o.goodsList=r.error_msg,o.spanDialog=!0,o.errorPopup1=!0),1==r.error&&"ALL_SALE_OUT"==r.error_code&&(o.spanDialog=!0,o.errorPopup2=!0)}).catch(function(o){})},getOrderInfo:function(){var o=this;o.$axios({method:"get",url:o.$store.state.api.order.get_order_info,params:{order_sn:o.order_sn,order_type:"normal"}}).then(function(e){var r=e.data;if(0==r.error){o.orderInfo=r.data,o.getInvoiceInfo(o.orderInfo.order_id),"10"!=o.orderInfo.order_status&&"12"!=o.orderInfo.order_status&&"13"!=o.orderInfo.order_status||(o.isTake=!0),o.package_num=r.data.goods_list.length,o.arrLast=r.data.goods_list[r.data.goods_list.length-1],o.privilege=(r.data.market_amount-r.data.order_amount).toFixed(2),o.orderStatus=r.data.order_status,o.shippingInfo=r.data.shipping_info,""==r.data.shipping_info&&(o.shippingInfo="暂无物流信息"),o.storeName=r.data.store_title,o.payTime=r.data.pay_date,o.promType=r.data.prom_type,o.promPrice=r.data.prom_price,""!=r.data.prom_type&&(o.showActive=!0),"money"==r.data.coupon.prom_type&&(o.couponInfo=r.data.coupon.name+": -￥"+r.data.coupon.prom_money),"discount"==r.data.coupon.prom_type&&(o.couponInfo=r.data.coupon.name+"："+r.data.coupon.prom_discount/10+"折"),""==r.data.coupon?o.showCoupon=!1:o.showCoupon=!0,"2"==o.orderInfo.order_status||"4"==o.orderInfo.order_status||"5"==o.orderInfo.order_status||"10"==o.orderInfo.order_status||"11"==o.orderInfo.order_status||"12"==o.orderInfo.order_status||"13"==o.orderInfo.order_status?o.orderInfo.order_status_rego=1:o.orderInfo.order_status_rego=0;var t=o.orderInfo.user_id,s=o.orderInfo.consignee,n=o.orderInfo.user_id,a=o.orderInfo.mobile;ysf.product({show:0,title:"用户订单",desc:"请点击下方红色字体进入后台管理订单详情页面",picture:"",note:"进入订单详情",url:"https://wd-backend.hzanchu.com/orderDetail?order_sn="+o.order_sn+"&order_id="+o.orderInfo.order_id,success:function(){ysf.config({uid:t,name:s,email:n,mobile:a})}})}1==r.error&&o.$toast({message:r.error_msg,position:"center",duration:1e3})})},getInvoiceInfo:function(o){var e=this;e.$axios({method:"get",url:e.$store.state.api.invoice.detail,params:{user_id:localStorage.user_id,order_id:o}}).then(function(o){var r=o.data;0==r.error&&(e.detail=r.data,1==e.detail.invoice_type?e.haveInvoice=!0:e.haveInvoice=!1,1==e.detail.download?e.isTake=!0:e.isTake=!1,"不开发票"==e.detail.title?e.noInvoice=!0:e.noInvoice=!1)})},toInvoiceDetail:function(){this.$router.replace({path:"/invoicedetail",query:{order_id:this.orderInfo.order_id}})},cancelOrder:function(){var o=this;Object(t.MessageBox)({showCancelButton:!0,confirmButtonText:"真的",cancelButtonText:"算了"}),t.MessageBox.confirm("真的要抛弃我吗?").then(function(e){var r=o;0==r.orderInfo.order_status&&r.$axios({url:r.$store.state.api.order.cancel_order,method:"post",params:{order_sn:r.orderInfo.order_sn}}).then(function(o){var e=o.data;console.log(e,"r"),0==e.error&&(r.$toast({message:"订单取消成功",position:"center",duration:1e3}),r.orderInfo.order_status_name="已取消",r.getOrderInfo()),1==e.error&&r.$toast({message:e.error_msg,position:"center",duration:1e3})}),1==r.orderInfo.order_status&&0==r.orderInfo.is_handle&&r.$axios({url:r.$store.state.api.gifts.gift_cancel_order,method:"post",params:{order_sn:r.orderInfo.order_sn}}).then(function(o){var e=o.data;console.log(e,"r"),0==e.error&&(r.$toast({message:"订单取消成功",position:"center",duration:1e3}),r.orderInfo.order_status_name="已取消",r.getOrderInfo()),1==e.error&&r.$toast({message:e.error_msg,position:"center",duration:1e3})})})},remind:function(){this.$toast({message:"已提醒,请耐心等待一下嘛！",position:"center",duration:1e3})},confirmReceipt:function(){var o=this;Object(t.MessageBox)({showCancelButton:!0,confirmButtonText:"是的",cancelButtonText:"还没"}),t.MessageBox.confirm("确定已收到货了吗?").then(function(e){o.$axios({method:"get",url:o.$store.state.api.order.confirm_receipt,params:{order_sn:o.order_sn}}).then(function(e){var r=e.data;0==r.error&&(o.applyInvoice(),o.getInvoiceInfo(o.orderInfo.order_id),o.orderInfo.order_status=10,o.getOrderInfo()),1==r.error&&o.$toast({message:r.error_msg,position:"center",duration:1e3})})})},applyInvoice:function(){this.$axios({method:"get",url:this.$store.state.api.invoice.apply,params:{user_id:localStorage.user_id,order_id:this.orderInfo.order_id,invoice_kind:"1"}}).then(function(o){})},toPay:function(){"present"==_this.orderInfo.order_type?this.$router.push({path:"/pay",query:{order_sn:_this.orderInfo.order_sn,pay_type:"gift"}}):this.$router.push({path:"/pay",query:{order_sn:_this.orderInfo.order_sn}})},toSend:function(){this.$router.push({path:"/giftpayok",query:{order_id:this.orderInfo.order_id}})},toLogistics:function(){this.$router.push({path:"/orderTrackings",query:{order_id:this.orderInfo.order_id}})},copyText:function(){var o=this;o.herfs=o.orderInfo.order_sn,new Clipboard(".btn").on("success",function(){o.$toast({message:"复制成功",className:"iconfont icon-chenggong"})})}}},n={render:function(){var o=this,e=o.$createElement,r=o._self._c||e;return r("div",{staticClass:"w-orderdetail"},[r("div",{staticClass:"logistics",on:{click:function(e){o.toLogistics()}}},[r("i",{staticClass:"iconfont"},[o._v("")]),o._v(" "),r("div",[r("p",[o._v(o._s(o.orderInfo.order_status_name))]),o._v(" "),r("p",[o._v("物流信息："+o._s(o.shippingInfo))]),o._v(" "),r("p",[o._v(o._s(o.orderInfo.shipping_time||"暂无发货时间"))])]),o._v(" "),r("i",{staticClass:"iconfont"},[o._v("")])]),o._v(" "),"present"!=o.orderInfo.order_type||"present"==o.orderInfo.order_type&&1==o.orderInfo.is_handle?r("div",{staticClass:"address"},[r("i",{staticClass:"iconfont"},[o._v("")]),o._v(" "),r("div",[r("p",[o._v(o._s(o.orderInfo.consignee)),r("span",[o._v(o._s(o.orderInfo.mobile))])]),o._v(" "),r("p",[o._v(o._s(o.orderInfo.province_name)+o._s(o.orderInfo.city_name)+o._s(o.orderInfo.district_name)+o._s(o.orderInfo.address))])])]):o._e(),o._v(" "),"present"==o.orderInfo.order_type&&0==o.orderInfo.is_handle?r("div",{staticClass:"no-handle-address"},[r("i",{staticClass:"iconfont",staticStyle:{"font-size":"0.3rem","margin-right":"0.16rem",color:"#c2c2c2",float:"left"}},[o._v("")]),o._v(" "),r("p",[o._v("礼包尚未送出，详细收货地址由收礼人收到礼物时填写")])]):o._e(),o._v(" "),r("div",{staticClass:"orderlist"},[o._l(o.orderInfo.goods_list,function(e,t){return r("div",{key:"index",class:[1==e.is_gift?"gift-goods-info":"caseList"]},[r("img",{attrs:{src:e.goods_thumbnail_250},on:{click:function(r){o.toGoodsDetail(e)}}}),o._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:1==e.is_gift,expression:"item.is_gift == 1"}]},[r("p",[r("span",[o._v("赠品")]),o._v(o._s(e.goods_name))]),o._v(" "),r("p",[r("span",[o._v(o._s(e.spec_key_name))]),o._v(" "),1==e.return_status?r("span",[o._v("退货申请中")]):o._e(),o._v(" "),2==e.return_status?r("span",[o._v("退货申请中")]):o._e(),o._v(" "),10==e.return_status?r("span",[o._v("退货已完成")]):o._e(),o._v(" "),11==e.return_status||12==e.return_status?r("span",[o._v("退货失败")]):o._e(),o._v(" "),r("b",[o._v("x"+o._s(e.goods_num))])])]),o._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:1!=e.is_gift,expression:"item.is_gift != 1"}],staticClass:"caseInfo"},[r("p",[o._v(o._s(e.goods_name))]),o._v(" "),r("p",[o._v(o._s(e.spec_key_name))]),o._v(" "),r("p",[o._v("￥ "+o._s(e.goods_price)),r("i",[o._v("x"+o._s(e.goods_num))])]),o._v(" "),1!=e.is_gift?r("router-link",{attrs:{to:{path:"/write",query:{order_sn:o.order_sn,goods_id:e.goods_id,spec_key:e.spec_key,return_status:e.return_status,order_id:e.order_id,goods_num:e.goods_num,rec_id:e.rec_id}}}},[1==e.can_return&&0!=o.orderInfo.order_status&&1==o.orderInfo.is_handle&&1!=e.is_special_goods?r("span",[o._v("退货")]):o._e()]):o._e(),o._v(" "),r("router-link",{attrs:{to:{path:"/applyInfo",query:{order_sn:o.order_sn,goods_id:e.goods_id,spec_key:e.spec_key,return_status:e.return_status,order_id:e.order_id,rec_id:e.rec_id}}}},[1==e.return_status?r("span",{staticStyle:{border:"0","padding-left":"0",color:"#cc3737","font-size":"0.28rem"}},[o._v("退货申请中")]):o._e(),o._v(" "),2==e.return_status?r("span",{staticStyle:{border:"0","padding-left":"0",color:"#cc3737","font-size":"0.28rem"}},[o._v("退货申请中")]):o._e(),o._v(" "),10==e.return_status?r("span",{staticStyle:{border:"0","padding-left":"0",color:"#cc3737","font-size":"0.28rem"}},[o._v("退货已完成")]):o._e(),o._v(" "),11==e.return_status||12==e.return_status?r("span",{staticStyle:{border:"0","padding-left":"0",color:"#cc3737","font-size":"0.28rem"}},[o._v("退货失败")]):o._e()])],1)])}),o._v(" "),r("div",{staticClass:"total"},[r("p",[o._v("商品总价"),r("span",[o._v("￥"+o._s(o.orderInfo.total_amount))])]),o._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:o.showActive&&o.promPrice>0,expression:"showActive&&promPrice>0"}],staticClass:"mjs"},[r("span",[o._v("活动优惠")]),o._v(" "),r("span",{staticStyle:{float:"right"}},[o._v("满减送：-￥"+o._s(o.promPrice))])]),o._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:o.showCoupon,expression:"showCoupon"}],staticClass:"coupon"},[r("span",[o._v("优惠券")]),o._v(" "),r("span",[o._v(o._s(o.couponInfo))])]),o._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:"0.00"!=o.orderInfo.use_coin,expression:"orderInfo.use_coin != '0.00'"}],staticClass:"coupon"},[r("span",[o._v("厨币抵扣")]),o._v(" "),r("span",[o._v("- ¥ "+o._s(o.orderInfo.use_coin))])]),o._v(" "),r("p",[o._v("实付金额"),r("span",{staticStyle:{color:"#b29f74","font-size":"0.32rem"}},[o._v("￥"+o._s(o.orderInfo.order_amount))])])])],2),o._v(" "),r("div",{staticClass:"payInfo"},[r("div",[r("p",[o._v("订单编号"),r("input",{attrs:{id:"copy_text",type:"text",readonly:"",disabled:""},domProps:{value:o.orderInfo.order_sn}})]),r("button",{staticClass:"btn",attrs:{"data-clipboard-text":o.herfs},on:{click:o.copyText}},[o._v("复制")])]),o._v(" "),r("p",[o._v("支付方式"),r("span",[o._v(o._s(o.orderInfo.pay_name))])]),o._v(" "),r("p",[o._v("支付时间"),r("span",[o._v(o._s(o.payTime))])])]),o._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:o.haveInvoice,expression:"haveInvoice"}],staticClass:"invoice"},[r("div",[r("p",[o._v("发票类型"),r("span",[o._v(o._s(o.detail.invoice_type_name))])]),r("button",{directives:[{name:"show",rawName:"v-show",value:o.isTake,expression:"isTake"}],on:{click:function(e){o.toInvoiceDetail()}}},[o._v("发送至邮箱")]),r("button",{directives:[{name:"show",rawName:"v-show",value:o.isTake,expression:"isTake"}],on:{click:function(e){o.toInvoiceDetail()}}},[o._v("下载发票")])]),o._v(" "),r("p",[o._v("发票抬头"),r("span",[o._v(o._s(o.detail.title))])]),o._v(" "),r("p",[o._v("发票内容"),r("span",[o._v(o._s(o.detail.invoice_detail))])])]),o._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:o.noInvoice,expression:"noInvoice"}],staticClass:"no-invoice"},[o._v("发票类型"),r("span",[o._v("不开发票")])]),o._v(" "),r("div",{staticClass:"contorls"},[r("p",{staticClass:"service",on:{click:o.callMe}},[r("i",{staticClass:"iconfont"},[o._v("")]),o._v(" "),r("span",[o._v("客服")])]),o._v(" "),12==o.orderInfo.order_status&&"present"!=o.orderInfo?r("button",{staticClass:"pay-again",on:{click:o.payAgain}},[o._v("再来一单")]):o._e(),o._v(" "),2==o.orderInfo.order_status?r("button",{staticClass:"payButton",on:{click:function(e){o.confirmReceipt()}}},[o._v("确认收货")]):o._e(),o._v(" "),1==o.orderInfo.order_status&&"present"!=o.orderInfo.order_type?r("button",{staticClass:"payButton",on:{click:o.remind}},[o._v("提醒发货")]):o._e(),o._v(" "),1==o.orderInfo.order_status&&"present"!=o.orderInfo.order_type||2==o.orderInfo.order_status||10==o.orderInfo.order_status||1==o.orderInfo.order_status&&1==o.orderInfo.is_handle?r("button",{staticClass:"orderButton",on:{click:o.toLogistics}},[o._v("订单追踪")]):o._e(),o._v(" "),1==o.orderInfo.order_status_rego&&"present"!=o.orderInfo.order_type?r("button",{staticClass:"pay-again",on:{click:function(e){o.payAgain()}}},[o._v("再次购买")]):o._e(),o._v(" "),r("router-link",{attrs:{to:{path:"/pay",query:{order_sn:o.orderInfo.order_sn}}}},[0==o.orderInfo.order_status?r("button",{staticClass:"payButton",on:{click:function(e){o.toPay()}}},[o._v("去支付")]):o._e()]),o._v(" "),0==o.orderInfo.order_status||1==o.orderInfo.order_status&&0==o.orderInfo.is_handle?r("button",{staticClass:"closeButton",on:{click:function(e){o.cancelOrder()}}},[o._v("取消订单")]):o._e(),o._v(" "),1==o.orderInfo.order_status&&0==o.orderInfo.is_handle&&"present"==o.orderInfo.order_type?r("button",{staticClass:"send",on:{click:function(e){o.toSend()}}},[o._v("立即送出")]):o._e()],1),o._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:o.spanDialog,expression:"spanDialog"}],staticClass:"span-dialog"},[r("div",{directives:[{name:"show",rawName:"v-show",value:o.errorPopup1,expression:"errorPopup1"}],staticClass:"no-goods"},[r("p",{staticClass:"error-title"},[o._v("以下商品卖光了，先将其他商品加入购物车？")]),o._v(" "),r("div",{staticClass:"scroll-dialog"},[r("div",{staticClass:"goods-info"},o._l(o.goodsList,function(e){return r("div",[r("img",{attrs:{src:e.goods_image}}),o._v(" "),r("p",[o._v(o._s(e.goods_name))])])}))]),o._v(" "),r("div",{staticClass:"choice-button"},[r("span",{on:{click:o.closePopup1}},[o._v("我再想想")]),o._v(" "),r("span",{on:{click:function(e){o.lastPay()}}},[o._v("加入购物车")])])]),o._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:o.errorPopup2,expression:"errorPopup2"}],staticClass:"no-goods"},[r("p",{staticClass:"error-title"},[o._v("启禀陛下，这些商品全部卖光了，您还是挑点别的吧。")]),o._v(" "),r("div",{staticClass:"choice-button"},[r("span",{on:{click:o.closePopup2}},[o._v("取消")]),o._v(" "),r("span",{on:{click:o.closePopup2}},[o._v("确定")])])])]),o._v(" "),r("div",{staticStyle:{height:"1rem",width:"100%"}})])},staticRenderFns:[]};var a=r("VU/8")(s,n,!1,function(o){r("zouf")},"data-v-5859c678",null);e.default=a.exports},zouf:function(o,e){}});
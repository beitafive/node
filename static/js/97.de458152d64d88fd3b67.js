webpackJsonp([97],{"5AFs":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=r("Au9i"),s={name:"myorder",data:function(){return{bAll:!1,bBlank:!1,aNavList:[{select:!0,info:"全部",status:""},{select:!1,info:"待付款",status:"0"},{select:!1,info:"待发货",status:"1"},{select:!1,info:"待收货",status:"2"}],aOrderList:[],status:"",index:0,loading:!0,showState:!1,curPage:1,allPage:"",orderPage:"",goodsId:[],goodsNum:[],specKey:[],spanDialog:!1,errorPopup1:!1,errorPopup2:!1,goodsList:"",popupVisible:!1,scrollTop:""}},created:function(){this.index=this.$route.query.index||0},mounted:function(){var t=this;document.onscroll=function(){var e=0==document.documentElement.scrollTop?document.body.clientHeight:document.documentElement.clientHeight,r=0==document.documentElement.scrollTop?document.body.scrollTop:document.documentElement.scrollTop;e+r>(0==document.documentElement.scrollTop?document.body.scrollHeight:document.documentElement.scrollHeight)-30&&0!=r&&t.loadMore()},t.$nextTick(function(){window.addEventListener("scroll",t.touchstart)}),this.cutState(this.index)},methods:{touchstart:function(){this.scrollTop=document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop},cutState:function(t){for(var e=0,r=this.aNavList.length;e<r;e++)this.aNavList[e].select=!1;this.aNavList[t].select=!0,this.curPage=1,this.aOrderList=[],this.status=this.aNavList[t].status,this.getOrderList()},getOrderList:function(){var t=this;t.$axios({method:"get",url:t.$store.state.api.order.get_order_list,params:{status:t.status||"",page:t.curPage,pagecount:10}}).then(function(e){var r=e.data;if(0==r.error){for(var o in t.aOrderList=t.aOrderList.concat(r.data.order_list),t.aOrderList)"2"==t.aOrderList[o].order_status||"4"==t.aOrderList[o].order_status||"5"==t.aOrderList[o].order_status||"10"==t.aOrderList[o].order_status||"11"==t.aOrderList[o].order_status||"12"==t.aOrderList[o].order_status||"13"==t.aOrderList[o].order_status?t.aOrderList[o].order_status_rego=1:t.aOrderList[o].order_status_rego=0;t.allPage=r.data.order_count,t.orderPage=Math.ceil(t.allPage/10),t.bBlank=!1,1==t.curPage&&t.$nextTick(function(){window.scrollTo(0,3),window.scrollTo(0,0)})}1==r.error&&(1==t.curPage?(t.bBlank=!0,t.aOrderList=[]):t.bBlank=!1),t.bAll=!0})},remind:function(){this.$toast({message:"已提醒,请耐心等待一下嘛！",position:"center",duration:1e3})},confirmReceipt:function(t){Object(o.MessageBox)({showCancelButton:!0,confirmButtonText:"是的",cancelButtonText:"还没"});var e=this;o.MessageBox.confirm("确定已收到货了吗?").then(function(r){e.$axios({method:"get",url:e.$store.state.api.order.confirm_receipt,params:{order_sn:t.order_sn}}).then(function(r){var o=r.data;0==o.error&&(t.order_status=10,e.applyInvoice(t.order_id),t.order_status_name="交易成功",e.$toast({message:o.data,position:"center",duration:1e3})),1==o.error&&e.$toast({message:o.error_msg,position:"center",duration:1e3})})})},applyInvoice:function(t){this.$axios({method:"get",url:this.$store.state.api.invoice.apply,params:{user_id:localStorage.user_id,order_id:t,invoice_kind:"1"}}).then(function(t){})},cancelOrder:function(t){var e=this;Object(o.MessageBox)({showCancelButton:!0,cancelButtonText:"算了",confirmButtonText:"真的"}),o.MessageBox.confirm("真的要抛弃我吗?").then(function(r){var o=e;0==t.order_status&&o.$axios({url:o.$store.state.api.order.cancel_order,method:"post",params:{order_sn:t.order_sn}}).then(function(e){var r=e.data;console.log(r,"r"),0==r.error&&(o.$toast({message:"订单取消成功",position:"center",duration:1e3}),t.order_status_name="已取消",o.getOrderList(),o.curPage=1,o.aOrderList=[]),1==r.error&&o.$toast({message:r.error_msg,position:"center",duration:1e3})}),1==t.order_status&&0==t.is_handle&&o.$axios({url:o.$store.state.api.gifts.gift_cancel_order,method:"post",params:{order_sn:t.order_sn}}).then(function(e){var r=e.data;console.log(r,"r"),0==r.error&&(o.$toast({message:"订单取消成功",position:"center",duration:1e3}),t.order_status_name="已取消",o.getOrderList(),o.curPage=1,o.aOrderList=[]),1==r.error&&o.$toast({message:r.error_msg,position:"center",duration:1e3})})})},deleteOrder:function(t,e){var r=this;Object(o.MessageBox)({showCancelButton:!0,cancelButtonText:"算了",confirmButtonText:"是的"}),o.MessageBox.confirm("确定要删除此订单吗?").then(function(o){r.$axios({method:"get",url:r.$store.state.api.order.delete_order,params:{order_sn:t.order_sn}}).then(function(t){var o=t.data;0==o.error&&(r.$toast({message:o.data,position:"center",duration:1e3}),r.aOrderList.splice(e,1)),1==o.error&&r.$toast({message:o.error_msg,position:"center",duration:1e3})})})},loadMore:function(){var t=this;t.loading=!0,setTimeout(function(){t.loading=!1,t.curPage!=t.orderPage&&(t.curPage++,t.getOrderList())},500)},toLogistics:function(t){t.goods_list.length>1?this.$router.push({path:"/orderTrackings",query:{order_id:t.order_id}}):this.$router.push({path:"/orderTracking",query:{order_id:t.order_id}})},payAgain:function(t){var e=this;e.$axios({method:"get",url:e.$store.state.api.order.buyAgain,params:{order_id:t.order_id,type:"first"}}).then(function(t){var r=t.data;console.log(r,"r"),0==r.error&&e.$router.push("/shopcart"),1==r.error&&"PART_INVALID"==r.error_code&&(e.goodsList=r.error_msg,e.spanDialog=!0,e.errorPopup1=!0,document.getElementById("myorder").height="100%"),1==r.error&&"ALL_INVALID"==r.error_code&&(e.spanDialog=!0,e.errorPopup2=!0,document.getElementById("myorder").height="100%")}).catch(function(t){})},closePopup1:function(){this.spanDialog=!1,this.errorPopup1=!1},closePopup2:function(){this.spanDialog=!1,this.errorPopup2=!1},lastPay:function(t){var e=this;e.$axios({method:"get",url:e.$store.state.api.order.buyAgain,params:{order_id:t.order_id,type:"continue"}}).then(function(t){var r=t.data;console.log(r,"r"),0==r.error&&e.$router.push("/shopcart")}).catch(function(t){})},toOrderDetail:function(t){this.$router.push({path:"/orderdetail",query:{order_sn:t.order_sn,order_id:t.order_id}})},toPay:function(t){"present"==t.order_type?this.$router.push({path:"/pay",query:{order_sn:t.order_sn,pay_type:"gift"}}):this.$router.push({path:"/pay",query:{order_sn:t.order_sn}})},toSend:function(t){this.$router.push({path:"/giftpayok",query:{order_id:t.order_id}})}},destroyed:function(){document.onscroll=""}},a={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{directives:[{name:"show",rawName:"v-show",value:t.bAll,expression:"bAll"}],staticClass:"w-myorder",attrs:{id:"myorder"}},[r("p",{directives:[{name:"show",rawName:"v-show",value:t.bBlank,expression:"bBlank"}],staticClass:"blank"},[t._v("暂无相关订单")]),t._v(" "),r("p",{directives:[{name:"show",rawName:"v-show",value:t.bBlank,expression:"bBlank"}],staticClass:"blank_two"},[t._v("好东西手慢无")]),t._v(" "),r("ul",t._l(t.aNavList,function(e,o){return r("li",{class:[{"w-active":e.select}],on:{click:function(e){t.cutState(o)}}},[t._v(t._s(e.info))])})),t._v(" "),r("div",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:t.loadMore,expression:"loadMore"}],staticClass:"orderBox",attrs:{"infinite-scroll-disabled":"loading"}},t._l(t.aOrderList,function(e,o){return r("div",{key:"indexs",staticClass:"orderList"},[r("h3",["present"==e.order_type?r("i",{staticClass:"iconfont",staticStyle:{color:"#DE4839"}},[t._v("")]):t._e(),t._v("\n\t\t\t\t"+t._s(e.add_time2)+"\n\t\t\t\t"),r("span",[t._v(t._s(e.order_status_name))])]),t._v(" "),t._l(e.goods_list,function(o,s){return r("div",{key:"ind",class:[1==o.is_gift?"gift-goods-info":"goodsInfo"],on:{click:function(r){t.toOrderDetail(e)}}},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:o.goods_thumbnail_250,expression:"goods.goods_thumbnail_250"}]}),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:1==o.is_gift,expression:"goods.is_gift == 1"}]},[r("p",[r("span",[t._v("赠品")]),t._v(t._s(o.goods_name))]),t._v(" "),r("p",[r("span",[t._v(t._s(o.spec_key_name))]),t._v(" "),1==o.return_status?r("span",[t._v("退货申请中")]):t._e(),t._v(" "),2==o.return_status?r("span",[t._v("退货申请中")]):t._e(),t._v(" "),10==o.return_status?r("span",[t._v("退货已完成")]):t._e(),t._v(" "),11==o.return_status||12==o.return_status?r("span",[t._v("退货失败")]):t._e(),t._v(" "),r("b",[t._v("x"+t._s(o.goods_num))])])]),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:1!=o.is_gift,expression:"goods.is_gift != 1"}]},[r("p",[t._v(t._s(o.goods_name))]),t._v(" "),r("p",[t._v(t._s(o.spec_key_name))]),t._v(" "),r("p",[1==o.return_status||2==o.return_status?r("span",[t._v("退货申请中")]):t._e(),t._v(" "),10==o.return_status?r("span",[t._v("退货已完成")]):t._e(),t._v(" "),11==o.return_status||12==o.return_status?r("span",[t._v("退货失败")]):t._e()]),t._v(" "),r("p",[t._v("￥"+t._s(o.goods_price)),r("b",[t._v("x"+t._s(o.goods_num))])])])])}),t._v(" "),r("h4",[t._v("\n\t\t\t\t合计：￥"+t._s(e.order_amount)+"\n\t\t\t\t"),r("h5",[1==e.order_status&&"present"!=e.order_type?r("button",{staticClass:"payButton",on:{click:t.remind}},[t._v("提醒发货")]):t._e(),t._v(" "),0==e.order_status?r("button",{staticClass:"payButton",on:{click:function(r){t.toPay(e)}}},[t._v("去支付")]):t._e(),t._v(" "),0==e.order_status||1==e.order_status&&0==e.is_handle?r("button",{staticClass:"closeButton",on:{click:function(r){t.cancelOrder(e)}}},[t._v("取消订单")]):t._e(),t._v(" "),2==e.order_status?r("button",{staticClass:"payButton",on:{click:function(r){t.confirmReceipt(e)}}},[t._v("确认收货")]):t._e(),t._v(" "),1==e.order_status&&"present"!=e.order_type||2==e.order_status||10==e.order_status||1==e.order_status&&1==e.is_handle?r("button",{staticClass:"orderButton",on:{click:function(r){t.toLogistics(e)}}},[t._v("订单跟踪")]):t._e(),t._v(" "),4==e.order_status||5==e.order_status||11==e.order_status?r("button",{staticClass:"deleteOrder",on:{click:function(r){t.deleteOrder(e,o)}}},[t._v("删除订单")]):t._e(),t._v(" "),"1"==e.order_status_rego&&"present"!=e.order_type?r("button",{staticClass:"pay-again",on:{click:function(r){t.payAgain(e)}}},[t._v("再次购买")]):t._e(),t._v(" "),1==e.order_status&&0==e.is_handle&&"present"==e.order_type?r("button",{staticClass:"send",on:{click:function(r){t.toSend(e)}}},[t._v("立即送出")]):t._e()])]),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:t.spanDialog,expression:"spanDialog"}],staticClass:"span-dialog"},[r("div",{directives:[{name:"show",rawName:"v-show",value:t.errorPopup1,expression:"errorPopup1"}],staticClass:"no-goods"},[r("p",{staticClass:"error-title"},[t._v("以下商品卖光了，先将其他商品加入购物车？")]),t._v(" "),r("div",{staticClass:"scroll-dialog"},[r("div",{staticClass:"goods-info"},t._l(t.goodsList,function(e){return r("div",[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.image,expression:"goods.image"}]}),t._v(" "),r("p",[t._v(t._s(e.goods_name))])])}))]),t._v(" "),r("div",{staticClass:"choice-button"},[r("span",{on:{click:t.closePopup1}},[t._v("我再想想")]),t._v(" "),r("span",{on:{click:function(r){t.lastPay(e)}}},[t._v("加入购物车")])])]),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:t.errorPopup2,expression:"errorPopup2"}],staticClass:"no-goods"},[r("p",{staticClass:"error-title"},[t._v("启禀陛下，这些商品全部卖光了，您还是挑点别的吧。")]),t._v(" "),r("div",{staticClass:"choice-button"},[r("span",{on:{click:t.closePopup2}},[t._v("取消")]),t._v(" "),r("span",{on:{click:t.closePopup2}},[t._v("确定")])])])])],2)}))])},staticRenderFns:[]};var n=r("VU/8")(s,a,!1,function(t){r("mMUn")},"data-v-295c25d1",null);e.default=n.exports},mMUn:function(t,e){}});
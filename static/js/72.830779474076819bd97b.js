webpackJsonp([72],{Tvye:function(t,e){},bdlY:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"mine"},[i("div",{staticClass:"mine-top wd-flex"},[i("img",{attrs:{src:t.mine.head_pic}}),t._v(" "),i("div",{staticClass:"name-id"},[i("p",{staticClass:"light-34"},[t._v(t._s(t.mine.nickname))]),t._v(" "),i("p",{staticClass:"light-26"},[t._v("ID："+t._s(t.mine.user_id))])]),t._v(" "),i("router-link",{staticClass:"setting-btn light-26",attrs:{to:"/setting",tag:"div"}},[t._v("\n\t\t\t设置\n\t\t")])],1),t._v(" "),i("div",{staticClass:"order-type wd-flex"},[i("router-link",{staticClass:"order-type-item",attrs:{tag:"div",to:{path:"/myorder",query:{index:1}}}},[i("i",{staticClass:"iconfont"},[t._v("")]),t._v(" "),i("p",{staticClass:"light-26"},[t._v("待付款("+t._s(t.mine.order_wait_pay)+")")])]),t._v(" "),i("router-link",{staticClass:"order-type-item",attrs:{tag:"div",to:{path:"/myorder",query:{index:2}}}},[i("i",{staticClass:"iconfont"},[t._v("")]),t._v(" "),i("p",{staticClass:"light-26"},[t._v("待发货("+t._s(t.mine.order_wait_send)+")")])]),t._v(" "),i("router-link",{staticClass:"order-type-item",attrs:{tag:"div",to:{path:"/myorder",query:{index:2}}}},[i("i",{staticClass:"iconfont"},[t._v("")]),t._v(" "),i("p",{staticClass:"light-26"},[t._v("待收货("+t._s(t.mine.order_wait_rec)+")")])])],1),t._v(" "),t._l(t.serveList,function(e,a){return i("router-link",{key:a,staticClass:"serve-item",style:{marginBottom:e.margin?".1rem":"0"},attrs:{to:e.path,tag:"div"}},[i("div",{staticClass:"serve-wrappar wd-flex",style:{borderBottom:e.margin?"0":"1px solid #e7e7e7"}},[e.icon?i("i",{staticClass:"iconfont serve-logo",style:{color:e.color},domProps:{innerHTML:t._s(e.icon)}}):t._e(),t._v(" "),i("p",{staticClass:"light-28"},[t._v(t._s(e.name))]),t._v(" "),i("i",{staticClass:"iconfont serve-arrows"},[t._v("")])])])})],2)},staticRenderFns:[]};var s=i("VU/8")({name:"mine",data:function(){return{mine:{},serveList:[{name:"全部订单",icon:"",path:"/myorder",margin:!0,color:""},{name:"收货地址",icon:"&#xe662;",path:"/mineaddress",margin:!1,color:"#9AB6FF"},{name:"优惠券",icon:"&#xe665;",path:"/minecoupon",margin:!1,color:"#FF9A9A"},{name:"我的厨币",icon:"&#xe696;",path:"/chubi",margin:!1,color:"#FFBC82"},{name:"成为店主",icon:"&#xe663;",path:"/special_goods",margin:!0,color:"#9AD2FF"},{name:"发票服务",icon:"&#xe613;",path:"/myinvoice",margin:!1,color:"#FF9A9A"},{name:"我收藏的宝贝",icon:"&#xe652;",path:"/collection",margin:!1,color:"#ffd69a"},{name:"帮助与客服",icon:"&#xe684;",path:"/help",margin:!1,color:"#ff9aae"}]}},mounted:function(){var t=this;this.$store.dispatch("httpgetuser").then(function(){t.mine=t.$store.state.user})}},a,!1,function(t){i("Tvye")},"data-v-52ebb40e",null);e.default=s.exports}});
webpackJsonp([86],{"29Mw":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={name:"renew",data:function(){return{list:[{time:"1",is_select:"1",upto:"",spec_key:"",price:""},{time:"2",is_select:"0",upto:"",spec_key:"",price:""},{time:"3",is_select:"0",upto:"",spec_key:"",price:""}],read:1,storeInfo:"",imgs:"",price:"365.00",uptoTime:"",goods_spec:"",goods_num:"1",isCheck:!1,popupVisible:!1}},components:{protocolstore:i("WcDb").default},beforeMount:function(){document.title=this.$route.meta.title},mounted:function(){this.getInfo()},methods:{getInfo:function(){var t=this;t.$axios({url:t.$store.state.api.goodsDetail.renewDetail,method:"get"}).then(function(e){var i=e.data;console.log(i),0==i.error&&(t.storeInfo=i.data,t.imgs=i.data.images,t.list[0].upto=t.uptoTime=i.data.year_info.time_year_1,t.list[1].upto=i.data.year_info.time_year_2,t.list[2].upto=i.data.year_info.time_year_3,t.list[0].spec_key=t.goods_spec=i.data.year_info.spec_year_1,t.list[1].spec_key=i.data.year_info.spec_year_2,t.list[2].spec_key=i.data.year_info.spec_year_3,t.list[0].price=t.price=i.data.year_info.price_year_1,t.list[1].price=i.data.year_info.price_year_2,t.list[2].price=i.data.year_info.price_year_3)})},toread:function(){0==this.read?(this.read=1,this.isCheck=!1):(this.read=0,this.isCheck=!0)},toProtocol:function(){this.$router.push("/protocolstore")},toSelect:function(t){for(var e=0;e<this.list.length;e++)this.list[e].is_select=0;t.is_select=1,this.price=t.price,this.uptoTime=t.upto,this.goods_spec=t.spec_key},submit:function(){this.$router.push({path:"/invoice",query:{goods_num:"1",goods_id:this.storeInfo.goods_id,goods_spec:this.goods_spec,price:this.price,store_mobile:this.storeInfo.mobile,storename:this.storeInfo.name}})}}},o={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"renew"},[t._m(0),t._v(" "),i("div",{staticClass:"user-info"},[i("i",{staticClass:"iconfont"},[t._v("")]),t._v(" "),i("span",[t._v(t._s(t.storeInfo.mobile))])]),t._v(" "),i("div",{staticClass:"choice"},[i("i",{staticClass:"iconfont"},[t._v("")]),t._v(" "),t._l(t.list,function(e){return i("p",{class:[1==e.is_select?"is-select":""],on:{click:function(i){t.toSelect(e)}}},[t._v(t._s(e.time)+"年")])}),t._v(" "),i("div",{staticClass:"buy-info"},[i("b",[t._v("￥"+t._s(t.price))]),i("span",[t._v("有效期延至："+t._s(t.uptoTime))])])],2),t._v(" "),i("div",{staticClass:"protocol"},[0==t.read?i("i",{staticClass:"iconfont",on:{click:function(e){t.toread()}}},[t._v("")]):t._e(),t._v(" "),1==t.read?i("i",{staticClass:"iconfont",staticStyle:{color:"#cc3737"},on:{click:function(e){t.toread()}}},[t._v("")]):t._e(),t._v(" "),i("p",[t._v("我已阅读并同意"),i("span",{on:{click:function(e){t.popupVisible=!0}}},[t._v("《安厨技术服务协议》")])])]),t._v(" "),i("mt-popup",{staticClass:"popupone",attrs:{position:"right"},model:{value:t.popupVisible,callback:function(e){t.popupVisible=e},expression:"popupVisible"}},[i("div",{staticClass:"content"},[i("i",{staticClass:"iconfont",on:{click:function(e){t.popupVisible=!1}}},[t._v("")]),t._v(" "),i("protocolstore")],1)]),t._v(" "),i("button",{class:[1==t.isCheck?"cannot":"submit"],attrs:{disabled:t.isCheck},on:{click:function(e){t.submit()}}},[t._v("立即续费")])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"banner"},[e("img",{attrs:{src:"https://wd-image.cdn.hzanchu.com/a317575fef1b4e4c74d743d44bb21cac?thumbnail=300"}})])}]};var c=i("VU/8")(s,o,!1,function(t){i("A4ZL")},"data-v-3b77cbc4",null);e.default=c.exports},A4ZL:function(t,e){}});
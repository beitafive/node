webpackJsonp([32],{Fno9:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={name:"redpacket",data:function(){return{rp_id:this.$route.query.rp_id,store_id:""}},beforeMount:function(){},mounted:function(){this.getstoreid(),this.getStoreShare()},methods:{getstoreid:function(){var t=this;t.$axios({url:t.$store.state.api.getUserInfo,method:"get"}).then(function(e){var i=e.data;0==i.error&&(t.store_id=i.data.store_id)})},getStoreShare:function(){var t=this;t.$axios({method:"get",url:t.$store.state.api.chubi.redpacketinfo,params:{rp_id:t.rp_id}}).then(function(e){var i=e.data;console.log(e.data.error),0==i.error&&wx.ready(function(){wx.onMenuShareTimeline({title:i.data.title,link:i.data.link+"&_store_id="+t.store_id,imgUrl:i.data.image}),wx.onMenuShareAppMessage({title:i.data.title,desc:i.data.description,link:i.data.link+"&_store_id="+t.store_id,imgUrl:i.data.image,type:"link"})})})}}},r={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"sharepacket"},[e("div",{staticStyle:{width:"5.78rem",height:"7.35rem",left:"0rem",right:"0rem",top:"0rem",bottom:"0rem",margin:"auto",position:"absolute","text-align":"center"}},[e("img",{staticClass:"packet",staticStyle:{width:"100%",height:"100%"},attrs:{src:i("cOtC")}}),this._v(" "),e("span",{staticStyle:{"font-family":".PingFangSC-Regular","font-size":"0.36rem",color:"#DCC081","letter-spacing":"-0.22px","z-index":"1",position:"absolute",top:"3.31rem",left:"28%"}},[this._v("厨币红包已包好")]),this._v(" "),e("div",{staticClass:"sharestyle"},[this._v("\n\t  \t点击右上角分享给好友/朋友圈\n\t  ")])])])}]};var n=i("VU/8")(a,r,!1,function(t){i("JtaS")},"data-v-174a08e5",null);e.default=n.exports},JtaS:function(t,e){},cOtC:function(t,e,i){t.exports=i.p+"static/img/redpacket.2fbd937.png"}});
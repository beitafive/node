webpackJsonp([54],{"2cSl":function(t,o){},Nkn4:function(t,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var s={name:"siteGoodsList",components:{},data:function(){return{sortMenu:["限时购","站点推荐"],upStore:!0,topStatus:"",earnMoney:"",price:"",siteId:this.$route.query.id,storeGoodsList:[],noGoods:!1,thePath:"",showTop:!1,scrollTop:"",curPage:1,allPage:"",orderPage:"",loadBottom:!1,notMore:!1,loading:!1}},created:function(){this.thePath=this.$route.path},beforeMount:function(){document.title=this.$route.meta.title},watch:{scrollTop:{handler:function(t,o){}}},mounted:function(){var t=this;t.getStoreList(),t.$nextTick(function(){window.addEventListener("scroll",t.touchstart)})},destroyed:function(){window.removeEventListener("scroll",this.touchstart)},methods:{toGoodsDetail:function(t){this.$router.push({path:"/goodsdetail",query:{id:t.goods_id}})},toTop:function(){window.scrollTo(0,0)},touchstart:function(){this.scrollTop=document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop,this.scrollTop>350?this.showTop=!0:this.showTop=!1},handleTopChange:function(t){this.topStatus=t},getStoreList:function(){var t=this;t.$axios({method:"get",url:t.$store.state.api.singleStore.storeGoods,params:{site_id:t.siteId,page:t.curPage,pagecount:10,sort:"goods_id",sort_asc:"desc"}}).then(function(o){0==o.data.error&&(t.storeGoodsList=t.storeGoodsList.concat(o.data.data.goods_arr),t.allPage=o.data.data.count,t.orderPage=Math.ceil(t.allPage/10)),1==o.data.error&&(t.noGoods=!0,t.storeGoodsList=[],t.loadBottom=!1,t.notMore=!1)}).catch(function(t){})},collection:function(t){var o=this;t.is_collect=!t.is_collect,t.is_collect&&o.$axios({method:"get",url:o.$store.state.api.keeperSelect.collection,params:{goods_id:t.goods_id}}).then(function(t){0==t.data.error&&o.$toast({message:"收藏成功",position:"center",duration:1e3})}).catch(function(t){}),t.is_collect||o.$axios({method:"get",url:o.$store.state.api.keeperSelect.Rcollection,params:{goods_id:t.goods_id}}).then(function(t){0==t.data.error&&o.$toast({message:"收藏已取消",position:"center",duration:1e3})}).catch(function(t){})},loadMore:function(){var t=this;t.loadBottom=!0,t.notMore=!1,setTimeout(function(){if(!(t.curPage<t.orderPage))return t.loadBottom=!1,t.notMore=!0,!1;t.curPage++,t.getStoreList(),t.curPage==t.orderPage&&(t.loadBottom=!1,t.loading=!0,t.notMore=!0)},2e3)}}},i={render:function(){var t=this,o=t.$createElement,s=t._self._c||o;return s("div",{staticClass:"w-content"},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.noGoods,expression:"noGoods"}],staticClass:"no-goods"},[t._v("\n\t\t未查询到商品信息！\n\t")]),t._v(" "),s("div",{staticClass:"siteGoodsList"},[s("div",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:t.loadMore,expression:"loadMore"}],staticClass:"goodsContent",attrs:{"infinite-scroll-disabled":"loading"}},t._l(t.storeGoodsList,function(o,e){return s("div",{key:"a_index",staticClass:"listcard",on:{click:function(e){t.toGoodsDetail(o)}}},[s("div",{staticClass:"display_img"},[s("div",{staticClass:"img_box"},[s("img",{attrs:{src:o.goods_thumbnail_250}})]),t._v(" "),s("div",{staticClass:"express"},[s("div",[1==o.is_special_sale?s("span",{staticClass:"special"},[t._v("特卖")]):t._e(),t._v(t._s(o.goods_name))]),t._v(" "),s("div",{staticClass:"bottom_ul_goods"},[s("ul",{staticClass:"siteName"},[s("li",[s("span",{staticStyle:{color:"#cc3737","font-size":"0.3rem"}},[t._v("￥"+t._s(o.price)+"   ")]),t._v(" "),s("span",{staticStyle:{color:"#ccc","font-size":"0.28rem"}},[t._v("￥"+t._s(o.market_price))])]),t._v(" "),s("li",[s("div",{class:[o.is_collect?"iconfont redClass icon-yishoucang":"iconfont icon-shoucang"],on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.collection(o)}}}),t._v(" "),s("div",{domProps:{innerHTML:t._s(o.is_collect?"已收藏":"收藏")}})])])])])])])}))]),t._v(" "),s("mt-spinner",{directives:[{name:"show",rawName:"v-show",value:t.loadBottom,expression:"loadBottom"}],staticClass:"load-bottom",attrs:{type:"triple-bounce"}}),t._v(" "),s("img",{directives:[{name:"show",rawName:"v-show",value:t.showTop,expression:"showTop"}],staticClass:"top",attrs:{src:e("L+nP")},on:{click:t.toTop}})],1)},staticRenderFns:[]};var a=e("VU/8")(s,i,!1,function(t){e("2cSl")},"data-v-6f85a755",null);o.default=a.exports}});
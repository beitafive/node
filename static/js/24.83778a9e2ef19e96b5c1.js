webpackJsonp([24],{"3wek":function(e,t){},FrGb:function(e,t,a){e.exports=a.p+"static/img/insideShopkeeper.d9bfc28.png"},xcca:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a("Au9i"),o={name:"insideShopkeeper",data:function(){return{staffName:"",staffPhone:"",showShade:!1,showDialog:!1,isHasStore:"",codeValue:"",sendValue:"获取验证码",waitTime:60}},beforeMount:function(){document.title=this.$route.meta.title},mounted:function(){this.isStore()},methods:{times:function(){var e=this;0==e.waitTime?(document.getElementById("sendCode").style.background="#b29f74",e.sendValue="获取验证码"):(document.getElementById("sendCode").style.background="#ccc",e.sendValue="请等待"+e.waitTime+"s",e.waitTime--,setTimeout(function(){e.times()},1e3))},sendCode:function(){var e=this;/^1[34578]\d{9}$/.test(e.staffPhone)?e.$axios({method:"post",url:e.$store.state.api.order1.send_sms_code,params:{mobile:e.staffPhone}}).then(function(t){0==t.data.error&&(Object(s.Toast)(t.data.data.msg),e.times()),1==t.data.error&&Object(s.Toast)(t.data.error_msg)}).catch(function(e){}):Object(s.Toast)("手机号有误")},submit:function(){var e=this;/^1[34578]\d{9}$/.test(e.staffPhone)?e.$axios.post(e.$store.state.api.order.create_store,{name:e.staffName,mobile:e.staffPhone,sms_verify_code:e.codeValue}).then(function(t){0==t.data.error&&(e.showShade=!0,e.showDialog=!0),1==t.data.error&&Object(s.Toast)({message:t.data.error_msg,position:"center",duration:700})}).catch(function(e){}):Object(s.Toast)({message:"手机号有误",position:"center",duration:700})},disabled:function(){""!=this.staffName&&""!=this.staffPhone?this.isDisabled=!1:this.isDisabled=!0},toStore:function(){},isStore:function(){var e=this;e.$axios({method:"get",url:e.$store.state.api.goodsDetail.is_store,params:{}}).then(function(t){var a=t.data;0==a.error&&(e.isHasStore=a.data.has_store,1==e.isHasStore&&e.$router.push("/toStore"))})}}},i={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"insideShopkeeper"},[s("div",{staticClass:"content"},[s("div",{staticClass:"staff-info"},[s("p",[e._v("欢迎加入安厨")]),e._v(" "),s("p",[e._v("完善以下资料会有惊喜哦")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.staffName,expression:"staffName"}],staticClass:"staff-name",attrs:{type:"text",placeholder:"姓名"},domProps:{value:e.staffName},on:{input:function(t){t.target.composing||(e.staffName=t.target.value)}}}),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.staffPhone,expression:"staffPhone"}],staticClass:"staff-phone",attrs:{type:"number",placeholder:"手机号"},domProps:{value:e.staffPhone},on:{input:function(t){t.target.composing||(e.staffPhone=t.target.value)}}}),e._v(" "),s("div",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.codeValue,expression:"codeValue"}],staticClass:"codeValue",attrs:{type:"number",placeholder:"输入验证码"},domProps:{value:e.codeValue},on:{input:function(t){t.target.composing||(e.codeValue=t.target.value)}}}),e._v(" "),s("button",{staticClass:"send-code",attrs:{id:"sendCode"},on:{click:e.sendCode}},[e._v(e._s(e.sendValue))])]),e._v(" "),s("button",{staticClass:"submit",on:{click:e.submit}},[e._v("Gift for U")])]),e._v(" "),s("span"),e._v(" "),s("img",{staticStyle:{width:"100%",height:"100%"},attrs:{src:a("FrGb")}})]),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:e.showShade,expression:"showShade"}],staticClass:"shade"},[s("div",{directives:[{name:"show",rawName:"v-show",value:e.showDialog,expression:"showDialog"}],staticClass:"dialog"},[s("span",[e._v("新员工福利")]),e._v(" "),s("p",[e._v("成为安厨微店店主 get√")]),e._v(" "),s("p",{on:{click:e.toStore}},[e._v("去店铺")])])])])},staticRenderFns:[]};var n=a("VU/8")(o,i,!1,function(e){a("3wek")},"data-v-6c7918ae",null);t.default=n.exports}});
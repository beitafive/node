webpackJsonp([34],{V4Ot:function(e,t){},hiTE:function(e,t,o){e.exports=o.p+"static/img/singin.4597017.png"},ktWt:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=o("NHPe"),n=o("Au9i"),i={name:"siginSms",data:function(){return{errorMsg:"",showError:!0,phone:"",code:"",sendValue:"获取验证码",waitTime:60,loade:"",disabled:!1}},beforeMount:function(){document.title=this.$route.meta.title},methods:{times:function(){var e=this;0==e.waitTime?(document.getElementById("sendCode").style.background="#b29f74",e.disabled=!1,e.sendValue="获取验证码"):(document.getElementById("sendCode").style.background="#ccc",e.disabled=!0,e.sendValue="请等待"+e.waitTime+"s",e.waitTime--,setTimeout(function(){e.times()},1e3))},sendCode:function(){var e=this,t={mobile:this.phone,scene:"LOGIN"};if(!/^1[34578]\d{9}$/.test(e.phone))return e.errorMsg="手机号格式不正确",e.phone="",null;e.errorMsg="",this.$axios.post(e.$api.user.sendSms,t).then(function(t){var o=t.data;console.log(o),0==o.code?(Object(n.Toast)("发送成功"),e.times()):Object(n.Toast)(o.msg)})},singin:function(){var e=this;e.$axios.post(e.$api.user.login,{mobile:e.phone,code:e.code}).then(function(t){var o=t.data;0==o.code?(localStorage.setItem("token",o.data.token.token),e.$store.dispatch("token",o.data.token.token),e.$store.dispatch("user",o.data.user),e.$router.push(Object(s.b)("redirect")),Object(n.Toast)("登录成功")):Object(n.Toast)(o.msg)}).catch(function(e){})},noShop:function(){this.$router.push("/singup")},showPopup:function(){this.$router.push("/protocoluser")}}},a={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"short"},[s("div",{staticClass:"phone"},[s("span",[e._v("+86")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.phone,expression:"phone"}],attrs:{placeholder:"请输入手机号",maxlength:"11"},domProps:{value:e.phone},on:{input:function(t){t.target.composing||(e.phone=t.target.value)}}})]),e._v(" "),s("div",{staticClass:"auth-code"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.code,expression:"code"}],attrs:{placeholder:"验证码",maxlength:"4"},domProps:{value:e.code},on:{input:function(t){t.target.composing||(e.code=t.target.value)}}}),e._v(" "),s("button",{attrs:{id:"sendCode",disabled:e.disabled},on:{click:function(t){e.sendCode()}}},[e._v(e._s(e.sendValue))])]),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:e.showError,expression:"showError"}],staticClass:"error"},[e._v(e._s(e.errorMsg))]),e._v(" "),s("button",{class:[""!=e.code?"submit":"is-disabled"],attrs:{disabled:""==e.code},on:{click:e.singin}},[e._v("立即登陆")]),e._v(" "),s("p",{staticClass:"clause"},[e._v("用户注册即代表同意"),s("span",{on:{click:e.showPopup}},[e._v("《安厨服务条款》")])]),e._v(" "),s("img",{attrs:{src:o("hiTE")}})])},staticRenderFns:[]};var r=o("VU/8")(i,a,!1,function(e){o("V4Ot")},"data-v-0df26d79",null);t.default=r.exports}});
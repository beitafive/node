webpackJsonp([60],{QqTc:function(e,t){},"ZgY+":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"addemail"},[a("h3",[e._v("填写邮箱账号")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"email",placeholder:"请输入邮箱账号"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),e._v(" "),a("div",{staticClass:"submit",class:[""==e.email?"empty":"success"],on:{click:e.submit}},[e._v("发送")])])},staticRenderFns:[]};var n=a("VU/8")({name:"addemail",data:function(){return{email:""}},methods:{submit:function(){},checkEmail:function(e){if(/^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/.test(e))return e;this.$toast("邮箱格式错误")}}},i,!1,function(e){a("QqTc")},"data-v-662e6619",null);t.default=n.exports}});
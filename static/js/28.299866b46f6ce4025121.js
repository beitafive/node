webpackJsonp([28],{ImAX:function(e,t){},Qu5H:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=i("Au9i"),o={name:"binding",data:function(){return{phone:"",authCode:"",sendValue:"发送验证码",waitTime:60,errorMsg:"",visible:!1,is_goon:0,user_id:"",page:"",rpId:this.$route.query.rp_id,disabled:!1}},beforeMount:function(){document.title=this.$route.meta.title},mounted:function(){this.page=this.$route.query.page,console.log(this.page),this.getstoreid()},methods:{isdelecte:function(){this.is_goon=0,this.visible=!1,this.phone="",this.sendValue=""},delecte:function(){var e=this;e.$axios.post(e.$store.state.api.binding_phone,{mobile:e.phone,user_id:e.user_id,is_exist:1}).then(function(t){0==t.data.error&&(e.visible=!1,Object(s.Toast)(t.data.data.msg),"user"==e.page?e.$router.push({path:"/userchubidetail",query:{rp_id:e.rpId}}):e.$router.push({path:"/mine"})),1==t.data.error&&("该手机号已经被绑定，是否继续绑定？"==t.data.error_msg&&(e.visible=!0),Object(s.Toast)(t.data.error_msg))})},getstoreid:function(){var e=this;e.$axios({url:e.$store.state.api.getUserInfo,method:"get"}).then(function(t){var i=t.data;0==i.error&&(e.user_id=i.data.user_id,console.log(e.user_id))})},times:function(){var e=this;0==e.waitTime?(document.getElementById("sendCode").style.background="#b29f74",e.disabled=!1,e.sendValue="获取验证码"):(document.getElementById("sendCode").style.background="#ccc",e.disabled=!0,e.sendValue="请等待"+e.waitTime+"s",e.waitTime--,setTimeout(function(){e.times()},1e3))},sendCodes:function(){var e=this;e.$axios.post(e.$store.state.api.singin_sms_code,{mobile:e.phone,scene:"BIND_MOBILE"}).then(function(t){0==t.data.error&&(Object(s.Toast)(t.data.data.msg),e.times()),1==t.data.error&&Object(s.Toast)(t.data.error_msg)}).catch(function(e){})},singin:function(){var e=this;e.$axios.post(e.$store.state.api.binding_phone,{mobile:e.phone,code:e.authCode,user_id:e.user_id,is_exist:e.is_goon}).then(function(t){0==t.data.error&&(Object(s.Toast)(t.data.data.msg),"user"==e.page?e.$router.push({path:"/userchubidetail",query:{rp_id:e.rpId}}):e.$router.push("/mine")),1==t.data.error&&("ALREADY_EXISTED"==t.data.error_code&&(e.visible=!0),Object(s.Toast)(t.data.error_msg))})},format:function(){/^1[34578]\d{9}$/.test(this.phone)?(this.errorMsg="",this.is_goon=!1):(this.errorMsg="手机号格式错误",this.phone="",this.is_goon=!0)}}},r={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"binding"},[s("div",{staticClass:"phone"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.phone,expression:"phone"}],attrs:{type:"number",placeholder:"请输入手机号"},domProps:{value:e.phone},on:{blur:e.format,input:function(t){t.target.composing||(e.phone=t.target.value)}}})]),e._v(" "),s("div",{staticClass:"auth-code"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.authCode,expression:"authCode"}],attrs:{placeholder:"验证码"},domProps:{value:e.authCode},on:{input:function(t){t.target.composing||(e.authCode=t.target.value)}}}),e._v(" "),s("button",{attrs:{id:"sendCode",disabled:e.disabled},on:{click:function(t){e.sendCodes()}}},[e._v(e._s(e.sendValue))])]),e._v(" "),s("p",{staticClass:"error_msg"},[e._v(e._s(e.errorMsg))]),e._v(" "),s("button",{class:[""!=e.authCode?"submit":"is-disabled"],attrs:{disabled:""==e.authCode},on:{click:e.singin}},[e._v("完成")]),e._v(" "),s("img",{attrs:{src:i("hiTE")}}),e._v(" "),s("mt-popup",{staticStyle:{width:"5.4rem",height:"2.4rem","border-radius":"0.05rem"},attrs:{position:"center",closeOnClickModal:""},model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}},[s("div",{staticStyle:{height:"1.52rem","text-align":"center","line-height":"1.52rem",color:"#030303","font-size":"0.28rem","border-bottom":"0.02rem solid #C2C2C2"}},[e._v("\n\t\t\t\t该手机号已经被绑定，是否继续绑定？\n\t\t\t")]),e._v(" "),s("div",{staticStyle:{height:"0.86rem","line-height":"0.86rem","text-align":"center"}},[s("span",{staticStyle:{display:"inline-block","font-size":"0.28rem",color:"#030303","border-right":"0.02rem solid #c2c2c2",width:"2.6rem"},on:{click:e.isdelecte}},[e._v("取消")]),e._v(" "),s("span",{ref:"delected",staticStyle:{display:"inline-block","font-size":"0.28rem",color:"#B29F74",width:"2.6rem"},on:{click:e.delecte}},[e._v("继续")])])])],1)},staticRenderFns:[]};var a=i("VU/8")(o,r,!1,function(e){i("ImAX")},"data-v-52b6b8c2",null);t.default=a.exports},hiTE:function(e,t,i){e.exports=i.p+"static/img/singin.4597017.png"}});
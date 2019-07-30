(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1b193782"],{"0c18":function(t,e,s){},5360:function(t,e,s){"use strict";s.r(e);var o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-flex",{attrs:{xs12:"",lg8:"","offset-lg2":""}},[s("v-card",{staticClass:"elevation-2 pb-3"},[s("v-toolbar",{attrs:{dark:"",color:"indigo"}},[s("v-toolbar-title",[s("v-icon",[t._v("person")]),t._v("\n        "+t._s(t.message)+"\n      ")],1)],1),t.loading?s("VProgress",{staticClass:"mt-3",attrs:{message:null}}):s("v-container",[s("v-alert",{attrs:{value:"true",type:t.operationMessageType,transition:"fade-transition"}},[t._v(t._s(t.operationMessage))])],1)],1),s("AxiosComponent",{ref:"axios",on:{finish:function(e){return t.handleHttpResponse(e)}}})],1)},r=[],i={data(){return{message:"User Account Activation",operationMessage:null,operationMessageType:null,token:null,loading:!0}},mounted(){this.token=this.$route.params.token,this.submit()},methods:{submit(){var t={method:"post",url:"activate-account",params:{token:this.token}};this.$refs.axios.submit(t)},handleHttpResponse(t){if(this.loading=!1,200===t.data.result.code){var e=t.data.result.response;switch(this.operationMessage=e.msg,this.operationMessageType=e.code,t.url.substring(t.url.lastIndexOf("/")+1)){case"activate-account":if("success"===e.code&&(this.loading=!1,this.snackbar=!0,e.data)){this.$store.commit("setAuthRouteRequested",null);let t=this;setTimeout(function(){t.$router.push(e.data.redirect)},5e3)}break;default:this.snackbar=!0;break}}else this.operationMessage="Your request could not be executed.",this.operationMessageType="error",this.snackbar=!0}}},a=i,n=s("2877"),l=s("6544"),c=s.n(l),d=(s("0c18"),s("10d2")),h=s("afdd"),u=s("9d26"),p=s("f2e7"),v=s("7560"),f=s("f40d"),m=s("58df"),g=s("d9bd"),b=Object(m["a"])(d["a"],p["a"],f["a"]).extend({name:"v-alert",props:{border:{type:String,validator(t){return["top","right","bottom","left"].includes(t)}},closeLabel:{type:String,default:"$vuetify.close"},coloredBorder:Boolean,dense:Boolean,dismissible:Boolean,icon:{default:"",type:[Boolean,String],validator(t){return"string"===typeof t||!1===t}},outlined:Boolean,prominent:Boolean,text:Boolean,type:{type:String,validator(t){return["info","error","success","warning"].includes(t)}},value:{type:Boolean,default:!0}},computed:{__cachedBorder(){if(!this.border)return null;let t={staticClass:"v-alert__border",class:{[`v-alert__border--${this.border}`]:!0}};return this.coloredBorder&&(t=this.setBackgroundColor(this.computedColor,t),t.class["v-alert__border--has-color"]=!0),this.$createElement("div",t)},__cachedDismissible(){if(!this.dismissible)return null;const t=this.iconColor;return this.$createElement(h["a"],{staticClass:"v-alert__dismissible",props:{color:t,icon:!0},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:()=>this.isActive=!1}},[this.$createElement(u["a"],{props:{color:t}},"$vuetify.icons.cancel")])},__cachedIcon(){return this.computedIcon?this.$createElement(u["a"],{staticClass:"v-alert__icon",props:{color:this.iconColor}},this.computedIcon):null},classes(){const t={...d["a"].options.computed.classes.call(this),"v-alert--border":Boolean(this.border),"v-alert--dense":this.dense,"v-alert--outlined":this.outlined,"v-alert--prominent":this.prominent,"v-alert--text":this.text};return this.border&&(t[`v-alert--border-${this.border}`]=!0),t},computedColor(){return this.color||this.type},computedIcon(){if(!1===this.icon)return!1;if("string"===typeof this.icon&&this.icon)return this.icon;switch(this.type){case"info":return"$vuetify.icons.info";case"error":return"$vuetify.icons.error";case"success":return"$vuetify.icons.success";case"warning":return"$vuetify.icons.warning";default:return!1}},hasColoredIcon(){return this.hasText||Boolean(this.border)&&this.coloredBorder},hasText(){return this.text||this.outlined},iconColor(){return this.hasColoredIcon?this.computedColor:void 0},isDark(){return!(!this.type||this.coloredBorder||this.outlined)||v["a"].options.computed.isDark.call(this)}},created(){this.$attrs.hasOwnProperty("outline")&&Object(g["a"])("outline","outlined",this)},methods:{genWrapper(){const t=[this.$slots.prepend||this.__cachedIcon,this.genContent(),this.__cachedBorder,this.$slots.append,this.$scopedSlots.close?this.$scopedSlots.close({toggle:this.toggle}):this.__cachedDismissible],e={staticClass:"v-alert__wrapper"};return this.$createElement("div",e,t)},genContent(){return this.$createElement("div",{staticClass:"v-alert__content"},this.$slots.default)},genAlert(){let t={staticClass:"v-alert",attrs:{role:"alert"},class:this.classes,style:this.styles,directives:[{name:"show",value:this.isActive}]};if(!this.coloredBorder){const e=this.hasText?this.setTextColor:this.setBackgroundColor;t=e(this.computedColor,t)}return this.$createElement("div",t,[this.genWrapper()])},toggle(){this.isActive=!this.isActive}},render(t){const e=this.genAlert();return this.transition?t("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[e]):e}}),_=s("b0af"),$=s("a523"),y=s("0e8f"),C=s("132d"),k=s("71d9"),B=s("2a7f"),x=Object(n["a"])(a,o,r,!1,null,null,null);e["default"]=x.exports;c()(x,{VAlert:b,VCard:_["a"],VContainer:$["a"],VFlex:y["a"],VIcon:C["a"],VToolbar:k["a"],VToolbarTitle:B["b"]})},afdd:function(t,e,s){"use strict";var o=s("8336");e["a"]=o["a"]}}]);
//# sourceMappingURL=chunk-1b193782.5f307c1c.js.map
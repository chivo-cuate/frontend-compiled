(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0f0a5e"],{"9cec":function(a,e,t){"use strict";t.r(e);var s=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("v-flex",[a.loadingInitialElements?t("VProgress",{staticClass:"text-center",attrs:{message:"Cargando"}}):t("v-layout",{attrs:{row:"",wrap:""}},[t("v-flex",{staticClass:"animated fadeIn",attrs:{xs10:"","offset-xs1":""}},[t("v-card",[t("v-container",{attrs:{"pa-10":""}},[t("v-form",{ref:"form",on:{submit:function(a){a.preventDefault()}},model:{value:a.profileValidationStatus,callback:function(e){a.profileValidationStatus=e},expression:"profileValidationStatus"}},[t("v-layout",{attrs:{wrap:""}},[t("v-flex",{attrs:{xs12:"",sm6:""}},[t("v-text-field",{attrs:{outlined:"",autofocus:!0,label:"Nombres",rules:a.nameRules},on:{keyup:function(e){return!e.type.indexOf("key")&&a._k(e.keyCode,"enter",13,e.key,"Enter")?null:a.save()}},model:{value:a.userData.first_name,callback:function(e){a.$set(a.userData,"first_name",e)},expression:"userData.first_name"}})],1),t("v-flex",{attrs:{xs12:"",sm6:""}},[t("v-text-field",{attrs:{outlined:"",label:"Apellidos",rules:a.lastNameRules},model:{value:a.userData.last_name,callback:function(e){a.$set(a.userData,"last_name",e)},expression:"userData.last_name"}})],1)],1),t("v-layout",{attrs:{wrap:""}},[t("v-flex",{attrs:{xs12:"",sm6:""}},[t("v-text-field",{attrs:{outlined:"",label:"Nombre de usuario",rules:a.nameRules},model:{value:a.userData.username,callback:function(e){a.$set(a.userData,"username",e)},expression:"userData.username"}})],1),t("v-flex",{attrs:{xs12:"",sm6:""}},[t("v-text-field",{attrs:{outlined:"",label:"Correo electrónico",type:"email",rules:a.emailRules},model:{value:a.userData.email,callback:function(e){a.$set(a.userData,"email",e)},expression:"userData.email"}})],1)],1),t("v-layout",{attrs:{wrap:""}},[t("v-flex",{attrs:{xs12:"",sm6:""}},[t("v-text-field",{attrs:{outlined:"",label:"INE",rules:a.nameRules},model:{value:a.userData.ine,callback:function(e){a.$set(a.userData,"ine",e)},expression:"userData.ine"}})],1),t("v-flex",{attrs:{xs12:"",sm6:""}},[t("v-text-field",{attrs:{outlined:"",label:"Teléfono"},model:{value:a.userData.phone_number,callback:function(e){a.$set(a.userData,"phone_number",e)},expression:"userData.phone_number"}})],1)],1),t("v-layout",{attrs:{wrap:""}},[t("v-flex",{attrs:{xs12:"",sm6:""}},[t("v-text-field",{attrs:{outlined:"",label:"Dirección",rules:a.nameRules},model:{value:a.userData.address,callback:function(e){a.$set(a.userData,"address",e)},expression:"userData.address"}})],1),t("v-flex",{attrs:{xs12:"",sm6:""}},[t("v-select",{attrs:{items:[{value:"F",text:"Femenino"},{value:"M",text:"Masculino"}],outlined:"",label:"Sexo",rules:a.nameRules},model:{value:a.userData.sex,callback:function(e){a.$set(a.userData,"sex",e)},expression:"userData.sex"}})],1)],1),t("v-layout",{attrs:{row:"",wrap:"","mt-3":""}},[t("v-flex",{attrs:{xs12:"","mt-2":""}},[t("v-tooltip",{attrs:{right:"",color:a.validationColor},scopedSlots:a._u([{key:"activator",fn:function(e){var s=e.on;return[t("v-btn",a._g({staticClass:"white--text",attrs:{disabled:a.loading,color:a.profileValidationStatus?a.$store.getters.getThemeColor:"error"},on:{click:function(e){return a.updateProfile()}}},s),[a.loading?t("v-progress-circular",{staticClass:"gray--text fa",attrs:{width:2,size:"18",indeterminate:""}}):!a.loading&&a.profileValidationStatus?t("v-icon",{attrs:{small:""}},[a._v("check")]):a.loading||a.profileValidationStatus?a._e():t("v-icon",{attrs:{small:""}},[a._v("error_outline")]),a._v("Actualizar perfil\n                    ")],1)]}}])},[t("span",[a._v(a._s(a.validationMessage))])])],1),t("v-flex",{attrs:{xs12:"","mt-2":""}},[t("v-btn",{staticClass:"white--text",attrs:{color:"warning"},on:{click:function(e){a.dlgChangePassword=!0}}},[t("v-icon",{attrs:{size:"22"}},[a._v("lock")]),a._v(" Cambiar contraseña\n                ")],1)],1)],1),t("v-dialog",{attrs:{width:"400",persistent:""},model:{value:a.dlgChangePassword,callback:function(e){a.dlgChangePassword=e},expression:"dlgChangePassword"}},[t("v-card",[t("v-card-title",{staticClass:"headline grey lighten-2"},[a._v("Cambiar contraseña")]),t("v-container",{attrs:{"pt-5":"","pr-10":"","pb-5":"","pl-10":""}},[t("v-form",{ref:"passwordForm",on:{submit:function(a){a.preventDefault()}},model:{value:a.passwordValidationStatus,callback:function(e){a.passwordValidationStatus=e},expression:"passwordValidationStatus"}},[t("v-layout",{attrs:{row:"",wrap:""}},[t("v-text-field",{attrs:{autofocus:"","prepend-icon":"lock",label:"Actual",rules:a.nameRules,type:"password",hint:"Clave actual"},model:{value:a.userData.current_password,callback:function(e){a.$set(a.userData,"current_password",e)},expression:"userData.current_password"}}),t("v-text-field",{attrs:{"prepend-icon":"lock",label:"Nueva",rules:a.passwordRules,type:"password",hint:"Al menos 6 caracteres"},model:{value:a.userData.password,callback:function(e){a.$set(a.userData,"password",e)},expression:"userData.password"}}),t("v-text-field",{attrs:{"prepend-icon":"lock",label:"Confirmar",rules:a.passwordConfirmRules,type:"password",hint:"Vuelva a escribir la clave"},on:{keyup:function(e){return!e.type.indexOf("key")&&a._k(e.keyCode,"enter",13,e.key,"Enter")?null:a.changePassword()}},model:{value:a.userData.password_confirm,callback:function(e){a.$set(a.userData,"password_confirm",e)},expression:"userData.password_confirm"}})],1),t("v-layout",{attrs:{row:"",wrap:"","mt-4":""}},[t("v-spacer"),t("v-btn",{staticClass:"white--text",attrs:{disabled:a.loading,color:a.$store.getters.getThemeColor,text:""},on:{click:function(e){return a.changePassword()}}},[a.loading?t("v-progress-circular",{staticClass:"gray--text fa",attrs:{width:2,size:"18",indeterminate:""}}):t("v-icon",{attrs:{size:"22"}},[a._v("done")]),a._v("Aceptar\n                      ")],1),t("v-btn",{staticClass:"white--text ml-1",attrs:{color:"error",text:""},on:{click:function(e){return a.closePasswordDlg()}}},[a._v("Cancelar")])],1)],1)],1)],1)],1)],1)],1)],1)],1)],1),t("AxiosComponent",{ref:"axios",on:{finish:function(e){return a.handleHttpResponse(e)}}})],1)},r=[],o={data(){return{dlgChangePassword:!1,dlgCancelReg:!1,uploadDialog:!1,uploadingImage:!1,loadingInitialElements:!0,nameRules:[a=>!!a||"Dato obligatorio"],lastNameRules:[a=>!!a||"Dato obligatorio"],dsaLetterRules:[a=>!!a||"Dato obligatorio"],passwordRules:[a=>!!a||"Dato obligatorio",a=>a&&a.length>0||"Al menos 6 caracteres"],passwordConfirmRules:[a=>!!a||"Dato obligatorio",a=>a===this.userData.password||"Los valores no coinciden"],emailRules:[a=>!!a||"Dato obligatorio",a=>/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(a)||"El formato no es correcto"],postcodeRules:[a=>!!a||"Dato obligatorio"],addressRules:[a=>!!a||"Dato obligatorio"],uploadDlg:!1,profileValidationStatus:!1,passwordValidationStatus:!1,loading:!1,userData:{}}},computed:{validationMessage:function(){return this.profileValidationStatus?"Todo listo!":"Verifique sus datos"},validationColor:function(){return this.profileValidationStatus?"grey":"red"}},mounted(){this.getProfileInfo()},methods:{updateProfile(){if(this.$refs.form.validate()){this.loading=!0;let a={method:"form",snackbar:!0,url:"auth/update-profile",params:new FormData,headers:{"Content-Type":"multipart/form-data"}};a.params.append("item",JSON.stringify(this.userData)),this.$refs.axios.submit(a)}},changePassword(){if(this.$refs.passwordForm.validate()){this.loading=!0;var a={url:"auth/change-password",method:"post",snackbar:!0,params:{current_password:this.userData.current_password,password:this.userData.password,password_confirm:this.userData.password_confirm}};this.$refs.axios.submit(a)}},closePasswordDlg(){this.userData.current_password=null,this.userData.password=null,this.userData.password_confirm=null,this.dlgChangePassword=!1},getProfileInfo(){this.loadingInitialElements=!0;let a={url:"auth/get-profile",params:{}};this.$refs.axios.submit(a)},setDSALetter(a){this.userData.dsa_letter=a,a?(this.userData.dsa_letter_name=a.name,this.uploadDlg=!1):this.userData.dsa_letter_name=null},showUpload(){this.uploadDialog=!0},handleHttpResponse(a){if(this.loading=!1,this.loadingInitialElements=!1,200===a.data.result.code){var e=a.data.result.response;switch(a.url.substring(a.url.lastIndexOf("/")+1)){case"get-profile":"success"===e.code&&(this.userData=e.data);break;case"change-password":"success"===e.code&&(this.dlgChangePassword=!1);break;default:break}}}}},l=o,i=t("2877"),n=t("6544"),u=t.n(n),d=t("8336"),c=t("b0af"),p=t("99d9"),f=t("a523"),m=t("169a"),v=t("0e8f"),g=t("4bd4"),w=t("132d"),h=t("a722"),x=t("490a"),D=t("b974"),b=t("2fa4"),_=t("8654"),k=t("3a2f"),C=Object(i["a"])(l,s,r,!1,null,null,null);e["default"]=C.exports;u()(C,{VBtn:d["a"],VCard:c["a"],VCardTitle:p["c"],VContainer:f["a"],VDialog:m["a"],VFlex:v["a"],VForm:g["a"],VIcon:w["a"],VLayout:h["a"],VProgressCircular:x["a"],VSelect:D["a"],VSpacer:b["a"],VTextField:_["a"],VTooltip:k["a"]})}}]);
//# sourceMappingURL=chunk-2d0f0a5e.b3b003dc.js.map
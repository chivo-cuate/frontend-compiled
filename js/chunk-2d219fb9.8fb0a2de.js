(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d219fb9"],{ba26:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-flex",{attrs:{xs12:""}},[e.loadingInitialData?s("VProgress",{staticClass:"text-center",attrs:{message:"Cargando"}}):s("v-flex",{staticClass:"animated fadeIn"},[s("Tables",{attrs:{tables:e.tables,assets:e.assets},on:{playSound:function(t){return e.playNotifSound()},setResponse:function(t){return e.setResponse(t)}}})],1),s("AxiosComponent",{ref:"axios",on:{finish:function(t){return e.handleHttpResponse(t)}}})],1)},r=[],i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-card",{staticClass:"pt-7 pb-7"},[s("v-container",[s("v-layout",{attrs:{wrap:"","align-center":"","justify-center":"","text-center":""}},[s("v-flex",{attrs:{xs12:""}},[s("span",{staticClass:"uppercase"},[e._v("Mesas disponibles")])]),s("v-flex",{staticClass:"animated fadeIn mt-2",attrs:{xs12:""}},e._l(e.tables,function(t,a){return s("v-tooltip",{key:"table-"+a,attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(r){r.on;return[s("v-menu",{attrs:{"offset-y":"",transition:"fade-transition",bottom:"","open-on-hover":""},scopedSlots:e._u([{key:"activator",fn:function(a){var r=a.on;return[s("v-btn",e._g({class:e.getTableColor(t.status),attrs:{color:"primary",text:""}},r),[s("span",{staticClass:"white--text"},[e._v(e._s(t.table_number))])])]}}],null,!0)},[s("v-list",[-1!==t.status?[s("v-list-item",{staticClass:"dropdown-menu-item",attrs:{disabled:2===t.status,link:""},on:{click:function(s){return e.setEditedTable(t,a,"edit")}}},[s("v-icon",[e._v("local_dining")]),s("span",[e._v(e._s(0===t.status?"Nueva orden":"Editar orden"))])],1),s("v-list-item",{staticClass:"dropdown-menu-item",attrs:{disabled:2!==t.status,link:""},on:{click:function(s){return e.setEditedTable(t,a,"checkout")}}},[s("v-icon",[e._v("attach_money")]),s("span",[e._v("Cerrar cuenta")])],1),s("v-divider"),s("v-list-item",{staticClass:"dropdown-menu-item",attrs:{disabled:1!==t.status,link:""},on:{click:function(s){return e.setEditedTable(t,a,"cancel")}}},[s("v-icon",[e._v("close")]),s("span",[e._v("Cancelar orden")])],1)]:[s("v-list-item",[s("v-icon",[e._v("local_dining")]),s("span",[e._v("La atiende "+e._s(t.waiter))])],1)]],2)],1)]}}],null,!0)})}),1)],1)],1),s("v-dialog",{attrs:{width:"700",persistent:""},model:{value:e.dlgTableOrder,callback:function(t){e.dlgTableOrder=t},expression:"dlgTableOrder"}},[s("v-card",[s("v-card-title",{staticClass:"headline grey lighten-2",attrs:{"primary-title":""}},[e._v("Mesa "+e._s(e.editedTable.table_number))]),s("v-card-text",[s("v-container",{attrs:{"grid-list-md":""}},[s("v-layout",{attrs:{wrap:"","mb-3":""}},[s("v-flex",{attrs:{xs12:""}},[s("v-btn",{class:e.$store.getters.getThemeColor+" white--text",attrs:{disabled:e.editedAssetsLength>0&&!e.validAssetForm},on:{click:function(t){return e.addAsset()}}},[s("v-icon",[e._v("add")]),e._v("Nuevo producto\n              ")],1)],1)],1),s("v-form",{ref:"form",model:{value:e.validAssetForm,callback:function(t){e.validAssetForm=t},expression:"validAssetForm"}},[e._l(e.editedAssets,function(t,a){return s("v-layout",{key:"prod-"+a,attrs:{wrap:""}},[s("v-flex",{attrs:{xs8:"",sm6:""}},[s("v-autocomplete",{staticStyle:{"max-height":"20px!important"},attrs:{"small-chips":"",clearable:"",rules:e.requiredRules,items:e.assets,"item-color":e.$store.getters.getThemeColor,"item-text":"name","item-value":"id",label:"Producto","no-data-text":"No hay resultados"},on:{change:function(t){return e.removeDuplicateAssets()}},scopedSlots:e._u([{key:"item",fn:function(t){return[s("v-list-item-content",[s("v-list-item-title",{domProps:{innerHTML:e._s(t.item.name)}}),s("v-list-item-subtitle",{domProps:{innerHTML:e._s("Precio: $"+t.item.price+(t.item.grams?" ("+t.item.grams+" gramos)":""))}})],1)]}}],null,!0),model:{value:t.asset_id,callback:function(s){e.$set(t,"asset_id",s)},expression:"editedAssetAux.asset_id"}})],1),s("v-flex",{attrs:{xs4:"",sm2:""}},[s("v-text-field",{attrs:{rules:e.numberRules,label:"Unidades",type:"number"},model:{value:t.quantity,callback:function(s){e.$set(t,"quantity",s)},expression:"editedAssetAux.quantity"}})],1),s("v-flex",{attrs:{xs4:"",sm2:""}},[s("v-text-field",{attrs:{readonly:"",value:e.getAssetPriceById(t.asset_id,t.quantity),label:"Precio"}})],1),s("v-flex",{attrs:{xs12:"",sm2:""}},[s("v-btn",{staticClass:"error",attrs:{width:"100%"},on:{click:function(t){return e.removeAsset(a)}}},[e._v("Eliminar")])],1)],1)}),s("v-layout",{attrs:{wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("span",[e._v("Total:")]),s("v-chip",[s("v-icon",{attrs:{left:""}},[e._v("attach_money")]),e._v("\n                  "+e._s(e.calculateTotalPrice)+"\n                ")],1)],1)],1)],2)],1)],1),s("v-divider"),s("v-card-actions",[s("v-spacer"),s("v-btn",{attrs:{disabled:e.editedAssetsLength<1||!e.validAssetForm||e.handlingOrder,color:e.$store.getters.getThemeColor,text:""},on:{click:function(t){return e.sendOrder()}}},[e.handlingOrder?s("v-progress-circular",{staticClass:"v-icon",attrs:{size:15,width:1,indeterminate:""}}):e._e(),s("span",[e._v("Registrar orden")])],1),s("v-btn",{attrs:{color:"error",text:""},on:{click:function(t){e.dlgTableOrder=!1}}},[e._v("Cancelar")])],1)],1)],1),s("v-dialog",{attrs:{width:"500",persistent:""},model:{value:e.dlgCheckout,callback:function(t){e.dlgCheckout=t},expression:"dlgCheckout"}},[s("v-card",[s("v-card-title",{staticClass:"headline grey lighten-2",attrs:{"primary-title":""}},[e._v("Mesa "+e._s(e.editedTable.table_number))]),s("v-card-text",[s("v-container",{attrs:{"grid-list-md":""}},[s("v-layout",{attrs:{wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-card-text",[e._v("Se dispone a cerrar la cuenta de la mesa # "+e._s(e.editedTable.table_number)+" con un monto de:")]),s("p",{staticClass:"text-center"},[s("v-chip",{staticClass:"error"},[s("v-icon",{attrs:{color:"white",medium:"",left:""}},[e._v("attach_money")]),e._v("\n                  "+e._s(e.calculateTotalPrice)+"\n                ")],1)],1),s("p",{staticClass:"text-center"},[e._v("¿Confirma que desea continuar?")])],1)],1)],1)],1),s("v-divider"),s("v-card-actions",[s("v-spacer"),s("v-btn",{attrs:{disabled:e.handlingOrder,color:e.$store.getters.getThemeColor,text:""},on:{click:function(t){return e.checkout()}}},[e.handlingOrder?s("v-progress-circular",{staticClass:"v-icon",attrs:{size:15,width:1,indeterminate:""}}):e._e(),s("span",[e._v("Continuar")])],1),s("v-btn",{attrs:{color:"error",text:""},on:{click:function(t){e.dlgCheckout=!1}}},[e._v("Cancelar")])],1)],1)],1),s("v-dialog",{attrs:{width:"500",persistent:""},model:{value:e.dlgCancelOrder,callback:function(t){e.dlgCancelOrder=t},expression:"dlgCancelOrder"}},[s("v-card",[s("v-card-title",{staticClass:"headline grey lighten-2",attrs:{"primary-title":""}},[e._v("Mesa "+e._s(e.editedTable.table_number))]),s("v-card-text",[s("v-container",{attrs:{"grid-list-md":""}},[s("v-layout",{attrs:{wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-card-text",{staticClass:"text-center"},[e._v("\n                Se dispone a cancelar la orden de la mesa # "+e._s(e.editedTable.table_number)+".\n                "),s("br"),e._v("¿Confirma que desea continuar?\n              ")])],1)],1)],1)],1),s("v-divider"),s("v-card-actions",[s("v-spacer"),s("v-btn",{attrs:{disabled:e.handlingOrder,color:e.$store.getters.getThemeColor,text:""},on:{click:function(t){return e.cancelOrder()}}},[e.handlingOrder?s("v-progress-circular",{staticClass:"v-icon",attrs:{size:15,width:1,indeterminate:""}}):e._e(),s("span",[e._v("Continuar")])],1),s("v-btn",{attrs:{color:"error",text:""},on:{click:function(t){e.dlgCancelOrder=!1}}},[e._v("Cancelar")])],1)],1)],1),s("AxiosComponent",{ref:"axios",on:{finish:function(t){return e.handleHttpResponse(t)}}})],1)},n=[],d={data(){return{handlingOrder:!1,editedTable:{},editedTableIndex:-1,editedOrder:{},editedAssets:[],editedAsset:{},dlgTableOrder:!1,dlgCheckout:!1,dlgCancelOrder:!1,validAssetForm:!1,requiredRules:[e=>!!e||"Dato obligatorio"],numberRules:[e=>!!e||"Dato obligatorio",e=>e>0||"Debe seleccionar al menos una unidad"],timer:null}},components:{},props:["tables","assets"],computed:{calculateTotalPrice(){let e=0;return this.editedAssets.forEach(t=>{e+=this.getAssetPriceById(t.asset_id,parseInt(t.quantity))}),e},editedAssetsLength(){return this.editedAssets.length}},methods:{setEditedTable(e,t,s){switch(this.editedTable=e,this.editedTableIndex=t,this.editedOrder=e.order,this.editedAssets=e.assets,s){case"edit":this.dlgTableOrder=!0;break;case"checkout":this.dlgCheckout=!0;break;case"cancel":this.dlgCancelOrder=!0;break}},getTableColor(e){switch(e){case 0:return`${this.$store.getters.getThemeColor} fa`;case 1:return"warning fa";case-1:return"error fa";default:return"grey fa"}},getAssetById(e){let t=this.assets.find(t=>{return t.id===e});return t},getAssetPriceById(e,t){let s=this.getAssetById(e);return s?parseInt(s.price)*(t?parseInt(t):1):0},removeAsset(e){this.editedAssets.splice(e,1),this.removeDuplicateAssets()},getEditedAssetIndexById(e){return this.editedAssets.findIndex(t=>t.asset_id===e)},removeDuplicateAssets(){let e=[];for(let t=0;t<this.editedAssetsLength;t++){this.editedAssets[t].price=this.getAssetById(this.editedAssets[t].asset_id).price;let s=e.findIndex(e=>e.asset_id===this.editedAssets[t].asset_id);s>=0?e[s].quantity=parseInt(e[s].quantity)+parseInt(this.editedAssets[t].quantity):e.push(this.editedAssets[t])}this.editedAssets=e},addAsset(){this.removeDuplicateAssets(),this.editedAsset={quantity:1},this.editedAssets.push(this.editedAsset)},sendOrder(){if(this.removeDuplicateAssets(),!this.handlingOrder){this.handlingOrder=!0;var e={url:this.editedOrder?"ordenes/editar":"ordenes/crear",snackbar:!0,method:"post",params:{item:{table_number:this.editedTable.table_number,id:this.editedTable.order?this.editedTable.order.id:-1},assets:this.editedAssets,branch_id:this.$store.getters.getCurrBranch.id}};this.$refs.axios.submit(e)}},cancelOrder(){if(!this.handlingOrder){this.handlingOrder=!0;var e={url:"ordenes/eliminar",snackbar:!0,method:"post",params:{id:this.editedTable.order,table_number:this.editedTable.table_number,branch_id:this.$store.getters.getCurrBranch.id}};this.$refs.axios.submit(e)}},checkout(){if(!this.handlingOrder){this.handlingOrder=!0;var e={url:"ordenes/cerrar",snackbar:!0,method:"post",params:{id:this.editedTable.order,table_number:this.editedTable.table_number,branch_id:this.$store.getters.getCurrBranch.id}};this.$refs.axios.submit(e)}},handleHttpResponse(e){if(200===e.data.result.code){var t=e.data.result.response;switch(e.url.substring(e.url.lastIndexOf("/")+1)){case"editar":case"crear":case"eliminar":case"cerrar":this.handlingOrder=!1,this.dlgTableOrder=!1,this.dlgCheckout=!1,this.dlgCancelOrder=!1,"success"===t.code&&(this.$emit("setResponse",t),this.$emit("playSound"));break;default:break}}else this.handlingOrder=!1,this.dlgTableOrder=!1,this.dlgCheckout=!1,this.dlgCancelOrder=!1}}},l=d,o=s("2877"),c=s("6544"),u=s.n(c),h=s("c6a6"),v=s("8336"),m=s("b0af"),b=s("99d9"),p=s("cc20"),g=s("a523"),f=s("169a"),_=s("ce7e"),x=s("0e8f"),C=s("4bd4"),y=s("132d"),A=s("a722"),k=s("8860"),T=s("da13"),O=s("5d23"),w=s("e449"),I=s("490a"),V=s("2fa4"),$=s("8654"),D=s("3a2f"),P=Object(o["a"])(l,i,n,!1,null,"0fe582ac",null),q=P.exports;u()(P,{VAutocomplete:h["a"],VBtn:v["a"],VCard:m["a"],VCardActions:b["a"],VCardText:b["b"],VCardTitle:b["c"],VChip:p["a"],VContainer:g["a"],VDialog:f["a"],VDivider:_["a"],VFlex:x["a"],VForm:C["a"],VIcon:y["a"],VLayout:A["a"],VList:k["a"],VListItem:T["a"],VListItemContent:O["a"],VListItemSubtitle:O["b"],VListItemTitle:O["c"],VMenu:w["a"],VProgressCircular:I["a"],VSpacer:V["a"],VTextField:$["a"],VTooltip:D["a"]});var F={data(){return{loadingInitialData:!0,loadingData:!1,tables:[],assets:[],audioPlayer:null}},components:{Tables:q},mounted(){this.timer=setInterval(this.getDataFromApi,5e3),this.getDataFromApi(),this.initAudioPlayer()},methods:{initAudioPlayer(){this.audioPlayer||(this.audioPlayer=new Audio(this.$store.getters.getBeepFile))},playNotifSound(){this.initAudioPlayer(),this.audioPlayer.play()},setResponse(e){this.tables=e.data.tables,this.assets=e.data.assets},handleHttpResponse(e){if(this.loadingData=!1,this.loadingInitialData=!1,200===e.data.result.code){var t=e.data.result.response;switch(this.operationMessage=t.msg,this.operationMessageType=t.code,e.url.substring(e.url.lastIndexOf("/")+1)){case"listar":"success"===t.code&&this.setResponse(t);break;default:this.snackbar=!0;break}}else this.operationMessage="Your request could not be executed.",this.operationMessageType="error",this.snackbar=!0},getDataFromApi(){if(!this.loadingData){this.loadingData=!0;var e={url:"ordenes/listar",params:{branch_id:this.$store.getters.getCurrBranch.id}};this.$refs.axios.submit(e)}}}},R=F,B=Object(o["a"])(R,a,r,!1,null,null,null);t["default"]=B.exports;u()(B,{VFlex:x["a"]})}}]);
//# sourceMappingURL=chunk-2d219fb9.8fb0a2de.js.map
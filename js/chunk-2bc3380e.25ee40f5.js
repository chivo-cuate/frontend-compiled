(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2bc3380e"],{1681:function(e,t,s){},"210b":function(e,t,s){},"2db4":function(e,t,s){"use strict";s("ca71");var a=s("a9ad"),i=s("f2e7"),n=s("fe6c"),r=s("58df"),o=s("d9bd");t["a"]=Object(r["a"])(a["a"],i["a"],Object(n["b"])(["absolute","top","bottom","left","right"])).extend({name:"v-snackbar",props:{multiLine:Boolean,timeout:{type:Number,default:6e3},vertical:Boolean},data:()=>({activeTimeout:-1}),computed:{classes(){return{"v-snack--active":this.isActive,"v-snack--absolute":this.absolute,"v-snack--bottom":this.bottom||!this.top,"v-snack--left":this.left,"v-snack--multi-line":this.multiLine&&!this.vertical,"v-snack--right":this.right,"v-snack--top":this.top,"v-snack--vertical":this.vertical}}},watch:{isActive(){this.setTimeout()}},created(){this.$attrs.hasOwnProperty("auto-height")&&Object(o["d"])("auto-height",this)},mounted(){this.setTimeout()},methods:{setTimeout(){window.clearTimeout(this.activeTimeout),this.isActive&&this.timeout&&(this.activeTimeout=window.setTimeout(()=>{this.isActive=!1},this.timeout))}},render(e){return e("transition",{attrs:{name:"v-snack-transition"}},[this.isActive&&e("div",{staticClass:"v-snack",class:this.classes,on:this.$listeners},[e("div",this.setBackgroundColor(this.color,{staticClass:"v-snack__wrapper"}),[e("div",{staticClass:"v-snack__content"},this.$slots.default)])])])}})},"376a":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-container",{attrs:{fluid:""}},[s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:"",sm4:""}},[s("v-card",[s("v-list",{attrs:{dense:""}},e._l(e.$store.getters.getSecurityPermissions,function(t,a){return s("v-list-item",{key:"action-"+a,attrs:{to:t.slug}},[s("v-list-item-action",[s("v-icon",{attrs:{color:e.$store.getters.getThemeColor}},[e._v(e._s(t.icon))])],1),s("v-list-item-content",[s("v-list-item-title",[e._v(e._s(t.name))])],1)],1)}),1)],1)],1),s("v-flex",{attrs:{xs12:"",sm8:"","text-center":""}},[s("v-flex",{attrs:{sm11:"","offset-sm1":""}},[s("v-card",{staticClass:"elevation-0"},[s("p",{staticClass:"text-center uppercase white--text",class:e.$store.getters.getThemeColor},[e._v(e._s(e.$route.params.action))]),"inicio"===e.currAction?s("Index"):e._e(),"sucursales"===e.currAction?s("Branches"):e._e(),"roles"===e.currAction?s("Roles"):e._e(),"usuarios"===e.currAction?s("Usuarios"):e._e()],1)],1)],1)],1)],1)},i=[],n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-flex",[s("span",{staticClass:"title"},[e._v("Seleccione la opción deseada.")])])},r=[],o={data:()=>({})},l=o,d=s("2877"),c=s("6544"),u=s.n(c),m=s("0e8f"),p=Object(d["a"])(l,n,r,!1,null,null,null),v=p.exports;u()(p,{VFlex:m["a"]});var h=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-flex",{attrs:{xs12:""}},[s("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.items,page:e.page,"items-per-page":10,loading:e.loadingItems,"footer-props":{itemsPerPageText:"Elementos por página",itemsPerPageOptions:[{value:5,text:"5"},{value:10,text:"10"},{value:20,text:"20"},{value:9999999999,text:"Todos"}],showFirstLastPage:!1},"item-key":"name"},on:{"update:page":function(t){e.page=t},"page-count":function(t){e.pageCount=t}},scopedSlots:e._u([{key:"top",fn:function(){return[s("v-toolbar",{attrs:{flat:"",color:"white"}},[s("v-toolbar-title",{staticClass:"success--text"},[e._v("SUCURSALES")]),s("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),s("v-spacer"),s("v-dialog",{attrs:{"max-width":"500px"},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on;return[s("v-btn",e._g({staticClass:"mb-2",attrs:{disabled:e.loadingItems||e.updatingItem,color:e.$store.getters.getThemeColor,dark:""},on:{click:function(t){return e.addItem()}}},a),[s("v-icon",{attrs:{small:""}},[e._v("add")]),e._v("Adicionar\n            ")],1)]}}]),model:{value:e.dlgUpdateItem,callback:function(t){e.dlgUpdateItem=t},expression:"dlgUpdateItem"}},[s("v-card",[s("v-card-title",[s("span",{staticClass:"headline"},[e._v(e._s(e.formTitle))])]),s("v-card-text",[s("v-container",{attrs:{"grid-list-md":""}},[s("v-form",{ref:"form",model:{value:e.validForm,callback:function(t){e.validForm=t},expression:"validForm"}},[s("v-layout",{attrs:{wrap:""}},[s("v-flex",{attrs:{xs12:"",sm6:""}},[s("v-text-field",{attrs:{rules:e.requiredRules,outlined:"",label:"Nombre"},model:{value:e.editedItem.name,callback:function(t){e.$set(e.editedItem,"name",t)},expression:"editedItem.name"}})],1),s("v-flex",{attrs:{xs12:"",sm6:""}},[s("v-text-field",{attrs:{type:"number",rules:e.requiredRules,outlined:"",label:"Mesas"},model:{value:e.editedItem.tables,callback:function(t){e.$set(e.editedItem,"tables",t)},expression:"editedItem.tables"}})],1)],1),s("v-layout",{attrs:{wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-textarea",{attrs:{outlined:"",label:"Descripción"},model:{value:e.editedItem.description,callback:function(t){e.$set(e.editedItem,"description",t)},expression:"editedItem.description"}})],1)],1),s("v-layout",{attrs:{wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-select",{attrs:{rules:e.requiredRules,outlined:"",items:e.managers,"item-text":"username","item-value":"id",label:"Gerente"},model:{value:e.editedItem.manager_id,callback:function(t){e.$set(e.editedItem,"manager_id",t)},expression:"editedItem.manager_id"}})],1)],1)],1)],1)],1),s("v-card-actions",{staticClass:"mr-5"},[s("v-spacer"),s("v-btn",{attrs:{disabled:!e.validForm||e.updatingItem,color:e.$store.getters.getThemeColor,text:""},on:{click:function(t){return e.save()}}},[e.updatingItem?s("v-progress-circular",{staticClass:"v-icon",attrs:{size:15,width:1,indeterminate:"",color:e.$store.getters.getThemeColor}}):s("v-icon",{attrs:{small:""}},[e._v("check")]),s("span",[e._v("Aceptar")])],1),s("v-btn",{attrs:{color:"error",text:""},on:{click:function(t){e.dlgUpdateItem=!1}}},[e._v("Cancelar")])],1)],1)],1),s("v-dialog",{attrs:{"max-width":"300px",persistent:""},model:{value:e.dlgDeleteItem,callback:function(t){e.dlgDeleteItem=t},expression:"dlgDeleteItem"}},[s("v-card",[s("v-card-title",[s("span",{staticClass:"headline"},[e._v("Eliminar elemento")])]),s("v-card-text",[s("v-container",{attrs:{"grid-list-md":""}},[s("v-layout",{attrs:{wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("p",[e._v("¿Seguro que desea eliminar el elemento "+e._s(e.editedItem.name)+"?")])])],1)],1)],1),s("v-card-actions",{staticClass:"mr-5"},[s("v-spacer"),s("v-btn",{attrs:{disabled:e.deletingItem,color:e.$store.getters.getThemeColor,text:""},on:{click:function(t){return e.remove()}}},[e.updatingItem?s("v-progress-circular",{staticClass:"v-icon",attrs:{size:15,width:1,indeterminate:"",color:e.$store.getters.getThemeColor}}):s("v-icon",{attrs:{small:""}},[e._v("check")]),s("span",[e._v("Aceptar")])],1),s("v-btn",{attrs:{color:"error",text:""},on:{click:function(t){e.dlgDeleteItem=!1}}},[e._v("Cancelar")])],1)],1)],1)],1)]},proxy:!0},{key:"item.action",fn:function(t){var a=t.item;return[s("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var i=t.on;return[s("v-icon",e._g({staticClass:"mr-2",attrs:{color:e.$store.getters.getThemeColor},on:{click:function(t){return e.editItem(a)}}},i),[e._v("edit")])]}}],null,!0)},[s("span",[e._v("Editar")])]),s("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var i=t.on;return[s("v-icon",e._g({attrs:{color:"warning"},on:{click:function(t){return e.deleteItem(a)}}},i),[e._v("delete")])]}}],null,!0)},[s("span",[e._v("Eliminar")])])]}},{key:"loading",fn:function(){return[s("VProgress",{staticClass:"text-center"})]},proxy:!0},{key:"no-data",fn:function(){return[e._v("No se han encontrado elementos.")]},proxy:!0}])}),s("v-snackbar",{attrs:{timeout:5e3,bottom:!0,right:!0,absolute:!0,color:e.operationMessageType},model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[s("v-icon",{staticClass:"white--text",attrs:{small:""}},[e._v("info")]),e._v("\n    "+e._s(e.operationMessage)+"\n    "),s("v-btn",{attrs:{text:""},on:{click:function(t){e.snackbar=!1}}},[s("v-icon",{attrs:{small:""}},[e._v("close")])],1)],1),s("AxiosComponent",{ref:"axios",on:{finish:function(t){return e.handleHttpResponse(t)}}})],1)},g=[],x={data(){return{dlgUpdateItem:!1,dlgDeleteItem:!1,page:1,pageCount:0,loadingItems:!0,editedIndex:-1,editedItem:{},managers:[],validForm:!1,requiredRules:[e=>!!e||"Este dato es obligatorio"],items:[],updatingItem:!1,deletingItem:!1,operationMessage:"",operationMessageType:"error",snackbar:!1,headers:[{text:"Nombre",value:"name",align:"left"},{text:"Mesas",value:"tables",align:"left"},{text:"Gerente",value:"manager_name",align:"left"},{text:"Acciones",value:"action",align:"left",sortable:!1}]}},computed:{formTitle(){return-1===this.editedIndex?"Adicionar":"Editar"}},mounted(){this.getDataFromApi()},methods:{handleHttpResponse(e){this.loadingItems=!1;let t=e.url.substring(e.url.lastIndexOf("/")+1);if(200===e.data.result.code){var s=e.data.result.response;switch(this.operationMessage=s.msg,this.operationMessageType=s.code,t){case"crear":case"editar":case"eliminar":this.snackbar=!0,this.dlgUpdateItem=!1,this.dlgDeleteItem=!1,this.updatingItem=!1,this.deletingItem=!1,"success"===s.code&&(this.items=s.data.items,this.managers=s.data.managers);break;case"listar":this.items=s.data.items,this.managers=s.data.managers;break;default:this.snackbar=!0;break}}else this.operationMessage=e.data.result.response.response.data.message,this.operationMessageType="error",this.snackbar=!0,this.dlgUpdateItem=!1,this.dlgDeleteItem=!1,this.updatingItem=!1,this.deletingItem=!1},getDataFromApi(){this.loadingItems=!0;var e={url:"sucursales/listar",params:{}};this.$refs.axios.submit(e)},editItem(e){this.editedIndex=this.items.indexOf(e),this.editedItem=Object.assign({},e),this.dlgUpdateItem=!0},addItem(){let e={id:-1,name:null,description:null,manager_id:null,manager_name:null};this.editedItem=Object.assign({},e),this.dlgUpdateItem=!0},deleteItem(e){this.editedIndex=this.items.indexOf(e),this.editedItem=Object.assign({},e),this.dlgDeleteItem=!0},remove(){if(!this.deletingItem){this.deletingItem=!0;var e={method:"post",url:"sucursales/eliminar",params:{id:this.editedItem.id}};this.$refs.axios.submit(e)}},save(){if(!this.updatingItem){this.updatingItem=!0;var e={method:"post",url:-1===this.editedItem.id?"sucursales/crear":"sucursales/editar",params:{item:this.editedItem}};this.$refs.axios.submit(e)}}}},f=x,b=s("8336"),I=s("b0af"),_=s("99d9"),k=s("a523"),C=s("8fea"),w=s("169a"),y=s("ce7e"),V=s("4bd4"),T=s("132d"),$=s("a722"),A=s("490a"),P=s("b974"),D=s("2db4"),O=s("2fa4"),R=s("8654"),E=(s("1681"),s("58df"));const j=Object(E["a"])(R["a"]);var F=j.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:e=>!isNaN(parseFloat(e))},rows:{type:[Number,String],default:5,validator:e=>!isNaN(parseInt(e,10))}},computed:{classes(){return{"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle,...R["a"].options.computed.classes.call(this)}},noResizeHandle(){return this.noResize||this.autoGrow}},watch:{lazyValue(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted(){setTimeout(()=>{this.autoGrow&&this.calculateInputHeight()},0)},methods:{calculateInputHeight(){const e=this.$refs.input;if(!e)return;e.style.height="0";const t=e.scrollHeight,s=parseInt(this.rows,10)*parseFloat(this.rowHeight);e.style.height=Math.max(s,t)+"px"},genInput(){const e=R["a"].options.methods.genInput.call(this);return e.tag="textarea",delete e.data.attrs.type,e.data.attrs.rows=this.rows,e},onInput(e){R["a"].options.methods.onInput.call(this,e),this.autoGrow&&this.calculateInputHeight()},onKeyDown(e){this.isFocused&&13===e.keyCode&&e.stopPropagation(),this.$emit("keydown",e)}}}),S=s("71d9"),M=s("2a7f"),B=s("3a2f"),U=Object(d["a"])(f,h,g,!1,null,null,null),H=U.exports;u()(U,{VBtn:b["a"],VCard:I["a"],VCardActions:_["a"],VCardText:_["b"],VCardTitle:_["c"],VContainer:k["a"],VDataTable:C["a"],VDialog:w["a"],VDivider:y["a"],VFlex:m["a"],VForm:V["a"],VIcon:T["a"],VLayout:$["a"],VProgressCircular:A["a"],VSelect:P["a"],VSnackbar:D["a"],VSpacer:O["a"],VTextField:R["a"],VTextarea:F,VToolbar:S["a"],VToolbarTitle:M["b"],VTooltip:B["a"]});var z=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-flex",{attrs:{xs12:""}},[s("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.items,page:e.page,"items-per-page":10,loading:e.loadingItems,"footer-props":{itemsPerPageText:"Elementos por página",itemsPerPageOptions:[{value:5,text:"5"},{value:10,text:"10"},{value:20,text:"20"},{value:9999999999,text:"Todos"}],showFirstLastPage:!1},"item-key":"name"},on:{"update:page":function(t){e.page=t},"page-count":function(t){e.pageCount=t}},scopedSlots:e._u([{key:"top",fn:function(){return[s("v-toolbar",{attrs:{flat:"",color:"white"}},[s("v-toolbar-title",{staticClass:"success--text"},[e._v("ROLES")]),s("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),s("v-spacer"),s("v-dialog",{attrs:{"max-width":"500px",persistent:""},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on;return[s("v-btn",e._g({staticClass:"mb-2",attrs:{disabled:e.loadingItems||e.updatingItem,color:e.$store.getters.getThemeColor,dark:""},on:{click:function(t){return e.showAddDlg()}}},a),[s("v-icon",{attrs:{small:""}},[e._v("add")]),e._v("Adicionar\n            ")],1)]}}]),model:{value:e.dlgUpdateItem,callback:function(t){e.dlgUpdateItem=t},expression:"dlgUpdateItem"}},[s("v-card",[s("v-card-title",[s("span",{staticClass:"headline"},[e._v(e._s(e.formTitle))])]),s("v-card-text",[s("v-container",{attrs:{"grid-list-md":""}},[s("v-form",{ref:"form",model:{value:e.validForm,callback:function(t){e.validForm=t},expression:"validForm"}},[s("v-layout",{attrs:{wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-text-field",{attrs:{rules:e.requiredRules,outlined:"",label:"Nombre"},model:{value:e.editedItem.name,callback:function(t){e.$set(e.editedItem,"name",t)},expression:"editedItem.name"}})],1)],1),s("v-layout",{attrs:{wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-textarea",{attrs:{outlined:"",label:"Descripción"},model:{value:e.editedItem.description,callback:function(t){e.$set(e.editedItem,"description",t)},expression:"editedItem.description"}})],1)],1)],1)],1)],1),s("v-card-actions",{staticClass:"mr-5"},[s("v-spacer"),s("v-btn",{attrs:{disabled:!e.validForm||e.updatingItem,color:e.$store.getters.getThemeColor,text:""},on:{click:function(t){return e.save()}}},[e.updatingItem?s("v-progress-circular",{staticClass:"v-icon",attrs:{size:15,width:1,indeterminate:"",color:e.$store.getters.getThemeColor}}):s("v-icon",{attrs:{small:""}},[e._v("check")]),s("span",[e._v("Aceptar")])],1),s("v-btn",{attrs:{color:"error",text:""},on:{click:function(t){e.dlgUpdateItem=!1}}},[s("v-icon",[e._v("close")]),e._v("Cancelar\n              ")],1)],1)],1)],1),s("v-dialog",{attrs:{"max-width":"700px",persistent:""},model:{value:e.dlgPermissions,callback:function(t){e.dlgPermissions=t},expression:"dlgPermissions"}},[s("v-card",[s("v-card-title",[s("span",{staticClass:"headline"},[e._v("Permisos de "+e._s(e.editedItem.name))])]),s("v-card-text",[s("v-container",{attrs:{"grid-list-md":""}},[s("v-layout",{attrs:{row:"",wrap:""}},[s("v-expansion-panels",e._l(e.editedPermissions,function(t,a){return s("v-expansion-panel",{key:"module-"+a},[s("v-expansion-panel-header",[e._v(e._s(t.name))]),s("v-expansion-panel-content",e._l(t.subModules,function(t,a){return s("div",{key:"sad-"+a},[s("span",{staticClass:"success--text",domProps:{innerHTML:e._s(t.name)}}),s("v-select",{attrs:{outlined:"",items:t.perms,"item-text":"name","item-value":"id","menu-props":{maxHeight:"400"},multiple:""},model:{value:t.active,callback:function(s){e.$set(t,"active",s)},expression:"subModule.active"}})],1)}),0)],1)}),1)],1)],1)],1),s("v-card-actions",{staticClass:"mr-5"},[s("v-spacer"),s("v-btn",{attrs:{disabled:e.deletingItem,color:e.$store.getters.getThemeColor,text:""},on:{click:function(t){return e.savePermissions()}}},[e.updatingItem?s("v-progress-circular",{staticClass:"v-icon",attrs:{size:15,width:1,indeterminate:"",color:e.$store.getters.getThemeColor}}):s("v-icon",{attrs:{small:""}},[e._v("check")]),s("span",[e._v("Aceptar")])],1),s("v-btn",{attrs:{color:"error",text:""},on:{click:function(t){e.dlgPermissions=!1}}},[s("v-icon",[e._v("close")]),e._v("Cancelar\n              ")],1)],1)],1)],1),s("v-dialog",{attrs:{"max-width":"300px",persistent:""},model:{value:e.dlgDeleteItem,callback:function(t){e.dlgDeleteItem=t},expression:"dlgDeleteItem"}},[s("v-card",[s("v-card-title",[s("span",{staticClass:"headline"},[e._v("Eliminar elemento")])]),s("v-card-text",[s("v-container",{attrs:{"grid-list-md":""}},[s("v-layout",{attrs:{wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("p",[e._v("¿Seguro que desea eliminar el elemento "+e._s(e.editedItem.name)+"?")])])],1)],1)],1),s("v-card-actions",{staticClass:"mr-5"},[s("v-spacer"),s("v-btn",{attrs:{disabled:e.deletingItem,color:e.$store.getters.getThemeColor,text:""},on:{click:function(t){return e.remove()}}},[e.updatingItem?s("v-progress-circular",{staticClass:"v-icon",attrs:{size:15,width:1,indeterminate:"",color:e.$store.getters.getThemeColor}}):s("v-icon",{attrs:{small:""}},[e._v("check")]),s("span",[e._v("Aceptar")])],1),s("v-btn",{attrs:{color:"error",text:""},on:{click:function(t){e.dlgDeleteItem=!1}}},[s("v-icon",[e._v("close")]),e._v("Cancelar\n              ")],1)],1)],1)],1)],1)]},proxy:!0},{key:"item.action",fn:function(t){var a=t.item;return["Administrador del Sistema"!==a.name?[s("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var i=t.on;return[s("v-icon",e._g({staticClass:"mr-2",attrs:{color:e.$store.getters.getThemeColor},on:{click:function(t){return e.showEditDlg(a)}}},i),[e._v("edit")])]}}],null,!0)},[s("span",[e._v("Editar")])]),s("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var i=t.on;return[s("v-icon",e._g({attrs:{color:"success"},on:{click:function(t){return e.showPermissionsDlg(a)}}},i),[e._v("security")])]}}],null,!0)},[s("span",[e._v("Permisos")])]),s("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var i=t.on;return[s("v-icon",e._g({attrs:{color:"warning"},on:{click:function(t){return e.deleteItem(a)}}},i),[e._v("delete")])]}}],null,!0)},[s("span",[e._v("Eliminar")])])]:e._e()]}},{key:"loading",fn:function(){return[s("VProgress",{staticClass:"text-center"})]},proxy:!0},{key:"no-data",fn:function(){return[e._v("No se han encontrado elementos.")]},proxy:!0}])}),s("v-snackbar",{attrs:{timeout:5e3,bottom:!0,right:!0,absolute:!0,color:e.operationMessageType},model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[s("v-icon",{staticClass:"white--text",attrs:{small:""}},[e._v("info")]),e._v("\n    "+e._s(e.operationMessage)+"\n    "),s("v-btn",{attrs:{text:""},on:{click:function(t){e.snackbar=!1}}},[s("v-icon",{attrs:{small:""}},[e._v("close")])],1)],1),s("AxiosComponent",{ref:"axios",on:{finish:function(t){return e.handleHttpResponse(t)}}})],1)},L=[],N={data(){return{dlgUpdateItem:!1,dlgDeleteItem:!1,dlgPermissions:!1,page:1,pageCount:0,loadingItems:!0,editedIndex:-1,editedItem:{},managers:[],validForm:!1,requiredRules:[e=>!!e||"Este dato es obligatorio"],items:[],editedPermissions:[],updatingItem:!1,deletingItem:!1,operationMessage:"",operationMessageType:"error",snackbar:!1,headers:[{text:"Nombre",value:"name",align:"left"},{text:"Descripción",value:"description",align:"left"},{text:"Acciones",value:"action",align:"left",sortable:!1}]}},computed:{formTitle(){return-1===this.editedIndex?"Adicionar":"Editar"}},mounted(){this.getDataFromApi()},methods:{handleHttpResponse(e){if(this.loadingItems=!1,200===e.data.result.code){var t=e.data.result.response;switch(this.operationMessage=t.msg,this.operationMessageType=t.code,e.url.substring(e.url.lastIndexOf("/")+1)){case"editar-permisos":this.snackbar=!0,this.dlgPermissions=!1,this.updatingItem=!1,"success"===t.code&&(this.items=t.data);break;case"eliminar":case"editar":this.snackbar=!0,this.dlgUpdateItem=!1,this.dlgDeleteItem=!1,this.updatingItem=!1,this.deletingItem=!1,"success"===t.code&&(this.items=t.data);break;case"listar":this.items=t.data;break;default:this.snackbar=!0;break}}else this.operationMessage="Your request could not be executed.",this.operationMessageType="error",this.snackbar=!0},getDataFromApi(){this.loadingItems=!0;var e={url:"roles/listar",params:{}};this.$refs.axios.submit(e)},showEditDlg(e){this.editedIndex=this.items.indexOf(e),this.editedItem=Object.assign({},e),this.dlgUpdateItem=!0,console.log(this.editedItem)},showAddDlg(){let e={id:-1,name:null,description:null,manager_id:null,manager_name:null};this.editedItem=Object.assign({},e),this.dlgUpdateItem=!0},showPermissionsDlg(e){this.editedIndex=this.items.indexOf(e),this.editedItem=Object.assign({},e),this.editedPermissions=Object.assign({},e.modules),this.dlgPermissions=!0},deleteItem(e){this.editedIndex=this.items.indexOf(e),this.editedItem=Object.assign({},e),this.dlgDeleteItem=!0},remove(){if(!this.deletingItem){this.deletingItem=!0;var e={method:"post",url:"roles/eliminar",params:{id:this.editedItem.id}};this.$refs.axios.submit(e)}},save(){if(!this.updatingItem){this.updatingItem=!0;let e={method:"post",url:-1===this.editedItem.id?"roles/crear":"roles/editar",params:{item:this.editedItem}};this.$refs.axios.submit(e)}},savePermissions(){if(!this.updatingItem){this.updatingItem=!0;let e=[];for(let s in this.editedPermissions)this.editedPermissions[s].subModules.forEach(t=>{t.active.length>0&&e.push(t.active)});let t={method:"post",url:"roles/editar-permisos",params:{id:this.editedItem.id,items:e}};this.$refs.axios.submit(t)}}}},q=N,G=s("4e82"),J=s("3206"),Y=s("80d2"),K=Object(E["a"])(Object(G["a"])("expansionPanels","v-expansion-panel","v-expansion-panels"),Object(J["b"])("expansionPanel",!0)).extend({name:"v-expansion-panel",props:{disabled:Boolean,readonly:Boolean},data(){return{content:null,header:null,nextIsActive:!1}},computed:{classes(){return{"v-expansion-panel--active":this.isActive,"v-expansion-panel--next-active":this.nextIsActive,"v-expansion-panel--disabled":this.isDisabled,...this.groupClasses}},isDisabled(){return this.expansionPanels.disabled||this.disabled},isReadonly(){return this.expansionPanels.readonly||this.readonly}},methods:{registerContent(e){this.content=e},unregisterContent(){this.content=null},registerHeader(e){this.header=e,e.$on("click",this.onClick)},unregisterHeader(){this.header=null},onClick(e){e.detail&&this.header.$el.blur(),this.$emit("click",e),this.isReadonly||this.isDisabled||this.toggle()},toggle(){this.content&&(this.content.isBooted=!0),this.$nextTick(()=>this.$emit("change"))}},render(e){return e("div",{staticClass:"v-expansion-panel",class:this.classes,attrs:{"aria-expanded":String(this.isActive)}},Object(Y["p"])(this))}}),Q=s("0789"),W=s("9d65");const X=Object(E["a"])(W["a"],Object(J["a"])("expansionPanel","v-expansion-panel-content","v-expansion-panel"));var Z=X.extend().extend({name:"v-expansion-panel-content",computed:{isActive(){return this.expansionPanel.isActive}},created(){this.expansionPanel.registerContent(this)},beforeDestroy(){this.expansionPanel.unregisterContent()},render(e){return e(Q["a"],[e("div",{staticClass:"v-expansion-panel-content",directives:[{name:"show",value:this.isActive}]},this.showLazyContent([e("div",{class:"v-expansion-panel-content__wrap"},Object(Y["p"])(this))]))])}}),ee=s("9d26"),te=s("5607");const se=Object(E["a"])(Object(J["a"])("expansionPanel","v-expansion-panel-header","v-expansion-panel"));var ae=se.extend().extend({name:"v-expansion-panel-header",directives:{ripple:te["a"]},props:{disableIconRotate:Boolean,expandIcon:{type:String,default:"$vuetify.icons.expand"},hideActions:Boolean,ripple:{type:[Boolean,Object],default:!1}},data:()=>({hasMousedown:!1}),computed:{classes(){return{"v-expansion-panel-header--active":this.isActive,"v-expansion-panel-header--mousedown":this.hasMousedown}},isActive(){return this.expansionPanel.isActive},isDisabled(){return this.expansionPanel.isDisabled},isReadonly(){return this.expansionPanel.isReadonly}},created(){this.expansionPanel.registerHeader(this)},beforeDestroy(){this.expansionPanel.unregisterHeader()},methods:{onClick(e){this.$emit("click",e)},genIcon(){const e=Object(Y["p"])(this,"actions")||[this.$createElement(ee["a"],this.expandIcon)];return this.$createElement(Q["c"],[this.$createElement("div",{staticClass:"v-expansion-panel-header__icon",class:{"v-expansion-panel-header__icon--disable-rotate":this.disableIconRotate},directives:[{name:"show",value:!this.isDisabled}]},e)])}},render(e){return e("button",{staticClass:"v-expansion-panel-header",class:this.classes,attrs:{tabindex:this.isDisabled?-1:null,type:"button"},directives:[{name:"ripple",value:this.ripple}],on:{...this.$listeners,click:this.onClick,mousedown:()=>this.hasMousedown=!0,mouseup:()=>this.hasMousedown=!1}},[Object(Y["p"])(this,"default",{open:this.isActive},!0),this.hideActions||this.genIcon()])}}),ie=(s("210b"),s("604c")),ne=s("d9bd"),re=ie["a"].extend({name:"v-expansion-panels",provide(){return{expansionPanels:this}},props:{accordion:Boolean,disabled:Boolean,focusable:Boolean,inset:Boolean,popout:Boolean,readonly:Boolean},computed:{classes(){return{...ie["a"].options.computed.classes.call(this),"v-expansion-panels":!0,"v-expansion-panels--accordion":this.accordion,"v-expansion-panels--focusable":this.focusable,"v-expansion-panels--inset":this.inset,"v-expansion-panels--popout":this.popout}}},created(){this.$attrs.hasOwnProperty("expand")&&Object(ne["a"])("expand","multiple",this),Array.isArray(this.value)&&this.value.length>0&&"boolean"===typeof this.value[0]&&Object(ne["a"])(':value="[true, false, true]"',':value="[0, 2]"',this)},methods:{updateItem(e,t){const s=this.getValue(e,t),a=this.getValue(e,t+1);e.isActive=this.toggleMethod(s),e.nextIsActive=this.toggleMethod(a)}}}),oe=Object(d["a"])(q,z,L,!1,null,null,null),le=oe.exports;u()(oe,{VBtn:b["a"],VCard:I["a"],VCardActions:_["a"],VCardText:_["b"],VCardTitle:_["c"],VContainer:k["a"],VDataTable:C["a"],VDialog:w["a"],VDivider:y["a"],VExpansionPanel:K,VExpansionPanelContent:Z,VExpansionPanelHeader:ae,VExpansionPanels:re,VFlex:m["a"],VForm:V["a"],VIcon:T["a"],VLayout:$["a"],VProgressCircular:A["a"],VSelect:P["a"],VSnackbar:D["a"],VSpacer:O["a"],VTextField:R["a"],VTextarea:F,VToolbar:S["a"],VToolbarTitle:M["b"],VTooltip:B["a"]});var de=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-flex",{attrs:{xs12:""}},[s("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.items,page:e.page,"items-per-page":10,loading:e.loadingItems,"footer-props":{itemsPerPageText:"Elementos por página",itemsPerPageOptions:[{value:5,text:"5"},{value:10,text:"10"},{value:20,text:"20"},{value:9999999999,text:"Todos"}],showFirstLastPage:!1},"item-key":"name"},on:{"update:page":function(t){e.page=t},"page-count":function(t){e.pageCount=t}},scopedSlots:e._u([{key:"top",fn:function(){return[s("v-toolbar",{attrs:{flat:"",color:"white"}},[s("v-toolbar-title",{staticClass:"success--text uppercase"},[e._v("Usuarios")]),s("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),s("v-spacer"),s("v-dialog",{attrs:{"max-width":"500px",persistent:""},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on;return[s("v-btn",e._g({staticClass:"mb-2",attrs:{disabled:e.loadingItems||e.updatingItem,color:e.$store.getters.getThemeColor,dark:""},on:{click:function(t){return e.showAddDlg()}}},a),[s("v-icon",{attrs:{small:""}},[e._v("add")]),e._v("Adicionar\n            ")],1)]}}]),model:{value:e.dlgUpdateItem,callback:function(t){e.dlgUpdateItem=t},expression:"dlgUpdateItem"}},[s("v-card",[s("v-card-title",[s("span",{staticClass:"headline"},[e._v(e._s(e.formTitle))])]),s("v-card-text",[s("v-container",{attrs:{"grid-list-md":""}},[s("v-form",{ref:"form",model:{value:e.validForm,callback:function(t){e.validForm=t},expression:"validForm"}},[s("v-layout",{attrs:{wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-text-field",{attrs:{rules:e.requiredRules,outlined:"",label:"Nombre"},model:{value:e.editedItem.name,callback:function(t){e.$set(e.editedItem,"name",t)},expression:"editedItem.name"}})],1)],1),s("v-layout",{attrs:{wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-textarea",{attrs:{outlined:"",label:"Descripción"},model:{value:e.editedItem.description,callback:function(t){e.$set(e.editedItem,"description",t)},expression:"editedItem.description"}})],1)],1)],1)],1)],1),s("v-card-actions",{staticClass:"mr-5"},[s("v-spacer"),s("v-btn",{attrs:{disabled:!e.validForm||e.updatingItem,color:e.$store.getters.getThemeColor,text:""},on:{click:function(t){return e.save()}}},[e.updatingItem?s("v-progress-circular",{staticClass:"v-icon",attrs:{size:15,width:1,indeterminate:"",color:e.$store.getters.getThemeColor}}):s("v-icon",{attrs:{small:""}},[e._v("check")]),s("span",[e._v("Aceptar")])],1),s("v-btn",{attrs:{color:"error",text:""},on:{click:function(t){e.dlgUpdateItem=!1}}},[s("v-icon",[e._v("close")]),e._v("Cancelar\n              ")],1)],1)],1)],1),s("v-dialog",{attrs:{"max-width":"500px",persistent:""},model:{value:e.dlgRoles,callback:function(t){e.dlgRoles=t},expression:"dlgRoles"}},[s("v-card",[s("v-card-title",[s("span",{staticClass:"headline"},[e._v("Roles de "+e._s(e.editedItem.username))])]),s("v-card-text",[s("v-container",{attrs:{"grid-list-md":""}},[s("v-layout",{attrs:{row:"",wrap:""}},[s("v-select",{attrs:{outlined:"",items:e.roles,"item-text":"name","item-value":"id","menu-props":{maxHeight:"400"},multiple:""},model:{value:e.editedRoles,callback:function(t){e.editedRoles=t},expression:"editedRoles"}})],1)],1)],1),s("v-card-actions",{staticClass:"mr-5"},[s("v-spacer"),s("v-btn",{attrs:{disabled:e.deletingItem,color:e.$store.getters.getThemeColor,text:""},on:{click:function(t){return e.savePermissions()}}},[e.updatingItem?s("v-progress-circular",{staticClass:"v-icon",attrs:{size:15,width:1,indeterminate:"",color:e.$store.getters.getThemeColor}}):s("v-icon",{attrs:{small:""}},[e._v("check")]),s("span",[e._v("Aceptar")])],1),s("v-btn",{attrs:{color:"error",text:""},on:{click:function(t){e.dlgRoles=!1}}},[s("v-icon",[e._v("close")]),e._v("Cancelar\n              ")],1)],1)],1)],1),s("v-dialog",{attrs:{"max-width":"300px",persistent:""},model:{value:e.dlgDeleteItem,callback:function(t){e.dlgDeleteItem=t},expression:"dlgDeleteItem"}},[s("v-card",[s("v-card-title",[s("span",{staticClass:"headline"},[e._v("Eliminar elemento")])]),s("v-card-text",[s("v-container",{attrs:{"grid-list-md":""}},[s("v-layout",{attrs:{wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("p",[e._v("¿Seguro que desea eliminar el elemento "+e._s(e.editedItem.username)+"?")])])],1)],1)],1),s("v-card-actions",{staticClass:"mr-5"},[s("v-spacer"),s("v-btn",{attrs:{disabled:e.deletingItem,color:e.$store.getters.getThemeColor,text:""},on:{click:function(t){return e.remove()}}},[e.updatingItem?s("v-progress-circular",{staticClass:"v-icon",attrs:{size:15,width:1,indeterminate:"",color:e.$store.getters.getThemeColor}}):s("v-icon",{attrs:{small:""}},[e._v("check")]),s("span",[e._v("Aceptar")])],1),s("v-btn",{attrs:{color:"error",text:""},on:{click:function(t){e.dlgDeleteItem=!1}}},[s("v-icon",[e._v("close")]),e._v("Cancelar\n              ")],1)],1)],1)],1)],1)]},proxy:!0},{key:"item.action",fn:function(t){var a=t.item;return["Administrador del Sistema"!==a.name?[s("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var i=t.on;return[s("v-icon",e._g({staticClass:"mr-2",attrs:{color:e.$store.getters.getThemeColor},on:{click:function(t){return e.showEditDlg(a)}}},i),[e._v("edit")])]}}],null,!0)},[s("span",[e._v("Editar")])]),s("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var i=t.on;return[s("v-icon",e._g({attrs:{color:"success"},on:{click:function(t){return e.showRolesDlg(a)}}},i),[e._v("assignment_ind")])]}}],null,!0)},[s("span",[e._v("Roles")])]),s("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var i=t.on;return[s("v-icon",e._g({attrs:{color:"warning"},on:{click:function(t){return e.deleteItem(a)}}},i),[e._v("delete")])]}}],null,!0)},[s("span",[e._v("Eliminar")])])]:e._e()]}},{key:"loading",fn:function(){return[s("VProgress",{staticClass:"text-center"})]},proxy:!0},{key:"no-data",fn:function(){return[e._v("No se han encontrado elementos.")]},proxy:!0}])}),s("v-snackbar",{attrs:{timeout:5e3,bottom:!0,right:!0,absolute:!0,color:e.operationMessageType},model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[s("v-icon",{staticClass:"white--text",attrs:{small:""}},[e._v("info")]),e._v("\n    "+e._s(e.operationMessage)+"\n    "),s("v-btn",{attrs:{text:""},on:{click:function(t){e.snackbar=!1}}},[s("v-icon",{attrs:{small:""}},[e._v("close")])],1)],1),s("AxiosComponent",{ref:"axios",on:{finish:function(t){return e.handleHttpResponse(t)}}})],1)},ce=[],ue={data(){return{dlgUpdateItem:!1,dlgDeleteItem:!1,dlgRoles:!1,page:1,pageCount:0,loadingItems:!0,editedIndex:-1,editedItem:{},roles:[],validForm:!1,requiredRules:[e=>!!e||"Este dato es obligatorio"],items:[],editedRoles:[],updatingItem:!1,deletingItem:!1,operationMessage:"",operationMessageType:"error",snackbar:!1,headers:[{text:"Nombre",value:"first_name",align:"left"},{text:"Apellidos",value:"last_name",align:"left"},{text:"Nombre de usuario",value:"username",align:"left"},{text:"Email",value:"email",align:"left"},{text:"Acciones",value:"action",align:"left",sortable:!1}]}},computed:{formTitle(){return-1===this.editedIndex?"Adicionar":"Editar"}},mounted(){this.getDataFromApi()},methods:{handleHttpResponse(e){if(this.loadingItems=!1,200===e.data.result.code){var t=e.data.result.response;switch(this.operationMessage=t.msg,this.operationMessageType=t.code,e.url.substring(e.url.lastIndexOf("/")+1)){case"editar-permisos":this.snackbar=!0,this.dlgRoles=!1,this.updatingItem=!1,"success"===t.code&&(this.items=t.data);break;case"eliminar":case"editar":this.snackbar=!0,this.dlgUpdateItem=!1,this.dlgDeleteItem=!1,this.updatingItem=!1,this.deletingItem=!1,"success"===t.code&&(this.items=t.data[0],this.roles=t.data[1]);break;case"listar":this.items=t.data[0],this.roles=t.data[1];break;default:this.snackbar=!0;break}}else this.operationMessage="Your request could not be executed.",this.operationMessageType="error",this.snackbar=!0},getDataFromApi(){this.loadingItems=!0;var e={url:"usuarios/listar",params:{}};this.$refs.axios.submit(e)},showEditDlg(e){this.editedIndex=this.items.indexOf(e),this.editedItem=Object.assign({},e),this.dlgUpdateItem=!0,console.log(this.editedItem)},showAddDlg(){let e={id:-1,name:null,description:null,manager_id:null,manager_name:null};this.editedItem=Object.assign({},e),this.dlgUpdateItem=!0},showRolesDlg(e){this.editedIndex=this.items.indexOf(e),this.editedItem=Object.assign({},e),this.editedRoles=Object.assign({},e.roles),this.editedRoles=[1,2,3],console.log(this.editedRoles),this.dlgRoles=!0},deleteItem(e){this.editedIndex=this.items.indexOf(e),this.editedItem=Object.assign({},e),this.dlgDeleteItem=!0},remove(){if(!this.deletingItem){this.deletingItem=!0;var e={method:"post",url:"usuarios/eliminar",params:{id:this.editedItem.id}};this.$refs.axios.submit(e)}},save(){if(!this.updatingItem){this.updatingItem=!0;let e={method:"post",url:-1===this.editedItem.id?"usuarios/crear":"usuarios/editar",params:{item:this.editedItem}};this.$refs.axios.submit(e)}},savePermissions(){if(!this.updatingItem){this.updatingItem=!0;let e={method:"post",url:"usuarios/editar-permisos",params:{id:this.editedItem.id,items:editedRoles}};this.$refs.axios.submit(e)}}}},me=ue,pe=Object(d["a"])(me,de,ce,!1,null,null,null),ve=pe.exports;u()(pe,{VBtn:b["a"],VCard:I["a"],VCardActions:_["a"],VCardText:_["b"],VCardTitle:_["c"],VContainer:k["a"],VDataTable:C["a"],VDialog:w["a"],VDivider:y["a"],VFlex:m["a"],VForm:V["a"],VIcon:T["a"],VLayout:$["a"],VProgressCircular:A["a"],VSelect:P["a"],VSnackbar:D["a"],VSpacer:O["a"],VTextField:R["a"],VTextarea:F,VToolbar:S["a"],VToolbarTitle:M["b"],VTooltip:B["a"]});var he={data:()=>({drawer:null,currAction:null}),components:{Index:v,Branches:H,Roles:le,Usuarios:ve},beforeRouteUpdate(e,t,s){this.verifyAction(e.params.action),s()},mounted(){this.verifyAction(this.$route.params.action)},methods:{verifyAction(e){this.currAction=e}}},ge=he,xe=s("8860"),fe=s("da13"),be=s("1800"),Ie=s("5d23"),_e=Object(d["a"])(ge,a,i,!1,null,null,null);t["default"]=_e.exports;u()(_e,{VCard:I["a"],VContainer:k["a"],VFlex:m["a"],VIcon:T["a"],VLayout:$["a"],VList:xe["a"],VListItem:fe["a"],VListItemAction:be["a"],VListItemContent:Ie["a"],VListItemTitle:Ie["c"]})},"4bd4":function(e,t,s){"use strict";var a=s("3206");t["a"]=Object(a["b"])("form").extend({name:"v-form",inheritAttrs:!1,props:{value:Boolean,lazyValidation:Boolean},data:()=>({inputs:[],watchers:[],errorBag:{}}),watch:{errorBag:{handler(e){const t=Object.values(e).includes(!0);this.$emit("input",!t)},deep:!0,immediate:!0}},methods:{watchInput(e){const t=e=>{return e.$watch("hasError",t=>{this.$set(this.errorBag,e._uid,t)},{immediate:!0})},s={_uid:e._uid,valid:()=>{},shouldValidate:()=>{}};return this.lazyValidation?s.shouldValidate=e.$watch("shouldValidate",a=>{a&&(this.errorBag.hasOwnProperty(e._uid)||(s.valid=t(e)))}):s.valid=t(e),s},validate(){return this.inputs.every(e=>e.validate(!0))},reset(){this.inputs.forEach(e=>e.reset()),this.resetErrorBag()},resetErrorBag(){this.lazyValidation&&setTimeout(()=>{this.errorBag={}},0)},resetValidation(){this.inputs.forEach(e=>e.resetValidation()),this.resetErrorBag()},register(e){this.inputs.push(e),this.watchers.push(this.watchInput(e))},unregister(e){const t=this.inputs.find(t=>t._uid===e._uid);if(!t)return;const s=this.watchers.find(e=>e._uid===t._uid);s&&(s.valid(),s.shouldValidate()),this.watchers=this.watchers.filter(e=>e._uid!==t._uid),this.inputs=this.inputs.filter(e=>e._uid!==t._uid),this.$delete(this.errorBag,t._uid)}},render(e){return e("form",{staticClass:"v-form",attrs:{novalidate:!0,...this.$attrs},on:{submit:e=>this.$emit("submit",e)}},this.$slots.default)}})},ca71:function(e,t,s){}}]);
//# sourceMappingURL=chunk-2bc3380e.25ee40f5.js.map
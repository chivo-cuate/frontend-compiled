(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-64280d7b"],{1681:function(t,e,a){},"7bea":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:"",sm4:""}},[a("v-card",[a("v-list",{attrs:{dense:""}},t._l(t.$store.getters.getBranchesPermissions,function(e,s){return a("v-list-item",{key:"action-"+s,attrs:{to:e.slug}},[a("v-list-item-action",[a("v-icon",{attrs:{color:t.$store.getters.getThemeColor}},[t._v(t._s(e.icon))])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(e.name))])],1)],1)}),1)],1)],1),a("v-flex",{attrs:{xs12:"",sm8:"","text-center":""}},[a("v-flex",{attrs:{sm11:"","offset-sm1":""}},[a("v-card",{staticClass:"elevation-0"},[a("p",{staticClass:"text-center uppercase white--text",class:t.$store.getters.getThemeColor},[t._v(t._s(t.$route.params.action))]),"inicio"===t.currAction?a("Index"):t._e(),"sucursales"===t.currAction?a("BranchesManagement",{staticClass:"animated fadeIn"}):t._e()],1)],1)],1)],1)],1)},i=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-flex",[a("span",{staticClass:"title"},[t._v("Seleccione la opción deseada.")])])},n=[],o={data:()=>({})},l=o,d=a("2877"),c=a("6544"),u=a.n(c),m=a("0e8f"),p=Object(d["a"])(l,r,n,!1,null,null,null),v=p.exports;u()(p,{VFlex:m["a"]});var g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-flex",{attrs:{xs12:""}},[a("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.items,page:t.page,"items-per-page":10,loading:t.loadingItems,"footer-props":{itemsPerPageText:"Elementos por página",itemsPerPageOptions:[{value:5,text:"5"},{value:10,text:"10"},{value:20,text:"20"},{value:9999999999,text:"Todos"}],showFirstLastPage:!1},"item-key":"name"},on:{"update:page":function(e){t.page=e},"page-count":function(e){t.pageCount=e}},scopedSlots:t._u([{key:"top",fn:function(){return[a("v-toolbar",{attrs:{flat:"",color:"white"}},[a("v-toolbar-title",{staticClass:"success--text"},[t._v("SUCURSALES")]),a("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),a("v-spacer"),a("v-dialog",{attrs:{"max-width":"500px",persistent:""},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on;return[a("v-btn",t._g({staticClass:"mb-2",attrs:{disabled:t.loadingItems||t.updatingItem,color:t.$store.getters.getThemeColor,dark:""},on:{click:function(e){return t.addItem()}}},s),[a("v-icon",{attrs:{small:""}},[t._v("add")]),t._v("Adicionar\n            ")],1)]}}]),model:{value:t.dlgUpdateItem,callback:function(e){t.dlgUpdateItem=e},expression:"dlgUpdateItem"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[t._v(t._s(t.formTitle))])]),a("v-card-text",[a("v-container",{attrs:{"grid-list-md":""}},[a("v-form",{ref:"form",on:{submit:function(t){t.preventDefault()}},model:{value:t.validForm,callback:function(e){t.validForm=e},expression:"validForm"}},[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{xs12:"",sm6:""}},[a("v-text-field",{attrs:{autofocus:!0,rules:t.requiredRules,outlined:"",label:"Nombre"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.save()}},model:{value:t.editedItem.name,callback:function(e){t.$set(t.editedItem,"name",e)},expression:"editedItem.name"}})],1),a("v-flex",{attrs:{xs12:"",sm6:""}},[a("v-text-field",{attrs:{type:"number",rules:t.numberRules,outlined:"",label:"Mesas"},model:{value:t.editedItem.tables,callback:function(e){t.$set(t.editedItem,"tables",e)},expression:"editedItem.tables"}})],1)],1),a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-textarea",{attrs:{outlined:"",label:"Descripción"},model:{value:t.editedItem.description,callback:function(e){t.$set(t.editedItem,"description",e)},expression:"editedItem.description"}})],1)],1),a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-autocomplete",{attrs:{outlined:"",clearable:"",items:t.managers,"item-text":"username","item-value":"id",label:"Gerente","no-data-text":"No hay resultados"},model:{value:t.editedItem.manager_id,callback:function(e){t.$set(t.editedItem,"manager_id",e)},expression:"editedItem.manager_id"}})],1)],1)],1)],1)],1),a("v-card-actions",{staticClass:"mr-5"},[a("v-spacer"),a("v-btn",{attrs:{disabled:!t.validForm||t.updatingItem,color:t.$store.getters.getThemeColor,text:""},on:{click:function(e){return t.save()}}},[t.updatingItem?a("v-progress-circular",{staticClass:"v-icon",attrs:{size:15,width:1,indeterminate:"",color:t.$store.getters.getThemeColor}}):a("v-icon",{attrs:{small:""}},[t._v("check")]),a("span",[t._v("Aceptar")])],1),a("v-btn",{attrs:{color:"error",text:""},on:{click:function(e){t.dlgUpdateItem=!1}}},[t._v("Cancelar")])],1)],1)],1),a("v-dialog",{attrs:{"max-width":"500px",persistent:""},model:{value:t.dlgDeleteItem,callback:function(e){t.dlgDeleteItem=e},expression:"dlgDeleteItem"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[t._v("Eliminar elemento")])]),a("v-container",{attrs:{"grid-list-md":""}},[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-card-text",{staticClass:"error uppercase white--text"},[t._v("Advertencia")]),a("v-card-text",{staticClass:"error--text"},[t._v("Se dispone a eliminar una sucursal completa."),a("br"),t._v("De continuar, perderá todos los registros de las operaciones realizadas en "),a("v-chip",{attrs:{small:""}},[t._v(t._s(t.editedItem.name))]),t._v(".")],1)],1)],1)],1),a("v-card-actions",{staticClass:"mr-5"},[a("v-spacer"),a("v-btn",{attrs:{disabled:t.deletingItem,color:t.$store.getters.getThemeColor,text:""},on:{click:function(e){return t.remove()}}},[t.updatingItem?a("v-progress-circular",{staticClass:"v-icon",attrs:{size:15,width:1,indeterminate:"",color:t.$store.getters.getThemeColor}}):a("v-icon",{attrs:{small:""}},[t._v("check")]),a("span",[t._v("Aceptar")])],1),a("v-btn",{attrs:{color:"error",text:""},on:{click:function(e){t.dlgDeleteItem=!1}}},[t._v("Cancelar")])],1)],1)],1)],1)]},proxy:!0},{key:"item.action",fn:function(e){var s=e.item;return[a("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[a("v-icon",t._g({staticClass:"mr-2",attrs:{color:t.$store.getters.getThemeColor},on:{click:function(e){return t.editItem(s)}}},i),[t._v("edit")])]}}],null,!0)},[a("span",[t._v("Editar")])]),a("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[a("v-icon",t._g({attrs:{color:"warning"},on:{click:function(e){return t.deleteItem(s)}}},i),[t._v("delete")])]}}],null,!0)},[a("span",[t._v("Eliminar")])])]}},{key:"loading",fn:function(){return[a("VProgress",{staticClass:"text-center"})]},proxy:!0},{key:"no-data",fn:function(){return[t._v("No se han encontrado elementos.")]},proxy:!0}])}),a("AxiosComponent",{ref:"axios",on:{finish:function(e){return t.handleHttpResponse(e)}}})],1)},h=[],f={data(){return{dlgUpdateItem:!1,dlgDeleteItem:!1,page:1,pageCount:0,loadingItems:!0,editedIndex:-1,editedItem:{},managers:[],validForm:!1,requiredRules:[t=>!!t||"Dato obligatorio"],numberRules:[t=>!!t||"Dato obligatorio",t=>t>0||"Dato incorrecto"],items:[],updatingItem:!1,deletingItem:!1,headers:[{text:"Nombre",value:"name",align:"left"},{text:"Mesas",value:"tables",align:"left"},{text:"Gerente",value:"manager_name",align:"left"},{text:"Acciones",value:"action",align:"left",sortable:!1}]}},computed:{formTitle(){return-1===this.editedIndex?"Adicionar":"Editar"}},mounted(){this.getDataFromApi()},methods:{handleHttpResponse(t){this.loadingItems=!1;let e=t.url.substring(t.url.lastIndexOf("/")+1);if(200===t.data.result.code){var a=t.data.result.response;switch(e){case"crear":case"editar":case"eliminar":this.dlgUpdateItem=!1,this.dlgDeleteItem=!1,this.updatingItem=!1,this.deletingItem=!1,"success"===a.code&&(this.items=a.data.items,this.managers=a.data.managers);break;case"listar":this.items=a.data.items,this.managers=a.data.managers;break;default:break}}else this.snackbar=!0,this.dlgUpdateItem=!1,this.dlgDeleteItem=!1,this.updatingItem=!1,this.deletingItem=!1},getDataFromApi(){this.loadingItems=!0;var t={url:"sucursales/listar",params:{}};this.$refs.axios.submit(t)},editItem(t){this.editedIndex=this.items.indexOf(t),this.editedItem=Object.assign({},t),this.dlgUpdateItem=!0},addItem(){let t={id:-1,name:null,description:null,manager_id:null,manager_name:null};this.editedItem=Object.assign({},t),this.dlgUpdateItem=!0},deleteItem(t){this.editedIndex=this.items.indexOf(t),this.editedItem=Object.assign({},t),this.dlgDeleteItem=!0},remove(){if(!this.deletingItem){this.deletingItem=!0;var t={method:"post",url:"sucursales/eliminar",params:{id:this.editedItem.id},snackbar:!0};this.$refs.axios.submit(t)}},save(){if(!this.updatingItem){this.updatingItem=!0;var t={method:"post",url:-1===this.editedItem.id?"sucursales/crear":"sucursales/editar",params:{item:this.editedItem},snackbar:!0};this.$refs.axios.submit(t)}}}},x=f,I=a("c6a6"),b=a("8336"),_=a("b0af"),k=a("99d9"),C=a("cc20"),w=a("a523"),y=a("8fea"),V=a("169a"),T=a("ce7e"),$=a("4bd4"),A=a("132d"),D=a("a722"),F=a("490a"),H=a("2fa4"),O=a("8654"),R=a("a844"),S=a("71d9"),U=a("2a7f"),E=a("3a2f"),N=Object(d["a"])(x,g,h,!1,null,null,null),z=N.exports;u()(N,{VAutocomplete:I["a"],VBtn:b["a"],VCard:_["a"],VCardActions:k["a"],VCardText:k["b"],VCardTitle:k["c"],VChip:C["a"],VContainer:w["a"],VDataTable:y["a"],VDialog:V["a"],VDivider:T["a"],VFlex:m["a"],VForm:$["a"],VIcon:A["a"],VLayout:D["a"],VProgressCircular:F["a"],VSpacer:H["a"],VTextField:O["a"],VTextarea:R["a"],VToolbar:S["a"],VToolbarTitle:U["b"],VTooltip:E["a"]});var G={data:()=>({drawer:null,currAction:null}),components:{Index:v,BranchesManagement:z},beforeRouteUpdate(t,e,a){this.verifyAction(t.params.action),a()},mounted(){this.verifyAction(this.$route.params.action)},methods:{verifyAction(t){this.currAction=t}}},L=G,P=a("8860"),j=a("da13"),B=a("1800"),M=a("5d23"),q=Object(d["a"])(L,s,i,!1,null,null,null);e["default"]=q.exports;u()(q,{VCard:_["a"],VContainer:w["a"],VFlex:m["a"],VIcon:A["a"],VLayout:D["a"],VList:P["a"],VListItem:j["a"],VListItemAction:B["a"],VListItemContent:M["a"],VListItemTitle:M["c"]})},a844:function(t,e,a){"use strict";a("1681");var s=a("8654"),i=a("58df");const r=Object(i["a"])(s["a"]);e["a"]=r.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:t=>!isNaN(parseFloat(t))},rows:{type:[Number,String],default:5,validator:t=>!isNaN(parseInt(t,10))}},computed:{classes(){return{"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle,...s["a"].options.computed.classes.call(this)}},noResizeHandle(){return this.noResize||this.autoGrow}},watch:{lazyValue(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted(){setTimeout(()=>{this.autoGrow&&this.calculateInputHeight()},0)},methods:{calculateInputHeight(){const t=this.$refs.input;if(!t)return;t.style.height="0";const e=t.scrollHeight,a=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(a,e)+"px"},genInput(){const t=s["a"].options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput(t){s["a"].options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.$emit("keydown",t)}}})}}]);
//# sourceMappingURL=chunk-64280d7b.0953b56a.js.map
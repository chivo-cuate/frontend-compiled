(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-13256f1e"],{1681:function(t,e,a){},"3a2f":function(t,e,a){"use strict";a("9734");var s=a("4ad4"),i=a("a9ad"),o=a("16b7"),n=a("b848"),r=a("75eb"),l=a("f573"),c=a("f2e7"),d=a("80d2"),u=a("d9bd"),m=a("58df");e["a"]=Object(m["a"])(i["a"],o["a"],n["a"],r["a"],l["a"],c["a"]).extend({name:"v-tooltip",props:{closeDelay:{type:[Number,String],default:0},debounce:{type:[Number,String],default:0},disabled:Boolean,fixed:{type:Boolean,default:!0},openDelay:{type:[Number,String],default:0},openOnHover:{type:Boolean,default:!0},tag:{type:String,default:"span"},transition:String,zIndex:{default:null}},data:()=>({calculatedMinWidth:0,closeDependents:!1}),computed:{calculatedLeft(){const{activator:t,content:e}=this.dimensions,a=!this.bottom&&!this.left&&!this.top&&!this.right,s=!1!==this.attach?t.offsetLeft:t.left;let i=0;return this.top||this.bottom||a?i=s+t.width/2-e.width/2:(this.left||this.right)&&(i=s+(this.right?t.width:-e.width)+(this.right?10:-10)),this.nudgeLeft&&(i-=parseInt(this.nudgeLeft)),this.nudgeRight&&(i+=parseInt(this.nudgeRight)),`${this.calcXOverflow(i,this.dimensions.content.width)}px`},calculatedTop(){const{activator:t,content:e}=this.dimensions,a=!1!==this.attach?t.offsetTop:t.top;let s=0;return this.top||this.bottom?s=a+(this.bottom?t.height:-e.height)+(this.bottom?10:-10):(this.left||this.right)&&(s=a+t.height/2-e.height/2),this.nudgeTop&&(s-=parseInt(this.nudgeTop)),this.nudgeBottom&&(s+=parseInt(this.nudgeBottom)),`${this.calcYOverflow(s+this.pageYOffset)}px`},classes(){return{"v-tooltip--top":this.top,"v-tooltip--right":this.right,"v-tooltip--bottom":this.bottom,"v-tooltip--left":this.left}},computedTransition(){return this.transition?this.transition:this.isActive?"scale-transition":"fade-transition"},offsetY(){return this.top||this.bottom},offsetX(){return this.left||this.right},styles(){return{left:this.calculatedLeft,maxWidth:Object(d["e"])(this.maxWidth),minWidth:Object(d["e"])(this.minWidth),opacity:this.isActive?.9:0,top:this.calculatedTop,zIndex:this.zIndex||this.activeZIndex}}},beforeMount(){this.$nextTick(()=>{this.value&&this.callActivate()})},mounted(){"v-slot"===Object(d["q"])(this,"activator",!0)&&Object(u["b"])("v-tooltip's activator slot must be bound, try '<template #activator=\"data\"><v-btn v-on=\"data.on>'",this)},methods:{activate(){this.updateDimensions(),requestAnimationFrame(this.startTransition)},deactivate(){this.runDelay("close")},genActivatorListeners(){const t=s["a"].options.methods.genActivatorListeners.call(this);return t.focus=t=>{this.getActivator(t),this.runDelay("open")},t.blur=t=>{this.getActivator(t),this.runDelay("close")},t.keydown=t=>{t.keyCode===d["u"].esc&&(this.getActivator(t),this.runDelay("close"))},t}},render(t){const e=t("div",this.setBackgroundColor(this.color,{staticClass:"v-tooltip__content",class:{[this.contentClass]:!0,menuable__content__active:this.isActive,"v-tooltip__content--fixed":this.activatorFixed},style:this.styles,attrs:this.getScopeIdAttrs(),directives:[{name:"show",value:this.isContentActive}],ref:"content"}),this.showLazyContent(this.getContentSlot()));return t(this.tag,{staticClass:"v-tooltip",class:this.classes},[t("transition",{props:{name:this.computedTransition}},[e]),this.genActivator()])}})},"7bea":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:"",sm4:""}},[a("v-card",[a("v-list",{attrs:{dense:""}},t._l(t.$store.getters.getBranchesPermissions,function(e,s){return a("v-list-item",{key:"action-"+s,attrs:{to:e.slug}},[a("v-list-item-action",[a("v-icon",{attrs:{color:t.$store.getters.getThemeColor}},[t._v(t._s(e.icon))])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(e.name))])],1)],1)}),1)],1)],1),a("v-flex",{attrs:{xs12:"",sm8:"","text-center":""}},[a("v-flex",{attrs:{sm11:"","offset-sm1":""}},[a("v-card",{staticClass:"elevation-0"},[a("p",{staticClass:"text-center uppercase white--text",class:t.$store.getters.getThemeColor},[t._v(t._s(t.$route.params.action))]),"inicio"===t.currAction?a("Index"):t._e(),"sucursales"===t.currAction?a("BranchesManagement",{staticClass:"animated fadeIn"}):t._e()],1)],1)],1)],1)],1)},i=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-flex",[a("span",{staticClass:"title"},[t._v("Seleccione la opción deseada.")])])},n=[],r={data:()=>({})},l=r,c=a("2877"),d=a("6544"),u=a.n(d),m=a("0e8f"),h=Object(c["a"])(l,o,n,!1,null,null,null),p=h.exports;u()(h,{VFlex:m["a"]});var v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-flex",{attrs:{xs12:""}},[a("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.items,page:t.page,"items-per-page":10,loading:t.loadingItems,"footer-props":{itemsPerPageText:"Elementos por página",itemsPerPageOptions:[{value:5,text:"5"},{value:10,text:"10"},{value:20,text:"20"},{value:9999999999,text:"Todos"}],showFirstLastPage:!1},"item-key":"name"},on:{"update:page":function(e){t.page=e},"page-count":function(e){t.pageCount=e}},scopedSlots:t._u([{key:"top",fn:function(){return[a("v-toolbar",{attrs:{flat:"",color:"white"}},[a("v-toolbar-title",{staticClass:"success--text"},[t._v("SUCURSALES")]),a("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),a("v-spacer"),a("v-dialog",{attrs:{"max-width":"500px",persistent:""},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on;return[a("v-btn",t._g({staticClass:"mb-2",attrs:{disabled:t.loadingItems||t.updatingItem,color:t.$store.getters.getThemeColor,dark:""},on:{click:function(e){return t.addItem()}}},s),[a("v-icon",{attrs:{small:""}},[t._v("add")]),t._v("Adicionar\n            ")],1)]}}]),model:{value:t.dlgUpdateItem,callback:function(e){t.dlgUpdateItem=e},expression:"dlgUpdateItem"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[t._v(t._s(t.formTitle))])]),a("v-card-text",[a("v-container",{attrs:{"grid-list-md":""}},[a("v-form",{ref:"form",on:{submit:function(t){t.preventDefault()}},model:{value:t.validForm,callback:function(e){t.validForm=e},expression:"validForm"}},[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{xs12:"",sm6:""}},[a("v-text-field",{attrs:{autofocus:!0,rules:t.requiredRules,outlined:"",label:"Nombre"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.save()}},model:{value:t.editedItem.name,callback:function(e){t.$set(t.editedItem,"name",e)},expression:"editedItem.name"}})],1),a("v-flex",{attrs:{xs12:"",sm6:""}},[a("v-text-field",{attrs:{type:"number",rules:t.numberRules,outlined:"",label:"Mesas"},model:{value:t.editedItem.tables,callback:function(e){t.$set(t.editedItem,"tables",e)},expression:"editedItem.tables"}})],1)],1),a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-textarea",{attrs:{outlined:"",label:"Descripción"},model:{value:t.editedItem.description,callback:function(e){t.$set(t.editedItem,"description",e)},expression:"editedItem.description"}})],1)],1),a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-autocomplete",{attrs:{outlined:"",clearable:"",items:t.managers,"item-text":"username","item-value":"id",label:"Gerente","no-data-text":"No hay resultados"},model:{value:t.editedItem.manager_id,callback:function(e){t.$set(t.editedItem,"manager_id",e)},expression:"editedItem.manager_id"}})],1)],1)],1)],1)],1),a("v-card-actions",{staticClass:"mr-5"},[a("v-spacer"),a("v-btn",{attrs:{disabled:!t.validForm||t.updatingItem,color:t.$store.getters.getThemeColor,text:""},on:{click:function(e){return t.save()}}},[t.updatingItem?a("v-progress-circular",{staticClass:"v-icon",attrs:{size:15,width:1,indeterminate:"",color:t.$store.getters.getThemeColor}}):a("v-icon",{attrs:{small:""}},[t._v("check")]),a("span",[t._v("Aceptar")])],1),a("v-btn",{attrs:{color:"error",text:""},on:{click:function(e){t.dlgUpdateItem=!1}}},[t._v("Cancelar")])],1)],1)],1),a("v-dialog",{attrs:{"max-width":"500px",persistent:""},model:{value:t.dlgDeleteItem,callback:function(e){t.dlgDeleteItem=e},expression:"dlgDeleteItem"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[t._v("Eliminar elemento")])]),a("v-container",{attrs:{"grid-list-md":""}},[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-card-text",{staticClass:"error uppercase white--text"},[t._v("Advertencia")]),a("v-card-text",{staticClass:"error--text"},[t._v("Se dispone a eliminar una sucursal completa."),a("br"),t._v("De continuar, perderá todos los registros de las operaciones realizadas en "),a("v-chip",{attrs:{small:""}},[t._v(t._s(t.editedItem.name))]),t._v(".")],1)],1)],1)],1),a("v-card-actions",{staticClass:"mr-5"},[a("v-spacer"),a("v-btn",{attrs:{disabled:t.deletingItem,color:t.$store.getters.getThemeColor,text:""},on:{click:function(e){return t.remove()}}},[t.updatingItem?a("v-progress-circular",{staticClass:"v-icon",attrs:{size:15,width:1,indeterminate:"",color:t.$store.getters.getThemeColor}}):a("v-icon",{attrs:{small:""}},[t._v("check")]),a("span",[t._v("Aceptar")])],1),a("v-btn",{attrs:{color:"error",text:""},on:{click:function(e){t.dlgDeleteItem=!1}}},[t._v("Cancelar")])],1)],1)],1)],1)]},proxy:!0},{key:"item.action",fn:function(e){var s=e.item;return[a("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[a("v-icon",t._g({staticClass:"mr-2",attrs:{color:t.$store.getters.getThemeColor},on:{click:function(e){return t.editItem(s)}}},i),[t._v("edit")])]}}],null,!0)},[a("span",[t._v("Editar")])]),a("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[a("v-icon",t._g({attrs:{color:"warning"},on:{click:function(e){return t.deleteItem(s)}}},i),[t._v("delete")])]}}],null,!0)},[a("span",[t._v("Eliminar")])])]}},{key:"loading",fn:function(){return[a("VProgress",{staticClass:"text-center"})]},proxy:!0},{key:"no-data",fn:function(){return[t._v("No se han encontrado elementos.")]},proxy:!0}])}),a("AxiosComponent",{ref:"axios",on:{finish:function(e){return t.handleHttpResponse(e)}}})],1)},g=[],f={data(){return{dlgUpdateItem:!1,dlgDeleteItem:!1,page:1,pageCount:0,loadingItems:!0,editedIndex:-1,editedItem:{},managers:[],validForm:!1,requiredRules:[t=>!!t||"Dato obligatorio"],numberRules:[t=>!!t||"Dato obligatorio",t=>t>0||"Dato incorrecto"],items:[],updatingItem:!1,deletingItem:!1,headers:[{text:"Nombre",value:"name",align:"left"},{text:"Mesas",value:"tables",align:"left"},{text:"Gerente",value:"manager_name",align:"left"},{text:"Acciones",value:"action",align:"left",sortable:!1}]}},computed:{formTitle(){return-1===this.editedIndex?"Adicionar":"Editar"}},mounted(){this.getDataFromApi()},methods:{handleHttpResponse(t){this.loadingItems=!1;let e=t.url.substring(t.url.lastIndexOf("/")+1);if(200===t.data.result.code){var a=t.data.result.response;switch(e){case"crear":case"editar":case"eliminar":this.dlgUpdateItem=!1,this.dlgDeleteItem=!1,this.updatingItem=!1,this.deletingItem=!1,"success"===a.code&&(this.items=a.data.items,this.managers=a.data.managers);break;case"listar":this.items=a.data.items,this.managers=a.data.managers;break;default:break}}else this.snackbar=!0,this.dlgUpdateItem=!1,this.dlgDeleteItem=!1,this.updatingItem=!1,this.deletingItem=!1},getDataFromApi(){this.loadingItems=!0;var t={url:"sucursales/listar",params:{}};this.$refs.axios.submit(t)},editItem(t){this.editedIndex=this.items.indexOf(t),this.editedItem=Object.assign({},t),this.dlgUpdateItem=!0},addItem(){let t={id:-1,name:null,description:null,manager_id:null,manager_name:null};this.editedItem=Object.assign({},t),this.dlgUpdateItem=!0},deleteItem(t){this.editedIndex=this.items.indexOf(t),this.editedItem=Object.assign({},t),this.dlgDeleteItem=!0},remove(){if(!this.deletingItem){this.deletingItem=!0;var t={method:"post",url:"sucursales/eliminar",params:{id:this.editedItem.id},snackbar:!0};this.$refs.axios.submit(t)}},save(){if(!this.updatingItem){this.updatingItem=!0;var t={method:"post",url:-1===this.editedItem.id?"sucursales/crear":"sucursales/editar",params:{item:this.editedItem},snackbar:!0};this.$refs.axios.submit(t)}}}},x=f,b=a("c6a6"),I=a("8336"),_=a("b0af"),y=a("99d9"),C=a("cc20"),w=a("a523"),k=a("8fea"),V=a("169a"),T=a("ce7e"),A=a("4bd4"),D=a("132d"),$=a("a722"),O=a("490a"),S=a("2fa4"),F=a("8654"),L=a("a844"),H=a("71d9"),R=a("2a7f"),z=a("3a2f"),N=Object(c["a"])(x,v,g,!1,null,null,null),j=N.exports;u()(N,{VAutocomplete:b["a"],VBtn:I["a"],VCard:_["a"],VCardActions:y["a"],VCardText:y["b"],VCardTitle:y["c"],VChip:C["a"],VContainer:w["a"],VDataTable:k["a"],VDialog:V["a"],VDivider:T["a"],VFlex:m["a"],VForm:A["a"],VIcon:D["a"],VLayout:$["a"],VProgressCircular:O["a"],VSpacer:S["a"],VTextField:F["a"],VTextarea:L["a"],VToolbar:H["a"],VToolbarTitle:R["b"],VTooltip:z["a"]});var B={data:()=>({drawer:null,currAction:null}),components:{Index:p,BranchesManagement:j},beforeRouteUpdate(t,e,a){this.verifyAction(t.params.action),a()},mounted(){this.verifyAction(this.$route.params.action)},methods:{verifyAction(t){this.currAction=t}}},U=B,E=a("8860"),G=a("da13"),P=a("1800"),M=a("5d23"),W=Object(c["a"])(U,s,i,!1,null,null,null);e["default"]=W.exports;u()(W,{VCard:_["a"],VContainer:w["a"],VFlex:m["a"],VIcon:D["a"],VLayout:$["a"],VList:E["a"],VListItem:G["a"],VListItemAction:P["a"],VListItemContent:M["a"],VListItemTitle:M["c"]})},9734:function(t,e,a){},a844:function(t,e,a){"use strict";a("1681");var s=a("8654"),i=a("58df");const o=Object(i["a"])(s["a"]);e["a"]=o.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:t=>!isNaN(parseFloat(t))},rows:{type:[Number,String],default:5,validator:t=>!isNaN(parseInt(t,10))}},computed:{classes(){return{"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle,...s["a"].options.computed.classes.call(this)}},noResizeHandle(){return this.noResize||this.autoGrow}},watch:{lazyValue(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted(){setTimeout(()=>{this.autoGrow&&this.calculateInputHeight()},0)},methods:{calculateInputHeight(){const t=this.$refs.input;if(!t)return;t.style.height="0";const e=t.scrollHeight,a=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(a,e)+"px"},genInput(){const t=s["a"].options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput(t){s["a"].options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.$emit("keydown",t)}}})}}]);
//# sourceMappingURL=chunk-13256f1e.b6752f2f.js.map